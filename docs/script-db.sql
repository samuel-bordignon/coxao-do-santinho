/* Lógico_1: */

CREATE TABLE usuario (
    id_usuario INTEGER PRIMARY KEY UNIQUE,
    nome VARCHAR(225),
    email VARCHAR(225),
    senha VARCHAR(225),
    role VARCHAR(15)
);

CREATE TABLE equipamento (
    id_equipamento INTEGER PRIMARY KEY UNIQUE,
    nome VARCHAR(225),
    quantidade_estoque INTEGER,
    quantidade_minima INTEGER,
    fk_id_usuario INTEGER
);

CREATE TABLE movimentacao (
    id_movimentacao INTEGER PRIMARY KEY UNIQUE,
    quantidade_movimentada INTEGER,
    fk_usuario_id_usuario INTEGER,
    fk_id_equipamento INTEGER
);
 
ALTER TABLE equipamento ADD CONSTRAINT FK_equipamento_2
    FOREIGN KEY (fk_id_usuario)
    REFERENCES usuario (id_usuario)
    ON DELETE CASCADE;
 
ALTER TABLE movimentacao ADD CONSTRAINT FK_movimentacao_2
    FOREIGN KEY (fk_usuario_id_usuario)
    REFERENCES usuario (id_usuario)
    ON DELETE CASCADE;
 
ALTER TABLE movimentacao ADD CONSTRAINT FK_movimentacao_3
    FOREIGN KEY (fk_id_equipamento)
    REFERENCES equipamento (id_equipamento)
    ON DELETE CASCADE;