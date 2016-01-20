CREATE VIEW [dbo].[Vsepracioninmuebles]
AS
SELECT        dbo.proyectos.NOMBRE_PROYEC, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUEBLE AS CASA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.ESTADO_CIVIL, 
                         dbo.clientes.DIRECCION, dbo.clientes.BARRIO, dbo.clientes.TELEFONO2, dbo.proyectos.ID_PROYEC, dbo.inmuebles.VAL_INMUEBLE, dbo.Vclienteseparacion.CLIENTE, DATEDIFF(DD, 
                         dbo.inmueble_separacion.FECHASEPARACION, GETDATE()) AS DIAS_T, DATEDIFF(DD, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL) AS DIAS, 
                         dbo.inmueble_separacion.INMUEBLE, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL, dbo.inmueble_separacion.ESTADO, dbo.inmuebles.INMUDECS, 
                         dbo.clientes.PROYEC_INTERES, dbo.clientes.EMAIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, dbo.clientes.PRESU_COMPRA, dbo.clientes.INTERES_VI, dbo.clientes.MOT_COMPRA, 
                         dbo.clientes.INFORMACION, dbo.empresas.ID_EMP, dbo.empresas.NOMBRE_EMP, dbo.empresas.TEL_EMP, dbo.sala_ventas.NOMBRE_SALA, dbo.sala_ventas.ID_SALA, 
                         dbo.trabajadores.NOMBRES AS TRABAJADOR, dbo.clientes.ASESOR, dbo.clientes.INMU_INTERES, dbo.inmueble_separacion.ID_SEPARACION
FROM            dbo.inmueble_separacion INNER JOIN
                         dbo.inmuebles ON dbo.inmueble_separacion.INMUEBLE = dbo.inmuebles.REFERENCIA INNER JOIN
                         dbo.Vclienteseparacion INNER JOIN
                         dbo.proyectos INNER JOIN
                         dbo.clientes ON dbo.proyectos.ID_PROYEC = dbo.clientes.PROYEC_INTERES ON dbo.Vclienteseparacion.CLIENTE = dbo.clientes.CEDULA ON dbo.inmueble_separacion.CLIENTE = dbo.clientes.CEDULA AND 
                         dbo.inmueble_separacion.ID_SEPARACION = dbo.Vclienteseparacion.ID_SEPARACION INNER JOIN
                         dbo.bloques ON dbo.inmuebles.INMUOBRA = dbo.bloques.ID_BLOQUE AND dbo.proyectos.ID_PROYEC = dbo.bloques.BLOQUE_OBRA INNER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP INNER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA INNER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA


