CREATE VIEW [dbo].[Vclientes]
AS
SELECT        dbo.clientes.CEDULA, dbo.empresas.NOMBRE_EMP, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.ESTADO_CIVIL, dbo.clientes.DIRECCION, dbo.clientes.BARRIO, 
                         dbo.clientes.TELEFONO2, dbo.clientes.PROYEC_INTERES, dbo.clientes.EMAIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, dbo.clientes.PRESU_COMPRA, dbo.clientes.INMU_INTERES, 
                         dbo.clientes.INTERES_VI, dbo.clientes.MOT_COMPRA, dbo.clientes.FECHACREACION, dbo.clientes.FECHAMOD, dbo.clientes.INFORMACION, dbo.empresas.ID_EMP, dbo.trabajadores.NOMBRES AS TRABAJADOR,
                          dbo.empresas.TEL_EMP, dbo.sala_ventas.NOMBRE_SALA, dbo.clientes.ASOCIADO
FROM            dbo.clientes LEFT OUTER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP LEFT OUTER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA LEFT OUTER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA


