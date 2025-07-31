using AutoMapper;
using BLL.Services;
using DAL.Models;
using DAL.Services;
using DTO;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Classes
{
    public class BayingDetailsTblBL : IBayingDetailsTblBL
    {
        IDALGeneric<BayingDetailsTbl> iDAL;
        IMapper iMapper;

        public BayingDetailsTblBL(IDALGeneric<BayingDetailsTbl> iDAL)
        {
            this.iDAL = iDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }
        //שליפה לפי קוד קניה
        public List<BayingDetailsTblDTO> GetBayingDetailsByBayingId(int BayingID)
        {
            List<BayingDetailsTbl> bdList = iDAL.GetDALGeneric();
            List<BayingDetailsTbl> newList = new List<BayingDetailsTbl>();
            foreach (var item in bdList)
            {
                if (item.BayingId == BayingID) { newList.Add(item); }
            }
            return iMapper.Map<List<BayingDetailsTbl>,List<BayingDetailsTblDTO>> (newList);

        }

        public bool SaveBayingDetails(int BayingID, List<SalDTO> salDTO)
        {
            
            try
            {
              
               
                foreach (var item in salDTO)
                {
                    BayingDetailsTbl bdt = new();
                    bdt.BayingId = BayingID;
                    bdt.GameId = item.GameId;
                    bdt.Amount = item.Amount;
                    iDAL.AddDALGeneric(bdt);
                }
                return true;

            }
            catch { return false; }
        }



      
    }
}
