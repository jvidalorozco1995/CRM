CREATE TABLE [dbo].[Aval] (
    [id]             INT           IDENTITY (1, 1) NOT NULL,
    [Registro]       INT           NULL,
    [Proyecto]       VARCHAR (150) NULL,
    [Inmueble]       VARCHAR (150) NULL,
    [Propietario]    VARCHAR (150) NULL,
    [Residente]      VARCHAR (150) NULL,
    [Inspeccion]     VARCHAR (150) NULL,
    [Aprueba]        INT           NULL,
    [UsuarioAprueba] VARCHAR (150) NULL,
    [FechaInsp1]     DATETIME      NULL,
    [FechaInsp2]     DATETIME      NULL,
    [FechaFinApro]   DATETIME      NULL,
    CONSTRAINT [PK_Aval] PRIMARY KEY CLUSTERED ([id] ASC)
);

