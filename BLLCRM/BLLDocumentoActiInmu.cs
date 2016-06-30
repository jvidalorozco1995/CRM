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
  public  class BLLDocumentoActiInmu
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertDocumento_ActInmueble(Documento_ActInmueble b)
        {
            try
            {
                b.Fecha = DateTime.Now;
                b.Usuario = Membership.GetUser().ToString();
                bd.Documento_ActInmueble.Add(b);
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

        public string UpdateDocumento_ActInmueble(List<Documento_ActInmueble> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.Documento_ActInmueble.First(inm => inm.Id == item.Id);

                    ctx.Documento = item.Documento;
                    ctx.Nombre = item.Nombre;
                    ctx.Fecha = item.Fecha;
                    ctx.Usuario = item.Usuario;
                    bd.SaveChanges();
                }
                return mensaje = "Los documentos se actualizaron de manera exitosa";
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
        public List<Documento_ActInmueble> ListDocumento_ActInmuebleID(int id)
        {

            try
            {
                List<Documento_ActInmueble> lisb = bd.Documento_ActInmueble.Where(t => t.Id == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Documento_ActInmueble> lisbcrm = new List<Documento_ActInmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Documento_ActInmueble entb = new Documento_ActInmueble();
                        entb.Id = item.Id;
                        entb.Documento = item.Documento;
                        entb.Nombre = item.Nombre;
                        entb.Fecha = item.Fecha;
                        entb.Usuario = item.Usuario;
                        entb.IdActividad = item.IdActividad;
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

        public List<Documento_ActInmueble> ListDocumento_ActInmueble()
        {

            try
            {
                List<Documento_ActInmueble> lisb = bd.Documento_ActInmueble.ToList();
                //bd.compromisosxcuota.ToList();
                List<Documento_ActInmueble> lisbcrm = new List<Documento_ActInmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Documento_ActInmueble entb = new Documento_ActInmueble();
                        entb.Id = item.Id;
                        entb.Documento = item.Documento;
                        entb.Nombre = item.Nombre;
                        entb.Fecha = item.Fecha;
                        entb.Usuario = item.Usuario;
                        entb.IdActividad = item.IdActividad;
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

        public List<Documento_ActInmueble> ListDocumentoTramite(int id)
        {

            try
            {
                List<Documento_ActInmueble> lisb = bd.Documento_ActInmueble.Where(t=>t.IdActividad == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Documento_ActInmueble> lisbcrm = new List<Documento_ActInmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Documento_ActInmueble entb = new Documento_ActInmueble();
                        entb.Id = item.Id;
                        entb.Documento = item.Documento;
                        entb.Nombre = item.Nombre;
                        entb.Fecha = item.Fecha;
                        entb.Usuario = item.Usuario;
                        entb.IdActividad = item.IdActividad;
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

        public int DeleteDocumento_ActInmueble(int id)
        {

            try
            {
                var ctx = bd.Documento_ActInmueble.First(inm => inm.Id == id);
                bd.Documento_ActInmueble.Remove(ctx);
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
    }
}
