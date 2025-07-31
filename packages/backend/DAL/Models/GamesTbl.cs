using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class GamesTbl
    {
        public GamesTbl()
        {
            BayingDetailsTbls = new HashSet<BayingDetailsTbl>();
        }

        public int GamesId { get; set; }
        public string? GamesName { get; set; }
        public int CategoryId { get; set; }
        public double Price { get; set; }
        public string? Img { get; set; }
        public int Amount { get; set; }

        public virtual CategoryTbl Category { get; set; } = null!;
        public virtual ICollection<BayingDetailsTbl> BayingDetailsTbls { get; set; }
    }
}
