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

        public List<VListadoEntregas> ListInmueblesEntregasproyecto(string PROYECTO)
        {
            var Contador = 1;
            try
            {
                List<VListadoEntregas> lisb = bd.VListadoEntregas.Where(t => t.ID_PROYEC == PROYECTO).ToList();
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
