using BLL.Services;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace ServerShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BayingDetailsTbController : ControllerBase
    {
        IBayingDetailsTblBL iBl;
        public BayingDetailsTbController(IBayingDetailsTblBL iBL) 
        {
        this.iBl = iBL;
        }

        [HttpPut("SaveBayingDetails")]
        public bool SaveBayingDetails(int BayingID, List<SalDTO> salDTO)
        {
                return iBl.SaveBayingDetails(BayingID, salDTO);
        }
        [HttpGet("GetBayingDetailsByBayingId")]
        public List<BayingDetailsTblDTO> GetBayingDetailsByBayingId(int BayingID)
        {
            return iBl.GetBayingDetailsByBayingId(BayingID);
        }
    }
}
