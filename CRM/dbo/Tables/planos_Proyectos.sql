CREATE TABLE [dbo].[planos_Proyectos] (
    [ID_PLA]   INT          IDENTITY (1, 1) NOT NULL,
    [PROYECT]  VARCHAR (10) NULL,
    [IMAGEN]   IMAGE        NULL,
    [TIPO_IMG] VARCHAR (25) NULL,
    CONSTRAINT [PK_planos_Proyectos] PRIMARY KEY CLUSTERED ([ID_PLA] ASC),
    FOREIGN KEY ([PROYECT]) REFERENCES [dbo].[proyectos] ([ID_PROYEC]) ON DELETE CASCADE
);

