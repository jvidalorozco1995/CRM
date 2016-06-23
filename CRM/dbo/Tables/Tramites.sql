CREATE TABLE [dbo].[Tramites] (
    [id]     INT          IDENTITY (1, 1) NOT NULL,
    [Nombre] VARCHAR (50) NULL,
    [Banco]  INT          NULL,
    CONSTRAINT [PK_Tramites] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_Tramites_bancos] FOREIGN KEY ([Banco]) REFERENCES [dbo].[bancos] ([ID_BANCO])
);





