using AutoMapper;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
    public class MyProfile: Profile
    {
        public MyProfile() 
        {
            CreateMap<GamesTbl, GamesTblDTO>().ForMember(x=>x.CategoryName,y=>y.MapFrom(v=>v.Category.CategoryName));
            CreateMap<GamesTblDTO, GamesTbl >();
            CreateMap<CategoryTbl, CategoryTblDTO>();
            CreateMap<CategoryTblDTO, CategoryTbl >();
            CreateMap<CustomersTbl, CustomersTblDTO >();
            CreateMap<CustomersTblDTO, CustomersTbl >();
            CreateMap<BayingDetailsTbl, BayingDetailsTblDTO>()
                .ForMember(x => x.GamesName, y => y.MapFrom(v => v.Game.GamesName))
                .ForMember(x => x.Price, y => y.MapFrom(v => v.Game.Price))
                .ForMember(x => x.Img, y => y.MapFrom(v => v.Game.Img));
        }
    }
}
