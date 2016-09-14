using DAL;
using Entity;
using Entity.VClientes;
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
    public class BLLClientes
    {
        CRMEntiti db = new CRMEntiti();
        private string user = null;

        /// <summary>
        /// Metodo para crrear un usario en la base de 
        /// datos CRM
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public int InsertCliente(clientes c)
        {
            try
            {
                user = Membership.GetUser().ToString();
                string Cedula = c.CEDULA.Trim().Replace(".","").Replace("-","");
                c.CEDULA = Cedula;
                c.ASESOR = user;
                c.FECHACREACION = DateTime.Today;
                c.ESTADO = "A";
                c.ASOCIADO = "0";
                db.clientes.Add(c);
                db.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception){
                throw;
            }
        }

        /// <summary>
        /// Metodo para resgistrar persona asociada
        /// a un cliente
        /// </summary>
        /// <param name="c"></param>
        /// <param name="cl"></param>
        /// <returns></returns>
        public int _InsertClienteAs(clientes c)
        {
            string cedulas = "";

            try
            {
                var conta = Contador();
                user = Membership.GetUser().ToString();
                var ctx = db.clientes.Where(cl=> cl.CEDULA==c.CEDULA).ToList();
                if (ctx!=null)
                {
                    foreach (var item in ctx)
                    {
                        c.SALA_VENTA = item.SALA_VENTA;
                        c.INFORMACION = item.INFORMACION;
                        c.EMAIL = item.EMAIL;
                        c.EMPRESA = item.EMPRESA;
                   }
                }
                c.ASOCIADO = c.CEDULA;
                cedulas = c.CEDULA.Trim()+"-"+conta;
                c.CEDULA = cedulas;
                c.ASESOR = user;
                c.FECHACREACION = DateTime.Today;
                c.ESTADO = "A";
                
                db.clientes.Add(c);
                db.SaveChanges();
                ContadorUpdate(conta);
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                throw;
            }
        }

        protected int  Contador() {
            try
            {
                var contador_d = 0;
                var dto = db.configuracion.ToList();
                foreach (var item in dto)
                {
                   contador_d = Convert.ToInt32(item.CONTADOR_CONF);
                }
                return contador_d;
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        protected void ContadorUpdate(int c)
        {
            try
            {
                
                var dto = db.configuracion.First(ct=> ct.CONTADOR_CONF==c);
                dto.CONTADOR_CONF = Convert.ToInt32(dto.CONTADOR_CONF) + 1;
                db.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Meotodo retorna un alista de clientes
        /// interesados en un proyecto en especifico y pertenecientes aun asesor
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VclienteInmu> LisClientes(string p)
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VCLienteinmueble> LisC = db.VCLienteinmueble.Where(l => l.PROYEC_INTERES == p && l.ASESOR == user && l.ESTADO!="P" && l.ESTADO != "D").ToList();
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
                        Ec.TELEFONO2 = item.TELEFONO2;
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




        /// <summary>
        /// Metodo retorna un alista de clientes
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VclienteInmu> LisClientesTodos()
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VCLienteinmueble> LisC = db.VCLienteinmueble.Where(l =>l.ESTADO != "P" && l.ESTADO != "D").ToList();
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
                        Ec.TELEFONO2 = item.TELEFONO2;
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

        /// <summary>
        /// Metodo para buscar un cliente por cedula
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public List<EntiClientes> GetClienteT(string c)
        {

            List<Vclientes> LisC = db.Vclientes.Where(t => t.CEDULA == c).ToList();
            List<EntiClientes> Encl = new List<EntiClientes>();
            if (LisC.Count.Equals(0))
            {
                return Encl;
            }
            else
            {
                foreach (var item in LisC)
                {
                    EntiClientes Ec = new EntiClientes();

                    Ec.TIPO_DOCUMENTO = item.TIPO_DOCUMENTO;
                    Ec.TIPO_PERSONA = item.TIPO_PERSONA;
                    Ec.DIRECCION_CORRESPON = item.DIRECCION_CORRESPON;
                    Ec.CELULAR = item.CELULAR;
                    Ec.CEDULA = item.CEDULA;
                    Ec.NOMBRES = item.NOMBRES;
                    Ec.P_APELLIDO = item.P_APELLIDO;
                    Ec.S_APELLIDO = item.S_APELLIDO;
                    Ec.ESTADO_CIVIL = item.ESTADO_CIVIL;
                    Ec.DIRECCION = item.DIRECCION;
                    Ec.BARRIO = item.BARRIO;
                    Ec.EMPRESA_N = item.ID_EMP;
                    Ec.TELEFONO2 = item.TELEFONO2;
                    Ec.PROYEC_INTERES = item.PROYEC_INTERES;
                    Ec.EMAIL = item.EMAIL;
                    Ec.SUELDO = item.SUELDO;
                    Ec.PRESU_COMPRA = item.PRESU_COMPRA;
                    Ec.INMU_INTERES = item.INMU_INTERES;
                    Ec.INTERES_VI = item.INTERES_VI;
                    Ec.MOT_COMPRA = item.MOT_COMPRA;
                    Ec.EMPRESA = item.NOMBRE_EMP;
                    Ec.TEL_EMPRESA = item.TEL_EMP;
                    Ec.PROYEC_INTERES = item.PROYEC_INTERES;
                    Ec.ASESOR = item.ASESOR;
                    Encl.Add(Ec);
                }
                return Encl;
            }
        }

        /// <summary>
        ///meorodo para vlaidar que el usuario exista registrado
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public string  _Validarcliente(string c)
        {
            try
            {
                List<Vclientes> LisC = db.Vclientes.Where(t => t.CEDULA == c).ToList();
                if (LisC.Count.Equals(0))
                {
                    return "No existe";
                }
                else
                {
                    return LisC.FirstOrDefault().TRABAJADOR;   
                }
            }
            catch (Exception)
            {
                
                throw;
            }
            
        }



        /// <summary>
        /// Meotdo para actualizar cliente
        /// </summary>
        /// <param name="c"></param>
        /// <param name="cedula"></param>
        /// <returns></returns>
        public int UpdateCliente2(clientes c)
        {
            try
            {
                var ctx = db.clientes.First(d => d.CEDULA == c.CEDULA);
                if (ctx != null)
                {
                    ctx.ASESOR = c.ASESOR;
                    ctx.PROYEC_INTERES = c.PROYEC_INTERES;


                    db.SaveChanges();
                    return 1;
                }
                else
                {
                    return 0;
                }

            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Meotdo para actualizar cliente
        /// </summary>
        /// <param name="c"></param>
        /// <param name="cedula"></param>
        /// <returns></returns>
        public int UpdateCliente(clientes c){
            try
            {
                var ctx = db.clientes.First(d => d.CEDULA == c.CEDULA);
                if(ctx!= null)
	            {
                    ctx.NOMBRES = c.NOMBRES.ToUpper();
                    ctx.P_APELLIDO = c.P_APELLIDO.ToUpper();
                    ctx.S_APELLIDO = c.S_APELLIDO.ToUpper();
                    ctx.ESTADO_CIVIL = c.ESTADO_CIVIL.ToUpper();
                    ctx.DIRECCION = c.DIRECCION.ToUpper();
                    ctx.BARRIO = c.BARRIO.ToUpper();
                    ctx.TELEFONO2 = c.TELEFONO2;
                    ctx.PROYEC_INTERES = c.PROYEC_INTERES;
                    ctx.EMAIL = c.EMAIL.ToUpper();
                    ctx.EMPRESA = c.EMPRESA;
                    ctx.SUELDO = c.SUELDO.ToUpper();
                    ctx.FECHAMOD = DateTime.Now;
                    ctx.PRESU_COMPRA = c.PRESU_COMPRA.ToUpper();
                    ctx.INMU_INTERES = c.INMU_INTERES.ToUpper();
                    ctx.INTERES_VI = c.INTERES_VI;
                    ctx.MOT_COMPRA = c.MOT_COMPRA;

                    
                    db.SaveChanges();
                    return 1;
                }
                else
                {
                    return 0;
                }
                
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna una lista de Clientes almacenados
        /// </summary>
        /// <returns></returns>
        public List<EntiClientes> LClientes(){
            try
            {
                List<clientes> lisres= db.clientes.ToList();
                List<EntiClientes> liscl = new List<EntiClientes>();
                if (lisres.Count.Equals(0))
                {
                    return liscl;
                }
                else
                {
                    foreach (var item in lisres)
                    {
                        EntiClientes cl = new EntiClientes();
                        cl.CEDULA = item.CEDULA;
                        cl.NOMBRES = item.NOMBRES;
                        cl.P_APELLIDO = item.P_APELLIDO;
                        cl.DIRECCION = item.DIRECCION;
                        cl.EMAIL = item.EMAIL;
                        liscl.Add(cl);
                    }
                    return liscl;
                }
            }
            catch (Exception)
            {
                return null;
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna listado de cliente con relacion a sus tareas
        /// mas reciente
        /// </summary>
        /// <returns></returns>
        public List<VTarCLientes> TareasCliente() {
            try
            {
                List<VClientesTareas> vtc = db.VClientesTareas.OrderByDescending(d => d.ID_TAREA).ToList();
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
                        estadot.FECHAINICIO = item.FECHACREACION;
                        estadot.TELEFONO2 = item.TELEFONO2;
                        estadot.EMAIL = item.EMAIL;
                        estadot.DIRECCION = item.DIRECCION;
                        estadot.PROYECTO_INT = item.NOMBRE_PROYEC;
                        estadot.ASESOR = item.NOMBE_AS;
                        estadot.ESTADO = item.ESTADO;
                        estadot.NOMBRE_SALA = item.NOMBRE_SALA;
                        estadot.BARRIO = item.BARRIO;
                        estadot.ESTADO_CIVIL = item.ESTADO_CIVIL;
                        estadot.SUELDO = item.SUELDO;
                        estadot.PRESU_COMPRA = item.PRESU_COMPRA;
                        estadot.INMU_INTERES = item.INMU_INTERES;
                        estadot.NOMBRE_EMP = item.NOMBRE_EMP;
                        estadot.TEL_EMP = item.TEL_EMP;
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
        /// Metodo retorna listado de cliente con relacion a sus tareas
        /// mas reciente
        /// </summary>
        /// <returns></returns>
        public List<VTarCLientes> TareasClienteUsuario()
        {
            try
            {
                user = Membership.GetUser().ToString();
                List<VClientesTareas> vtc = db.VClientesTareas.Where(t=>t.ASESOR== user).OrderByDescending(d => d.ID_TAREA).ToList();
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
                        estadot.FECHAINICIO = item.FECHACREACION;
                        estadot.TELEFONO2 = item.TELEFONO2;
                        estadot.EMAIL = item.EMAIL;
                        estadot.DIRECCION = item.DIRECCION;
                        estadot.PROYECTO_INT = item.NOMBRE_PROYEC;
                        estadot.ASESOR = item.NOMBE_AS;
                        estadot.ESTADO = item.ESTADO;
                        estadot.NOMBRE_SALA = item.NOMBRE_SALA;
                        estadot.BARRIO = item.BARRIO;
                        estadot.ESTADO_CIVIL = item.ESTADO_CIVIL;
                        estadot.SUELDO = item.SUELDO;
                        estadot.PRESU_COMPRA = item.PRESU_COMPRA;
                        estadot.INMU_INTERES = item.INMU_INTERES;
                        estadot.NOMBRE_EMP = item.NOMBRE_EMP;
                        estadot.TEL_EMP = item.TEL_EMP;
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
        /// Metodo retorna un listado del historial del
        /// cliente
        /// </summary>
        /// <returns></returns>
        public List<Historial> Historial_cliente(string c) {
            try
            {

                var lish = from hc in db.historial_clientes
                           join cl in db.clientes on hc.CLIENTEH equals cl.CEDULA 
                           where cl.CEDULA == c
                           select new
                           {
                               NOMBRES=cl.NOMBRES,
                               DESCRIPCIONH = hc.DESCRIPCIONH,
                               FECHA = hc.FECHA,
                           }; 
                List<Historial> lishist = new List<Historial>();
                if (lishist.Count.Equals(""))
                {
                    return lishist;
                }
                else
                {
                    foreach (var item in lish)
                    {
                        Historial historial = new Historial();
                        historial.NOMBRES = item.NOMBRES;
                        historial.DESCRIPCIONH = item.DESCRIPCIONH;
                        historial.FECHA = item.FECHA;
                        lishist.Add(historial);
                    }
                    return lishist;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Retorna un lisatdo de clientes registrados en un rango de fecha
        /// especificado
        /// </summary>
        /// <param name="fechaini"></param>
        /// <param name="fechafin"></param>
        /// <returns></returns>
        public List<VTarCLientes> LiscliFechaAP(DateTime fechaini, DateTime fechafin)
        {
            try
            {
                List<VClientesTareas> lisa = db.VClientesTareas.Where(v => v.FECHACREACION >= fechaini && v.FECHACREACION <= fechafin).ToList();
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
