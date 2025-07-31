using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class CustomersTbl
    {
        public CustomersTbl()
        {
            BayingTbls = new HashSet<BayingTbl>();
        }

        public int CustId { get; set; }
        public string CustName { get; set; } = null!;
        public string CustPass { get; set; } = null!;
        public string CreditDetails { get; set; } = null!;

        public virtual ICollection<BayingTbl> BayingTbls { get; set; }
    }
}
