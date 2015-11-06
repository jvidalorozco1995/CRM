using DAL;
using Entity;
using Entity.VProyectos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLInfocomercialAse
    {
        CRMEntiti bd = new CRMEntiti();


        /// <summary>
        /// Retorna una lista de clientes registrados por un asesor seleccionado
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<EntiClientes> AsesoresClientes(string t)
        {
            try
            {
                var list = from cl in bd.clientes
                          where cl.ASESOR == t
                           group new { cl } by new { cl.FECHACREACION.Value.Month, cl.FECHACREACION.Value.Year} into grp
                          select new
                          {
                              MES = grp.Key.Month,
                              YEAR = grp.Key.Year,
                              CONTADOR = grp.Count(),
                          };
                List<EntiClientes> lisdato = new List<EntiClientes>();

                if (list.Equals(""))
                {
                    return lisdato;
                }
                else
                {
                    foreach (var item in list)
                    {
                        EntiClientes asesores = new EntiClientes();
                        asesores.MES = item.MES;
                        asesores.YEAR = item.YEAR;
                        asesores.CONTADOR = Convert.ToInt32(item.CONTADOR);
                        lisdato.Add(asesores);
                    }
                    return lisdato;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Metodo resive una identenficacio de un asesor
        /// y retorna todo los clientes q este a registrado por 
        /// cada proyecto a los que tiene acceso
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VinteresProyecto> AsesorProyectos(string t) {
            try
            {
                var ctx = from cl in bd.clientes
                          join tr in bd.trabajadores on cl.ASESOR equals tr.T_CEDULA 
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC   
                          where  tr.T_CEDULA == t 
                          group new { cl,tr,pr } by new { tr.NOMBRES,pr.NOMBRE_PROYEC } into grp
                          select new
                          {
                              ASESOR = grp.Key.NOMBRES,
                              NOMBRE_PROYECT = grp.Key.NOMBRE_PROYEC,
                              CONTADOR = grp.Count(),
                          };
                List<VinteresProyecto> lisp = new List<VinteresProyecto>();
                if (ctx.Equals(""))
                {
                    return lisp;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        VinteresProyecto asesor = new VinteresProyecto();
                        asesor.ASESOR = item.ASESOR;
                        asesor.NOMBRE_PROYEC = item.NOMBRE_PROYECT;
                        asesor.CONTADOR = item.CONTADOR;
                        lisp.Add(asesor);
                    }

                    return lisp;
                }
            }
            catch (Exception)
            {
                
                throw;
            }

        }

        /// <summary>
        /// Metodo retorna un listado de clientes registrados por el sesor seleccionado en un rango de fecha seleccionado
        /// </summary>
        /// <param name="t"></param>
        /// <param name="fechaini"></param>
        /// <param name="fechafin"></param>
        /// <returns></returns>
        public List<VinteresProyecto> AsesorClientesFechas(string t, DateTime fechaini, DateTime fechafin)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          where cl.ASESOR == t && cl.FECHACREACION >= fechaini  && cl.FECHACREACION<=fechafin
                          group new { cl } by new { cl.FECHACREACION.Value.Year,cl.FECHACREACION.Value.Month } into grp
                          select new
                          {
                              CONTADOR = grp.Count(),
                              MES=grp.Key.Month,
                              YEAR = grp.Key.Year,
                          };
                List<VinteresProyecto> lisp = new List<VinteresProyecto>();
                if (ctx.Equals(""))
                {
                    return lisp;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        VinteresProyecto asesor = new VinteresProyecto();
                        asesor.CONTADOR = item.CONTADOR;
                        asesor.MES = item.MES;
                        asesor.YEAR = item.YEAR;
                        lisp.Add(asesor);
                    }

                    return lisp;
                }
            }
            catch (Exception)
            {

                throw;
            }

        }

        /// <summary>
        /// Metodo retorna un listado de clientes pertenecientes
        /// a un asesor en un rango de teimpo establecido
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VinteresProyecto> AsesorProyectosFechas(string t,DateTime fechaini, DateTime fechafin)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC  
                          where cl.ASESOR == t && cl.FECHACREACION >= fechaini && cl.FECHACREACION <= fechafin
                          group new { cl,pr} by new {pr.NOMBRE_PROYEC} into grp
                          select new
                          {   NOMBRE_PROYEC =grp.Key.NOMBRE_PROYEC,
                              CONTADOR = grp.Count(),
                          };
                List<VinteresProyecto> lisp = new List<VinteresProyecto>();
                if (ctx.Equals(""))
                {
                    return lisp;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        VinteresProyecto asesor = new VinteresProyecto();
                        asesor.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        asesor.CONTADOR = item.CONTADOR;
                        lisp.Add(asesor);
                    }

                    return lisp;
                }
            }
            catch (Exception)
            {

                throw;
            }

        }

    }
}
