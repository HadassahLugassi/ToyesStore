using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public interface IBayingDetailsTblBL
    {
        bool SaveBayingDetails(int BayingID, List<SalDTO> salDTO);
        List<BayingDetailsTblDTO> GetBayingDetailsByBayingId(int BayingID);
    }
}
