using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLHistorialIngreso
    {
        CRMEntiti db = new CRMEntiti();
      

        /// <summary>
        /// Metodo para crrear un usario en la base de 
        /// datos CRM
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public int InsertHistorial(string ASESOR)
        {
            try
            {
                historialIngreso his = new historialIngreso();
                his.ASESOR = ASESOR;
                his.FECHA = DateTime.Now;
                
                db.historialIngreso.Add(his);
                db.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
