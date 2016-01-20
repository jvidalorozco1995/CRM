CREATE VIEW [dbo].[Vspt]
AS
SELECT        dbo.proyectos.NOMBRE_PROYEC, dbo.trabajadores.T_CEDULA, dbo.proyectos.ID_PROYEC, dbo.proyectos_trabajador.ID_PY, dbo.trabajadores.NOMBRES, dbo.proyectos_trabajador.TRABAJADOR
FROM            dbo.proyectos_trabajador INNER JOIN
                         dbo.proyectos ON dbo.proyectos_trabajador.PROYECTO = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.trabajadores ON dbo.proyectos_trabajador.TRABAJADOR = dbo.trabajadores.T_CEDULA


