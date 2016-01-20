CREATE VIEW [dbo].[Vinmuebles]
AS
SELECT        dbo.inmuebles.INMUDECS, dbo.inmuebles.INMUEBLE, dbo.inmuebles.AREA, dbo.inmuebles.VAL_INMUEBLE, dbo.inmuebles.INMUESTADO, dbo.proyectos.ID_PROYEC, dbo.proyectos.NOMBRE_PROYEC, 
                         dbo.inmuebles.REFERENCIA, dbo.bloques.ID_BLOQUE, dbo.bloques.NOMBRE_BLO, dbo.bloques.BLOQUE_CODI
FROM            dbo.bloques INNER JOIN
                         dbo.inmuebles ON dbo.bloques.ID_BLOQUE = dbo.inmuebles.INMUOBRA INNER JOIN
                         dbo.proyectos ON dbo.bloques.BLOQUE_OBRA = dbo.proyectos.ID_PROYEC


