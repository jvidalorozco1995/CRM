CREATE TABLE [dbo].[ItemXambiente] (
    [Id]          INT IDENTITY (1, 1) NOT NULL,
    [IdAmbiente]  INT NULL,
    [IdItem]      INT NULL,
    [Consecutivo] INT NULL,
    CONSTRAINT [PK_ItemXambiente] PRIMARY KEY CLUSTERED ([Id] ASC)
);

