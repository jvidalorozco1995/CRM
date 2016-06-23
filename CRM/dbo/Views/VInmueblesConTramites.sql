CREATE VIEW dbo.VInmueblesConTramites
AS
SELECT        dbo.Actividades_Inmueble.IdTraInmueble, dbo.inmuebles.REFERENCIA, dbo.inmuebles.INMUOBRA, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUEBLE, dbo.negocio.PROYECTO_INT, 
                         dbo.negocio.ID_NEGOCIO, dbo.negocio.PROPIETARIO, dbo.negocio.CEDULA_P, dbo.negocio.BANCO, dbo.Tramites.Nombre AS Tramite, dbo.Tramites.id AS IdTramite, dbo.Tramites.Banco AS IdBanco, 
                         dbo.negocio.CODIGO_F, dbo.negocio.USER_CARTERA
FROM            dbo.inmuebles INNER JOIN
                         dbo.inmueble_separacion ON dbo.inmueble_separacion.INMUEBLE = dbo.inmuebles.REFERENCIA INNER JOIN
                         dbo.negocio ON dbo.negocio.SEPARACION = dbo.inmueble_separacion.ID_SEPARACION LEFT OUTER JOIN
                         dbo.Tramites_Inmueble ON dbo.Tramites_Inmueble.Id_Inmueble = dbo.inmuebles.REFERENCIA LEFT OUTER JOIN
                         dbo.Tramites ON dbo.Tramites.id = dbo.Tramites_Inmueble.id_Tramite LEFT OUTER JOIN
                         dbo.bloques ON dbo.bloques.ID_BLOQUE = dbo.inmuebles.INMUOBRA LEFT OUTER JOIN
                         dbo.Actividades_Inmueble ON dbo.Actividades_Inmueble.IdTraInmueble = dbo.Tramites_Inmueble.id
GROUP BY dbo.Actividades_Inmueble.IdTraInmueble, dbo.inmuebles.REFERENCIA, dbo.inmuebles.INMUOBRA, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUEBLE, dbo.negocio.PROYECTO_INT, 
                         dbo.negocio.ID_NEGOCIO, dbo.negocio.PROPIETARIO, dbo.negocio.CEDULA_P, dbo.negocio.BANCO, dbo.Tramites.Nombre, dbo.Tramites.id, dbo.Tramites.Banco, dbo.negocio.CODIGO_F, 
                         dbo.negocio.USER_CARTERA
GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VInmueblesConTramites';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'End
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
      Begin ColumnWidths = 10
         Width = 284
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
      Begin ColumnWidths = 12
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
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VInmueblesConTramites';


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
         Begin Table = "inmuebles"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 209
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 6
               Left = 247
               Bottom = 136
               Right = 444
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 6
               Left = 482
               Bottom = 136
               Right = 668
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Tramites_Inmueble"
            Begin Extent = 
               Top = 6
               Left = 706
               Bottom = 136
               Right = 876
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Tramites"
            Begin Extent = 
               Top = 6
               Left = 914
               Bottom = 119
               Right = 1084
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 6
               Left = 1122
               Bottom = 136
               Right = 1292
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Actividades_Inmueble"
            Begin Extent = 
               Top = 120
               Left = 914
               Bottom = 250
               Right = 1120
            ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VInmueblesConTramites';

