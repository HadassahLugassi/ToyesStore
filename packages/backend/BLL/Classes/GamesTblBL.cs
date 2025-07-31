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
    public class GamesTblBL : IGamesTblBL
    {
        //יצירת מופע מהDTL
        IDALGeneric<GamesTbl> iDAL;
        //יצירת מופע מהDTO
        //כדי שיוכל להמיר את המופע לDTO
        IMapper iMapper;
        public GamesTblBL(IDALGeneric<GamesTbl> iDAL)
        {
            this.iDAL = iDAL;
            //קשור להמרות
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public bool AddGameTblBL(GamesTblDTO g)
        {
            try
            {
                GamesTbl gameT = iMapper.Map<GamesTblDTO, GamesTbl>(g);
                return iDAL.AddDALGeneric(gameT);
                
            }
            catch { return false; }
        }

        public GamesTblDTO GetGamesTblByIdBL(int id)
        {

            GamesTbl g = iDAL.GetDALGeneric().FirstOrDefault(x => x.GamesId == id);
            return iMapper.Map<GamesTbl, GamesTblDTO>(g);
        }
        public List<GamesTblDTO> GetGamesTblBL()
        {
            return iMapper.Map<List<GamesTbl>, List<GamesTblDTO>>(iDAL.GetDALGeneric());
        }

        public bool RemoveGameTblBL(int id)
        {
            try
            {
               return iDAL.RemoveDALGeneric(id);
               
            }
            catch { return false; }
        }

        public bool UpdateGameTblBL(int id, GamesTblDTO g)
        {
            try
            {
                GamesTbl gtbl=iMapper.Map<GamesTblDTO,GamesTbl>(g);
                return  iDAL.UpdateDALGeneric(id, gtbl);
              
            }
            catch { return false; }
        }

        public List<GamesTblDTO> GetGamesTblByCategoryIdBL(int category)
        {
            List<GamesTbl> l = new();
            foreach (var item in iDAL.GetDALGeneric())
            {
                if(item.CategoryId==category)
                    l.Add(item);
            }
           return iMapper.Map<List<GamesTbl>, List<GamesTblDTO>>(l);
        }
    }
}
