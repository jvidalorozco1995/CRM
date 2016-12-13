CREATE TABLE [dbo].[INMUEBLES_ENTREGAS] (
    [ID_INMUEBLES_ENTREGAS] INT           IDENTITY (1, 1) NOT NULL,
    [ID_ENTREGA]            INT           NULL,
    [REFERENCIA_INMUEBLE]   VARCHAR (16)  NULL,
    [FECHAREG]              DATETIME      NULL,
    [CONFIRMAOBRA]          INT           NULL,
    [FECHACONFIRMA]         DATETIME      NULL,
    [INSPECCIONCAL]         VARCHAR (20)  NULL,
    [ESTADOAVAL]            INT           NULL,
    [RADICADOVENTA]         DATE          NULL,
    [ENTREGAOBRA]           DATE          NULL,
    [FECHACLIENTE]          DATE          NULL,
    [ESTADOENTREGA]         INT           NULL,
    [FECHAENTREGA]          DATE          NULL,
    [OBSERVACIONES]         VARCHAR (250) NULL,
    [DOCUMENTO]             VARCHAR (250) NULL,
    CONSTRAINT [PK_INMUEBLES_ENTREGAS] PRIMARY KEY CLUSTERED ([ID_INMUEBLES_ENTREGAS] ASC),
    CONSTRAINT [FK_INMUEBLES_ENTREGAS_Entregas] FOREIGN KEY ([ID_ENTREGA]) REFERENCES [dbo].[Entregas] ([ID_ENTREGAS]),
    CONSTRAINT [FK_INMUEBLES_ENTREGAS_inmuebles] FOREIGN KEY ([REFERENCIA_INMUEBLE]) REFERENCES [dbo].[inmuebles] ([REFERENCIA])
);






GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_INMUEBLES_ENTREGAS]
    ON [dbo].[INMUEBLES_ENTREGAS]([REFERENCIA_INMUEBLE] ASC);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'El inmueble ya tiene una solicitud de entrega', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'INMUEBLES_ENTREGAS', @level2type = N'INDEX', @level2name = N'IX_INMUEBLES_ENTREGAS';

