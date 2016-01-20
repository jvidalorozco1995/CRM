CREATE VIEW dbo.VnegocioFox
AS
SELECT        dbo.negocio_fox.NOMBREBLOQUE, dbo.negocio.CEDULA_P, dbo.negocio_fox.NOMBRECLIENTE, dbo.negocio_fox.CODIGOINMUEBLE, dbo.negocio_fox.CODIGOCRM, 
                         dbo.proyectos.NOMBRE_PROYEC AS SUCURSAL, dbo.negocio_fox.SUCURSAL + dbo.negocio_fox.NEGOCIO AS NEGOCIO, dbo.negocio_fox.ID, dbo.negocio_fox.VLRCREDITO, dbo.negocio_fox.VLRINICIALCUOTA, 
                         dbo.negocio_fox.VLRNEGOCIO, dbo.negocio_fox.FECHANEGOCIO, dbo.negocio.DOCUMENTO, dbo.negocio.TELEFONO_P, dbo.negocio.TELFONO_EMP, 'DESISTIDO' AS Estado
FROM            dbo.negocio_fox INNER JOIN
                         dbo.negocio ON dbo.negocio_fox.CODIGOCRM = dbo.negocio.CODIGO_F INNER JOIN
                         dbo.proyectos ON dbo.negocio_fox.SUCURSAL = dbo.proyectos.ID_PROYEC
WHERE        DESISTIDO = 'True'
UNION
SELECT        dbo.negocio_fox.NOMBREBLOQUE, dbo.negocio.CEDULA_P, dbo.negocio_fox.NOMBRECLIENTE, dbo.negocio_fox.CODIGOINMUEBLE, dbo.negocio_fox.CODIGOCRM, 
                         dbo.proyectos.NOMBRE_PROYEC AS SUCURSAL, dbo.negocio_fox.SUCURSAL + dbo.negocio_fox.NEGOCIO AS NEGOCIO, dbo.negocio_fox.ID, dbo.negocio_fox.VLRCREDITO, dbo.negocio_fox.VLRINICIALCUOTA, 
                         dbo.negocio_fox.VLRNEGOCIO, dbo.negocio_fox.FECHANEGOCIO, dbo.negocio.DOCUMENTO, dbo.negocio.TELEFONO_P, dbo.negocio.TELFONO_EMP, 'FOX' AS Estado
FROM            dbo.negocio_fox INNER JOIN
                         dbo.negocio ON dbo.negocio_fox.CODIGOCRM = dbo.negocio.CODIGO_F INNER JOIN
                         dbo.proyectos ON dbo.negocio_fox.SUCURSAL = dbo.proyectos.ID_PROYEC
WHERE        DESISTIDO = 'False'
UNION
SELECT        bloques.NOMBRE_BLO, negocio.CEDULA_P, clientes.NOMBRES + ' ' + clientes.P_APELLIDO + ' ' + clientes.S_APELLIDO AS NOMBRECLIENTE, inmuebles.REFERENCIA, negocio.CODIGO_F, 
                         proyectos.NOMBRE_PROYEC, negocio.CODIGO_F, negocio.ID_HOJA, negocio.CREDITO, negocio.INICIAL, NULL, NULL, DOCUMENTO, clientes.TELEFONO2, negocio.TELFONO_EMP, 'CRM' AS Estado
FROM            dbo.negocio INNER JOIN
                         clientes ON CEDULA = negocio.CEDULA_P INNER JOIN
                         inmueble_separacion ON ID_SEPARACION = negocio.SEPARACION INNER JOIN
                         inmuebles ON inmueble_separacion.INMUEBLE = inmuebles.REFERENCIA INNER JOIN
                         bloques ON bloques.ID_BLOQUE + bloques.BLOQUE_CODI = inmuebles.INMUOBRA + inmuebles.MZA INNER JOIN
                         proyectos ON proyectos.ID_PROYEC = SUBSTRING(inmuebles.REFERENCIA, 0, 4)
WHERE        CODIGO_F NOT IN
                             (SELECT        CODIGOCRM
                               FROM            negocio_fox)

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[42] 4[20] 2[24] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 17
         Width = 284
         Width = 2445
         Width = 1905
         Width = 3390
         Width = 2340
         Width = 2685
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 2655
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VnegocioFox';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VnegocioFox';

