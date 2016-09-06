CREATE TABLE [dbo].[tipo_personas] (
    [ID]   INT            IDENTITY (1, 1) NOT NULL,
    [TIPO] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_TipoPersonas] PRIMARY KEY CLUSTERED ([ID] ASC)
);

