CREATE TABLE [dbo].[tipo_documentos] (
    [ID]   INT            IDENTITY (1, 1) NOT NULL,
    [TIPO] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_tipo_documentos] PRIMARY KEY CLUSTERED ([ID] ASC)
);

