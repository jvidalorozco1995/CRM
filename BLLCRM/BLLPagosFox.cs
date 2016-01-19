using DAL;
using Entity;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.VsFox;
using System.Data.Entity.Validation;
using System.Diagnostics;

namespace BLLCRM
{
    public class BLLPagosFox
    {

        CRMEntiti bd = new CRMEntiti();
        private string resul;
        private string user = null;
         /// <summary>
         /// Metodo que inserta los pagos en SQL SERVER
         /// </summary>
         /// <param name="NegocioFOX"></param>
         /// <returns></returns>
         public string Pagos(List<PagosFox> PagosFOX)
         {
            try
            {
                var NegocioCRM = bd.negocio_fox.ToList();
                var c = bd.pagos_fox.RemoveRange(bd.pagos_fox.ToList());
                foreach (var item in NegocioCRM)
                {
                    foreach (var pago in PagosFOX.Where(t => t.Referencia1 == item.SUCURSAL + item.NEGOCIO))
                    {
                        if (pago != null)
                        {
                            pagos_fox pag = new pagos_fox();
                            pag.Referencia1 = pago.Referencia1;
                            pag.Obra = pago.Obra;
                            pag.Codterc = pago.Codterc;
                            pag.Nit = pago.Nit;
                            pag.Recibo = pago.Recibo;
                            pag.Nrecibo = pago.Nrecibo;
                            pag.Estado = pago.Estado;
                            pag.Fecharecibo = pago.Fecharecibo;
                            pag.Concepto = pago.Concepto;
                            pag.Vlrrecibo = pago.Vlrrecibo;
                            pag.Nconsignacion = pago.Nconsignacion;
                            pag.Fechaconsignacion = pago.Fechaconsignacion;
                            pag.Vlrcuotaaplicado = pago.Vlrcuotaaplicado;
                            pag.Detallecuota = pago.Detallecuota;
                            pag.Usuario = pago.Usuario;
                            pag.Fechaelaboracion = pago.Fechaelaboracion;
                            pag.Ncheque = pago.Ncheque;
                            pag.Nota = pago.Nota;
                            bd.pagos_fox.Add(pag);
                            bd.SaveChanges();
                        }
                      
                    }
                   


                }
            }
            catch (DbEntityValidationException e)
            {
                /*foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;*/

                // Get stack trace for the exception with source file information
                var st = new StackTrace(e, true);
                // Get the top stack frame
                var frame = st.GetFrame(0);
                // Get the line number from the stack frame
                var line = frame.GetFileLineNumber();

                return "Excepción pagos" + e.ToString() + "\nLinea: " + line;
            }
            finally {
         
            }

            return "1";
        }



         public List<pagos_fox> PagosNegocio(string referencia)
         {
             try
             {
                 List<pagos_fox> pag = bd.pagos_fox.Where(t=>t.Referencia1 == referencia).ToList();
                 return pag;
             }
             catch (DbEntityValidationException e)
             {
                 foreach (var eve in e.EntityValidationErrors)
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
             finally
             {

             }

             return null;
         }
        
    }
}
