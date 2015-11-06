using DAL;
using Entity;
using Entity.VClientes;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLInfoProyectos
    {
        CRMEntiti bd = new CRMEntiti();

        /// <summary>
        /// Metodo retorna una lista de clientes interesado en un proyecto en general
        /// </summary>
        /// <returns></returns>
        public List<VProyectosF> CLientesProyectos(string p) {

            try
            {
                var cp = from cl in bd.clientes
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC
                          where pr.ID_PROYEC == p
                          group new { cl, pr } by new { pr.NOMBRE_PROYEC,cl.FECHACREACION.Value.Month,cl.FECHACREACION.Value.Year } into grp
                          select new
                          {
                              NOMBRE_PROYEC = grp.Key.NOMBRE_PROYEC,
                              MES = grp.Key.Month,
                              YEAR = grp.Key.Year,
                              CONTADOR = grp.Count(),
                          };
                List<VProyectosF> proyectos = new List<VProyectosF>();
                if (cp.Equals(0))
                {
                    return proyectos;
                }
                else 
                {
                    foreach (var item in cp)
	                {
                        VProyectosF pf = new VProyectosF();
                        pf.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        pf.MES = item.MES;
                        pf.YEAR = item.YEAR;
                        pf.CONTADOR = item.CONTADOR;
                        proyectos.Add(pf);
	                }
                    return proyectos;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Retorna un listado de cliente creados por un asesor
        /// y asignado a un proyecto en especifico
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<EntiClientes> AsesoresProyectos(string p) 
        {
            try
            {
                var ctx = from cl in bd.clientes 
                 join tr in bd.trabajadores on cl.ASESOR equals tr.T_CEDULA
                 where cl.PROYEC_INTERES == p
                          group new { cl, tr } by new { tr.NOMBRES,cl.PROYEC_INTERES } into grp
                          select new
                          {
                              ASESOR = grp.Key.NOMBRES,
                              CONTADOR = grp.Count(),
                          };

                List<EntiClientes> Lcliente = new List<EntiClientes>();
                if (ctx.Equals(""))
                {
                    return Lcliente;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        EntiClientes cliente = new EntiClientes();
                        cliente.ASESOR = item.ASESOR;
                        cliente.CONTADOR = item.CONTADOR;
                        Lcliente.Add(cliente);
                    }
                    return Lcliente;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Retorna un listado de tareas q se han asignados a un proyecto
        /// en un rango de fecha estipulado
        /// </summary>
        /// <param name="fechaini"></param>
        /// <param name="fechafin"></param>
        /// <param name="proyecto"></param>
        /// <returns></returns>
        public List<VTarCLientes> RangoTareas(DateTime fechaini, DateTime fechafin, string proyecto) {
            try
            {
               var ctx = from cl in bd.clientes
                          join tr in bd.tareas on cl.CEDULA equals tr.CLIENTE where
                           cl.FECHACREACION >= fechaini && cl.FECHACREACION <= fechafin && cl.PROYEC_INTERES == proyecto
                          select new
                          {
                             ESTADO=tr.ESTADO,

                          };
               List<VTarCLientes> rt = new List<VTarCLientes>();
               if (ctx.Equals(""))
               {
                   return rt;
               }
               else
               {
                   foreach (var item in ctx)
                   {
                       VTarCLientes taras = new VTarCLientes();
                       taras.ESTADO = item.ESTADO;
                       rt.Add(taras);
                   }
                   return rt;
               }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

       /// <summary>
       /// 
       /// </summary>
       /// <param name="fechaini"></param>
       /// <param name="fechafin"></param>
       /// <param name="proyecto"></param>
       /// <returns></returns>
        public List<VrangoCLientes> RangoPclientes(DateTime fechaini, DateTime fechafin, string proyecto)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC
                          where
                              cl.FECHACREACION >= fechaini && cl.FECHACREACION <= fechafin && pr.ID_PROYEC == proyecto
                          group new { cl, pr } by new { cl.FECHACREACION.Value.Month,cl.FECHACREACION.Value.Year,pr.NOMBRE_PROYEC} into grp
                          select new
                          {
                              MES = grp.Key.Month,
                              YEAR = grp.Key.Year,
                              NOMBRE_PROYEC = grp.Key.NOMBRE_PROYEC,
                              CONTADOR = grp.Count(),
                          };
                List<VrangoCLientes> rt = new List<VrangoCLientes>();
                if (ctx.Equals(""))
                {
                    return rt;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        VrangoCLientes clp = new VrangoCLientes();
                        clp.MES = item.MES;
                        clp.YEAR = item.YEAR;
                        clp.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        clp.CONTADOR = item.CONTADOR;
                        rt.Add(clp);
                    }
                    return rt;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Metodo retorna una lista de asesores que an registrados 
        /// personas para el proyecto en un rango de tiempo
        /// </summary>
        /// <param name="fechaini"></param>
        /// <param name="fechafin"></param>
        /// <param name="proyecto"></param>
        /// <returns></returns>
        public List<VinteresProyecto> RangoAsesoresP(DateTime fechaini, DateTime fechafin, string proyecto)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC
                          join tra in bd.trabajadores on cl.ASESOR equals tra.T_CEDULA
                          where 
                          cl.FECHACREACION >= fechaini && cl.FECHACREACION <= fechafin && pr.ID_PROYEC == proyecto
                          group new { cl, pr,tra} by new {pr.NOMBRE_PROYEC,tra.NOMBRES} into grp
                          select new
                          {
                              NOMBRES = grp.Key.NOMBRES,
                              NOMBRE_PROYEC = grp.Key.NOMBRE_PROYEC,
                              CONTADOR = grp.Count(),
                          };
                List<VinteresProyecto> la = new List<VinteresProyecto>();

                if (ctx.Equals(""))
                {
                    return la;
                }
                else
                {
                    foreach (var item in ctx)
                    {
                        VinteresProyecto clp = new VinteresProyecto();
                        clp.ASESOR = item.NOMBRES;
                        clp.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        clp.CONTADOR = item.CONTADOR;
                        la.Add(clp);
                    }
                    return la;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
