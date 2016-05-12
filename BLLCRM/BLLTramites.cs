using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
  public  class BLLTramites
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertTramites(Tramites b)
            {
                try
                {
                    bd.Tramites.Add(b);
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

        public string UpdateTramites(List<Tramites> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.Tramites.First(inm => inm.id == item.id);

                    ctx.Nombre = item.Nombre;
                    ctx.Banco = item.Banco;
                    bd.SaveChanges();
                }
                return mensaje = "Los tramites se actualizaron de manera exitosa";
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
        public List<Tramites> ListTramites(int id)
            {

                try
                {
                    List<Tramites> lisb = bd.Tramites.Where(t => t.id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<Tramites> lisbcrm = new List<Tramites>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                        Tramites entb = new Tramites();
                            entb.id = item.id;
                            entb.Nombre = item.Nombre;
                            entb.Banco = item.Banco;
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


    
        public List<Tramites> ListTramites()
        {

            try
            {
                List<Tramites> lisb = bd.Tramites.ToList();
                //bd.compromisosxcuota.ToList();
                List<Tramites> lisbcrm = new List<Tramites>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Tramites entb = new Tramites();
                        entb.id = item.id;
                        entb.Nombre = item.Nombre;
                        entb.Banco = item.Banco;
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
