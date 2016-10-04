CREATE TABLE [dbo].[Item] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Item] VARCHAR (150) NULL,
    CONSTRAINT [PK_Item] PRIMARY KEY CLUSTERED ([Id] ASC)
);

