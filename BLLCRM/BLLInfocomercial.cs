using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLInfocomercial
    {
        CRMEntiti bd = new CRMEntiti();

        public List<VTareasTrab> InfoTareas() {
            try
            {
                List<VTareas> list = bd.VTareas.ToList();
                List<VTareasTrab> lisnf = new List<VTareasTrab>();
                if (list.Count.Equals(0))
                {
                    return lisnf;
                }
                else
                {
                    foreach (var item in list)
                    {
                        VTareasTrab tareas = new VTareasTrab();
                        tareas.ESTADO = item.ESTADO;
                        lisnf.Add(tareas);
                    }
                    return lisnf;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Retorna informe de tareas asigandas a un Proyecto
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VTareasTrab> InfoProyecto(string p) {
                   try
            {
                List<VTareas> list = bd.VTareas.Where(l=> l.PROYEC_INTERES == p).ToList();
                List<VTareasTrab> lisnf = new List<VTareasTrab>();
                if (list.Count.Equals(0))
                {
                    return lisnf;
                }
                else
                {
                    foreach (var item in list)
                    {
                        VTareasTrab tareas = new VTareasTrab();
                        tareas.ESTADO = item.ESTADO;
                        lisnf.Add(tareas);
                    }
                    return lisnf;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna un listado de estimacion para un asesor seleccionado
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VTareasTrab> InfoTrabajador(string a)
        {
            try
            {
                List<VTareas> list = bd.VTareas.Where(l => l.ASESOR == a).ToList();
                List<VTareasTrab> lisnf = new List<VTareasTrab>();
                if (list.Count.Equals(0))
                {
                    return lisnf;
                }
                else
                {
                    foreach (var item in list)
                    {
                        VTareasTrab tareas = new VTareasTrab();
                        tareas.ESTADO = item.ESTADO;
                        lisnf.Add(tareas);
                    }
                    return lisnf;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }


        /// <summary>
        /// Retorna una lista de clientes en un rango de fecha especifico
        /// </summary>
        /// <param name="fechaini"></param>
        /// <param name="fechafin"></param>
        /// <returns></returns>
        public List<EntiClientes> ClientesFechas(DateTime fechaini, DateTime fechafin)
        {

            try
            {
                List<clientes> list = bd.clientes.Where(l => l.FECHACREACION >=fechaini && l.FECHACREACION <= fechafin).ToList();
                List<EntiClientes> lisdato = new List<EntiClientes>();
                if (list.Count.Equals(0))
                {
                    return lisdato;
                }
                else
                {
                    foreach (var item in list)
                    {
                        EntiClientes cliente = new EntiClientes();
                        cliente.FECHACREACION = item.FECHACREACION;
                        lisdato.Add(cliente);
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
        /// Listado de todos los clientes registrados
        /// </summary>
        /// <returns></returns>
        public List<EntiClientes> ClientesFechasT()
        {

            try  
            {
                var fechas = from fc in bd.clientes
                 group new { fc } by new {fc.FECHACREACION.Value.Month, fc.FECHACREACION.Value.Year } into h 
                 select new
                 {
                     MES = h.Key.Month,
                     YEAR = h.Key.Year,
                     CONTADOR = h.Count()
                 };
                List<EntiClientes> lisdato = new List<EntiClientes>();
                if (fechas.Equals(""))
                {
                    return lisdato;
                }
                else
                {
                    foreach (var item in fechas)
                    {
                        EntiClientes cliente = new EntiClientes();
                        cliente.MES = item.MES;
                        cliente.YEAR = item.YEAR;
                        cliente.CONTADOR = item.CONTADOR;
                        lisdato.Add(cliente);
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
        /// Retorna un consolidado total de tareas en un rango de fecha ingresado
        /// </summary>
        /// <param name="inicio"></param>
        /// <param name="fin"></param>
        /// <returns></returns>
        public List<EntiTareas> ContareaFechas(DateTime inicio, DateTime fin) 
        {
            var ctx = from f in bd.tareas
                      where f.FECHAINICIO >= inicio && f.FECHAINICIO <= fin select f;
                      

            List<EntiTareas> FeTareas = new List<EntiTareas>();
            if (ctx.Equals(""))
            {
                return FeTareas;
            }
            else
            {
                foreach (var item in ctx)
                {
                    EntiTareas tareas = new EntiTareas();
                    tareas.ESTADO = item.ESTADO;
                    FeTareas.Add(tareas);
                }
                return FeTareas;
            }

        }

        /// <summary>
        /// CLientes registrados por asesor
        /// </summary>
        /// <param name="asesor"></param>
        /// <returns></returns>
        public List<EntiClientes> ClientesAsesores()
        {
            try
            {
                var list = bd.VAsesoresT.ToList();
                List<EntiClientes> lisdato = new List<EntiClientes>();

                if (list.Equals(null))
                {
                    return lisdato;
                }
                else 
                {
                    foreach (var item in list)
                    {
                        EntiClientes asesores = new EntiClientes();
                        asesores.ASESOR = item.NOMBRES;
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
        /// Retorna una lista de clientes registrados para un proyecto en especifico
        /// </summary>
        /// <param name="proyecto"></param>
        /// <returns></returns>
        public List<VinteresProyecto> ClientesProyectos()
        {
            try
            {
                List<VinteresProyect> liin = bd.VinteresProyect.ToList();
                List<VinteresProyecto> lisdato = new List<VinteresProyecto>();

                if (liin.Count.Equals(0))
                {
                    return lisdato;
                }
                else
                {
                    foreach (var item in liin)
                    {
                        VinteresProyecto proin = new VinteresProyecto();
                        proin.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        proin.CONTADOR = item.CONTADOR;
                        lisdato.Add(proin);
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
        /// Rertorna una lista de clientes registrados en un rango de fecha
        /// seleccionado
        /// </summary>
        /// <param name="inicio"></param>
        /// <param name="fin"></param>
        /// <returns></returns>
        public List<EntiClientes> FechasFechasra(DateTime inicio, DateTime fin)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          where
                              cl.FECHACREACION >= inicio && cl.FECHACREACION <= fin
                          group new {cl} by new { cl.FECHACREACION.Value.Month, cl.FECHACREACION.Value.Year }
                              into grp
                              select new
                            {
                                Count = grp.Count(),
                                grp.Key.Month,
                                grp.Key.Year,
                            };
                List<EntiClientes> LisFechas = new List<EntiClientes>();

                if (ctx != null)
                {
                    foreach (var item in ctx)
                    {
                        EntiClientes fechas = new EntiClientes();
                        fechas.CONTADOR = item.Count;
                        fechas.MES = item.Month;
                        fechas.YEAR = item.Year;
                        LisFechas.Add(fechas);
                    }
                    return LisFechas;
                }
                else
                {
                    return LisFechas;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Retorna una lista de todo los clientes registradoa por asesor en un rango de fecha seleccionado
        /// </summary>
        /// <param name="inicio"></param>
        /// <param name="fin"></param>
        /// <returns></returns>
        public List<EntiClientes> FechasAsesoresCliente(DateTime inicio, DateTime fin)
        {
            try
            {
                var ctx = from vt in bd.clientes join cl in bd.trabajadores on vt.ASESOR equals cl.T_CEDULA where
                           vt.FECHACREACION >= inicio && vt.FECHACREACION <= fin  group new { vt, cl } by new { cl.NOMBRES,vt.ASESOR } into grp
                              select new
                              {    ASESOR = grp.Key.NOMBRES,
                                  Count = grp.Count(),
                              };
                List<EntiClientes> LisFechas = new List<EntiClientes>();

                if (ctx != null)
                {
                    foreach (var item in ctx)
                    {
                        EntiClientes fechas = new EntiClientes();
                        fechas.CONTADOR = item.Count;
                        fechas.ASESOR = item.ASESOR;
                        LisFechas.Add(fechas);
                    }
                    return LisFechas;
                }
                else
                {
                    return LisFechas;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }


        /// <summary>
        /// Retorna una lista de clientes interesados en un proyecto seleccionado
        /// em un rango de fecha seleccionado
        /// </summary>
        /// <param name="inicio"></param>
        /// <param name="fin"></param>
        /// <returns></returns>
        public List<EntiClientes> FechasProyectosCl(DateTime inicio, DateTime fin)
        {
            try
            {
                var ctx = from cl in bd.clientes
                          join pr in bd.proyectos on cl.PROYEC_INTERES equals pr.ID_PROYEC
                          where
                              cl.FECHACREACION >= inicio && cl.FECHACREACION <= fin
                          group new { cl, pr } by new { cl.FECHACREACION.Value.Month,cl.FECHACREACION.Value.Year,pr.NOMBRE_PROYEC} into grp
                          select new
                          {
                              NOMBRE_PROYEC = grp.Key.NOMBRE_PROYEC,
                              MES = grp.Key.Month,
                              YEAR= grp.Key.Year,
                              Count = grp.Count(),
                          };
                List<EntiClientes> LisFechas = new List<EntiClientes>();

                if (ctx != null)
                {
                    foreach (var item in ctx)
                    {
                        EntiClientes fechas = new EntiClientes();
                        fechas.PROYEC_INTERES = item.NOMBRE_PROYEC;
                        fechas.CONTADOR = item.Count;
                        fechas.MES = item.MES;
                        fechas.YEAR = item.YEAR;
                        LisFechas.Add(fechas);
                    }
                    return LisFechas;
                }
                else
                {
                    return LisFechas;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
       

    }
}
