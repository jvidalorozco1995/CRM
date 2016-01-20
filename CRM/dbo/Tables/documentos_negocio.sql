CREATE TABLE [dbo].[documentos_negocio] (
    [ID]        INT           IDENTITY (1, 1) NOT NULL,
    [NEGOCIO]   VARCHAR (50)  NULL,
    [DOCUMENTO] VARCHAR (300) NULL,
    CONSTRAINT [PK_documentos_negocio] PRIMARY KEY CLUSTERED ([ID] ASC)
);

