CREATE TABLE [dbo].[acuerdo_fox] (
    [ID]           INT             IDENTITY (1, 1) NOT NULL,
    [CODIGO]       VARCHAR (50)    NULL,
    [REFERENCIA1]  VARCHAR (100)   NULL,
    [INMUEBLE]     VARCHAR (15)    NULL,
    [NEGOCIO]      VARCHAR (15)    NULL,
    [FECHANEGOCIO] VARCHAR (30)    NULL,
    [CONCEPTO]     TEXT            NULL,
    [FECHACUOTA]   VARCHAR (30)    NULL,
    [ANO]          VARCHAR (10)    NULL,
    [MES]          VARCHAR (10)    NULL,
    [DIA]          VARCHAR (10)    NULL,
    [VLRCUOTA]     DECIMAL (20, 2) NULL,
    [PAGOCUOTA]    DECIMAL (20, 2) NULL,
    [SALDOXCOBRAR] DECIMAL (20, 2) NULL,
    [FECHACARTERA] VARCHAR (30)    NULL,
    [CODCRM]       VARCHAR (15)    NULL,
    [CODIGOTAREA]  INT             NULL,
    CONSTRAINT [PK_acuerdo_fox] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_acuerdo_fox_negocio_fox] FOREIGN KEY ([CODCRM]) REFERENCES [dbo].[negocio_fox] ([CODIGOCRM]) ON DELETE CASCADE ON UPDATE CASCADE
);




GO


CREATE TRIGGER [dbo].[triggerTablaPruebas] ON [dbo].[acuerdo_fox]


AFTER INSERT, UPDATE, DELETE
	AS

	(SELECT FECHACARTERA  FROM INSERTED)

BEGIN TRY 
IF(SELECT ISDATE (FECHACARTERA)  FROM INSERTED)=1
   
  BEGIN
    INSERT INTO tareas (CLIENTE,TRABAJADOR,CONCEPTO,FECHAINICIO,FECHAFIN,ESTADO)
	(SELECT 
	 CEDULA_P
	,USER_CARTERA
	,'Tarea de cartera cliente'
	,(SELECT  convert(datetime, FECHACARTERA,104)  FROM INSERTED AS I)
	,(SELECT convert(datetime, FECHACARTERA,104)  FROM INSERTED AS I),'T' 
	FROM negocio WHERE CODIGO_F = (SELECT I.CODCRM FROM INSERTED AS I))  
	END 
END TRY
BEGIN CATCH
    -- Execute the error retrieval routine.
        SELECT 
       /*ERROR_NUMBER() AS ErrorNumber,*/
        ERROR_SEVERITY() AS ErrorSeverity,
        ERROR_STATE() as ErrorState,
        ERROR_PROCEDURE() as ErrorProcedure,
        ERROR_LINE() as ErrorLine,
        ERROR_MESSAGE() as ErrorMessage;   
END CATCH