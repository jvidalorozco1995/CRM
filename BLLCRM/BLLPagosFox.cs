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
         public int Pagos(List<PagosFox> PagosFOX)
         {
            try
            {
                var NegocioCRM = bd.negocio_fox.ToList();
                var c = bd.pagos_fox.RemoveRange(bd.pagos_fox.ToList());
                foreach (var item in NegocioCRM)
                {
                    foreach (var pago in PagosFOX.Where(t => t.Referencia1 == item.SUCURSAL + item.NEGOCIO))
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
            finally {
         
            }

            return 1;
        }
        
    }
}
