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
        string mensaje = null;
        
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

        public string UpdateActInmueble(int i, int id,int idtramite)
        {
            var bandera = 0;
            int? posicion = 0;
            try
            {
                //cambiamos el estado de la activadad completada
                var ctx = bd.Actividades_Inmueble.First(inm => inm.id == id);
                    ctx.Estado = i;
                    bd.SaveChanges();

                //recorro toda la tabla actividad_inmueble para inicar la siguiente actividad
                List<Actividades_Inmueble> lisb = bd.Actividades_Inmueble.Where(t => t.IdTraInmueble == idtramite).ToList();
                foreach (var item in lisb)
                {
                    Actividades_Inmueble entb = new Actividades_Inmueble();
                    if (bandera == 1) // esto es si es la actividad siguiente a la completada
                    {
                        // si es simultaneo se sigue recorriendo hasta queno sea simultaneo
                        if (item.Simultaneo == 1)
                        {
                            bandera = 1;

                            var ctx2 = bd.Actividades_Inmueble.First(inm => inm.id == item.id);

                            ctx2.FechaInicio = DateTime.Now;

                            if (item.Duracion != null)
                            {
                                ctx2.FechaFin = DateTime.Now.AddDays(Convert.ToDouble(item.Duracion));
                            }
                            ctx2.Estado = 3;
                            bd.SaveChanges();// inicio la nueva actividad cambiando el estado a pendiente
                        }
                        else {
                            bandera = 2;
                        }
                        
                       
                    }
                    else {
                            if (item.id == id)
                            {
                                bandera = 1;
                            posicion = item.Posicion;
                            }
                       
                        }
                    // validamos que la actividad sea dependiente de la actividad completada
                    if(bandera == 2)
                    {
                        if (item.ActividadDependiente == posicion)
                        {
                            var ctx3 = bd.Actividades_Inmueble.First(inm => inm.id == item.id);
                            ctx3.FechaInicio = DateTime.Now;
                            if (item.Duracion != null)
                            {
                                ctx3.FechaFin = DateTime.Now.AddDays(Convert.ToDouble(item.Duracion));
                            }
                            ctx3.Estado = 3;
                            bd.SaveChanges();
                            bandera = 1;
                        }
                        else
                        {
                            bandera = 2;
                        }
                    }
                }

                // recorrer para ver si 
               

                return mensaje = "Se actualizo el estado de manera exitosa";
            }

            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }

    }
}