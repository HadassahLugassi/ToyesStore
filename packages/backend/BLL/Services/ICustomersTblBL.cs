using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface ICustomersTblBL
    {
        bool AddCustomerBL(CustomersTblDTO cust);
        //אם קיים לקוח יוחזר הid שלו
        int IsExistCustomer(string name, string pass);

         bool UpdateCustomerTblBL(int id, string cust);
    }
}
