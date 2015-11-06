using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLinformacion
    {
        CRMEntiti bd = new CRMEntiti();


        /// <summary>
        /// Retorna una lista de de la informacion de como se entero del proyecto
        /// </summary>
        /// <returns></returns>
       public List<EntiEntero> InformacionE()
        {
            try
            {
                List<informacion> info = bd.informacion.Where(tp => tp.TIPO == "IN").ToList();
                List<EntiEntero> entero = new List<EntiEntero>();
                if (info.Count.Equals(0))
                {
                    return entero;
                }
                else
                {
                    foreach (var item in info)
                    {
                        EntiEntero ent = new EntiEntero();
                        ent.DETALLE = item.DETALLE;
                        entero.Add(ent);

                    }
                        
                    return entero;
                    }
                }
            
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
