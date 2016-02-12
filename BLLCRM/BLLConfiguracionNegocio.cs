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
        //Obtiene la instancia de la base de datos
        CRMEntiti bd = new CRMEntiti();

        /// <summary>
        /// Metodo para registrar los bloques en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int ConfiguracionNegocio(Configuracion_negocio b)
        {
            try
            {
                 //Instanciamos un objeto de la entidad
                 Configuracion_negocio config = new Configuracion_negocio();


                 config.Nombre = b.Nombre;
                 config.Proyecto = b.Proyecto;
                 config.Estado = 1;
               
                 bd.Configuracion_negocio.Add(config);
                 bd.SaveChanges();
                
                return 1;
            }
            catch (DbUpdateException)
            {
                //Retornamos cero en caso de que pase un error
                return 0;
            }
            catch (Exception)
            {
                //si se produce una excepcion la mandamos hacia adelante
                throw;
            }
        }

        /// <summary>
        /// obtiene todas las configuraciones del negocio
        /// </summary>
        /// <returns></returns>
        public List<Configuracion_Negocio> getAll() {

            try {

               List<Configuracion_negocio> Lconfi = bd.Configuracion_negocio.ToList();
               List<Configuracion_Negocio> _lnegocio = new List<Configuracion_Negocio>();
               if (Lconfi !=null)
                {
                    foreach (var item in Lconfi)
                    {
                        Configuracion_Negocio confi = new Configuracion_Negocio();
                        confi.ID = item.ID;
                        confi.Nombre = item.Nombre;
                        confi.Proyecto = item.Proyecto;
                        confi.Estado = item.Estado;
                        _lnegocio.Add(confi);
                    }    
               }
                //Retornamos una lista
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
