CREATE TABLE [dbo].[ResponsableCalidad] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [Proyecto] VARCHAR (150) NULL,
    [Usuario]  VARCHAR (150) NULL,
    CONSTRAINT [PK_ResponsableCalidad] PRIMARY KEY CLUSTERED ([Id] ASC)
);

