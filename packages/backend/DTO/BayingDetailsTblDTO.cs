using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class BayingDetailsTblDTO
    {
        public int BayingDetailsId { get; set; }
        public int BayingId { get; set; }
        public int GameId { get; set; }
        public int? Amount { get; set; }
        public string? GamesName { get; set; }
        public double Price { get; set; }
        public string? Img { get; set; }
        public string? CategoryName { get; set; }

    }
}
