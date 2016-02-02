using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
   public class BLLProyectos
    {
       CRMEntiti bd = new CRMEntiti();

       private string user = null;

        /// <summary>
        /// Metodo para insertar Inmuebles traidos de multi-fox
        /// si la operacion es realiaza con exito retorna un entero "1"
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public int InsertProyecFox(proyectos p)
        {
            try
            {
                bd.proyectos.Add(p);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }       
            catch (Exception)
            {
                return 2;
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna un entero "1" en caso que se realice la insercion
        /// de manera exitosa
        /// </summary>
        /// <param name="i"></param>
        /// <returns></returns>
        public int InsertImsPlano(planos_Proyectos planos)
        {
            try
            {
                planos.PROYECT.Trim();
                bd.planos_Proyectos.Add(planos);
                bd.SaveChanges();
                return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna un entero "1" en caso de que de realice el 
        /// proceso de eliminacion del acceso de manera exitosa
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public int DeleteAccesoP(int p)
        {
            try
            {
                var statu = bd.proyectos_trabajador.First(i => i.ID_PY == p);
                statu.trabajadores.proyectos_trabajador.Remove(statu);
                bd.SaveChanges();
                return 1;

            }
            catch (Exception)
            {
                return 0;
            }
        }

        /// <summary>
        /// Metodo para realizar la eliminación de los proyectos almacenados
        /// en CRM haciedo la salvedad que ninguno de los inmebles pertecientes
        /// al proyecto este en proceso de compra,retorna un entero al realizar la peticion
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public int RemoverProyectos(string p)
        {
            try
            {
                List<inmuebles> listim = bd.inmuebles.Where(m => m.SUC == p).ToList();
                if (listim.Count.Equals(0))
                {  //No Exiten Proyectos Suscritos al proyecto
                    var status = bd.proyectos.First(pr => pr.ID_PROYEC == p);
                    bd.proyectos.Remove(status);
                    bd.SaveChanges();
                    return 1;
                }
                else
                {
                    foreach (var item in listim)
                    {
                        if (item.INMUESTADO.Equals("1"))
                        {   //Actualmente el proyecto tiene en proceso de separacion algun inmueble 
                            return 2;
                        }
                        else
                        {
                            var status = bd.proyectos.First(pr => pr.ID_PROYEC == p);
                            bd.proyectos.Remove(status);
                            bd.SaveChanges();
                            return 1;
                        }
                    }
                    return 3;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
       
        /// <summary>
        /// Meotodo retona una lista de los proyectos almacenados actualmete
        /// a la bd de CRM
        /// </summary>
        /// <returns></returns>
        public List<EntiProyecto> ListaProyec()
        {
            try
            {
             List<proyectos> lisProyec = bd.proyectos.OrderBy(t => t.NOMBRE_PROYEC).ToList();
             List<EntiProyecto> EnPro = new List<EntiProyecto>();
            if (lisProyec.Count.Equals(0))
            {
                return EnPro;
            }
            else
            {
                foreach (var item in lisProyec)
                {
                    EntiProyecto Proyec = new EntiProyecto();
                    Proyec.ID_PROYEC = item.ID_PROYEC;
                    Proyec.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                    EnPro.Add(Proyec);
                }
                return EnPro;

            }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna una lista de Proyectos asignados a un trabajor en especifico
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VProyeT> ListProyecT()
        {
            try
            {
               
                user = Membership.GetUser().ToString();
                List<Vspt> Lpt = bd.Vspt.OrderBy(l => l.NOMBRE_PROYEC).Where(t => t.T_CEDULA == user).ToList();
                List<VProyeT> Vpt = new List<VProyeT>();
                if (Lpt.Count.Equals(0))
                {
                    return Vpt;
                }
                else
                {
                    foreach (var item in Lpt)
                    {
                        VProyeT Vp = new VProyeT();
                        Vp.ID_PROYEC = item.ID_PROYEC;
                        Vp.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        Vpt.Add(Vp);
                    }
                    return Vpt;
                }
            }
            catch (Exception)
            {
                return null;
                throw;
            }

        }

        /// <summary>
        /// Listado de Proyectos por trabajador
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<VProyeT> LtrabajadorProyec(string p)
        {
           try
           {
                //user = Membership.GetUser().ToString();
                List<Vspt> Ltp = bd.Vspt.Where(t => t.T_CEDULA == p).ToList();
                List<VProyeT> Vpt = new List<VProyeT>();
                if (Ltp.Count.Equals(0))
                {
                    return Vpt;
                }
                else
                {
                    foreach (var item in Ltp)
                    {
                        VProyeT Vt = new VProyeT();
                        Vt.ID_PY = item.ID_PY;
                        Vt.T_CEDULA = item.T_CEDULA;
                        Vt.NOMBRES = item.NOMBRES;
                        Vt.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        Vpt.Add(Vt);
                    }
                    return Vpt;
                }
            }
            catch (Exception)
            {
                return null;
                throw;
            }

        }

       /// <summary>
       /// Metodo retorna una lista de los planos asigandos a un proyecto en especifico
       /// </summary>
       /// <param name="p"></param>
       /// <returns></returns>
        public List<Entityplanos> LisPlanos(string p)
        {
           
            try
            {
                List<planos_Proyectos> lisp = bd.planos_Proyectos.Where(i => i.PROYECT == p).ToList();
                List<Entityplanos> elisp = new List<Entityplanos>();
                if (lisp.Count.Equals(0))
                {
                    return elisp;
                }
                else
                {

                    foreach (var item in lisp)
                    {
                        Entityplanos ep = new Entityplanos();
                        ep.IMAGEN = item.IMAGEN;
                        ep.TIPO_IMG = item.TIPO_IMG;
                        elisp.Add(ep);
                    }
                    return elisp;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }


        public List<VTarCLientes> TareasClientetra(string p)
        {
            try
            {
                List<VClientesTareas> vtc = bd.VClientesTareas.OrderByDescending(d => d. ID_TAREA).Where(l => l.PROYEC_INTERES == p).ToList();
                List<VTarCLientes> listc = new List<VTarCLientes>();
                if (vtc.Count.Equals(0))
                {
                    return listc;
                }
                else
                {
                    foreach (var item in vtc)
                    {
                        VTarCLientes estadot = new VTarCLientes();
                        estadot.CEDULA = item.CEDULA;
                        estadot.NOMBRES = item.NOMBRES;
                        estadot.P_APELLIDO = item.P_APELLIDO;
                        estadot.S_APELLIDO = item.S_APELLIDO;
                        estadot.ASESOR = item.NOMBE_AS;
                        estadot.PROYECTO_INT = item.NOMBRE_PROYEC;
                        estadot.ESTADO = item.ESTADO;
                        listc.Add(estadot);
                    }
                    return listc;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

       /// <summary>
       /// Retorna un listado de proyectos al cual tiene aseso 
       /// un asesor en especifico y muestra disponibilidad 
       /// de inmuebles para cada uno de sus proyectos
       /// </summary>
       /// <returns></returns>
        public List<Vspt> getTrabajadorproyecto()
        {
            try
            {
                user = Membership.GetUser().ToString();
                var ctx = from inm in bd.inmuebles
                          join pr in bd.proyectos on inm.SUC equals pr.ID_PROYEC
                          join prt in bd.proyectos_trabajador on inm.SUC equals prt.PROYECTO
                          where prt.TRABAJADOR == user
                          group new {inm,pr,prt } by new { inm.INMUESTADO,prt.PROYECTO,pr.NOMBRE_PROYEC} into grp
                          select new
                          {
                              NOMBRE_PROYEC = grp.Key.NOMBRE_PROYEC,
                              PROYECTO = grp.Key.PROYECTO,
                              ESTADO=grp.Key.INMUESTADO,
                              CONTADOR = grp.Count(),
                          };

                List<Vspt> lisTp = new List<Vspt>();

                if (ctx.Equals(""))
                {
                    return lisTp;

                }
                else
                {
                    foreach (var item in ctx)
                    {
                        Vspt proyec = new Vspt();
                        proyec.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        proyec.ID_PROYEC = item.PROYECTO;
                        proyec.ESTADO = item.ESTADO;
                        proyec.CONTADOR = item.CONTADOR;
                        lisTp.Add(proyec);
                    }
                    return lisTp;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }


    }
}
