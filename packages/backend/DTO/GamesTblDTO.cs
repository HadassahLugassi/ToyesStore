using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class GamesTblDTO
    {
        public int GamesId { get; set; }
        public string? GamesName { get; set; }
        public int? CategoryId { get; set; }
        public double? Price { get; set; }
        public string? Img { get; set; }
        public int? Amount { get; set; }
        public string? CategoryName { get; set; }
    }
}
