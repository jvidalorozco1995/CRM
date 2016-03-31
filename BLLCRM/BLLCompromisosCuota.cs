using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLCompromisosCuota
    {

            CRMEntiti bd = new CRMEntiti();

            /// <summary>
            /// Meotod para registrar los bancos en base de datos
            /// crm
            /// </summary>
            /// <param name="b"></param>
            /// <returns></returns>
            public int InserCompromisoCuota(compromisosxcuota b)
            {
                try
                {
                    bd.compromisosxcuota.Add(b);
                    bd.SaveChanges();
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




            /// <summary>
            /// rertorna listado de bancos pertenecientes al proyecto
            /// </summary>
            /// <param name="b"></param>
            /// <returns></returns>
            public List<compromisosxcuota> Listcompromisosxcuota()
            {

                try
                {
                    List<compromisosxcuota> lisb = bd.compromisosxcuota.ToList();
                    List<compromisosxcuota> lisbcrm = new List<compromisosxcuota>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                            compromisosxcuota entb = new compromisosxcuota();
                            entb.ID = item.ID;
                            entb.ID_TAREA = item.ID_TAREA;
                            entb.CODIGO = item.CODIGO;
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

