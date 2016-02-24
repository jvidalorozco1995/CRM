using DAL;
using Entity;
using Entity.VInmuebles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
    public class BLLseparaciones
    {
        CRMEntiti bd = new CRMEntiti();
        private int DIAS_TR = 0;
        private string user = null;


        public List<Bancos> _Getbancos() {
            try
            {

           
                List<bancos> Lpt = bd.bancos.ToList();
                List<Bancos> Vpt = new List<Bancos>();
                if (Lpt.Count.Equals(0))
                {
                    return Vpt;
                }
                else
                {
                    foreach (var item in Lpt)
                    {
                        Bancos Vp = new Bancos();
                        Vp.NOMBRE_BAN = item.NOMBRE_BANCO;
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
        /// Metodo retorna uan lista con todas las sepraciones realizada
        /// por un asesor seleccionado
        /// </summary>
        /// <param name="asesor"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> SepracionesAsesor(string asesor) {
            try
            {
                List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.ASESOR == asesor).ToList();
                List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
                if (ls.Count.Equals(0))
                {
                    return _Lseparacion;
                }
                else
                {
                    foreach (var item in ls)
                    {
                        Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                        separacion.ID_S = item.ID_SEPARACION;
                        separacion.CLIENTE = item.CLIENTE;
                        separacion.NOMBRES = item.NOMBRES;
                        separacion.P_APELLIDO = item.P_APELLIDO;
                        separacion.S_APELLIDO = item.S_APELLIDO;
                        separacion.TELEFONO2 = item.TELEFONO2;
                        separacion.DIRECCION = item.DIRECCION;
                        separacion.BARRIO = item.BARRIO;
                        separacion.INMUEBLE = item.INMUEBLE;
                        separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        separacion.FECHASEPARACION = item.FECHASEPARACION;
                        separacion.CASA = item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim();
                        DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                        separacion.DIAS = DIAS_TR;
                        separacion.ESTADO = item.ESTADO;
                        _Lseparacion.Add(separacion);
                    }
                    return _Lseparacion;
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
        /// <param name="p"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> SepracioneProyectos(string p)
        {
            try
            {
                List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.ID_PROYEC == p).ToList();
                List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
                if (ls.Count.Equals(0))
                {
                    return _Lseparacion;
                }
                else
                {
                    foreach (var item in ls)
                    {
                        Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                        separacion.ID_S = item.ID_SEPARACION;
                        separacion.CLIENTE = item.CLIENTE;
                        separacion.NOMBRES = item.NOMBRES;
                        separacion.P_APELLIDO = item.P_APELLIDO;
                        separacion.S_APELLIDO = item.S_APELLIDO;
                        separacion.TELEFONO2 = item.TELEFONO2;
                        separacion.DIRECCION = item.DIRECCION;
                        separacion.BARRIO = item.BARRIO;
                        separacion.INMUEBLE = item.INMUEBLE;
                        separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        separacion.FECHASEPARACION = item.FECHASEPARACION;
                        DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                        //item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim()
                        separacion.CASA = "CASA1";
                        separacion.DIAS = DIAS_TR;
                        separacion.ESTADO = item.ESTADO;
                        _Lseparacion.Add(separacion);
                    }
                    return _Lseparacion;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }


        /// <summary>
        /// Metodo retorna sepraciones realizadas por
        /// un asesor a un proyecto
        /// </summary>
        /// <param name="p"></param>
        /// <param name="asesor"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> SepracioneAP(string p, string asesor)
        {
            try
            {
                List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.ID_PROYEC == p && T.ASESOR == asesor).ToList();
                List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
                if (ls.Count.Equals(0))
                {
                    return _Lseparacion;
                }
                else
                {
                    foreach (var item in ls)
                    {
                        Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                        separacion.ID_S = item.ID_SEPARACION;
                        separacion.CLIENTE = item.CLIENTE;
                        separacion.NOMBRES = item.NOMBRES;
                        separacion.P_APELLIDO = item.P_APELLIDO;
                        separacion.S_APELLIDO = item.S_APELLIDO;
                        separacion.TELEFONO2 = item.TELEFONO2;
                        separacion.DIRECCION = item.DIRECCION;
                        separacion.BARRIO = item.BARRIO;
                        separacion.INMUEBLE = item.INMUEBLE;
                        separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        separacion.FECHASEPARACION = item.FECHASEPARACION;
                        DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                        separacion.CASA = item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim();
                        separacion.DIAS = DIAS_TR;
                        separacion.ESTADO = item.ESTADO;
                        _Lseparacion.Add(separacion);
                    }
                    return _Lseparacion;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Metodo para realiar la busqueda de todas las
        /// sepraciones realizada en un rango de fecha especificado
        /// </summary>
        /// <param name="p"></param>
        /// <param name="asesor"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> SepracioneFechas(DateTime inicio, DateTime fin)
        {
            try
            {
                List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.FECHASEPARACION >= inicio && T.FECHASEPARACION <= fin).ToList();
                List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
                if (ls.Count.Equals(0))
                {
                    return _Lseparacion;
                }
                else
                {
                    foreach (var item in ls)
                    {
                        Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                        separacion.CLIENTE = item.CLIENTE;
                        separacion.NOMBRES = item.NOMBRES;
                        separacion.P_APELLIDO = item.P_APELLIDO;
                        separacion.S_APELLIDO = item.S_APELLIDO;
                        separacion.TELEFONO2 = item.TELEFONO2;
                        separacion.DIRECCION = item.DIRECCION;
                        separacion.BARRIO = item.BARRIO;
                        separacion.INMUEBLE = item.INMUEBLE;
                        separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        separacion.FECHASEPARACION = item.FECHASEPARACION;
                        DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                        separacion.CASA = item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim();
                        separacion.DIAS = DIAS_TR;
                        separacion.ESTADO = item.ESTADO;
                        _Lseparacion.Add(separacion);
                    }
                    return _Lseparacion;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Vdetalleseparacion.SepracionInmueble> _Detalleseparacion(string c)
        {
            try
            {
                List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.CLIENTE == c).ToList();
                List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
                if (ls.Count.Equals(0))
                {
                    return _Lseparacion;
                }
                else
                {
                    foreach (var item in ls)
                    {
                        Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                        separacion.ID_S = item.ID_SEPARACION;
                        separacion.NOMBRES = item.NOMBRES;
                        separacion.P_APELLIDO = item.P_APELLIDO;
                        separacion.S_APELLIDO = item.S_APELLIDO;
                        separacion.TELEFONO2 = item.TELEFONO2;
                        separacion.DIRECCION = item.DIRECCION;
                        separacion.BARRIO = item.BARRIO;
                        separacion.INMUEBLE = item.INMUEBLE;
                        separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        separacion.FECHASEPARACION = item.FECHASEPARACION;
                        DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                        separacion.CASA = item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim();
                        separacion.DIAS = DIAS_TR;
                        separacion.ESTADO = item.ESTADO;
                        _Lseparacion.Add(separacion);
                    }
                    return _Lseparacion;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }


    
    }


}
/// <summary>
///Inicio de negocios para las separaciones en curso
/// </summary>
#region Inciar negocios
public class negocioR {

    CRMEntiti bd = new CRMEntiti();
    private int DIAS_TR;
    private string user = null;

    public List<EntiClientes> GetCliente(string c) {
        List<Vsepracioninmuebles> LisC = bd.Vsepracioninmuebles.Where(t => t.CLIENTE == c).ToList();
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
                Ec.CEDULA = item.CLIENTE;
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
                Ec.ASESOR = item.TRABAJADOR;
                Ec.SALA_V = item.NOMBRE_SALA;
                Ec.INFORMACION=item.INFORMACION;
                Ec.VALOR_INM=Convert.ToDecimal(item.VAL_INMUEBLE);
                Encl.Add(Ec);
            }
            return Encl;
        }
    }

    /// <summary>
    /// Metodo para realizar bsuqueda de las separaciones confirmadas listas
    /// para proceso de compra
    /// </summary>
    /// <param name="p"></param>
    /// <returns></returns>
    public List<Vdetalleseparacion.SepracionInmueble> Negocioseparacion(string p)
    {
        try
        {
            user = Membership.GetUser().ToString();
            List<Vsepracioninmuebles> ls = bd.Vsepracioninmuebles.Where(T => T.ID_PROYEC == p && T.ASESOR == user &&(T.ESTADO=="L" || T.ESTADO =="C")).ToList();
            List<Vdetalleseparacion.SepracionInmueble> _Lseparacion = new List<Vdetalleseparacion.SepracionInmueble>();
            if (ls.Count.Equals(0))
            {
                return _Lseparacion;
            }
            else
            {
                foreach (var item in ls)
                {
                    Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                    separacion.ID_S = item.ID_SEPARACION;
                    separacion.CLIENTE = item.CLIENTE;
                    separacion.NOMBRES = item.NOMBRES;
                    separacion.P_APELLIDO = item.P_APELLIDO;
                    separacion.S_APELLIDO = item.S_APELLIDO;
                    separacion.TELEFONO2 = item.TELEFONO2;
                    separacion.DIRECCION = item.DIRECCION;
                    separacion.BARRIO = item.BARRIO;
                    separacion.INMUEBLE = item.INMUEBLE;
                    separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                    separacion.FECHASEPARACION = item.FECHASEPARACION;
                    DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                    separacion.CASA = item.NOMBRE_BLO.Trim() + " - " + item.CASA.Trim();
                    separacion.DIAS = DIAS_TR;
                    separacion.ESTADO = item.ESTADO;
                    _Lseparacion.Add(separacion);
                }
                return _Lseparacion;
            }

        }
        catch (Exception)
        {

            throw;
        }
    }


    public List<EntiClientes> Getasociado(string c)
    {
        List<Vclientes> LisC = bd.Vclientes.Where(t => t.ASOCIADO == c).ToList();
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
                Ec.ASESOR = item.TRABAJADOR;
                Ec.SALA_V = item.NOMBRE_SALA;
                Ec.INFORMACION = item.INFORMACION;
                Encl.Add(Ec);
            }
            return Encl;
        }
    }
    
}
#endregion