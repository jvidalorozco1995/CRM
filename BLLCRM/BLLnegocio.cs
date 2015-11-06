using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
   public class BLLnegocio
    {
       CRMEntiti bd = new CRMEntiti();
       private string resul;
       private string user = null;
       /// <summary>
       /// Metodo para alamacenar hoja de negocio en el sistema
       /// </summary>
       /// <param name="n"></param>
       /// <param name="inm"></param>
       /// <param name="ac"></param>
       /// <returns></returns>
       public string Hojanegocio(negocio n,string inm, List<acuerdo_pago> ac) {
           try
           {
                var _CodS = bd.VCod_SP.Where(sp => sp.CLIENTE == n.CEDULA_P).ToList();
                       string Cod_Sp = "";

                       foreach (var item2 in _CodS)
                       {
                           Cod_Sp = item2.COD + item2.INMU;
                       }

               user = Membership.GetUser().ToString();
               n.ID_NEGOCIO = Convert.ToString(n.FECHA_NACI.Value.Day) + Convert.ToString(n.FECHA_NACI.Value.Month) + Convert.ToString(DateTime.Now.Year) + n.CEDULA_P;
               n.USER_CREO = user;
               n.CODIGO_F = Cod_Sp;
               bd.negocio.Add(n);
               Acuerdopago(ac, n.ID_NEGOCIO);
               ProcesoCompra(inm);
               UpdateSepracion(inm);
               HistorialCliente(n.CEDULA_P,inm);
               HistorialInmu(n.CEDULA_P, inm);
               bd.SaveChanges();
               return n.ID_NEGOCIO;
           }
           catch (Exception)
           {
               return "ER";
               throw;
           }
       }


       public List<Entinegocio> lisHoja(string idhoja) {
           try
           {
               List<NegocioView> line = bd.NegocioView.Where(i => i.ID_NEGOCIO == idhoja).ToList();
               List<Entinegocio> _line = new List<Entinegocio>();



               if (line!=null)
               {
                   foreach (var item in line)
                   {
                       Entinegocio hn = new Entinegocio();


                       var _CodS = bd.VCod_SP.Where(sp => sp.CLIENTE == item.CEDULA_P).ToList();
                       string Cod_Sp = "";

                       foreach (var item2 in _CodS)
                       {
                           Cod_Sp = item2.COD + item2.INMU;
                       }

                       hn.PROPIETARIO = item.PROPIETARIO;
                       hn.CEDULA_P = item.CEDULA_P;
                       hn.CEDULA_CUY = item.CEDULA_CUY;
                       hn.EXPEDICION = item.EXPEDICION;
                       hn.ESTADO_C = item.ESTADO_C;
                       hn.FECHA_NACI = item.FECHA_NACI;
                       hn.LUGAR = item.LUGAR;
                       hn.DIRECCION_R = item.DIRECCION_R;
                       hn.TELEFONO_P = item.TELEFONO_P;
                       hn.EMPRESA = item.EMPRESA;
                       hn.CARGO = item.CARGO;
                       hn.DIRECCION_EMPR = item.DIRECCION_EMPR;
                       hn.INGRESO = item.INGRESO;
                       hn.ANTIGUEDAD = item.ANTIGUEDAD;
                       hn.CORREO = item.CORREO;
                       hn.NOMBRE_CONY = item.NOMBRE_CONY;
                       hn.CEDULA_CUY = item.CEDULA_CUY;
                       hn.TELE_CONY = item.TELE_CONY;
                       hn.N_HIJO = item.N_HIJO;
                       hn.INTERES_COM = item.INTERES_COM;
                       hn.PROYECTO_INT = item.NOMBRE_PROYEC.Trim();
                       hn.FECHA_ENT = item.FECHA_ENT;
                       hn.FECHA_ES = item.FECHA_ES;
                       hn.FECHA_SUBRO = item.FECHA_SUBRO;
                       hn.PROFESION = item.PROFESION;
                       hn.ASESOR_INFO = item.ASESOR_INFO;
                       hn.CLASE_INMU = item.CLASE_INMU;
                       hn.BANCO = item.BANCO;
                       hn.NO_CREDITO = item.NO_CREDITO;
                       hn.MEDIO_ENT = item.MEDIO_ENT;
                       hn.VALOR_CASA = item.VALOR_CASA;
                       hn.INICIAL = item.INICIAL;
                       hn.CREDITO = item.CREDITO;
                       hn.USER_NEGOCIO = item.NOMBRES;
                       hn.CODIGO_F = Cod_Sp;
                       _line.Add(hn);
                   }
                   return _line;
               }

               return null;
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void Acuerdopago(List<acuerdo_pago> a, string negocio) {
           try
           {
               foreach (var item in a)
               {
                   acuerdo_pago pago = new acuerdo_pago();
                   pago.NO_ACUERDO = negocio;
                   pago.FECHA_PAGO = item.FECHA_PAGO;
                   pago.CUOTA = item.CUOTA;
                   pago.VALOR_CUOTA = item.VALOR_CUOTA;
                   bd.acuerdo_pago.Add(pago);
               }
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void ProcesoCompra(string inmu)
       {
           try
           {
               var ctx = bd.inmuebles.First(i=> i.REFERENCIA==inmu);
               ctx.INMUESTADO = "1";
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void UpdateSepracion(string inm)
       {
           try
           {
               var ctx = bd.inmueble_separacion.First(t=> t.INMUEBLE==inm);
               ctx.ESTADO = "C";
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void HistorialInmu(string c, string inm)
       {
           try
           {   historial_inmueble him = new historial_inmueble();
               him.CLIENTE=c;
               him.INMUEBLE=inm;
               him.FECHA=DateTime.Now;
               him.DESCRIPCION_S = "El inmueble"+ inm+ "  "+"ha pasado a un proceso de compra";
               bd.historial_inmueble.Add(him);
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void HistorialCliente(string c, string inmu)
       {
           try
           {  user = Membership.GetUser().ToString();
               historial_clientes hc = new historial_clientes();
               hc.CLIENTEH=c;
               hc.TRABAJADOR=user;
               hc.FECHA=DateTime.Now;
               hc.DESCRIPCIONH="El cliente a inicado el proceso de compra del in inmueble "+inmu;
               bd.historial_clientes.Add(hc);
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       public List<Entiacuerdo_pago> Lisacuerdop(string acp) {
           try
           {
               List<acuerdo_pago> lacp = bd.acuerdo_pago.Where(p => p.NO_ACUERDO == acp).ToList();
               List<Entiacuerdo_pago> acuerdo = new List<Entiacuerdo_pago>();
               foreach (var item in lacp)
               {
                   Entiacuerdo_pago ac = new Entiacuerdo_pago();
                   ac.DETALLE = item.CUOTA;
                   ac.FECHA_PAGO = item.FECHA_PAGO;
                   ac.VALOR_CUOTA = item.VALOR_CUOTA;
                   acuerdo.Add(ac);
               }
               return acuerdo;
           }
           catch (Exception)
           {
               
               throw;
           }
       }
     }
     
}
