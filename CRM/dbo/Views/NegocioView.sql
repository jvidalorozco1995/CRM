CREATE VIEW dbo.NegocioView
AS
SELECT        dbo.negocio.ID_NEGOCIO, dbo.negocio.PROPIETARIO, dbo.negocio.CEDULA_P, dbo.negocio.ESTADO_C, dbo.negocio.EXPEDICION, dbo.negocio.FECHA_NACI, dbo.negocio.LUGAR, dbo.negocio.DIRECCION_R, 
                         dbo.negocio.TELEFONO_P, dbo.negocio.EMPRESA, dbo.negocio.TELFONO_EMP, dbo.negocio.CARGO, dbo.negocio.PROFESION, dbo.negocio.DIRECCION_EMPR, dbo.negocio.ANTIGUEDAD, 
                         dbo.negocio.CORREO, dbo.negocio.NOMBRE_CONY, dbo.negocio.CEDULA_CUY, dbo.negocio.TELE_CONY, dbo.negocio.N_HIJO, dbo.negocio.INTERES_COM, dbo.negocio.VALOR_CASA, dbo.negocio.INICIAL, 
                         dbo.negocio.CREDITO, dbo.negocio.BANCO, dbo.negocio.NO_CREDITO, dbo.negocio.FECHA_ES, dbo.negocio.FECHA_ENT, dbo.negocio.FECHA_SUBRO, dbo.negocio.ASESOR_INFO, dbo.negocio.MEDIO_ENT, 
                         dbo.negocio.ASOCIADO, dbo.negocio.CLASE_INMU, dbo.negocio.ID_HOJA, dbo.negocio.SEPARACION, dbo.trabajadores.NOMBRES, dbo.proyectos.NOMBRE_PROYEC, dbo.negocio.INGRESO
FROM            dbo.trabajadores INNER JOIN
                         dbo.negocio ON dbo.trabajadores.T_CEDULA = dbo.negocio.USER_CREO INNER JOIN
                         dbo.proyectos ON dbo.negocio.PROYECTO_INT = dbo.proyectos.ID_PROYEC

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
         Begin Table = "trabajadores"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 326
               Right = 849
            End
            DisplayFlags = 280
            TopColumn = 24
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 138
               Left = 38
               Bottom = 234
               Right = 225
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
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'NegocioView';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'NegocioView';

