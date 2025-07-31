using AutoMapper;
using BLL.Classes;
using BLL.Services;
using DAL.Classes;
using DAL.Models;
using DAL.Services;
using Microsoft.EntityFrameworkCore;


namespace ServerShop
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //הזרקות
            //מכיוון שעשינו את שכבת ה DAL גנרית 
            //אז צריך להגדיר הזרקה עבור כל מימוש גנרי בנפרד
            //שכבת הDAL
            builder.Services.AddScoped<IDALGeneric<GamesTbl>, DALGeneric<GamesTbl>>();
            builder.Services.AddScoped<IDALGeneric<CategoryTbl>, DALGeneric<CategoryTbl>>();
            builder.Services.AddScoped<IDALGeneric<BayingDetailsTbl>, DALGeneric<BayingDetailsTbl>>();
            builder.Services.AddScoped<IDALGeneric<BayingTbl>, DALGeneric<BayingTbl>>();
            builder.Services.AddScoped<IDALGeneric<CustomersTbl>, DALGeneric<CustomersTbl>>();
            builder.Services.AddScoped<IGamesTblBL,GamesTblBL>();
            builder.Services.AddScoped<ICategoryTblBL, CategoryTblBL>();
            builder.Services.AddScoped<ICustomersTblBL, CustomersTblBL>();
            builder.Services.AddScoped<IBayingTblBL, BayingTblBL>();
            builder.Services.AddScoped<IBayingDetailsTblBL, BayingDetailsTblBL>();

            //לצורך ההמרות
            builder.Services.AddAutoMapper(typeof(Program));

            //חיבור הפרוייקט למסד הנתונים
           builder.Services.AddDbContext<ShoppingDB_Hadassah_Lugassi_project2025Context>
(options => options.UseSqlServer("Server=DESKTOP-6F0MN7B;Database=ShoppingDB_Hadassah_Lugassi_project2025;Trusted_Connection=True;TrustServerCertificate=True;"));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
