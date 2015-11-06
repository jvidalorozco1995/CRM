using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLSala_Ventas
    {
        CRMEntiti db = new CRMEntiti();

        /// <summary>
        /// Metodo para adicionar salas de ventas recibe un objeto sala de ventas
        /// y retorna un entero como respuesta
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public int Addsala(sala_ventas s) {
            try
            {   
                db.sala_ventas.Add(s);
                db.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch
            {
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna una lista de salas de ventas almacendas en la base de datos
        /// </summary>
        /// <returns></returns>
        public List<EntiSala_Ventas> ListSalaVentas()
        {

            List<sala_ventas> lisSala = db.sala_ventas.ToList();
            List<EntiSala_Ventas> lisEntiti = new List<EntiSala_Ventas>();
            if (lisSala.Count.Equals(0))
            {
                return null;
            }
            else
            {
                foreach (var item in lisSala)
                {
                    EntiSala_Ventas Sv = new EntiSala_Ventas();
                    Sv.ID_SALA = item.ID_SALA;
                    Sv.NOMBRE_SALA = item.NOMBRE_SALA;
                    lisEntiti.Add(Sv);
                }
                return lisEntiti;

            }
        }
    }
}
