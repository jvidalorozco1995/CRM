CREATE VIEW dbo.VistaAvalAntes
AS
SELECT        dbo.proyectos.NOMBRE_PROYEC, dbo.bloques.NOMBRE_BLO, inm.INMUOBRA, inm.MZA, inm.INMUEBLE, inm.REFERENCIA, dbo.negocio.PROPIETARIO AS 'NOMBRECLIENTE'
FROM            dbo.inmuebles AS inm INNER JOIN
                         dbo.bloques ON SUBSTRING(inm.REFERENCIA, 0, 7) = dbo.bloques.ID_BLOQUE INNER JOIN
                         dbo.proyectos ON dbo.bloques.BLOQUE_OBRA = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.inmueble_separacion ON dbo.inmueble_separacion.INMUEBLE = inm.REFERENCIA INNER JOIN
                         dbo.negocio ON dbo.negocio.CEDULA_P = dbo.inmueble_separacion.CLIENTE
GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VistaAvalAntes';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'       Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VistaAvalAntes';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
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
         Begin Table = "inm"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 209
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 6
               Left = 247
               Bottom = 136
               Right = 417
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 6
               Left = 455
               Bottom = 102
               Right = 642
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 6
               Left = 680
               Bottom = 136
               Right = 877
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 6
               Left = 915
               Bottom = 136
               Right = 1148
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
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
  ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VistaAvalAntes';

