using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;
using BLLCRM;


namespace BLLCRM
{
 public class BLLAval
    {
        CRMEntiti bd = new CRMEntiti();
        public int InsertIAval(Aval p, List<ItemAval> itemAval)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Aval.OrderByDescending(u => u.Registro).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.Registro); }
                // b.ENVIADO = DateTime.Now;
                p.Registro = (cons + 1);
                if (p.Aprueba == 1)
                {
                    p.UsuarioAprueba = Membership.GetUser().ToString();
                }
                var Avalinsertado = bd.Aval.Add(p);
                bd.SaveChanges();
                // se gurada la primera fecha de inspeccion
                FechasAval fechas = new FechasAval();
                fechas.FechaInspeccion = DateTime.Now;
                fechas.idRegistro = Avalinsertado.id;
                InsertFechasAval(fechas);
                // se guarda los item por registro de aval
                InserItemAval(itemAval, Avalinsertado.id,p.ReferenciaInmueble);
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }
        public List<VistaAVal> ListIAval(string id)
        {
            

            try
            {
                List<VistaAVal> lisb = bd.VistaAVal.Where(t=> t.ReferenciaInmueble == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAVal> lisbcrm = new List<VistaAVal>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAVal entb = new VistaAVal();
                        entb.id = item.id;
                        entb.Registro = item.Registro;
                        entb.Propietario = item.Propietario;
                        entb.Residente = item.Residente;
                        entb.Inspeccion = item.Inspeccion;
                        entb.Aprueba = item.Aprueba;
                        entb.UsuarioAprueba = item.UsuarioAprueba;
                        entb.FechaFinApro = item.FechaFinApro;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.ReferenciaInmueble = item.ReferenciaInmueble;
                        entb.INMUEBLE = item.INMUEBLE;
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
        public List<VistaAvalAntes> ListIAvalAntes(string id)
        {


            try
            {
                List<VistaAvalAntes> lisb = bd.VistaAvalAntes.Where(t => t.REFERENCIA == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAvalAntes> lisbcrm = new List<VistaAvalAntes>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAvalAntes entb = new VistaAvalAntes();
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.INMUOBRA = item.INMUOBRA;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.REFERENCIA = item.REFERENCIA;
                        entb.NOMBRECLIENTE = item.NOMBRECLIENTE;
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
        public int InsertFechasAval(FechasAval p)
        {
            try
            {

                bd.FechasAval.Add(p);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }
        public string InserItemAval(List<ItemAval> list, int? aval,string referenciainmueble)
        {
            try
            {

                foreach (var item in list)
                {

                    ItemAval inmu = new ItemAval();
                    inmu.IdAval = aval;
                    inmu.Ambiente = item.Ambiente;
                    inmu.Numero = item.Numero;
                    inmu.Item = item.Item;
                    inmu.Cumple = item.Cumple;
                    if (item.Cumple == 1) {
                        inmu.FechaRecibido = DateTime.Now;
                        inmu.UsuarioAprueba = Membership.GetUser().ToString();
                        inmu.FechaCompromiso = DateTime.Now;
                    }
                    inmu.Observaciones = item.Observaciones;
                    
                    bd.ItemAval.Add(inmu);

                }
                bd.SaveChanges();

                var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
                ctx2.ESTADOAVAL = 1;
                bd.SaveChanges();
                return "Se ha guardado satisfactoriamente el registro";
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.ToString().Contains("No se puede insertar una fila de clave duplicada"))
                {

                    return "Error 404 validation no found";
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
        public int Aprobar(string referenciainmueble, int idaval)
        {

            try
            {


                var ctx = bd.Aval.First(inm => inm.id == idaval);

                ctx.Aprueba = 1;
                ctx.UsuarioAprueba = Membership.GetUser().ToString();
                bd.SaveChanges();

                var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
                ctx2.ESTADOAVAL = 2;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
    }
}
