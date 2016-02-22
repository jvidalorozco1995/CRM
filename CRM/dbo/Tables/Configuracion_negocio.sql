CREATE TABLE [dbo].[Configuracion_negocio] (
    [ID]       INT          IDENTITY (1, 1) NOT NULL,
    [Nombre]   TEXT         NULL,
    [Proyecto] VARCHAR (10) NULL,
    [Estado]   INT          NULL,
    CONSTRAINT [PK_Configuracion_negocio] PRIMARY KEY CLUSTERED ([ID] ASC)
);



