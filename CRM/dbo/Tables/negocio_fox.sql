CREATE TABLE [dbo].[negocio_fox] (
    [ID]                            INT             IDENTITY (1, 1) NOT NULL,
    [SUCURSAL]                      VARCHAR (6)     NULL,
    [PROYECTO]                      VARCHAR (300)   NULL,
    [PPTO]                          VARCHAR (6)     NULL,
    [BLOQUE]                        VARCHAR (6)     NULL,
    [NOMBREBLOQUE]                  VARCHAR (150)   NULL,
    [NEGOCIO]                       VARCHAR (15)    NULL,
    [CODICLIENTE]                   VARCHAR (15)    NULL,
    [NOMBRECLIENTE]                 VARCHAR (300)   NULL,
    [FECHANEGOCIO]                  VARCHAR (30)    NULL,
    [VLRNEGOCIO]                    DECIMAL (20, 2) NULL,
    [OBSERVACION]                   TEXT            NULL,
    [VLRSUBSIDIO]                   DECIMAL (20, 2) NULL,
    [DESISTIDO]                     VARCHAR (8)     NULL,
    [FECHADESISTIDO]                VARCHAR (30)    NULL,
    [USUARIO]                       VARCHAR (10)    NULL,
    [FECHACREACION]                 VARCHAR (30)    NULL,
    [CODIGOVENDEDORA]               VARCHAR (8)     NULL,
    [GASTOSNOTARIALES]              VARCHAR (8)     NULL,
    [ESCRITURADO]                   VARCHAR (8)     NULL,
    [SUBROGACION]                   VARCHAR (8)     NULL,
    [ORDENPEDIDO]                   VARCHAR (15)    NULL,
    [VLRINICIALCUOTA]               DECIMAL (20, 2) NULL,
    [VLRCREDITO]                    DECIMAL (20, 2) NULL,
    [CODIGOCRM]                     VARCHAR (15)    NOT NULL,
    [OBSERVACIONDESISTIMIENTO]      TEXT            NULL,
    [DESCUENTOSFINANCIEROS]         VARCHAR (6)     NULL,
    [VLRDIRECTOCREDITO]             DECIMAL (20, 2) NULL,
    [VLRARRAS]                      DECIMAL (20, 2) NULL,
    [TIPOCONTRATO]                  VARCHAR (8)     NULL,
    [CAUSADESISTIMIENTO]            VARCHAR (8)     NULL,
    [VLRDEVUELTOCLIENTE]            DECIMAL (20, 2) NULL,
    [NEGOCIOCEDIDO]                 VARCHAR (8)     NULL,
    [FECHADECESION]                 VARCHAR (30)    NULL,
    [NUEVOPEDIDOCEDIDO]             VARCHAR (15)    NULL,
    [VIENEDESECION]                 VARCHAR (8)     NULL,
    [PEDIDODEDONDESECEDIO]          VARCHAR (15)    NULL,
    [AUTORIZADOAESCRITURAR]         VARCHAR (8)     NULL,
    [AUTORIZADOAESCRITURARNOTARIA]  VARCHAR (8)     NULL,
    [SALDOPORPAGARDELACUOTAINICIAL] TEXT            NULL,
    [CODIGOINMUEBLE]                VARCHAR (15)    NULL,
    CONSTRAINT [PK_negocio_fox_1] PRIMARY KEY CLUSTERED ([ID] ASC)
);






GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_negocio_fox]
    ON [dbo].[negocio_fox]([CODIGOCRM] ASC);


GO


CREATE TRIGGER [dbo].[triggerNegFoxDelete] ON [dbo].[negocio_fox]


FOR DELETE
	AS

	



   
  BEGIN
      
	 DELETE acuerdo_fox WHERE NEGOCIO IN (SELECT D.NEGOCIO FROM deleted AS D)

	END