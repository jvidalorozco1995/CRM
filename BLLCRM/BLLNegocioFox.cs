using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLNegocioFox
    {
        CRMEntiti bd = new CRMEntiti();
        private string resul;
        private string user = null;


        public int ActualizarDocumentoAdj(string CodCRM,string Documento) {

            try
            {
                var item = bd.negocio.Where(t => t.CODIGO_F == CodCRM).FirstOrDefault();
                item.DOCUMENTO = Documento;
                bd.SaveChanges();

                return 1;
            }
            catch (Exception ex) {

                return 0;
            }

        }

        public List<negocio_fox> NegociosFoxCRM()
        {
            List<negocio_fox> list = bd.negocio_fox.ToList();

            return list;
        }

        public List<VnegocioFox> ListHojas()
        {
            List<VnegocioFox> list = bd.VnegocioFox.ToList();

            return list;
        }

        public List<VnegocioFox> ListaNegocioID(string nego)
        {
            List<VnegocioFox> list = bd.VnegocioFox.Where(T=>T.NEGOCIO== nego).ToList();

            return list;
        }

        /// <summary>
        /// Metodo para alamacenar hoja de negocio en el sistema
        /// </summary>
        /// <param name="n"></param>
        /// <param name="inm"></param>
        /// <param name="ac"></param>
        /// <returns></returns>
        public string Hojanegocio(List<NegociosFox> NegocioFOX)
        {
           
                var NegocioCRM = bd.negocio.ToList();
                foreach (var item in NegocioCRM)
                {
                    //&& t.DESISTIDO == "False"
                    var negociocrmVSnegociofox = NegocioFOX.Where(t => t.CODIGOCRM == item.CODIGO_F.Trim() ).ToList();

                    if (negociocrmVSnegociofox.Count != 0)
                    {

                        foreach (var item2 in negociocrmVSnegociofox)
                        {
                           //Hago la consulta y comparo si el negocio ya esta insertado
                            var vimp = bd.negocio_fox.Where(t => t.NEGOCIO == item2.NEGOCIO.Trim()).ToList();
                           
                            //Compruebo si es mayor a 0
                            //si el negocio no existe insertelo, de lo contrario lo actualizamos 
                            if (vimp.Count == 0)
                            {
                                try
                                {
                                    negocio_fox Vim = new negocio_fox();
                                    Vim.SUCURSAL = item2.SUCURSAL;
                                    Vim.PROYECTO = item2.PROYECTO;
                                    Vim.PPTO = item2.PPTO;
                                    Vim.BLOQUE = item2.BLOQUE;
                                    Vim.NOMBREBLOQUE = item2.NOMBREBLOQUE;
                                    Vim.NEGOCIO = item2.NEGOCIO;
                                    Vim.NOMBRECLIENTE = item2.NOMBRECLIENTE;
                                    Vim.FECHANEGOCIO = item2.FECHANEGOCIO;
                                    Vim.VLRNEGOCIO = item2.VLRNEGOCIO;
                                    Vim.OBSERVACION = item2.OBSERVACION;
                                    Vim.VLRSUBSIDIO = item2.VLRSUBSIDIO;
                                    Vim.DESISTIDO = item2.DESISTIDO;
                                    Vim.FECHADESISTIDO = item2.FECHADESISTIDO;
                                    Vim.USUARIO = item2.USUARIO;
                                    Vim.FECHACREACION = item2.FECHACREACION;
                                    Vim.CODIGOVENDEDORA = item2.CODIGOVENDEDORA;
                                    Vim.GASTOSNOTARIALES = item2.GASTOSNOTARIALES;
                                    Vim.ESCRITURADO = item2.ESCRITURADO;
                                    Vim.SUBROGACION = item2.SUBROGACION;
                                    Vim.ORDENPEDIDO = item2.ORDENPEDIDO;
                                    Vim.VLRINICIALCUOTA = item2.VLRINICIALCUOTA;
                                    Vim.VLRCREDITO = item2.VLRCREDITO;
                                    Vim.CODIGOCRM = item2.CODIGOCRM;
                                    Vim.OBSERVACIONDESISTIMIENTO = item2.OBSERVACIONESDESISTIMIENTO;
                                    Vim.DESCUENTOSFINANCIEROS = item2.DESCUENTOSFINANCIEROS;
                                    Vim.VLRDIRECTOCREDITO = item2.VLRDIRECTOCREDITO;
                                    Vim.VLRARRAS = item2.VLRRARRAS;
                                    Vim.TIPOCONTRATO = item2.TIPOCONTRATO;
                                    Vim.CAUSADESISTIMIENTO = item2.CAUSADESISTIMIENTO;
                                    Vim.VLRDEVUELTOCLIENTE = item2.VLRDEVUELTOCLIENTE;
                                    Vim.NEGOCIOCEDIDO = item2.NEGOCIOCEDIDO;
                                    Vim.FECHADECESION = item2.FECHADECESION;
                                    Vim.NUEVOPEDIDOCEDIDO = item2.NUEVOPEDIDOCEDIDO;
                                    Vim.VIENEDESECION = item2.VIENEDESECION;
                                    Vim.PEDIDODEDONDESECEDIO = item2.PEDIDODEDONDESECEDIO;
                                    Vim.AUTORIZADOAESCRITURAR = item2.AUTORIZADOAESCRITURAR;
                                    Vim.AUTORIZADOAESCRITURARNOTARIA = item2.AUTORIZADOAESCRITURARNOTARIA;
                                    Vim.SALDOPORPAGARDELACUOTAINICIAL = item2.SALDOPORPAGARDELACUOTAINICIAL;
                                    Vim.CODIGOINMUEBLE = item2.CODIGOINMUEBLE;
                                    bd.negocio_fox.Add(Vim);
                                    bd.SaveChanges();
                                }
                                catch (DbEntityValidationException e)
                                {
                                     // Get stack trace for the exception with source file information
                                    var st = new StackTrace(e, true);
                                    // Get the top stack frame
                                    var frame = st.GetFrame(0);
                                    // Get the line number from the stack frame
                                    var line = frame.GetFileLineNumber();

                                    return "Excepción negocios" + e.ToString() +"\nLinea: "+line;
                                }

                            }
                            else
                            {
                                try
                                {
                                    ///HISTORIAL QUE GUARDA, DEPENDIENDO DE SI EL NEGOCIO FUE DESISTIDO.
                                       Historial(vimp);
                                    //-----------------------------------------------------------------//
                                    int Cant = 0;

                                    if (vimp.First().SUCURSAL != item2.SUCURSAL) { vimp.First().SUCURSAL = item2.SUCURSAL; Cant++; }
                                    if (vimp.First().PROYECTO != item2.PROYECTO) { vimp.First().PROYECTO = item2.PROYECTO; Cant++; }
                                    if (vimp.First().PPTO != item2.PPTO) { vimp.First().PPTO = item2.PPTO; Cant++; }
                                    if (vimp.First().CODICLIENTE != item2.CODICLIENTE) { vimp.First().CODICLIENTE = item2.CODICLIENTE; Cant++; }
                                    if (vimp.First().BLOQUE != item2.BLOQUE) { vimp.First().BLOQUE = item2.BLOQUE; Cant++; }
                                    if (vimp.First().NOMBREBLOQUE != item2.NOMBREBLOQUE) { vimp.First().NOMBREBLOQUE = item2.NOMBREBLOQUE; Cant++; }
                                    if (vimp.First().NEGOCIO != item2.NEGOCIO) { vimp.First().NEGOCIO = item2.NEGOCIO; Cant++; }
                                    if (vimp.First().NOMBRECLIENTE != item2.NOMBRECLIENTE) { vimp.First().NOMBRECLIENTE = item2.NOMBRECLIENTE; Cant++; }
                                    if (vimp.First().FECHANEGOCIO != item2.FECHANEGOCIO) { vimp.First().FECHANEGOCIO = item2.FECHANEGOCIO; Cant++; }
                                    if (vimp.First().VLRNEGOCIO != item2.VLRNEGOCIO) { vimp.First().VLRNEGOCIO = item2.VLRNEGOCIO; Cant++; }
                                    if (vimp.First().OBSERVACION != item2.OBSERVACION) { vimp.First().OBSERVACION = item2.OBSERVACION; Cant++; }
                                    if (vimp.First().VLRSUBSIDIO != item2.VLRSUBSIDIO) { vimp.First().VLRSUBSIDIO = item2.VLRSUBSIDIO; Cant++; }
                                    if (vimp.First().DESISTIDO != item2.DESISTIDO) { vimp.First().DESISTIDO = item2.DESISTIDO; Cant++; }
                                    if (vimp.First().FECHADESISTIDO != item2.FECHADESISTIDO) { vimp.First().FECHADESISTIDO = item2.FECHADESISTIDO; Cant++; }
                                    if (vimp.First().USUARIO != item2.USUARIO) { vimp.First().USUARIO = item2.USUARIO; Cant++; }
                                    if (vimp.First().FECHACREACION != item2.FECHACREACION) { vimp.First().FECHACREACION = item2.FECHACREACION; Cant++; }
                                    if (vimp.First().CODIGOVENDEDORA != item2.CODIGOVENDEDORA) { vimp.First().CODIGOVENDEDORA = item2.CODIGOVENDEDORA; Cant++; }
                                    if (vimp.First().GASTOSNOTARIALES != item2.GASTOSNOTARIALES) { vimp.First().GASTOSNOTARIALES = item2.GASTOSNOTARIALES; Cant++; }
                                    if (vimp.First().ESCRITURADO != item2.ESCRITURADO) { vimp.First().ESCRITURADO = item2.ESCRITURADO; Cant++; }
                                    if (vimp.First().SUBROGACION != item2.SUBROGACION) { vimp.First().SUBROGACION = item2.SUBROGACION; Cant++; }
                                    if (vimp.First().ORDENPEDIDO != item2.ORDENPEDIDO) { vimp.First().ORDENPEDIDO = item2.ORDENPEDIDO; Cant++; }
                                    if (vimp.First().VLRINICIALCUOTA != item2.VLRINICIALCUOTA) { vimp.First().VLRINICIALCUOTA = item2.VLRINICIALCUOTA; Cant++; }
                                    if (vimp.First().VLRCREDITO != item2.VLRCREDITO) { vimp.First().VLRCREDITO = item2.VLRCREDITO; Cant++; }
                                    if (vimp.First().CODIGOCRM != item2.CODIGOCRM) { vimp.First().CODIGOCRM = item2.CODIGOCRM; Cant++; }
                                    if (vimp.First().OBSERVACIONDESISTIMIENTO != item2.OBSERVACIONESDESISTIMIENTO) { vimp.First().OBSERVACIONDESISTIMIENTO = item2.OBSERVACIONESDESISTIMIENTO; Cant++; }
                                    if (vimp.First().DESCUENTOSFINANCIEROS != item2.DESCUENTOSFINANCIEROS) { vimp.First().DESCUENTOSFINANCIEROS = item2.DESCUENTOSFINANCIEROS; Cant++; }
                                    if (vimp.First().VLRDIRECTOCREDITO != item2.VLRDIRECTOCREDITO) { vimp.First().VLRDIRECTOCREDITO = item2.VLRDIRECTOCREDITO; Cant++; }
                                    if (vimp.First().VLRARRAS != item2.VLRRARRAS) { vimp.First().VLRARRAS = item2.VLRRARRAS; Cant++; }
                                    if (vimp.First().TIPOCONTRATO != item2.TIPOCONTRATO) { vimp.First().TIPOCONTRATO = item2.TIPOCONTRATO; Cant++; }
                                    if (vimp.First().CAUSADESISTIMIENTO != item2.CAUSADESISTIMIENTO) { vimp.First().CAUSADESISTIMIENTO = item2.CAUSADESISTIMIENTO; Cant++; }
                                    if (vimp.First().VLRDEVUELTOCLIENTE != item2.VLRDEVUELTOCLIENTE) { vimp.First().VLRDEVUELTOCLIENTE = item2.VLRDEVUELTOCLIENTE; Cant++; }
                                    if (vimp.First().NEGOCIOCEDIDO != item2.NEGOCIOCEDIDO) { vimp.First().NEGOCIOCEDIDO = item2.NEGOCIOCEDIDO; Cant++; }
                                    if (vimp.First().FECHADECESION != item2.FECHADECESION) { vimp.First().FECHADECESION = item2.FECHADECESION; Cant++; }
                                    if (vimp.First().NUEVOPEDIDOCEDIDO != item2.NUEVOPEDIDOCEDIDO) { vimp.First().NUEVOPEDIDOCEDIDO = item2.NUEVOPEDIDOCEDIDO; Cant++; }
                                    if (vimp.First().VIENEDESECION != item2.VIENEDESECION) { vimp.First().VIENEDESECION = item2.VIENEDESECION; Cant++; }
                                    if (vimp.First().PEDIDODEDONDESECEDIO != item2.PEDIDODEDONDESECEDIO) { vimp.First().PEDIDODEDONDESECEDIO = item2.PEDIDODEDONDESECEDIO; Cant++; }
                                    if (vimp.First().AUTORIZADOAESCRITURAR != item2.AUTORIZADOAESCRITURAR) { vimp.First().AUTORIZADOAESCRITURAR = item2.AUTORIZADOAESCRITURAR; Cant++; }
                                    if (vimp.First().AUTORIZADOAESCRITURARNOTARIA != item2.AUTORIZADOAESCRITURARNOTARIA) { vimp.First().AUTORIZADOAESCRITURARNOTARIA = item2.AUTORIZADOAESCRITURARNOTARIA; Cant++; }
                                    if (vimp.First().SALDOPORPAGARDELACUOTAINICIAL != item2.SALDOPORPAGARDELACUOTAINICIAL) { vimp.First().SALDOPORPAGARDELACUOTAINICIAL = item2.SALDOPORPAGARDELACUOTAINICIAL; Cant++; }
                                    if (vimp.First().CODIGOINMUEBLE != item2.CODIGOINMUEBLE) { vimp.First().CODIGOINMUEBLE = item2.CODIGOINMUEBLE; Cant++; }
                                    if (Cant > 0) { bd.SaveChanges(); }

                                }

                                catch (DbEntityValidationException e)
                                {
                                    // Get stack trace for the exception with source file information
                                    var st = new StackTrace(e, true);
                                    // Get the top stack frame
                                    var frame = st.GetFrame(0);
                                    // Obtiene la linea del error
                                    var line = frame.GetFileLineNumber();

                                    return "Excepción negocios" + e.ToString() + "\nLinea: " + line;
                                }
                            }

                        }
                    }
                    else {
                        ///ELIMINAR LO QUE ESTE EN CRM PERO QUE EN FOX NO ESTE
                        try
                        {
                            var NegFox = bd.negocio_fox.Where(t => t.CODIGOCRM == item.CODIGO_F).ToList();
                            bd.negocio_fox.RemoveRange(NegFox);
                            bd.SaveChanges();
                        }
                        catch (Exception ex) {

                            // Get stack trace for the exception with source file information
                            var st = new StackTrace(ex, true);
                            // Get the top stack frame
                            var frame = st.GetFrame(0);
                            // Obtiene la linea del error
                            var line = frame.GetFileLineNumber();

                            return "Excepción negocios" + ex.ToString() + "\nLinea: " + line;
                        }
                                                                                
                    }
                }
                return "1";
             }




        /// <summary>
        /// Obtiene un negocio para poder insertar el historial de ese negocio
        /// </summary>
        /// <param name="vimp"></param>
        public void Historial(List<negocio_fox> vimp) {
           
            //Si el negocio esta desistido entonces creamos un historial
            if (vimp.First().DESISTIDO.Equals("True"))
            {
                var Inmueble = vimp.First().CODIGOINMUEBLE;
                var Cliente = vimp.First().CODICLIENTE;
                var Descripcion = "El cliente ha desistido del negocio con el inmueble " + Inmueble;

                //Insertar el historial del negocio
                if (bd.historial_clientes.Where(t => t.DESCRIPCIONH.Contains(Inmueble)).Count() <= 0)  { BLLnegocio.HistorialClienteDescripcion(Cliente, Inmueble, Descripcion); }
                //Insertar el historial del inmueble
                if (bd.historial_inmueble.Where(t => t.DESCRIPCION_S.Contains(Inmueble)).Count() <= 0) { BLLnegocio.HistorialInmuDescripcion(Cliente, Inmueble, Descripcion);    }
             }

        }
        
        /// <summary>
        /// Parses a date string and returns
        /// a DateTime if it is a valid date,
        /// if not returns DBNull.Value
        /// </summary>
        /// <param name="date">Date string</param>
        /// <returns>DateTime or DBNull.Value</returns>
        public static object CreateDBDateTime(string date)
        {
            DateTime result;
            if (DateTime.TryParse(date, out result))
            {
                return result;
            }
            return DBNull.Value;
        }


    }
}
