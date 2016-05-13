using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLDocumentos
    {
            CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertDocumentos(Documento b)
            {
                try
                {
                    bd.Documento.Add(b);
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



        public string UpdateDocumentos(List<Documento> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.Documento.First(inm => inm.Id == item.Id);
                    ctx.Id_Actividad = item.Id_Actividad;
                    ctx.Nombre = item.Nombre;
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
        public List<Documento> ListDocumentos(int id)
            {

                try
                {
                    List<Documento> lisb = bd.Documento.Where(t => t.Id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<Documento> lisbcrm = new List<Documento>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                            Documento entb = new Documento();
                            entb.Id = item.Id;
                            entb.Id_Actividad = item.Id_Actividad;
                            entb.Nombre = item.Nombre;
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
        public List<Documento> ListDocumentos()
        {

            try
            {
                List<Documento> lisb = bd.Documento.ToList();
                //bd.compromisosxcuota.ToList();
                List<Documento> lisbcrm = new List<Documento>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Documento entb = new Documento();
                        entb.Id = item.Id;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Nombre = item.Nombre;
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
