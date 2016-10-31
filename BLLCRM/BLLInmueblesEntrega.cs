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
   public class BLLInmueblesEntrega
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserInmueblesEntregas(INMUEBLES_ENTREGAS b)
        {
            try
            {
                b.FECHAREG = DateTime.Now;
                bd.INMUEBLES_ENTREGAS.Add(b);
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

        public int UpdateInmueblesEntregas(INMUEBLES_ENTREGAS i)
        {
            try
            {
                var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == i.ID_INMUEBLES_ENTREGAS);

               
                ctx.FECHAREG = i.FECHAREG;
                ctx.CONFIRMAOBRA = i.CONFIRMAOBRA;
                ctx.FECHACONFIRMA = i.FECHACONFIRMA;
                ctx.INSPECCIONCAL = i.INSPECCIONCAL;
                ctx.ESTADOAVAL = i.ESTADOAVAL;
                ctx.RADICADOVENTA = i.RADICADOVENTA;
                ctx.ENTREGAOBRA = i.ENTREGAOBRA;
                ctx.FECHACLIENTE = i.FECHACLIENTE;
                ctx.ESTADOENTREGA = i.ESTADOENTREGA;
                ctx.FECHAENTREGA = i.FECHAENTREGA;
                ctx.OBSERVACIONES = i.OBSERVACIONES;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public int UpdateIEestados(int i, INMUEBLES_ENTREGAS idIE)
        {
            try
            {
                if (i == 1)
                {
                    var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx.RADICADOVENTA = idIE.RADICADOVENTA;
                    bd.SaveChanges();
                }
                else if (i == 2)
                {
                    var ctx1 = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx1.ENTREGAOBRA = idIE.ENTREGAOBRA;
                    bd.SaveChanges();
                }
                else if (i == 2)
                {
                    var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx2.FECHACLIENTE = idIE.FECHACLIENTE;
                    bd.SaveChanges();
                }

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public int ConfirmaObservaciones(List<INMUEBLES_ENTREGAS> a)
        {
            try
            {
                foreach (var item in a)
                {
                    var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == item.ID_INMUEBLES_ENTREGAS);
                    var obra = ctx.REFERENCIA_INMUEBLE.Substring(0, 3);
                    var pro = bd.proyectos.First(inm2 => inm2.ID_PROYEC == obra);
                    var repre = bd.ResponsableCalidad.First(inm3 => inm3.Proyecto == pro.NOMBRE_PROYEC);
                    ctx.FECHACONFIRMA = DateTime.Now;
                    ctx.INSPECCIONCAL = repre.Usuario;
                    ctx.CONFIRMAOBRA = item.CONFIRMAOBRA;
                    ctx.OBSERVACIONES = item.OBSERVACIONES;
                    bd.SaveChanges();
                }
                return 1;
            }

            catch (Exception ex)
            {
               
                throw;
            }
        }

        public int ValidaReferencia(string Referencia)
        {
            try
            {
                var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == Referencia);

                if(ctx == null)
                {
                    return 0;
                }
                else {
                    return 1;
                }

                
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<VListadoEntregas> ListInmueblesEntregasproyecto(int PROYECTO)
        {
            var Contador = 1;
            try
            {
                List<VListadoEntregas> lisb = bd.VListadoEntregas.Where(t => t.ID_ENTREGA == PROYECTO).ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntregas> lisbcrm = new List<VListadoEntregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VListadoEntregas entb = new VListadoEntregas();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.CONTADOR = Contador;
                        entb.ID_PROYEC = item.ID_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        entb.CONFIRMAOBRA = item.CONFIRMAOBRA;
                        lisbcrm.Add(entb);
                        Contador = Contador + 1;
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Vistablackboard> LisInmueblesEntregasblackboard(string proyecto)
        {
            try
            {
                List<Vistablackboard> lisb = bd.Vistablackboard.Where(t => t.SUC == proyecto).ToList();
                //bd.compromisosxcuota.ToList();
                List<Vistablackboard> lisbcrm = new List<Vistablackboard>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Vistablackboard entb = new Vistablackboard();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.FECHAREG = item.FECHAREG;
                        entb.CONFIRMAOBRA = item.CONFIRMAOBRA;
                        entb.FECHACONFIRMA = item.FECHACONFIRMA;
                        entb.ESTADOAVAL = item.ESTADOAVAL;
                        entb.INSPECCIONCAL = item.INSPECCIONCAL;
                        entb.RADICADOVENTA = item.RADICADOVENTA;
                        entb.ENTREGAOBRA = item.ENTREGAOBRA;
                        entb.FECHACLIENTE = item.FECHACLIENTE;
                        entb.ESTADOENTREGA = item.ESTADOENTREGA;
                        entb.FECHAENTREGA = item.FECHAENTREGA;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        entb.SUC = item.SUC;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.id = item.id; //id = idAval
                        entb.CONSECUTIVO = item.CONSECUTIVO;
                        entb.USUARIO = Membership.GetUser().ToString();
                        entb.DIROBRA = item.DIROBRA;
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
        public List<VListadoEntregas> ListInmueblesEntregas(int id)
        {
            var Contador = 1;
            try
            {
                List<VListadoEntregas> lisb = bd.VListadoEntregas.Where(t => t.ID_ENTREGA == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntregas> lisbcrm = new List<VListadoEntregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VListadoEntregas entb = new VListadoEntregas();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.CONTADOR = Contador;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        lisbcrm.Add(entb);
                        Contador = Contador + 1;
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
