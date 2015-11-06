using Entity;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Odbc;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DAL
{
    public class ConecFox
    {
        private string ConectionString = null;
        public string messageError;
        static string cadena;

        //Retorna una lista de negocios de Multi-Fox
        public List<NegociosFox> ConsulNegocio()
        {

            try
            {
               //https://www.youtube.com/watch?v=Je5hCCBFXMA min 8:13
                List<NegociosFox> litNe = new List<NegociosFox>();
                ConectionString = GetConnectionString();
                OdbcConnection objcon = new OdbcConnection(ConectionString);
                objcon.Open();

                cadena ="SELECT pedidos.pedisucu, obraspr.obranomb, pedidos.pedipres, bloques.bloqcodi, bloques.bloqdesc,"
                + "pedidos.pedisucu+pedidos.pedipres+pedidet.dipeinmu AS 'CODINMUEBLE', pedidos.pedinume, pedidos.pediclie, tercero.tercnomb, pedidos.pedifech, pedidos.pedivalo, pedidos.pediobse, pedidos.pedisubs, pedidos.pedidesi, pedidos.pedifdes, pedidos.pediusua, pedidos.pedidate," 
                +" pedidos.pedivend, pedidos.pedigast, pedidos.pediescr, pedidos.pedisubr, pedidos.pedipedi, pedidos.pediinic," 
                +" pedidos.pedicred, pedidos.pedidocu, pedidos.pediobs1, pedidos.pedidesc, pedidos.pedidire, pedidos.pediarra,"
                +" pedidos.peditipo, pedidos.pedicaus, pedidos.pedidevo, pedidos.pedicesi, pedidos.pedifces, pedidos.pedipces,"
                +" pedidos.pedivces, pedidos.pedivped, pedidos.pediaesc, pedidos.pedianot, pedidos.pedisldi"
                +" FROM bloques bloques, obraspr obraspr, pedidet pedidet, pedidos pedidos, tercero tercero"
                + " WHERE pedidos.pedisucu = obraspr.obracodi AND pedidos.pediclie = tercero.terccodi AND pedidos.pedinume = pedidet.dipenume AND pedidos.pedisucu = pedidet.dipesucu AND (((pedidos.pedisucu+pedidos.pedipres)=bloques.bloqobra))";
                //AND (pedidos.pedidocu= '" + CodigoCRM + "')

           /*     cadena = "SELECT contven.contsucu+contven.contpres+contven.contpedi AS 'referencia', contven.contsucu+contven.contpedi AS 'referencia1',"
                + " contven.contsucu AS 'suc', obraspr.obranomb AS 'nombreproyecto', contven.contpres"
                + " AS 'ppto', obradet.obrdnomb AS 'nombremanzana', right(pedidet.dipeinmu,5) AS 'inmueble',"
                + " contven.contpedi AS 'negocio', pedidos.pedifech AS 'fechanegocio',tercero.tercnitc AS 'cedula',tercero.tercnomb AS 'nombrecliente',"
                + " tercero.terccelu AS 'celular', tercero.terctele AS 'telffijo',"
                + " contven.contpago AS 'concepto', contven.contfech AS 'fechacuota', LEFT(contven.contfech,4) AS 'anio',"
                + " RIGHT(LEFT(contven.contfech,6),2) AS 'mes', RIGHT(contven.contfech,2) AS 'dia', "
                + " contven.conttran AS 'vlrcuota', contven.contpaga AS 'pagocuota',"
                + " contven.conttran-contven.contpaga AS 'saldoxcobrar',"
                + " (RIGHT(contven.contfech,2)+'/'+RIGHT(LEFT(contven.contfech,6),2)+'/'+LEFT(contven.contfech,4)) AS 'fechaCartera'"
                + " , pedidos.pediescr AS 'Escriturado', pedidos.pedidocu AS 'CodCRM', contven.contsucu"
                + " FROM contven contven, obradet obradet, obraspr obraspr, pedidet pedidet, pedidos pedidos, tercero tercero"
                + " WHERE pedidet.dipenume = pedidos.pedinume AND pedidet.dipesucu = pedidos.pedisucu"
                + " AND pedidet.dipepres = pedidos.pedipres AND pedidos.pedisucu = contven.contsucu"
                + " AND pedidos.pedipres = contven.contpres AND pedidos.pedinume = contven.contpedi"
                + " AND obradet.obrdcodi = obraspr.obracodi AND contven.contsucu = obraspr.obracodi AND"
                + " obradet.obrdpres = contven.contpres AND pedidos.pediclie = tercero.terccodi"
                + " AND ((pedidet.dipedesi<>1) AND (pedidos.pedidocu= '" + CodigoCRM + "'))";*/
                OdbcDataAdapter daNegociofox = new OdbcDataAdapter(cadena, objcon);
                DataSet dsproyectofox = new DataSet("Pubs2");
                //daNegociofox.FillSchema(dsproyectofox, SchemaType.Source, "NEGOCIOS_FOX");
                daNegociofox.Fill(dsproyectofox, "NEGOCIOS_FOX");
                DataTable tbproyectosfox = new DataTable();
                tbproyectosfox = dsproyectofox.Tables["NEGOCIOS_FOX"];
                if (tbproyectosfox.Columns.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (DataRow row2 in tbproyectosfox.Rows)
                    {
                        NegociosFox Pfx = new NegociosFox();

                        Pfx.SUCURSAL = row2["pedisucu"].ToString().Trim();
                        Pfx.PROYECTO = row2["obranomb"].ToString().Trim();
                        Pfx.PPTO = row2["pedipres"].ToString().Trim();
                        Pfx.BLOQUE = row2["bloqcodi"].ToString().Trim();
                        Pfx.NOMBREBLOQUE = row2["bloqdesc"].ToString().Trim();
                        Pfx.NEGOCIO = row2["pedinume"].ToString().Trim();
                        Pfx.CODICLIENTE = row2["pediclie"].ToString().Trim();
                        Pfx.NOMBRECLIENTE = row2["tercnomb"].ToString().Trim();
                        Pfx.FECHANEGOCIO = row2["pedifech"].ToString().Trim();
                        Pfx.VLRNEGOCIO = decimal.Parse(row2["pedivalo"].ToString().Trim());
                        Pfx.OBSERVACION = row2["pediobse"].ToString().Trim();
                        Pfx.VLRSUBSIDIO = decimal.Parse(row2["pedisubs"].ToString().Trim());
                        Pfx.DESISTIDO = row2["pedidesi"].ToString().Trim();
                        Pfx.FECHADESISTIDO = row2["pedifdes"].ToString().Trim();
                        Pfx.USUARIO = row2["pediusua"].ToString().Trim();
                        Pfx.FECHACREACION = row2["pedidate"].ToString().Trim();
                        Pfx.CODIGOVENDEDORA = row2["pedivend"].ToString().Trim();
                        Pfx.GASTOSNOTARIALES = row2["pedigast"].ToString().Trim();
                        Pfx.ESCRITURADO = row2["pediescr"].ToString().Trim();
                        Pfx.SUBROGACION = row2["pedisubr"].ToString().Trim();
                        Pfx.ORDENPEDIDO = row2["pedipedi"].ToString().Trim();
                        Pfx.VLRINICIALCUOTA = decimal.Parse(row2["pediinic"].ToString().Trim());
                        Pfx.VLRCREDITO = decimal.Parse(row2["pedicred"].ToString().Trim());
                        Pfx.CODIGOCRM = row2["pedidocu"].ToString().Trim();
                        Pfx.OBSERVACIONESDESISTIMIENTO = row2["pediobs1"].ToString().Trim();
                        Pfx.DESCUENTOSFINANCIEROS = row2["pedidesc"].ToString().Trim();
                        Pfx.VLRDIRECTOCREDITO = decimal.Parse(row2["pedidire"].ToString().Trim());
                        Pfx.VLRRARRAS = decimal.Parse(row2["pediarra"].ToString().Trim());
                        Pfx.TIPOCONTRATO = row2["peditipo"].ToString().Trim();
                        Pfx.CAUSADESISTIMIENTO = row2["pedicaus"].ToString().Trim();
                        Pfx.VLRDEVUELTOCLIENTE = decimal.Parse(row2["pedidevo"].ToString().Trim());
                        Pfx.NEGOCIOCEDIDO = row2["pedicesi"].ToString().Trim();
                        Pfx.FECHADECESION = row2["pedifces"].ToString().Trim();
                        Pfx.NUEVOPEDIDOCEDIDO = row2["pedipces"].ToString().Trim();
                        Pfx.VIENEDESECION = row2["pedivces"].ToString().Trim();
                        Pfx.PEDIDODEDONDESECEDIO = row2["pedivped"].ToString().Trim();
                        Pfx.AUTORIZADOAESCRITURAR = row2["pediaesc"].ToString().Trim();
                        Pfx.AUTORIZADOAESCRITURARNOTARIA = row2["pedianot"].ToString().Trim();
                        Pfx.SALDOPORPAGARDELACUOTAINICIAL = row2["pedisldi"].ToString().Trim();
                        Pfx.CODIGOINMUEBLE = row2["CODINMUEBLE"].ToString().Trim();
                        litNe.Add(Pfx);


                    }
                    return litNe;
                }

            }

            catch (OdbcException)
            {
                throw;

            }
            catch (NullReferenceException)
            {
                throw;
            }
            catch (Exception)
            {

                throw;
            }
        
        }


        //Retorna una lista de acuerdos de pagos de Multi-Fox
        public List<AcuerdoFox> ConsulAcuerdoPago() {

            List<AcuerdoFox> litNe = new List<AcuerdoFox>();
            ConectionString = GetConnectionString();
            OdbcConnection objcon = new OdbcConnection(ConectionString);
            objcon.Open();
            string cadena = "SELECT contven.contsucu+contven.contpedi AS 'referencia1', right(pedidet.dipeinmu,5)"
                     + " AS 'inmueble', contven.contpedi AS 'negocio', pedidos.pedifech AS 'fechanegocio', contven.contpago AS 'concepto',"
                     +" contven.contfech AS 'fechacuota', LEFT(contven.contfech,4) AS 'ano', RIGHT(LEFT(contven.contfech,6),2) AS 'mes', "
                     +" RIGHT(contven.contfech,2) AS 'dia', contven.conttran AS 'vlrcuota', contven.contpaga AS 'pagocuota', "
                     +" contven.conttran-contven.contpaga AS 'saldoxcobrar', CTOD(RIGHT(LEFT(contven.contfech,6),2)+'/'+RIGHT(contven.contfech,2)+'/'+"
                     +" LEFT(contven.contfech,4)) AS 'fechaCartera', pedidos.pedidocu AS 'CodCRM'"
                     +" FROM contven contven, pedidet pedidet, pedidos pedidos"
                     +" WHERE pedidet.dipenume = pedidos.pedinume AND pedidet.dipesucu = pedidos.pedisucu"
                     +" AND pedidet.dipepres = pedidos.pedipres AND pedidos.pedisucu = contven.contsucu AND pedidos.pedipres = contven.contpres AND pedidos.pedinume = contven.contpedi AND ((pedidet.dipedesi<>1))";
            OdbcDataAdapter daNegociofox = new OdbcDataAdapter(cadena, objcon);
            DataSet dsproyectofox = new DataSet("Pubs2");
            //daNegociofox.FillSchema(dsproyectofox, SchemaType.Source, "NEGOCIOS_FOX");
            daNegociofox.Fill(dsproyectofox, "ACUERDOS_FOX");
            DataTable tbproyectosfox = new DataTable();
            tbproyectosfox = dsproyectofox.Tables["ACUERDOS_FOX"];
            if (tbproyectosfox.Columns.Count.Equals(0))
            {
                return null;
            }
            else
            {
                foreach (DataRow row2 in tbproyectosfox.Rows)
                {
                    AcuerdoFox Pfx = new AcuerdoFox();
                    Pfx.REFERENCIA1 = row2["referencia1"].ToString().Trim();
                    Pfx.INMUEBLE = row2["inmueble"].ToString().Trim();
                    Pfx.NEGOCIO = row2["negocio"].ToString().Trim();
                    Pfx.FECHANEGOCIO = row2["fechanegocio"].ToString().Trim();
                    Pfx.CONCEPTO = row2["concepto"].ToString().Trim();
                    Pfx.FECHACUOTA = row2["fechacuota"].ToString().Trim();
                    Pfx.ANO = row2["ano"].ToString().Trim();
                    Pfx.MES = row2["mes"].ToString().Trim();
                    Pfx.DIA = row2["dia"].ToString().Trim();
                    Pfx.VLRCUOTA = Decimal.Parse(row2["vlrcuota"].ToString());
                    Pfx.PAGOCUOTA = Decimal.Parse(row2["pagocuota"].ToString());
                    Pfx.SALDOXCOBRAR = Decimal.Parse(row2["saldoxcobrar"].ToString());
                    Pfx.FECHACARTERA = row2["fechaCartera"].ToString().Trim();
                    Pfx.CODCRM = row2["CodCRM"].ToString().Trim();
                    litNe.Add(Pfx);


                }
                return litNe;
            }
        



        
        }




        //Retorna la lista de Proyectos Multi-Fox
        public List<ProyecFox> ConsulProyec()
        {
            try
            {
                List<ProyecFox> litP = new List<ProyecFox>();
                ConectionString = GetConnectionString();
                OdbcConnection objcon = new OdbcConnection(ConectionString);
                objcon.Open();
                cadena = "SELECT obraspr.obracodi, obraspr.obranomb FROM obraspr obraspr " +
                "where (obraspr.obracodi NOT IN('999','101','128','131','132','CLH','CAS','AME','134','135')) order by obraspr.obranomb ASC";
                OdbcDataAdapter daProyectofox = new OdbcDataAdapter(cadena, objcon);
                DataSet dsproyectofox = new DataSet("Pubs");
                daProyectofox.FillSchema(dsproyectofox, SchemaType.Source, "OBRAS_FOX");
                daProyectofox.Fill(dsproyectofox, "OBRAS_FOX");
                DataTable tbproyectosfox = new DataTable();
                tbproyectosfox = dsproyectofox.Tables["OBRAS_FOX"];
                if (tbproyectosfox.Columns.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (DataRow row2 in tbproyectosfox.Rows)
                    {
                        ProyecFox Pfx = new ProyecFox();
                        Pfx.ID_PROYEC = row2["obracodi"].ToString();
                        Pfx.NOMBRE_PROYEC = row2["obranomb"].ToString();
                        litP.Add(Pfx);
                    }
                    return litP;
                }
            }
            catch (OdbcException)
            {
                throw;

            }
            catch (NullReferenceException)
            {
                throw;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<BloquesFox> ConsulBoques(string p)
        {
            try
            {
                List<BloquesFox> litB = new List<BloquesFox>();
                ConectionString = GetConnectionString();
                OdbcConnection objcon = new OdbcConnection(ConectionString);
                objcon.Open();
                cadena = "SELECT bloques.bloqobra,bloques.bloqcodi,bloques.bloqdesc FROM bloques bloques WHERE  LEFT(bloques.bloqobra,3)='" + p + "'";
                OdbcDataAdapter daProyectofox = new OdbcDataAdapter(cadena, objcon);
                DataSet dsproyectofox = new DataSet("Pubs");
                daProyectofox.FillSchema(dsproyectofox, SchemaType.Source, "BLOQUE_FOX");
                daProyectofox.Fill(dsproyectofox, "BLOQUE_FOX");
                DataTable tbproyectosfox = new DataTable();
                tbproyectosfox = dsproyectofox.Tables["BLOQUE_FOX"];
                if (tbproyectosfox.Columns.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (DataRow row2 in tbproyectosfox.Rows)
                    {
                        BloquesFox Bfx = new BloquesFox();
                        Bfx.ID_BLOQUE = row2["bloqobra"].ToString();
                        Bfx.PROYECTO_SET = row2["bloqcodi"].ToString();
                        Bfx.NOMBRE_SET = row2["bloqdesc"].ToString();
                        litB.Add(Bfx);
                    }
                    return litB;
                }
            }
            catch (OdbcException)
            {
                throw;

            }
            catch (NullReferenceException)
            {
                throw;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<InmueblesFox> ConsulInmuebles(string b)
        {
            try
            {
                List<InmueblesFox> linmf = new List<InmueblesFox>();
                ConectionString = GetConnectionString();
                OdbcConnection objcon = new OdbcConnection(ConectionString);
                objcon.Open();
                cadena = "SELECT inmubloq+inmucodi AS 'referencia', inmuebl.inmuobra,inmuebl.inmudesc,left(inmuebl.inmuobra,3) AS 'suc', right(inmuebl.inmuobra,3) AS 'ppto', bloques.bloqcodi AS 'mza', inmuebl.inmucodi AS 'inmueble',inmuebl.inmuarea AS 'area', inmuebl.inmuvent AS 'vlr inmueble', IIF(inmuebl.inmuesta=1,1,0)*inmuebl.inmuvent AS 'vlr vendido', IIF(inmuebl.inmuesta<>1,1,0)*inmuebl.inmuvent AS 'vlr x vender', inmuebl.inmuesta AS 'estado' FROM bloques bloques, inmuebl inmuebl WHERE inmuebl.inmuobra = bloques.bloqobra AND ((bloques.bloqcodi=right(inmuebl.inmubloq,2))) and inmuobra='" + b + "' order by inmueble ASC";
                OdbcDataAdapter daProyectofox = new OdbcDataAdapter(cadena, objcon);
                DataSet dsproyectofox = new DataSet("Pubs");
                daProyectofox.FillSchema(dsproyectofox, SchemaType.Source, "BLOQUE_FOX");
                daProyectofox.Fill(dsproyectofox, "BLOQUE_FOX");
                DataTable tbproyectosfox = new DataTable();
                tbproyectosfox = dsproyectofox.Tables["BLOQUE_FOX"];
                if (tbproyectosfox.Columns.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (DataRow row2 in tbproyectosfox.Rows)
                    {
                        InmueblesFox Ifx = new InmueblesFox();
                        Ifx.REFERENCIA = row2["referencia"].ToString();
                        Ifx.INMUOBRA = row2["inmuobra"].ToString();
                        Ifx.INMUDECS = row2["inmudesc"].ToString();
                        Ifx.SUC = row2["suc"].ToString();
                        Ifx.PPTO = row2["ppto"].ToString();
                        Ifx.MZA = row2["mza"].ToString();
                        Ifx.INMUEBLE = row2["inmueble"].ToString();
                        Ifx.AREA = row2["area"].ToString();
                        Ifx.VAL_INMUEBLE = Convert.ToDecimal(row2["vlr inmueble"]);
                        Ifx.INMUESTADO = row2["estado"].ToString();


                        linmf.Add(Ifx);
                    }
                    return linmf;
                }
            }
            catch (OdbcException)
            {
                throw;

            }
            catch (NullReferenceException)
            {
                throw;
            }
            catch (Exception)
            {

                throw;
            }
        }


        public List<Inmuebles2Fox> ConsulInmuebles2(string b)
        {
            try
            {
                List<Inmuebles2Fox> linmf = new List<Inmuebles2Fox>();
                ConectionString = GetConnectionString();
                OdbcConnection objcon = new OdbcConnection(ConectionString);
                objcon.Open();
                cadena = "SELECT inmubloq+inmucodi AS 'referencia', inmuebl.inmuobra,inmuebl.inmudesc,left(inmuebl.inmuobra,3) AS 'suc', right(inmuebl.inmuobra,3) AS 'ppto', bloques.bloqcodi AS 'mza', inmuebl.inmucodi AS 'inmueble',inmuebl.inmuarea AS 'area', inmuebl.inmuvent AS 'vlr inmueble', IIF(inmuebl.inmuesta=1,1,0)*inmuebl.inmuvent AS 'vlr vendido', IIF(inmuebl.inmuesta<>1,1,0)*inmuebl.inmuvent AS 'vlr x vender', inmuebl.inmuesta AS 'estado',inmuebl.inmubano, inmuebl.inmualco FROM bloques bloques, inmuebl inmuebl WHERE inmuebl.inmuobra = bloques.bloqobra AND ((bloques.bloqcodi=right(inmuebl.inmubloq,2))) and inmuobra='" + b + "' order by inmueble ASC";
                OdbcDataAdapter daProyectofox = new OdbcDataAdapter(cadena, objcon);
                DataSet dsproyectofox = new DataSet("Pubs");
                daProyectofox.FillSchema(dsproyectofox, SchemaType.Source, "BLOQUE_FOX");
                daProyectofox.Fill(dsproyectofox, "BLOQUE_FOX");
                DataTable tbproyectosfox = new DataTable();
                tbproyectosfox = dsproyectofox.Tables["BLOQUE_FOX"];
                if (tbproyectosfox.Columns.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (DataRow row2 in tbproyectosfox.Rows)
                    {
                        Inmuebles2Fox Ifx = new Inmuebles2Fox();
                        Ifx.REFERENCIA = row2["referencia"].ToString();
                        Ifx.INMUOBRA = row2["inmuobra"].ToString();
                        Ifx.INMUDECS = row2["inmudesc"].ToString();
                        Ifx.SUC = row2["suc"].ToString();
                        Ifx.PPTO = row2["ppto"].ToString();
                        Ifx.MZA = row2["mza"].ToString();
                        Ifx.INMUEBLE = row2["inmueble"].ToString();
                        Ifx.AREA = row2["area"].ToString();
                        Ifx.VAL_INMUEBLE = Convert.ToDecimal(row2["vlr inmueble"]);
                        Ifx.INMUESTADO = row2["estado"].ToString();
                        Ifx.BANO = row2["inmubano"].ToString();
                        Ifx.HABITACIONES = row2["inmualco"].ToString();


                        linmf.Add(Ifx);
                    }
                    return linmf;
                }
            }
            catch (OdbcException)
            {
                throw;

            }
            catch (NullReferenceException)
            {
                throw;
            }
            catch (Exception)
            {

                throw;
            }
        }
       
        //Retorna Cadena de Conexion multi Fox
        static protected string GetConnectionString()
        {
            return ConfigurationManager.ConnectionStrings["ConnectionStringPrueba"].ConnectionString;
        }
    }
}
