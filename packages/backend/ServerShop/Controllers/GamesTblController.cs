using BLL.Services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.Xml;

namespace ServerShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesTblController : ControllerBase
    {
        IGamesTblBL iBL;
        public GamesTblController(IGamesTblBL iBL)
        {
                this.iBL = iBL;
        }


        //שליפה רגילה
        [HttpGet("GetAllGames")]
        public List<GamesTblDTO> GetAllGames()
        {
            return iBL.GetGamesTblBL();
        }


        //שליפה לפי קטגוריה
        [HttpGet("GetGamesTblByCategoryId")]
        public List<GamesTblDTO> GetGamesTblByCategory(int c)
        {
            return iBL.GetGamesTblByCategoryIdBL(c);
        }
        
        //שליפה לפי קוד
        [HttpGet("getGameById")]
        public GamesTblDTO GetGameById(int id) { 
        return iBL.GetGamesTblByIdBL(id);
        }

        //הוספה
        [HttpPut("AddGame")]
        public bool AddGame(GamesTblDTO g)
        {
        
                return iBL.AddGameTblBL(g);
            }

        //מחיקה
        [HttpDelete("DeleteGameById")]
        public bool DeleteGame(int id)
        {
           
                return iBL.RemoveGameTblBL(id);
        }

        //עדכון
        [HttpPost("UpdateGameById")]
        public bool UpdateGameById(int id,GamesTblDTO g)
        {
           
                return iBL.UpdateGameTblBL(id, g);
        }


    }
}
