using AutoMapper;
using BLL.Services;
using DAL.Classes;
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
    public class BayingTblBL : IBayingTblBL
    {
        IDALGeneric<BayingTbl> iDAL;
       

        public BayingTblBL(IDALGeneric<BayingTbl> iDAL)
        {
            this.iDAL = iDAL;
        }

        //שמירת קניה
        public int SaveBayingBL(List<SalDTO> salList,int custId)
        {
            BayingTbl b=new();
            float totalPrice = 0;
            foreach (var item in salList)
            {
                totalPrice += item.TotalPrice;
            }
            b.Price = totalPrice;
            b.CustId = custId;
            b.DateOfBaying = DateTime.Now;
            iDAL.AddDALGeneric(b);
            List<BayingTbl> l=iDAL.GetDALGeneric().ToList();
            int bayingId=l.Last<BayingTbl>().BayingId;
            return bayingId;
        }

        //שליפה לפי קוד לקוח
        public List<BayingTbl> GetBayingByCustId(int custId)
        {
            List<BayingTbl> bList= iDAL.GetDALGeneric();
            List<BayingTbl> newList= new List<BayingTbl>();
            foreach (var item in bList)
            {
                if (item.CustId == custId) { newList.Add(item); };
            }
            return newList;
        }



    }
}
