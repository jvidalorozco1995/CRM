CREATE VIEW [dbo].[Vclienteseparacion]
AS
SELECT        CLIENTE, MAX(ID_SEPARACION) AS ID_SEPARACION
FROM            dbo.inmueble_separacion
WHERE        (CLIENTE IN
                             (SELECT        CEDULA
                               FROM            dbo.clientes))
GROUP BY CLIENTE


