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
  public  class BLLEntregas
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserEntregas(Entregas b)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Entregas.OrderByDescending(u => u.CONSECUTIVO).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.CONSECUTIVO); }
                b.ENVIADO = DateTime.Now;
                b.CONSECUTIVO = (cons + 1);
                b.FECHAREG = DateTime.Now;
                b.USUARIO = Membership.GetUser().ToString();
                b.ENVIADOPOR = Membership.GetUser().ToString();
                bd.Entregas.Add(b);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

   
        public int UpdateEntregas(Entregas i)
        {

            try
            {
                

                var ctx = bd.Entregas.First(inm => inm.ID_ENTREGAS == i.ID_ENTREGAS);

                ctx.FECHAREG = i.FECHAREG;
                ctx.ID_PROYECTO = i.ID_PROYECTO;
                ctx.DIROBRA = i.DIROBRA;
                ctx.USUARIO = i.USUARIO;
                ctx.ENVIADO = i.ENVIADO;
                ctx.ENVIADOA = i.ENVIADOA;
                ctx.ENVIADOPOR = i.ENVIADOPOR;
                ctx.CONSECUTIVO = i.CONSECUTIVO;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Entregas> ListEntregas(int id)
        {

            try
            {
                List<Entregas> lisb = bd.Entregas.Where(t => t.ID_ENTREGAS == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
        public List<Entregas> ListEntregasPor()
        {
           var user = Membership.GetUser().ToString();
            try
            {
                List<Entregas> lisb = bd.Entregas.Where(t => t.ENVIADOA == user || t.USUARIO == user || t.ENVIADOPOR == user).ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Entregas> ListEntregas()
        {

            try
            {
                List<Entregas> lisb = bd.Entregas.ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {



                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
