using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class BayingDetailsTbl
    {
        public int BayingDetailsId { get; set; }
        public int BayingId { get; set; }
        public int GameId { get; set; }
        public int? Amount { get; set; }

        public virtual BayingTbl Baying { get; set; } = null!;
        public virtual GamesTbl Game { get; set; } = null!;
    }
}
