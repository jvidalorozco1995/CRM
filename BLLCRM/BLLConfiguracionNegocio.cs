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
    public class BLLConfiguracionNegocio
    {

        CRMEntiti bd = new CRMEntiti();

        /// <summary>
        /// Meotod para registrar los bloques en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int ConfiguracionNegocio(Configuracion_negocio b)
        {
            try
            {


                var result = from r in bd.Configuracion_negocio where r.ID == 1 select r;

                // Get the first record from the result
                Configuracion_negocio product = result.First();

                // Update the product name
                 product.Nombre = b.Nombre;
                 bd.SaveChanges();
                
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

        public List<Configuracion_Negocio> getAll() {

            try {

                List<Configuracion_negocio> Lconfi= bd.Configuracion_negocio.ToList();
                List<Configuracion_Negocio> _lnegocio = new List<Configuracion_Negocio>();
                if (Lconfi !=null)
                {
                    foreach (var item in Lconfi)
                    {
                        Configuracion_Negocio confi = new Configuracion_Negocio();
                        confi.Nombre = item.Nombre;
                        _lnegocio.Add(confi);
                    }    
                }
                
                return _lnegocio;
            }
            catch (DbUpdateException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }


        }




    }
}
