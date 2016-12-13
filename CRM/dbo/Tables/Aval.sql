CREATE TABLE [dbo].[Aval] (
    [id]                 INT           IDENTITY (1, 1) NOT NULL,
    [Registro]           INT           NULL,
    [Propietario]        VARCHAR (150) NULL,
    [Residente]          VARCHAR (150) NULL,
    [Inspeccion]         VARCHAR (150) NULL,
    [Aprueba]            INT           NULL,
    [UsuarioAprueba]     VARCHAR (150) NULL,
    [FechaFinApro]       DATETIME      NULL,
    [ReferenciaInmueble] VARCHAR (50)  NULL,
    CONSTRAINT [PK_Aval] PRIMARY KEY CLUSTERED ([id] ASC)
);



