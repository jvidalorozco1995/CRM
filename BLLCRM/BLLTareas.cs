using DAL;
using Entity;
using Entity.VClientes;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
    public class BLLTareas
    {
        
        CRMEntiti bd = new CRMEntiti();
        private string user = null;


        /// <summary>
        /// Metodo para realizar el registro a la base de datos CRM de un compromiso
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public int InsertCompromiso(tareas c)
        {
            try
            {
                
                    user = Membership.GetUser().ToString();
                    c.TRABAJADOR = user;
                    c.FECHAINICIO =Convert.ToDateTime(c.FECHAINICIO);
                    c.FECHAFIN = Convert.ToDateTime(c.FECHAFIN);
                    bd.tareas.Add(c);
                    bd.SaveChanges();
                    return 1;
                
            }
            catch
            {
                throw;
            }
        }
        


        /// <summary>
        /// Metodo para realizar el registro a la base de datos CRM
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public int InsertTareas(tareas c)
        {
            try 
            {
                var ctx = bd.tareas.Where(l => l.CLIENTE == c.CLIENTE && l.ESTADO!="T").ToList();
                if (ctx.Count.Equals(0))
                {
                    user = Membership.GetUser().ToString();
                    c.TRABAJADOR = user;
                    bd.tareas.Add(c);
                    AddHistorialT(c,c.ESTADO);
                    bd.SaveChanges();
                    return 1;
                }
                else
                {
                    return 2;
                    
                       
                }
            }
            catch
            { 
                throw;
            }
        }
        
        /// <summary>
        /// Metodo realzia una insercion al historial de las tareas 
        /// asignadas al clientes 
        /// </summary>
        /// <param name="c"></param>
        private void AddHistorialT(tareas c, string estado) {
            try
            {
                user = Membership.GetUser().ToString();
                historial_clientes historial = new historial_clientes();
                historial.CLIENTEH = Convert.ToString(c.CLIENTE);
                historial.TRABAJADOR = user;
                
                switch (estado)
                {   case "E":
                        historial.DESCRIPCIONH = "Creación de Tarea";
                        break;
                    case "P":
                        historial.DESCRIPCIONH = "Tarea pospuesta";
                        break;
                    case "T":
                        historial.DESCRIPCIONH = "Se ha finalizado la tarea";
                        break;
                    case "N":
                        historial.DESCRIPCIONH = "La tarea finalizada porque el cliente decide no comprar";
                        break;
                    case "C":
                        historial.DESCRIPCIONH = "La tarea finalizada, el cliente decide iniciar proceso de compra";
                        break;
                    case "PS":
                        historial.DESCRIPCIONH = "Compromiso pospuesto";
                        break;
                    case "CO":
                        historial.DESCRIPCIONH = "Compromiso creado";
                        break;
                }
                historial.FECHA = DateTime.Now;
                bd.historial_clientes.Add(historial);
                bd.SaveChanges();
            }
            catch (Exception)
            {
                
                throw;
            }
        }




        /// <summary>
        /// Metodo Retorna un listado de tareas asignadas a un cliente en especifico
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<VtareasNegocio> GestTareasNego(int c)
        {
            List<VtareasNegocio> lisT = bd.VtareasNegocio.OrderByDescending(l => l.FECHAINICIO).Where(t => t.ID_TAREA == c).ToList();
            List<VtareasNegocio> Vtc = new List<VtareasNegocio>();
            if (lisT.Count.Equals(0))
            {
                return Vtc;
            }
            else
            {

                foreach (var item in lisT)
                {
                    VtareasNegocio lt = new VtareasNegocio();
                    lt.CLIENTE = item.CLIENTE;
                    lt.NOMBRES = item.NOMBRES;
                    lt.CONCEPTO = item.CONCEPTO;
                    lt.FECHAINICIO = item.FECHAINICIO;
                    lt.FECHAFIN = item.FECHAFIN;
                    lt.ESTADO = item.ESTADO;
                    lt.ID_TAREA = item.ID_TAREA;
                    lt.TRABAJADOR = item.TRABAJADOR;
                    lt.NEGOCIO = item.NEGOCIO;
                    Vtc.Add(lt);
                }
                return Vtc;
            }

        }

        /// <summary>
        /// Metodo Retorna un listado de tareas asignadas a un cliente en especifico
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<VtareasNegocio> GestTareasCompromiso(string c)
        {
            List<VtareasNegocio> lisT = bd.VtareasNegocio.OrderByDescending(l => l.FECHAINICIO).Where(t => t.NEGOCIO == c && (t.ESTADO == "CO" || t.ESTADO == "PS" || t.ESTADO=="TR")).ToList();
            List<VtareasNegocio> Vtc = new List<VtareasNegocio>();
            if (lisT.Count.Equals(0))
            {
                return Vtc;
            }
            else
            {

                foreach (var item in lisT)
                {
                    VtareasNegocio lt = new VtareasNegocio();
                    lt.CLIENTE = item.CLIENTE;
                    lt.NOMBRES = item.NOMBRES;
                    lt.CONCEPTO = item.CONCEPTO;
                    lt.FECHAINICIO = item.FECHAINICIO;
                    lt.FECHAFIN = item.FECHAFIN;
                    lt.ESTADO = item.ESTADO;
                    lt.ID_TAREA = item.ID_TAREA;
                    lt.TRABAJADOR = item.TRABAJADOR;
                    lt.NEGOCIO = item.NEGOCIO;
                    Vtc.Add(lt);
                }
                return Vtc;
            }

        }

        public List<tareas> GestTareasCompromisoCO(string c)
        {
            List<tareas> lisT = bd.tareas.OrderByDescending(l => l.FECHAINICIO).Where(t => t.NEGOCIO == c && (t.TIPO == "CO")).ToList();
            List<tareas> Vtc = new List<tareas>();
            if (lisT.Count.Equals(0))
            {
                return Vtc;
            }
            else
            {

                foreach (var item in lisT)
                {
                    tareas lt = new tareas();
                    lt.CLIENTE = item.CLIENTE;
                    lt.TRABAJADOR = item.TRABAJADOR;
                    lt.CONCEPTO = item.CONCEPTO;
                    lt.FECHAINICIO = item.FECHAINICIO;
                    lt.FECHAFIN = item.FECHAFIN;
                    lt.ESTADO = item.ESTADO;
                    lt.ID_TAREA = item.ID_TAREA;
                    lt.TRABAJADOR = item.TRABAJADOR;
                    lt.NEGOCIO = item.NEGOCIO;
                    Vtc.Add(lt);
                }
                return Vtc;
            }

        }

        /// <summary>
        /// Metodo Retorna un listado de tareas asignadas a un cliente en especifico
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<VtareasNegocio> GestTareasNegocio(string c)
        {
            List<VtareasNegocio> lisT = bd.VtareasNegocio.OrderBy(l => l.FECHAINICIO).Where(t => t.NEGOCIO == c && (t.ESTADO != "CO" && t.ESTADO != "PS" && t.ESTADO != "TR")).ToList();
            List<VtareasNegocio> Vtc = new List<VtareasNegocio>();
            if (lisT.Count.Equals(0))
            {
                return Vtc;
            }
            else
            {

                foreach (var item in lisT)
                {
                    VtareasNegocio lt = new VtareasNegocio();
                    lt.CLIENTE = item.CLIENTE;
                    lt.NOMBRES = item.NOMBRES;
                    lt.CONCEPTO = item.CONCEPTO;
                    lt.FECHAINICIO = item.FECHAINICIO;
                    lt.FECHAFIN = item.FECHAFIN;
                    lt.ESTADO = item.ESTADO;
                    lt.ID_TAREA = item.ID_TAREA;
                    lt.TRABAJADOR = item.TRABAJADOR;
                    lt.NEGOCIO = item.NEGOCIO;
                    Vtc.Add(lt);
                }
                return Vtc;
            }

        }


        /// <summary>
        /// Llama un procedimiento para actualizar las tareas
        /// </summary>
        public string UpdateTareasEstados()
        {

            try
            {
                bd.tareas.Where(t=>t.ESTADO != "T").ToList().ForEach(c => c.ESTADO = "V");
                bd.SaveChanges();
                return "Ok";

            } catch (Exception ex) {

                return "Error"+ex.Message;
            }

        }


        /// <summary>
        /// Metodo Retorna un listado de tareas asignadas a un cliente en especifico
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<VTareasTrab> GetTareas(string c)
        {
            List<VTareas> lisT = bd.VTareas.OrderByDescending(l=> l.FECHAINICIO).Where(t => t.CEDULA == c).ToList();
            List<VTareasTrab> Vtc = new List<VTareasTrab>();
            if (lisT.Count.Equals(0))
            {
                return Vtc;
            }
            else
            {

                foreach (var item in lisT)
                {
                    VTareasTrab lt = new VTareasTrab();
                    lt.CEDULA = item.CEDULA;
                    lt.NOMBRES = item.NOMBRES;
                    lt.P_APELLIDO = item.P_APELLIDO;
                    lt.CONCEPTO = item.CONCEPTO;
                    lt.FECHAINICIO = item.FECHAINICIO;
                    lt.FECHAFIN = item.FECHAFIN;
                    lt.ESTADO = item.ESTADO;
                    lt.ID_TAREA = item.ID_TAREA;
                    Vtc.Add(lt);
                }
                return Vtc;
            }

        }

        /// <summary>
        /// Metodo retorna infromacion sobreuna tarea consultada en especifico
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public List<VTareasTrab> GetTareaInfo(int id)
        {

            try
            {
                List<VTareas> linf = bd.VTareas.OrderByDescending(i=> i.FECHAINICIO).Where(v => v.ID_TAREA == id).ToList();
                List<VTareasTrab> lisinf = new List<VTareasTrab>();
                if (linf.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    foreach (var item in linf)
                    {
                        VTareasTrab vt = new VTareasTrab();
                        vt.CONCEPTO = item.CONCEPTO;
                        vt.FECHAINICIO = item.FECHAINICIO;
                        vt.FECHAFIN = item.FECHAFIN;
                        vt.ESTADO = item.ESTADO;
                        vt.ID_TAREA = item.ID_TAREA;
                        lisinf.Add(vt);
                    }
                    return lisinf;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Meotodo retorna las tares asignadas a un asesor
        /// para un dia especifico y se encuntre activas
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTareasTrab> ListadoTareas()
        {
            try
            {
                //&& v.FECHAINICIO==DateTime.Today
                user = Membership.GetUser().ToString();
                List<VTareas> vlt = bd.VTareas.OrderByDescending(i=> i.FECHAINICIO).Where(v => v.T_CEDULA == user  && v.ESTADO!="T").ToList();
                List<VTareasTrab> Vltra = new List<VTareasTrab>();
                if (vlt.Count.Equals(0))
                {
                    return Vltra;
                }
                else
                {

                    foreach (var item in vlt)
                    {
                        VTareasTrab vt = new VTareasTrab();
                        vt.CEDULA = item.CEDULA;
                        vt.ID_TAREA= item.ID_TAREA;
                        vt.NOMBRES = item.NOMBRES;
                        vt.P_APELLIDO = item.P_APELLIDO;
                        vt.S_APELLIDO = item.S_APELLIDO;
                        vt.CONCEPTO = item.CONCEPTO;
                        vt.FECHAINICIO = item.FECHAINICIO;
                        vt.ESTADO = item.ESTADO;
                        Vltra.Add(vt);
                    }
                    return Vltra;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Listado de tareas asigandos para el asesor activo en sistema
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTareasTrab> ListadoTareasUser()
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VTareas> vltus = bd.VTareas.OrderByDescending(i => i.FECHAINICIO).Where(v => v.T_CEDULA == user).ToList();
                List<VTareasTrab> Vltraus = new List<VTareasTrab>();
                if (vltus.Count.Equals(0))
                {
                    return Vltraus;
                }
                else
                {

                    foreach (var item in vltus)
                    {
                        VTareasTrab vt = new VTareasTrab();
                        vt.CEDULA = item.CEDULA;
                        vt.ID_TAREA = item.ID_TAREA;
                        vt.NOMBRES = item.NOMBRES;
                        vt.P_APELLIDO = item.P_APELLIDO;
                        vt.S_APELLIDO = item.S_APELLIDO;
                        vt.CONCEPTO = item.CONCEPTO;
                        vt.FECHAINICIO = item.FECHAINICIO;
                        vt.ESTADO = item.ESTADO;
                        Vltraus.Add(vt);
                    }
                    return Vltraus;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }
        /// <summary>
        /// Metodo retorna un un listado de tareas para un asesor
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<VTareasTrab> EstimacionTareas()
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VTareas> vle = bd.VTareas.Where(v => v.T_CEDULA == user).ToList();
                List<VTareasTrab> Vles = new List<VTareasTrab>();
                if (vle.Count.Equals(0))
                {
                    return Vles;
                }
                else
                {

                    foreach (var item in vle)
                    {
                        VTareasTrab vt = new VTareasTrab();
                        vt.ESTADO = item.ESTADO;
                        Vles.Add(vt);
                    }
                    return Vles;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }


        /// <summary>
        /// Meotodo para actuaizar estado del compromiso en caso de q se haya
        /// culminado completamente
        /// </summary>
        /// <param name="CompromisoCompletado"></param>
        /// <returns></returns>
        public int CompromisoCompletado(tareas t, bitacora_tareas b)
        {
            try
            {
                string concepto = "";
                if (t.CONCEPTO.Equals("")) { concepto = "Gestión a sido terminada"; }
                var contex = bd.tareas.First(u => u.ID_TAREA == b.TAREA);
                contex.ESTADO = "T";
                contex.CONCEPTO = concepto;
                contex.FECHAFIN = DateTime.Today;
                AddHistorialT(t, "T");
                bd.SaveChanges();
                Bitacoras(b, "C");
                return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }



        /// <summary>
        /// Meotodo para actuaizar estado de tareas en caso de q se haya
        /// culminado completamente
        /// </summary>
        /// <param name="tareascompletadas"></param>
        /// <returns></returns>
        public int TareaCompletada(tareas t, bitacora_tareas b) {
            try
            {  string concepto ="";
            if (t.CONCEPTO.Equals("")){concepto = "Gestión a sido terminada";}
               var contex = bd.tareas.First(u => u.ID_TAREA==b.TAREA);
               contex.ESTADO = "T";
               contex.CONCEPTO = concepto;
               contex.FECHAFIN = DateTime.Today;
               AddHistorialT(t,"T");
               bd.SaveChanges();
               Bitacoras(b,"C");
               return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }


        /// <summary>
        /// Meotod para posponer tarea en caso de que todo 
        /// se relice con exito reotna un 1
        /// </summary>
        /// <param name="tareas"></param>
        /// <param name="bitacora"></param>
        /// <returns></returns>
        public int PosponerTarea(tareas t, bitacora_tareas b) {
            try
            {
                 var contex = bd.tareas.First(u=> u.ID_TAREA== t.ID_TAREA);
                 contex.ESTADO = t.ESTADO;
                 contex.CONCEPTO = t.CONCEPTO;
                 contex.FECHAINICIO = b.FECHAMOD;
                 AddHistorialT(t,t.ESTADO);
                 Bitacoras(b,"");
                 bd.SaveChanges();
                 return 1;
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
           
                return 0;
                throw;
            }
        }

        /// <summary>
        /// Metodo para almacenar datos a la tabla bitacoras de tareas
        /// </summary>
        /// <param name="bt"></param>
        protected void Bitacoras(bitacora_tareas bt,string e) {
            try
            {   var ctx=bd.bitacora_tareas.Add(bt);
                switch (e)
                {   case "C":
                    ctx.MOTIVO = "La gestión ha sido finalizada";
                    break;
                }
                
                ctx.FECHAMOD = DateTime.Today;
                bd.SaveChanges();
                
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Retorna Historial de tarea Seleccionada
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public List<EntiBitacoras> BitacorasTareas(int t){
            try
            {
                List<bitacora_tareas> bitacora = bd.bitacora_tareas.OrderByDescending(i=> i.FECHAMOD).Where(b => b.TAREA == t).ToList();
                List<EntiBitacoras> lisbitacoras = new List<EntiBitacoras>();
                if (bitacora.Count.Equals(0))
                {
                    return lisbitacoras;
                }
                else
                {
                    foreach (var item in bitacora)
                    {
                        EntiBitacoras bt = new EntiBitacoras();
                        bt.MOTIVO = item.MOTIVO;
                        bt.FECHAMOD = item.FECHAMOD;
                        lisbitacoras.Add(bt);
                    }
                    return lisbitacoras;
                }
            }
            catch (Exception)
            {
                return null;
                throw;
            }
        }

        /// <summary>
        /// Metodo para retornar el estado de las tareas
        /// </summary>
        /// <param name="estado"></param>
        /// <returns></returns>
        public List<VTarCLientes> EstadosTareas(string estado) {

            try
            {
                user = Membership.GetUser().ToString();
                List<VClientesTareas> tareas = bd.VClientesTareas.Where(t => t.ESTADO == estado && t.ASESOR==user).ToList();
                List<VTarCLientes> listado = new List<VTarCLientes>();
                if (tareas.Count.Equals(0))
                {
                    return listado;
                }
                else
                {
                    foreach (var item in tareas)
                    {
                        VTarCLientes Lt = new VTarCLientes();
                        Lt.CEDULA = item.CEDULA;
                        Lt.NOMBRES = item.NOMBRES;
                        Lt.P_APELLIDO = item.P_APELLIDO;
                        Lt.S_APELLIDO = item.S_APELLIDO;
                        Lt.PROYECTO_INT = item.NOMBRE_PROYEC;
                        Lt.ASESOR = item.NOMBE_AS;
                        Lt.ESTADO = item.ESTADO;
                        listado.Add(Lt);
                    }
                    return listado;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }


        public List<VTarCLientes> EstadosTareasClientes(string estado)
        {

            try
            {
               
                List<VClientesTareas> tareas = bd.VClientesTareas.Where(t => t.ESTADO == estado).ToList();
                List<VTarCLientes> listado = new List<VTarCLientes>();
                if (tareas.Count.Equals(0))
                {
                    return listado;
                }
                else
                {
                    foreach (var item in tareas)
                    {
                        VTarCLientes Lt = new VTarCLientes();
                        Lt.CEDULA = item.CEDULA;
                        Lt.NOMBRES = item.NOMBRES;
                        Lt.P_APELLIDO = item.P_APELLIDO;
                        Lt.S_APELLIDO = item.S_APELLIDO;
                        Lt.PROYECTO_INT = item.NOMBRE_PROYEC;
                        Lt.ASESOR = item.NOMBE_AS;
                        Lt.ESTADO = item.ESTADO;
                        listado.Add(Lt);
                    }
                    return listado;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<VclienteInmu> _Lcgestion(string p,string e)
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VCLienteinmueble> LisC = bd.VCLienteinmueble.Where(l => l.PROYEC_INTERES == p && l.ASESOR == user && l.ESTADO_C==e).ToList();
                List<VclienteInmu> EntiC = new List<VclienteInmu>();
                if (LisC.Count.Equals(0))
                {
                    return EntiC;
                }
                else
                {
                    foreach (var item in LisC)
                    {
                        VclienteInmu Ec = new VclienteInmu();
                        Ec.CEDULA = item.CEDULA;
                        Ec.NOMBRES = item.NOMBRES;
                        Ec.P_APELLIDO = item.P_APELLIDO;
                        Ec.S_APELLIDO = item.S_APELLIDO;
                        Ec.DIRECCION = item.DIRECCION;
                        Ec.EMAIL = item.EMAIL;
                        Ec.REFERENCIA = item.REFERENCIA;
                        Ec.ESTADO_I = item.ESTADO;
                        Ec.ESTADO_C = item.ESTADO_C;
                        EntiC.Add(Ec);
                    }
                    return EntiC;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

         public int _Cancelargestion(bitacora_tareas b,string c, string e){
            try
            {
                var ctx = bd.clientes.First(t => t.CEDULA == c);
               /// var contex = bd.tareas.First(a => a.ID_TAREA == b.TAREA);
                ctx.ESTADO = e;
                //contex.ESTADO = "T";
                bd.SaveChanges();
                Bitacoras(b,e);
                return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

    }
}
                                                                                                        