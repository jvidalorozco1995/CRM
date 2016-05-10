CREATE TABLE [dbo].[Documento] (
    [Id]           INT           NOT NULL,
    [Id_Actividad] INT           NULL,
    [Nombre]       VARCHAR (250) NULL,
    CONSTRAINT [PK_Documento] PRIMARY KEY CLUSTERED ([Id] ASC)
);

