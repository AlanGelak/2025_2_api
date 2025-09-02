create DATABASE loja_25_2;
use loja_25_2;
create table produto(
    id int not null PRIMARY KEY AUTO_INCREMENt,
    nome varchar(100) not null,
    preco double
);

insert into produto (nome, preco) VALUES
("coca-cola", 9.89),
("pepsi", 7.99),
("akinas", 3.50);
    