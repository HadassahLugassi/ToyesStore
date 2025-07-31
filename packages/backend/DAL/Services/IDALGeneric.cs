using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public interface IDALGeneric<T>

    {
        //שליפה
        List<T> GetDALGeneric();
        //הוספה
        bool AddDALGeneric(T item);
        //מחיקה
        bool RemoveDALGeneric(int id);
        //עדכון
        bool UpdateDALGeneric(int id,T item);  
    }
}
