CREATE VIEW dbo.Vclientes
AS
SELECT        dbo.clientes.CEDULA, dbo.empresas.NOMBRE_EMP, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.ESTADO_CIVIL, dbo.clientes.DIRECCION, dbo.clientes.BARRIO, 
                         dbo.clientes.TELEFONO2, dbo.clientes.PROYEC_INTERES, dbo.clientes.EMAIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, dbo.clientes.PRESU_COMPRA, dbo.clientes.INMU_INTERES, 
                         dbo.clientes.INTERES_VI, dbo.clientes.MOT_COMPRA, dbo.clientes.FECHACREACION, dbo.clientes.FECHAMOD, dbo.clientes.INFORMACION, dbo.empresas.ID_EMP, dbo.trabajadores.NOMBRES AS TRABAJADOR,
                          dbo.empresas.TEL_EMP, dbo.sala_ventas.NOMBRE_SALA, dbo.clientes.ASOCIADO, dbo.clientes.ASESOR, dbo.clientes.TIPO_PERSONA, dbo.clientes.TIPO_DOCUMENTO, dbo.clientes.DIRECCION_CORRESPON, 
                         dbo.clientes.CELULAR
FROM            dbo.clientes LEFT OUTER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP LEFT OUTER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA LEFT OUTER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA



GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vclientes';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'dth = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 2895
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vclientes';




GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[37] 4[2] 2[25] 3) )"
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
         Left = -86
      End
      Begin Tables = 
         Begin Table = "clientes"
            Begin Extent = 
               Top = 0
               Left = 888
               Bottom = 339
               Right = 1122
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "empresas"
            Begin Extent = 
               Top = 6
               Left = 260
               Bottom = 230
               Right = 430
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "trabajadores"
            Begin Extent = 
               Top = 6
               Left = 468
               Bottom = 136
               Right = 638
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "sala_ventas"
            Begin Extent = 
               Top = 294
               Left = 124
               Bottom = 390
               Right = 295
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
      Begin ColumnWidths = 27
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
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Wi', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vclientes';



