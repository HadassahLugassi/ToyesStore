using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface IBayingTblBL
    {
        int SaveBayingBL(List<SalDTO> salList, int custId);
        List<BayingTbl> GetBayingByCustId(int custId);
    }
}
