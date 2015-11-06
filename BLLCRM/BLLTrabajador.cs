using DAL;
using Entity;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLTrabajador
    {
        CRMEntiti db = new CRMEntiti();

        /// <summary>
        /// Metodo para registrar trabajdores retorna un entero "1"
        /// en caso que el registro sea exitoso 
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public int CrearTrabajador(trabajadores t)
        {
            try
            {
                db.trabajadores.Add(t);
                db.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
            }

        }

       /// <summary>
       /// Metodo para asignar proyectos a trabajdor retorna un entero "1"
       /// en caso de que el proceso se lleve a cabo de manera exitosa
       /// </summary>
       /// <param name="t"></param>
       /// <returns></returns>
        public int AsignarProyecto(proyectos_trabajador t)
        {
            try
            {
                var resul = ProyecA(t.TRABAJADOR, t.PROYECTO);
                if (resul.Equals(2))
                {
                    return 0;
                }
                else
                {
                    db.proyectos_trabajador.Add(t);
                    db.SaveChanges();
                    return 1;
                }

            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="trabajador"></param>
        /// <param name="proyecto"></param>
        /// <returns></returns>
        private int ProyecA(string trabajador, string proyecto)
        {
            List<proyectos_trabajador> listp = db.proyectos_trabajador.Where(p => p.TRABAJADOR == trabajador).ToList();
            foreach (var item in listp)
            {
                if (item.PROYECTO.Equals(proyecto))
                {
                    return 2;
                }

            }
            return 3;
        }

        /// <summary>
        /// Metodo Retora un listado de los trabajadores almacenados en sistema
        /// </summary>
        /// <returns></returns>
        public List<EntiTrabajadores> GetTrabajadores()
        {

            try
            {
                List<trabajadores> LisT = db.trabajadores.ToList();
                List<EntiTrabajadores> Ent = new List<EntiTrabajadores>();
                if (LisT.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (var item in LisT)
                    {
                        EntiTrabajadores EntT = new EntiTrabajadores();
                        EntT.T_CEDULA = item.T_CEDULA;
                        EntT.NOMBRES = item.NOMBRES;
                        Ent.Add(EntT);
                    }
                    return Ent;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// metdo retorna un listado de tareas asignadas a un asesor especifico
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTarCLientes> getTareasAsesor(string t)
        {
            try
            {
                List<VTareas> lisa = db.VTareas.Where(v => v.T_CEDULA == t).ToList();
                List<VTarCLientes> Asesor = new List<VTarCLientes>();
                if (lisa.Count.Equals(0))
                {
                    return Asesor;
                }
                else 
                {
                    foreach (var item in lisa)
                    {
                        VTarCLientes ase = new VTarCLientes();
                        ase.CEDULA = item.CEDULA;
                        ase.NOMBRES = item.NOMBRES;
                        ase.P_APELLIDO = item.P_APELLIDO;
                        ase.S_APELLIDO = item.S_APELLIDO;
                        ase.DIRECCION = item.DIRECCION;
                        ase.EMAIL = item.EMAIL;
                        ase.ESTADO = item.ESTADO;
                        Asesor.Add(ase);
                    }
                    return Asesor;
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
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTarCLientes> ListClientesAsesor(string t)
        {
            try
            {
                List<VClientesTareas> lisa = db.VClientesTareas.Where(v => v.ASESOR == t).ToList();
                List<VTarCLientes> Asesor = new List<VTarCLientes>();
                if (lisa.Count.Equals(0))
                {
                    return Asesor;
                }
                else
                {
                    foreach (var item in lisa)
                    {
                        VTarCLientes ase = new VTarCLientes();
                        ase.CEDULA = item.CEDULA;
                        ase.NOMBRES = item.NOMBRES;
                        ase.P_APELLIDO = item.P_APELLIDO;
                        ase.S_APELLIDO = item.S_APELLIDO;
                        ase.ASESOR = item.NOMBE_AS;
                        ase.PROYECTO_INT = item.NOMBRE_PROYEC;
                        ase.ESTADO = item.ESTADO;
                        Asesor.Add(ase);
                    }
                    return Asesor;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Retorna una liosta de clientes filtrados por asesor y proyectos
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTarCLientes> ListClientesAP(string p,string t)
        {
            try
            {
                List<VClientesTareas> lisa = db.VClientesTareas.Where(v => v.ASESOR == t && v.PROYEC_INTERES==p).ToList();
                List<VTarCLientes> Asesor = new List<VTarCLientes>();
                if (lisa.Count.Equals(0))
                {
                    return Asesor;
                }
                else
                {
                    foreach (var item in lisa)
                    {
                        VTarCLientes ase = new VTarCLientes();
                        ase.CEDULA = item.CEDULA;
                        ase.NOMBRES = item.NOMBRES;
                        ase.P_APELLIDO = item.P_APELLIDO;
                        ase.S_APELLIDO = item.S_APELLIDO;
                        ase.ASESOR = item.NOMBE_AS;
                        ase.PROYECTO_INT = item.NOMBRE_PROYEC;
                        ase.ESTADO = item.ESTADO;
                        Asesor.Add(ase);
                    }
                    return Asesor;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }


    }
}
