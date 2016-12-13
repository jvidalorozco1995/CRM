CREATE TABLE [dbo].[ItemAval] (
    [Id]              INT           IDENTITY (1, 1) NOT NULL,
    [IdAval]          INT           NULL,
    [Ambiente]        VARCHAR (150) NULL,
    [Numero]          INT           NULL,
    [Item]            VARCHAR (150) NULL,
    [Cumple]          INT           NULL,
    [Observaciones]   VARCHAR (500) NULL,
    [FechaCompromiso] DATETIME      NULL,
    [FechaRecibido]   DATETIME      NULL,
    [UsuarioAprueba]  VARCHAR (50)  NULL,
    CONSTRAINT [PK_ItemAval] PRIMARY KEY CLUSTERED ([Id] ASC)
);

