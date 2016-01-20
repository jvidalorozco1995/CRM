CREATE VIEW [dbo].[VClientesTareas]
AS
SELECT        dbo.clientes.CEDULA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.DIRECCION, dbo.clientes.TELEFONO2, dbo.clientes.PROYEC_INTERES, dbo.clientes.ASESOR, 
                         dbo.VistaTareasPorClientes.CLIENTE, dbo.VistaTareasPorClientes.ID_TAREA,
                             (SELECT        ESTADO
                               FROM            dbo.tareas
                               WHERE        (ID_TAREA = dbo.VistaTareasPorClientes.ID_TAREA)) AS ESTADO, dbo.clientes.EMAIL, dbo.proyectos.NOMBRE_PROYEC, dbo.trabajadores.NOMBRES AS NOMBE_AS, 
                         dbo.clientes.FECHACREACION, dbo.clientes.SALA_VENTA, dbo.sala_ventas.NOMBRE_SALA, dbo.clientes.BARRIO, dbo.clientes.ESTADO_CIVIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, 
                         dbo.clientes.PRESU_COMPRA, dbo.clientes.INMU_INTERES, dbo.clientes.INFORMACION, dbo.empresas.NOMBRE_EMP, dbo.empresas.TEL_EMP
FROM            dbo.clientes INNER JOIN
                         dbo.proyectos ON dbo.clientes.PROYEC_INTERES = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA INNER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP LEFT OUTER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA LEFT OUTER JOIN
                         dbo.VistaTareasPorClientes ON dbo.VistaTareasPorClientes.CLIENTE = dbo.clientes.CEDULA


