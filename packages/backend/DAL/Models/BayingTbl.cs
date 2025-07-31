using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class BayingTbl
    {
        public BayingTbl()
        {
            BayingDetailsTbls = new HashSet<BayingDetailsTbl>();
        }

        public int BayingId { get; set; }
        public int CustId { get; set; }
        public DateTime? DateOfBaying { get; set; }
        public double Price { get; set; }

        public virtual CustomersTbl Cust { get; set; } = null!;
        public virtual ICollection<BayingDetailsTbl> BayingDetailsTbls { get; set; }
    }
}
