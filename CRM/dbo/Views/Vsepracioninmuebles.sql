CREATE VIEW dbo.Vsepracioninmuebles
AS
SELECT        dbo.proyectos.NOMBRE_PROYEC, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUEBLE AS CASA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.ESTADO_CIVIL, 
                         dbo.clientes.DIRECCION, dbo.clientes.BARRIO, dbo.clientes.TELEFONO2, dbo.proyectos.ID_PROYEC, dbo.inmuebles.VAL_INMUEBLE, dbo.Vclienteseparacion.CLIENTE, DATEDIFF(DD, 
                         dbo.inmueble_separacion.FECHASEPARACION, GETDATE()) AS DIAS_T, DATEDIFF(DD, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL) AS DIAS, 
                         dbo.inmueble_separacion.INMUEBLE, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL, dbo.inmueble_separacion.ESTADO, dbo.inmuebles.INMUDECS, 
                         dbo.clientes.PROYEC_INTERES, dbo.clientes.EMAIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, dbo.clientes.PRESU_COMPRA, dbo.clientes.INTERES_VI, dbo.clientes.MOT_COMPRA, 
                         dbo.clientes.INFORMACION, dbo.empresas.ID_EMP, dbo.empresas.NOMBRE_EMP, dbo.empresas.TEL_EMP, dbo.sala_ventas.NOMBRE_SALA, dbo.sala_ventas.ID_SALA, 
                         dbo.trabajadores.NOMBRES AS TRABAJADOR, dbo.clientes.ASESOR, dbo.clientes.INMU_INTERES, dbo.inmueble_separacion.ID_SEPARACION, dbo.negocio.CODIGO_F, dbo.negocio.ID_NEGOCIO, 
                         dbo.tipo_personas.TIPO, dbo.tipo_documentos.TIPO AS TIPODOCUMENTO
FROM            dbo.negocio RIGHT OUTER JOIN
                         dbo.tipo_personas INNER JOIN
                         dbo.inmueble_separacion INNER JOIN
                         dbo.inmuebles ON dbo.inmueble_separacion.INMUEBLE = dbo.inmuebles.REFERENCIA INNER JOIN
                         dbo.Vclienteseparacion INNER JOIN
                         dbo.proyectos INNER JOIN
                         dbo.clientes ON dbo.proyectos.ID_PROYEC = dbo.clientes.PROYEC_INTERES ON dbo.Vclienteseparacion.CLIENTE = dbo.clientes.CEDULA ON dbo.inmueble_separacion.CLIENTE = dbo.clientes.CEDULA AND 
                         dbo.inmueble_separacion.ID_SEPARACION = dbo.Vclienteseparacion.ID_SEPARACION INNER JOIN
                         dbo.bloques ON dbo.inmuebles.INMUOBRA = dbo.bloques.ID_BLOQUE AND dbo.proyectos.ID_PROYEC = dbo.bloques.BLOQUE_OBRA INNER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP INNER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA INNER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA ON dbo.tipo_personas.ID = dbo.clientes.TIPO_PERSONA INNER JOIN
                         dbo.tipo_documentos ON dbo.clientes.TIPO_DOCUMENTO = dbo.tipo_documentos.ID ON dbo.negocio.SEPARACION = dbo.Vclienteseparacion.ID_SEPARACION



GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vsepracioninmuebles';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'    DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "sala_ventas"
            Begin Extent = 
               Top = 204
               Left = 615
               Bottom = 300
               Right = 786
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "trabajadores"
            Begin Extent = 
               Top = 241
               Left = 394
               Bottom = 371
               Right = 564
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 6
               Left = 1215
               Bottom = 426
               Right = 1401
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "tipo_documentos"
            Begin Extent = 
               Top = 282
               Left = 1048
               Bottom = 378
               Right = 1218
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "tipo_personas"
            Begin Extent = 
               Top = 145
               Left = 1052
               Bottom = 241
               Right = 1222
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
      Begin ColumnWidths = 42
         Width = 284
         Width = 2235
         Width = 3885
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
         Width = 885
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
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 4560
         Alias = 900
         Table = 6120
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vsepracioninmuebles';




GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[52] 4[4] 2[15] 3) )"
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
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 3
               Left = 214
               Bottom = 226
               Right = 411
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmuebles"
            Begin Extent = 
               Top = 0
               Left = 37
               Bottom = 223
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "Vclienteseparacion"
            Begin Extent = 
               Top = 6
               Left = 408
               Bottom = 228
               Right = 604
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 8
               Left = 609
               Bottom = 199
               Right = 796
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clientes"
            Begin Extent = 
               Top = 5
               Left = 803
               Bottom = 369
               Right = 987
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 230
               Left = 35
               Bottom = 410
               Right = 205
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "empresas"
            Begin Extent = 
               Top = 3
               Left = 1007
               Bottom = 116
               Right = 1177
            End
        ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vsepracioninmuebles';



