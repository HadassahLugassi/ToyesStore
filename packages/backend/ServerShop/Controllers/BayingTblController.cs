using BLL.Services;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace ServerShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BayingTblController : ControllerBase
    {
        IBayingTblBL iBL;
        public BayingTblController(IBayingTblBL bl) 
        { 
             iBL = bl;
        }
        [HttpPut("SaveBayingBL")]
        public int SaveBayingBL(List<SalDTO> salList, int custId)
        {
                return iBL.SaveBayingBL(salList, custId);
        }

        [HttpGet("GetBayingByCustId")]
        public List<BayingTbl> GetBayingByCustId(int custId)
        {
            return iBL.GetBayingByCustId(custId);
        }

    }
}
