using AutoMapper;
using BLL.Services;
using DAL.Models;
using DAL.Services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Classes
{
    public class CategoryTblBL : ICategoryTblBL
    {

        IMapper iMapper;

        IDALGeneric<CategoryTbl> iDAl;
        public CategoryTblBL(IDALGeneric<CategoryTbl> iDAl)
        {
            this.iDAl = iDAl;
             var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }



        public List<CategoryTblDTO> GetCategoriesBL()
        {
            return iMapper.Map<List<CategoryTbl>, List<CategoryTblDTO>>(iDAl.GetDALGeneric());
        }

        public CategoryTblDTO GetCategoryByIdBL(int id)
        {
            return iMapper.Map<CategoryTbl,CategoryTblDTO>(iDAl.GetDALGeneric().FirstOrDefault(i=>i.CategoryId==id));
        }

        public bool UpdateCategoryByIdBL(CategoryTblDTO category, int id)
        {
       

               CategoryTbl c=iMapper.Map<CategoryTblDTO,CategoryTbl>(category);
              return  iDAl.UpdateDALGeneric(id,c);
              

           
        }
        public bool AddCategoryBL(CategoryTblDTO category)
        {
           
                CategoryTbl c = iMapper.Map<CategoryTblDTO, CategoryTbl>(category);
               return iDAl.AddDALGeneric(c);

        }
            public bool DeleteCategoryBL(int id)
            {
              
               return iDAl.RemoveDALGeneric(id);
                  
            }
    }
}
