using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using DAL;
using CRMCLIENTES;
using System.Data.Entity.Infrastructure;

namespace CRMCLIENTES
{
    public class BLLGeneral
    {
        CRMEntiti bd = new CRMEntiti();
        public int InsertPostventa(Postventa p)
        {
            try
            {
                bd.Postventa.Add(p);
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
        public List<VPostventa> ListPostventa(string cedula, string codigo)
        {

            try
            {
                List<VPostventa> lisb = bd.VPostventa.Where(t => t.CEDULA_P == cedula || t.CODIGO_F == codigo).ToList();
                //bd.compromisosxcuota.ToList();
                List<VPostventa> lisbcrm = new List<VPostventa>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VPostventa entb = new VPostventa();
                        entb.CEDULA_P = item.CEDULA_P;
                        entb.CODIGO_F = item.CODIGO_F;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.PROPIETARIO = item.PROPIETARIO;
                        entb.TELEFONO_P = item.TELEFONO_P;
                        entb.CORREO = item.CORREO;

                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                 throw;
            }
        }
        public List<Postventa> ListPostventas(string cedula, string codigo)
        {

            try
            {
                List<Postventa> lisb = bd.Postventa.Where(t => t.CedulaP == cedula || t.CodCRM == codigo).ToList();
                //bd.compromisosxcuota.ToList();
                List<Postventa> lisbcrm = new List<Postventa>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Postventa entb = new Postventa();
                        entb.Id = item.Id;
                        entb.CedulaP = item.CedulaP;
                        entb.CodCRM = item.CodCRM;
                        entb.Proyecto = item.Proyecto;
                        entb.Mzna = item.Mzna;
                        entb.CodInmueble = item.CodInmueble;
                        entb.Propietario = item.Propietario;
                        entb.Telefono = item.Telefono;
                        entb.Correo = item.Correo;
                        entb.Descripcion = item.Descripcion;
                        entb.Estado = item.Estado;

                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Postventa> ListDetalle(int id)
        {

            try
            {
                List<Postventa> lisb = bd.Postventa.Where(t => t.Id == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Postventa> lisbcrm = new List<Postventa>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Postventa entb = new Postventa();
                        entb.Id = item.Id;
                        entb.CedulaP = item.CedulaP;
                        entb.CodCRM = item.CodCRM;
                        entb.Proyecto = item.Proyecto;
                        entb.Mzna = item.Mzna;
                        entb.CodInmueble = item.CodInmueble;
                        entb.Propietario = item.Propietario;
                        entb.Telefono = item.Telefono;
                        entb.Correo = item.Correo;
                        entb.Descripcion = item.Descripcion;
                        entb.Estado = item.Estado;

                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<NegocioView> ListNegocios(string cedula)
        {

            try
            {
                List<NegocioView> lisb = bd.NegocioView.Where(t => t.CEDULA_P == cedula).ToList();
                //bd.compromisosxcuota.ToList();
                List<NegocioView> lisbcrm = new List<NegocioView>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        NegocioView entb = new NegocioView();
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC.Trim();
                        entb.CODIGO_F = item.CODIGO_F;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.INMUEBLE = item.INMUEBLE.Substring(8,5);
                        entb.CLASE_INMU = item.CLASE_INMU;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}