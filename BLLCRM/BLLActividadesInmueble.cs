using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
 public   class BLLActividadesInmueble
    {
        CRMEntiti bd = new CRMEntiti();
        public List<Actividades_Inmueble> ListActInmueble(int id)
        {

            try
            {
                List<Actividades_Inmueble> lisb = bd.Actividades_Inmueble.Where(t => t.IdTraInmueble == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Actividades_Inmueble> lisbcrm = new List<Actividades_Inmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Actividades_Inmueble entb = new Actividades_Inmueble();
                        entb.id = item.id;
                        entb.Nombre = item.Nombre;
                        entb.Descripcion = item.Descripcion;
                        entb.IdTraInmueble = item.IdTraInmueble;
                        entb.ActividadDependiente = item.ActividadDependiente;
                        entb.Duracion = item.Duracion;
                        entb.Simultaneo = item.Simultaneo;
                        entb.FechaInicio = item.FechaInicio;
                        entb.FechaFin = item.FechaFin;
                        entb.Posicion = item.Posicion;
                        entb.Estado = item.Estado;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
