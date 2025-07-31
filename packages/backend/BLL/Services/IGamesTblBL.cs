using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface IGamesTblBL
    {
        List<GamesTblDTO> GetGamesTblBL();
        GamesTblDTO GetGamesTblByIdBL(int id);
        List<GamesTblDTO> GetGamesTblByCategoryIdBL(int category);
        bool AddGameTblBL(GamesTblDTO g);
        bool UpdateGameTblBL(int id, GamesTblDTO g);
        bool RemoveGameTblBL(int id);

    }
}
