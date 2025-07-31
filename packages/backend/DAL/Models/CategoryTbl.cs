using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class CategoryTbl
    {
        public CategoryTbl()
        {
            GamesTbls = new HashSet<GamesTbl>();
        }

        public int CategoryId { get; set; }
        public string? CategoryName { get; set; }

        public virtual ICollection<GamesTbl> GamesTbls { get; set; }
    }
}
