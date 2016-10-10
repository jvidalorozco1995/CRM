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
        public string InserEntregas(Entregas b,List<INMUEBLES_ENTREGAS> list)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Entregas.OrderByDescending(u => u.CONSECUTIVO).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.CONSECUTIVO); }
               // b.ENVIADO = DateTime.Now;
                b.CONSECUTIVO = (cons + 1);
                b.FECHAREG = DateTime.Now;
                b.USUARIO = Membership.GetUser().ToString();
                b.ENVIADOPOR = Membership.GetUser().ToString();
                var item = bd.Entregas.Add(b);
                var a =  bd.SaveChanges();
                if (a > 0) {
                    foreach (var entidad in list) {

                        INMUEBLES_ENTREGAS inmu = new INMUEBLES_ENTREGAS();
                        inmu.REFERENCIA_INMUEBLE = entidad.REFERENCIA_INMUEBLE;
                        inmu.FECHAREG = DateTime.Now;
                        inmu.ID_ENTREGA = item.ID_ENTREGAS;

                        bd.INMUEBLES_ENTREGAS.Add(inmu);
                       
                    }
                    bd.SaveChanges();
                }
                return "Se ha guardado satisfactoriamente la solicitud";
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.ToString().Contains("No se puede insertar una fila de clave duplicada"))
                {

                    return "Este inmueble ya tiene solicitudes agregadas";
                }
                else
                {
                    throw ex;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

   
        public int UpdateEntregas(int id)
        {

            try
            {
                

                var ctx = bd.Entregas.First(inm => inm.ID_ENTREGAS == id);

                ctx.ENVIADO = DateTime.Now;
                ctx.ENVIADOA = Membership.GetUser().ToString();
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
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
                        entb.DIROBRA = item.DIROBRA + "/" +user;
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
        public List<VListadoEntegrasC> ListEntregasC()
        {

            try
            {
                List<VListadoEntegrasC> lisb = bd.VListadoEntegrasC.ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntegrasC> lisbcrm = new List<VListadoEntegrasC>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {



                        VListadoEntegrasC entb = new VListadoEntegrasC();
                        entb.CONSECUTIVO = item.CONSECUTIVO;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.MZA = item.MZA;
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.FECHACONFIRMA = item.FECHACONFIRMA;
                        entb.ESTADOAVAL = item.ESTADOAVAL;
                        entb.ReferenciaInmueble = item.ReferenciaInmueble;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
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
