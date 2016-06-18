using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLTramitesInmueble
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertTramitesinmueble(Tramites_Inmueble b)
        {
            try
            {
                bd.Tramites_Inmueble.Add(b);
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

        public string UpdateTramitesinmueble(List<Tramites_Inmueble> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.Tramites_Inmueble.First(inm => inm.id == item.id);

                    ctx.id_Tramite = item.id_Tramite;
                    ctx.Id_Inmueble = item.Id_Inmueble;
                    ctx.Porcentaje = item.Porcentaje;
                    bd.SaveChanges();
                }
                return mensaje = "Los tramites se actualizaron de manera exitosa";
            }

            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso " + ex;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Tramites_Inmueble> ListTramitesinmuebleID(int id)
        {

            try
            {
                List<Tramites_Inmueble> lisb = bd.Tramites_Inmueble.Where(t => t.id == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Tramites_Inmueble> lisbcrm = new List<Tramites_Inmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Tramites_Inmueble entb = new Tramites_Inmueble();
                        entb.id = item.id;
                        entb.id_Tramite = item.id_Tramite;
                        entb.Id_Inmueble = item.Id_Inmueble;
                        entb.Porcentaje = item.Porcentaje;
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

        public List<Tramites_Inmueble> ListTramitesinmueble()
        {

            try
            {
                List<Tramites_Inmueble> lisb = bd.Tramites_Inmueble.ToList();
                //bd.compromisosxcuota.ToList();
                List<Tramites_Inmueble> lisbcrm = new List<Tramites_Inmueble>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Tramites_Inmueble entb = new Tramites_Inmueble();
                        entb.id = item.id;
                        entb.Id_Inmueble = item.Id_Inmueble;
                        entb.id_Tramite = item.id_Tramite;
                        entb.Porcentaje = item.Porcentaje;
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
