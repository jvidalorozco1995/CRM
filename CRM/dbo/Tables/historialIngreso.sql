CREATE TABLE [dbo].[historialIngreso] (
    [CODIGO] INT          IDENTITY (1, 1) NOT NULL,
    [ASESOR] VARCHAR (80) NULL,
    [FECHA]  DATETIME     NULL,
    CONSTRAINT [PK_HistorialIngreso] PRIMARY KEY CLUSTERED ([CODIGO] ASC)
);

