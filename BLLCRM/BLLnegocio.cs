using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
   public class BLLnegocio
    {
       static CRMEntiti bd = new CRMEntiti();
       private string resul;
       static string user = null;
       /// <summary>
       /// Metodo para alamacenar hoja de negocio en el sistema
       /// </summary>
       /// <param name="n"></param>
       /// <param name="inm"></param>
       /// <param name="ac"></param>
       /// <returns></returns>
       public string Hojanegocio(negocio n,string inm, List<acuerdo_pago> ac, List<acuerdo_pago_banco> acg) {
            try
            {
                var _CodS = bd.VCod_SP.Where(sp => sp.COD == n.SEPARACION).ToList();
                string Cod_Sp = "";

                foreach (var item2 in _CodS)
                {
                    Cod_Sp = item2.COD + item2.INMU;
                }

                user = Membership.GetUser().ToString();
                n.ID_NEGOCIO = Convert.ToString(n.FECHA_NACI.Value.Day) + Convert.ToString(n.FECHA_NACI.Value.Month) + Convert.ToString(DateTime.Now.Year) + Convert.ToString(DateTime.Now.Second) + n.CEDULA_P;
                n.USER_CREO = user;
                n.CODIGO_F = Cod_Sp;
                n.FECHA_NEGOCIO = DateTime.Now;
                bd.negocio.Add(n);
                Acuerdopago(ac, n.ID_NEGOCIO);
                Acuerdopagogas(acg, n.ID_NEGOCIO);
                ProcesoCompra(inm);
                UpdateSepracion(n.SEPARACION);
                HistorialCliente(n.CEDULA_P, inm);
                HistorialInmu(n.CEDULA_P, inm);
                bd.SaveChanges();
                return Cod_Sp + "-" + n.ID_NEGOCIO;
            }
            catch (DbEntityValidationException ex)
            {
                foreach (var eve in ex.EntityValidationErrors)
                {
                    /* Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                         eve.Entry.Entity.GetType().Name, eve.Entry.State);
                     foreach (var ve in eve.ValidationErrors)
                     {
                         Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                             ve.PropertyName, ve.ErrorMessage);
                     }*/
                    // Retrieve the error messages as a list of strings.
                    var errorMessages = ex.EntityValidationErrors
                            .SelectMany(x => x.ValidationErrors)
                            .Select(x => x.ErrorMessage);

                    // Join the list to a single string.
                    var fullErrorMessage = string.Join("; ", errorMessages);

                    // Combine the original exception message with the new one.
                    var exceptionMessage = string.Concat(ex.Message, " el error esta en: ", fullErrorMessage);

                    // Throw a new DbEntityValidationException with the improved exception message.
                    throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
                }
                throw;
                return "ER";
            }
           

        }
       /* public void RefreshAll()
        {
            foreach (var entity in bd.ChangeTracker.Entries())
            {
                
                    entity.Reload();
                
               
            }
        }*/

        public Entinegocio lisHoja(string idhoja) {
           
            try
           {
               //RefreshAll();
               NegocioView item = bd.NegocioView.Where(i => i.ID_NEGOCIO == idhoja).FirstOrDefault();
         
                if (item != null)
                {

                    Entinegocio hn = new Entinegocio();


                    hn.ID_NEGOCIO = item.ID_NEGOCIO;
                    hn.LUGAR_EXPE = item.LUGAR_EXPE;
                    hn.TIPO_DOCUMENTO = item.TIPO_DOCUMENTO;
                    hn.TIPO_PERSONA = item.TIPO_PERSONA;
                    hn.ID_HOJA = item.ID_HOJA;
                    hn.PROPIETARIO = item.PROPIETARIO;
                    hn.CEDULA_P = item.CEDULA_P;
                    hn.ESTADO_C = item.ESTADO_C;
                    hn.EXPEDICION = item.EXPEDICION;
                    hn.FECHA_NACI = item.FECHA_NACI;
                    hn.LUGAR = item.LUGAR;
                    hn.DIRECCION_R = item.DIRECCION_R;
                    hn.TELEFONO_P = item.TELEFONO_P;
                    hn.EMPRESA = item.EMPRESA;
                    hn.TELFONO_EMP = item.TELFONO_EMP;
                    hn.CARGO = item.CARGO;
                    hn.PROFESION = item.PROFESION;
                    hn.DIRECCION_EMPR = item.DIRECCION_EMPR;
                    hn.ANTIGUEDAD = item.ANTIGUEDAD;
                    hn.CORREO = item.CORREO;
                    hn.NOMBRE_CONY = item.NOMBRE_CONY;
                    hn.CEDULA_CUY = item.CEDULA_CUY;
                    hn.TELE_CONY = item.TELE_CONY;
                    hn.N_HIJO = item.N_HIJO;
                    hn.INTERES_COM = item.INTERES_COM;
                    hn.VALOR_CASA = item.VALOR_CASA;
                    hn.INICIAL = item.INICIAL;
                    hn.CREDITO = item.CREDITO;
                    hn.BANCO = item.BANCO;
                    hn.NOMBRE_BANCO = item.NOMBRE_BANCO;
                    hn.NO_CREDITO = item.NO_CREDITO;
                    hn.FECHA_ES = item.FECHA_ES;
                    hn.FECHA_ENT = item.FECHA_ENT;
                    hn.FECHA_SUBRO = item.FECHA_SUBRO;
                    hn.ASESOR_INFO = item.ASESOR_INFO;
                    hn.MEDIO_ENT = item.MEDIO_ENT;
                    hn.ASOCIADO = item.ASOCIADO;
                    hn.CLASE_INMU = item.CLASE_INMU;
                    hn.SEPARACION = item.SEPARACION;
                    hn.NOMBRES = item.NOMBRES;
                    hn.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                    hn.INGRESO = item.INGRESO;
                    hn.CODIGO_F = item.CODIGO_F;
                    hn.INMUEBLE = item.INMUEBLE;
                    hn.NOMBRE_BLO = item.NOMBRE_BLO;
                    hn.USER_NEGOCIO = item.PROPIETARIO;
                    hn.USER_CARTERA = item.USER_CARTERA;
                    hn.CODIGO_F = item.CODIGO_F;
                    hn.PROYECTO_INT = item.NOMBRE_PROYEC;
                    hn.FECHA_NEGOCIO = item.FECHA_NEGOCIO;
                    hn.PARQUEADERO = item.PARQUEADERO;
                    hn.AREAS_COMUNES = item.AREAS_COMUNES;
                    hn.AREA_PRIVADA = item.AREA_PRIVADA;
                    hn.AREA_CONSTRUIDA = item.AREA_CONSTRUIDA;
                    hn.TIPO_DOCUMENTO_CONY = item.TIPO_DOCUMENTO_CONY;
                    hn.LUGAR_EXPEDICION = item.LUGAR_EXPEDICION;
                    hn.FECHA_EXPEDICION_CUY = item.FECHA_EXPEDICION_CUY;
                    hn.ADICIONES_EXCLUSIONES = item.ADICIONES_EXCLUSIONES;
                    hn.SUBSIDIO = item.SUBSIDIO;
                    hn.GARAJE = item.GARAJE;
                  //  hn.SALDO_FINANCIAR = item.SALDO_FINANCIAR;
                    hn.VALOR_SERVICIOGAS = item.VALOR_SERVICIOGAS;
                    hn.INTERESES_SUBROGACION = item.INTERESES_SUBROGACION;
                    hn.AUT_MENSAJE = item.AUT_MENSAJE;
                    hn.AUT_CORREO = item.AUT_CORREO;
                    hn.DIRECCION_CORRESPON = item.DIRECCION_CORRESPON;
                    hn.CELULAR = item.CELULAR;
                    hn.OBSERVACIONES = item.OBSERVACIONES;
                    hn.DESCUENTO = item.DESCUENTO;
                    hn.DOMICILIO = item.DOMICILIO;
                    return hn;
                }
                else {
                    return null;

                }
                  
               

             
           }
           catch (DbEntityValidationException ex)
           {

                foreach (var eve in ex.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }
       }


    

        public List<Entinegocio> lisAllHoja()
       {
           try
           {
               List<negocio> line = bd.negocio.ToList();
               List<Entinegocio> linE = new List<Entinegocio>();

               if (line.Count.Equals(0) && line.Equals(null))
               {
                   return linE;
               }
               else 
               {
                   foreach (var item in line)
                   {
                       Entinegocio hn = new Entinegocio();


                       hn.ID_HOJA = item.ID_HOJA;
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
                   
                       hn.TELE_CONY = item.TELE_CONY;
                       hn.N_HIJO = item.N_HIJO;
                       hn.INTERES_COM = item.INTERES_COM;
                       hn.PROYECTO_INT = item.PROYECTO_INT.Trim();
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
                       hn.USER_NEGOCIO = item.PROPIETARIO;
                       hn.USER_CARTERA = item.USER_CARTERA;
                       hn.CODIGO_F = item.CODIGO_F;
                        hn.PARQUEADERO = item.PARQUEADERO;
                        hn.AREAS_COMUNES = item.AREAS_COMUNES;
                        hn.AREA_PRIVADA = item.AREA_PRIVADA;
                        hn.AREA_CONSTRUIDA = item.AREA_CONSTRUIDA;
                        hn.TIPO_DOCUMENTO_CONY = item.TIPO_DOCUMENTO_CONY;
                        hn.LUGAR_EXPEDICION = item.LUGAR_EXPEDICION;
                        hn.FECHA_EXPEDICION_CUY = item.FECHA_EXPEDICION_CUY;
                        hn.ADICIONES_EXCLUSIONES = item.ADICIONES_EXCLUSIONES;
                        hn.SUBSIDIO = item.SUBSIDIO;
                        hn.GARAJE = item.GARAJE;
                       /// hn.SALDO_FINANCIAR = item.SALDO_FINANCIAR;
                        hn.VALOR_SERVICIOGAS = item.VALOR_SERVICIOGAS;
                        hn.INTERESES_SUBROGACION = item.INTERESES_SUBROGACION;
                        hn.AUT_MENSAJE = item.AUT_MENSAJE;
                        hn.AUT_CORREO = item.AUT_CORREO;
                        linE.Add(hn);
                   }
                   return linE;
               }
  
           }
           catch (Exception)
           {
               return null;
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
        protected void Acuerdopagogas(List<acuerdo_pago_banco> a, string negocio)
        {
            try
            {
                foreach (var item in a)
                {
                    acuerdo_pago_banco pago = new acuerdo_pago_banco();
                    pago.NO_ACUERDO = negocio;
                    pago.FECHA_PAGO = item.FECHA_PAGO;
                    pago.CUOTA = item.CUOTA;
                    pago.VALOR_CUOTA = item.VALOR_CUOTA;
                    bd.acuerdo_pago_banco.Add(pago);
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
               ctx.INMUESTADO = "5";
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       protected void UpdateSepracion(int? idseparacion)
       {
           try
           {
               var ctx = bd.inmueble_separacion.First(t=> t.ID_SEPARACION == idseparacion);
               ctx.ESTADO = "C";
               bd.SaveChanges();
           }
           catch (Exception)
           {
               
               throw;
           }
       }

       public int UpdateUsuarioCartera(int inm,string usuario)
       {
           try
           {
               var ctx = bd.negocio.First(t => t.ID_HOJA == inm);
               ctx.USER_CARTERA = usuario;
               int result= bd.SaveChanges();
               if (result > 0)
               {
                   return 1;
               }
               else {

                   return 0;
               }
              
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
               him.INMUEBLE= inm;
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

       public static void HistorialInmuDescripcion(string c, string inm, string desc)
       {
           try
           {
               historial_inmueble him = new historial_inmueble();
               him.CLIENTE = c;
               him.INMUEBLE = inm;
               him.FECHA = DateTime.Now;
               him.DESCRIPCION_S = desc +" " + inm;
               bd.historial_inmueble.Add(him);
               bd.SaveChanges();
           }
           catch (Exception)
           {

               throw;
           }
       }

       /// <summary>
       /// Metodo para insertar el historial por cliente y su descripcion
       /// </summary>
       /// <param name="c">este es el parametro del cliente</param>
       /// <param name="inmu">este es el parametro del inmueble</param>
       public static void HistorialClienteDescripcion(string c, string inmu,string desc)
       {
           try
           {
               user = Membership.GetUser().ToString();
               historial_clientes hc = new historial_clientes();
               hc.CLIENTEH = c;
               hc.TRABAJADOR = user;
               hc.FECHA = DateTime.Now;
               hc.DESCRIPCIONH = desc+" " + inmu;
               bd.historial_clientes.Add(hc);
               bd.SaveChanges();
           }
           catch (Exception)
           {

               throw;
           }
       }
       /// <summary>
       /// Metodo para insertar el historial por cliente
       /// </summary>
       /// <param name="c">este es el parametro del cliente</param>
       /// <param name="inmu">este es el parametro del inmueble</param>
       public static void HistorialCliente(string c, string inmu)
       {
           try
           {   
               user = Membership.GetUser().ToString();
               historial_clientes hc = new historial_clientes();
               hc.CLIENTEH = c;
               hc.TRABAJADOR = user;
               hc.FECHA = DateTime.Now;
               hc.DESCRIPCIONH="El cliente a inicado el proceso de compra del inmueble "+inmu;
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
      /*  public List<Entiacuerdo_pagosg> Lisacuerdopg(string acp)
        {
            try
            {
                List<acuerdo_pago_banco> lacp = bd.acuerdo_pago_banco.Where(p => p.NO_ACUERDO == acp).ToList();
                List<Entiacuerdo_pagosg> acuerdo = new List<Entiacuerdo_pagosg>();
                foreach (var item in lacp)
                {
                    Entiacuerdo_pagosg ac = new Entiacuerdo_pagosg();
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
        }*/

        public List<Entiacuerdo_pago> Lisacuerdopgas(string acp)
        {
            try
            {
                List<acuerdo_pago_banco> lacp = bd.acuerdo_pago_banco.Where(p => p.NO_ACUERDO == acp).ToList();
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
        public string Updatenegocio(negocio n, string inm, List<acuerdo_pago> ac, List<acuerdo_pago_banco> acg)
        {
            try
            {
                var ctx = bd.negocio.First(t => t.ID_NEGOCIO == n.ID_NEGOCIO);
              
                //ctx.FECHA_NEGOCIO = n.FECHA_NEGOCIO;
                ctx.PROPIETARIO = n.PROPIETARIO;
                ctx.CEDULA_P = n.CEDULA_P;
                ctx.EXPEDICION = n.EXPEDICION;
                ctx.ESTADO_C = n.ESTADO_C;
                ctx.FECHA_NACI = n.FECHA_NACI;
                ctx.LUGAR = n.LUGAR;
                ctx.DIRECCION_R = n.DIRECCION_R;
                ctx.TELEFONO_P = n.TELEFONO_P;
                ctx.EMPRESA = n.EMPRESA;
                ctx.TELFONO_EMP = n.TELFONO_EMP;
                ctx.CARGO = n.CARGO;
                ctx.PROFESION = n.PROFESION;
                ctx.DIRECCION_EMPR = n.DIRECCION_EMPR;
                ctx.ANTIGUEDAD = n.ANTIGUEDAD;
                ctx.CORREO = n.CORREO;
                ctx.NOMBRE_CONY = n.NOMBRE_CONY;
                ctx.CEDULA_CUY = n.CEDULA_CUY;
                ctx.TELE_CONY = n.TELE_CONY;
                ctx.N_HIJO = n.N_HIJO;
                ctx.INTERES_COM = n.INTERES_COM;
                ctx.VALOR_CASA = n.VALOR_CASA;
                ctx.INICIAL = n.INICIAL;
                ctx.CREDITO = n.CREDITO;
                ctx.BANCO = n.BANCO;
                ctx.NO_CREDITO = n.NO_CREDITO;
                ctx.FECHA_ES = n.FECHA_ES;
                ctx.FECHA_ENT = n.FECHA_ENT;
                ctx.FECHA_SUBRO = n.FECHA_SUBRO;
                ctx.ASESOR_INFO = n.ASESOR_INFO;
                ctx.MEDIO_ENT = n.MEDIO_ENT;
                ctx.ASOCIADO = n.ASOCIADO;
                ctx.CLASE_INMU = n.CLASE_INMU;
                ctx.SEPARACION = n.SEPARACION;
                ctx.USER_CARTERA = n.USER_CARTERA;
                ctx.INGRESO = n.INGRESO;
                ctx.PARQUEADERO = n.PARQUEADERO;
                ctx.AREAS_COMUNES = n.AREAS_COMUNES;
                ctx.AREA_PRIVADA = n.AREA_PRIVADA;
                ctx.AREA_CONSTRUIDA = n.AREA_CONSTRUIDA;
                ctx.TIPO_DOCUMENTO_CONY = n.TIPO_DOCUMENTO_CONY;
                ctx.LUGAR_EXPEDICION = n.LUGAR_EXPEDICION;
                ctx.FECHA_EXPEDICION_CUY = n.FECHA_EXPEDICION_CUY;
                ctx.ADICIONES_EXCLUSIONES = n.ADICIONES_EXCLUSIONES;
                ctx.SUBSIDIO = n.SUBSIDIO;
                ctx.GARAJE = n.GARAJE;
                //ctx.SALDO_FINANCIAR = n.SALDO_FINANCIAR;
                ctx.VALOR_SERVICIOGAS = n.VALOR_SERVICIOGAS;
                ctx.INTERESES_SUBROGACION = n.INTERESES_SUBROGACION;
                ctx.AUT_MENSAJE = n.AUT_MENSAJE;
                ctx.AUT_CORREO = n.AUT_CORREO;
                ctx.OBSERVACIONES = n.OBSERVACIONES;
                ctx.DESCUENTO = n.DESCUENTO;
                ctx.DOMICILIO = n.DOMICILIO;
                bd.SaveChanges();
                AcuerdopagoUpdate(ac, n.ID_NEGOCIO);
                AcuerdopagoUpdateGas(acg, n.ID_NEGOCIO);
                return "1";

               
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void AcuerdopagoUpdate(List<acuerdo_pago> a, string negocio)
        {
            try
            {
                DeleteAcuerdopago(negocio);
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
        public int DeleteAcuerdopago(string negocio)
        {

            try
            {
                var ctx = bd.acuerdo_pago.Where(inm => inm.NO_ACUERDO == negocio);
                    
                bd.acuerdo_pago.RemoveRange(ctx);
                bd.SaveChanges();
                return 1;

            }
            catch (Exception)
            {
                throw;
            }
        }

        protected void AcuerdopagoUpdateGas(List<acuerdo_pago_banco> a, string negocio)
        {
            try
            {
                DeleteAcuerdopagoGas(negocio);
                foreach (var item in a)
                {

                    acuerdo_pago_banco pago = new acuerdo_pago_banco();
                    pago.NO_ACUERDO = negocio;
                    pago.FECHA_PAGO = item.FECHA_PAGO;
                    pago.CUOTA = item.CUOTA;
                    pago.VALOR_CUOTA = item.VALOR_CUOTA;
                    bd.acuerdo_pago_banco.Add(pago);
                }
                bd.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
        public int DeleteAcuerdopagoGas(string negocio)
        {

            try
            {
                var ctx = bd.acuerdo_pago_banco.Where(inm => inm.NO_ACUERDO == negocio);

                bd.acuerdo_pago_banco.RemoveRange(ctx);
                bd.SaveChanges();
                return 1;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
     
}
