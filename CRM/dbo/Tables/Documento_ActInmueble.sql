CREATE TABLE [dbo].[Documento_ActInmueble] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [IdActividad] INT           NULL,
    [Documento]   VARCHAR (350) NULL,
    [Nombre]      VARCHAR (250) NULL,
    [Fecha]       DATETIME      NULL,
    [Usuario]     VARCHAR (50)  NULL,
    CONSTRAINT [PK_Documento_ActInmueble] PRIMARY KEY CLUSTERED ([Id] ASC)
);



