using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLEmpresas
    {
        CRMEntiti db = new CRMEntiti();

        public int InsertEmpresa(empresas e) {
            try
            {
                    db.empresas.Add(e);
                    db.SaveChanges();
                    return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        public int AddPhone(string t,int empresa) {
            try
            {
                    if (t.Equals(""))
                    {

                    }
                    else
                    {
                        var ctx = db.empresas.First(e => e.ID_EMP == empresa);
                        ctx.TEL_EMP = t;
                        db.SaveChanges();
                        
                    }
                    return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        public List<EntiEmpresa> GetEmpresa()
        {
            try
            {
                List<empresas> lisem = db.empresas.ToList();
                List<EntiEmpresa> lisEm = new List<EntiEmpresa>();
                if (lisem.Count.Equals(0))
                {
                    return lisEm;
                }
                else
                {

                    foreach (var item in lisem)
                    {
                        EntiEmpresa em = new EntiEmpresa();
                        em.ID_EMP = item.ID_EMP;
                        em.NOMBRE_EMP = item.NOMBRE_EMP.ToUpper();
                        em.TEL_EMP = item.TEL_EMP;
                        lisEm.Add(em);
                    }
                    return lisEm;
                }
            }
            catch (Exception)
            {
                return null;
                throw;
            }
        }
    }
}
