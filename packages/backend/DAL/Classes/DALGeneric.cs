using DAL.Models;
using DAL.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace DAL.Classes
{
    public class DALGeneric<T> : IDALGeneric<T> where T : class
    {
        ShoppingDB_Hadassah_Lugassi_project2025Context DB = new();
        //הוספה
        public bool AddDALGeneric(T item)
        {
            try
            {
                DB.Set<T>().Add(item);
                DB.SaveChanges();
                return true;
                    
             }
            catch { return false; }
        }

        //שליפה
        public List<T> GetDALGeneric() //where T : class
        {
            //if (typeof(T) == typeof(GamesTbl)) ;
            if (DB.Set<T>().ToList() is List<GamesTbl>)
            {
                return DB.Set<GamesTbl>().Include(i => i.Category).ToList() as List<T>;
            }
            if (DB.Set<T>().ToList() is List<BayingDetailsTbl>)
            {
                return DB.Set<BayingDetailsTbl>().Include(i => i.Game).ToList() as List<T>;
            }
            return DB.Set<T>().ToList();
        }

        //מחיקה
        public bool RemoveDALGeneric(int id)
        {
            try
            {
                //find מחפש ערך במפתח הראשי השווה לערך המוכנס
                var whatToDelete = DB.Set<T>().Find(id);
                if (whatToDelete != null) {
                    DB.Set<T>().Remove(whatToDelete);
                    DB.SaveChanges();
                    return true;
                }

                return true;

            }
            catch { return  false;}
        }

        public bool UpdateDALGeneric(int id, T item)
        {
            try
            {
                var typ = DB.Set<T>().Find(id);
                if (typ != null) {
                    DB.Entry(typ).CurrentValues.SetValues(item);
                    DB.SaveChanges();
                    
                }
                return true;

            }
            catch { return false; }
        }
        

    }
}
