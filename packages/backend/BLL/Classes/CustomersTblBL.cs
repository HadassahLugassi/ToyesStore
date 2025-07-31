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
    public class CustomersTblBL : ICustomersTblBL
    {
        IDALGeneric<CustomersTbl> iDAL;
        IMapper iMapper;
        public CustomersTblBL(IDALGeneric<CustomersTbl> iDAL)
        {
            this.iDAL = iDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

    

        public bool AddCustomerBL(CustomersTblDTO cust)
        {
            try
            {
                CustomersTbl c=iMapper.Map<CustomersTblDTO, CustomersTbl>(cust);
   
                return  iDAL.AddDALGeneric(c);
            }
            catch { return false; } 
        }
        //אם קיים לקוח יוחזר ה id שלו אחרת יוחזר 0
        public int IsExistCustomer(string name, string pass)
        {
            bool flag= iDAL.GetDALGeneric().Exists(x => x.CustName == name && x.CustPass == pass);
            if (flag)
            {
                return iDAL.GetDALGeneric().Find(x => x.CustName == name && x.CustPass == pass).CustId;
            }
            else
            {
                return 0;
            }
        }


        public bool UpdateCustomerTblBL(int id, string cart)
        {
            try
            {
                List<CustomersTbl> l = iDAL.GetDALGeneric();
                CustomersTbl c = l.Find(x=>x.CustId==id);
                c.CreditDetails = cart;
               return iDAL.UpdateDALGeneric(id, c);
               

            }
            catch { return false; }
        }

    }
}


