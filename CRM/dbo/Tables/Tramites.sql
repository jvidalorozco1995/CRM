CREATE TABLE [dbo].[Tramites] (
    [id]     INT          IDENTITY (1, 1) NOT NULL,
    [Nombre] VARCHAR (50) NULL,
    [Banco]  VARCHAR (50) NULL,
    CONSTRAINT [PK_Tramites] PRIMARY KEY CLUSTERED ([id] ASC)
);



