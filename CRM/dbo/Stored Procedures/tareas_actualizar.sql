-- =============================================
-- Author:      
-- Create date: 
-- Description: 
-- =============================================
CREATE PROCEDURE [dbo].[tareas_actualizar]
 
AS
--BEGIN
--   SET NOCOUNT ON add  to prevent extra result sets from
--   interfering with SELECT statements.
--  SET NOCOUNT ON;
 
    -- Insert statements for procedure here

	UPDATE tareas
    SET tareas.ESTADO = 'V'
    WHERE ESTADO !='T';    
--END

