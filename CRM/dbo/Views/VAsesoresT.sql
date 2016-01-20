CREATE VIEW [dbo].[VAsesoresT]
AS
SELECT        COUNT(*) AS CONTADOR, dbo.trabajadores.NOMBRES, dbo.trabajadores.T_CEDULA
FROM            dbo.clientes INNER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA
GROUP BY dbo.trabajadores.NOMBRES, dbo.trabajadores.T_CEDULA


