using BLL.Services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ServerShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersTblController : ControllerBase
    {
        ICustomersTblBL iBL;
        public CustomersTblController(ICustomersTblBL iBL)
        {
            this.iBL = iBL;
        }

        [HttpPut("AddCustomers")]
        public bool AddCustomers(CustomersTblDTO Customers)
        {
                return iBL.AddCustomerBL(Customers);
        }

        [HttpPost("UpdateCustomerTblBL")]
        public bool UpdateCustomerTblBL(int id, string cart)
        {
            return iBL.UpdateCustomerTblBL(id, cart);
        }



        [HttpPut("IsExistCustomer")]
        public int IsExistCustomer(string name, string pass)
        {
              return  iBL.IsExistCustomer(name, pass);                           
        }
    }

}
