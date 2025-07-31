using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SalDTO
    {
        public int Amount { get; set; }
        public int GameId {  get; set; }
        public string GameName { get; set; }

        public string Img { get; set; }
        public float priceForItem {  get; set; }
        public float TotalPrice { get; set; }
       
    }
}

