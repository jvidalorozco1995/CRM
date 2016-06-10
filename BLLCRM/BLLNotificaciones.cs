using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLNotificaciones
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertNotificaciones(Notificaciones b)
        {
            try
            {
                bd.Notificaciones.Add(b);
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

        public string UpdateNotificaciones(List<Notificaciones> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.Notificaciones.First(inm => inm.Id == item.Id);

                    ctx.Id_Actividad = item.Id_Actividad;
                    ctx.Estado = item.Estado;
                    ctx.Fecha = item.Fecha;
                    ctx.Usuario = item.Usuario;
                    ctx.Descripcion = item.Descripcion;
                    ctx.Enviado = item.Enviado;
                    ctx.TipoFecha = item.TipoFecha;
                    bd.SaveChanges();
                }
                return mensaje = "Las notificaciones se actualizaron de manera exitosa";
            }

            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Notificaciones> ListNotificacionesID(int id)
        {

            try
            {
                List<Notificaciones> lisb = bd.Notificaciones.Where(t => t.Id == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Notificaciones> lisbcrm = new List<Notificaciones>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Notificaciones entb = new Notificaciones();
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Estado = item.Estado;
                        entb.Fecha = item.Fecha;
                        entb.Usuario = item.Usuario;
                        entb.Descripcion = item.Descripcion;
                        entb.Enviado = item.Enviado;
                        entb.TipoFecha = item.TipoFecha;
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

        public List<Notificaciones> ListNotificaciones()
        {

            try
            {
                List<Notificaciones> lisb = bd.Notificaciones.ToList();
                //bd.compromisosxcuota.ToList();
                List<Notificaciones> lisbcrm = new List<Notificaciones>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Notificaciones entb = new Notificaciones();
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Estado = item.Estado;
                        entb.Fecha = item.Fecha;
                        entb.Usuario = item.Usuario;
                        entb.Descripcion = item.Descripcion;
                        entb.Enviado = item.Enviado;
                        entb.TipoFecha = item.TipoFecha;
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
