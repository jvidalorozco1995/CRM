CREATE TABLE [dbo].[Postventa] (
    [Id]            INT           IDENTITY (1, 1) NOT NULL,
    [CedulaP]       VARCHAR (50)  NULL,
    [CodCRM]        VARCHAR (50)  NULL,
    [Proyecto]      VARCHAR (50)  NULL,
    [Mzna]          VARCHAR (250) NULL,
    [CodInmueble]   VARCHAR (10)  NULL,
    [Propietario]   VARCHAR (250) NULL,
    [Telefono]      VARCHAR (50)  NULL,
    [Correo]        VARCHAR (150) NULL,
    [Descripcion]   VARCHAR (MAX) NULL,
    [NombreAdjunto] VARCHAR (50)  NULL,
    [Estado]        INT           NULL,
    CONSTRAINT [PK_Postventa] PRIMARY KEY CLUSTERED ([Id] ASC)
);

