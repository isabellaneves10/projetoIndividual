-- drop database vanGogh;

create database vanGogh;

use vanGogh;

create table usuario (
id int primary key auto_increment,
	nome varchar(50),
	email varchar(50) unique,
	senha varchar(50)
);

insert into usuario values
(null , 'isabella' , 'isabella@email' , '123'),
(null , 'mariana' , 'mariana@email' , '123');

select * from usuario;

create table acesso (
idAcesso int auto_increment,
fkUsuario int ,
constraint ctFkUsuario foreign key (fkUsuario) references Usuario(id),
primary key(idAcesso , fkUsuario), 

dataHora datetime default now()
);

insert into acesso values 
(null , 1 , null),
(null , 2 , null),
(null , 2 , null);

select * from acesso ;

create table avaliacao(
idAvaliacao int auto_increment,
fkUsuario int unique ,
constraint ctFk_Usuario foreign key (fkUsuario) references Usuario(id),
primary key(idAvaliacao , fkUsuario), 

nota varchar(2),
descricao varchar(50)
);


insert into avaliacao values
(null , 1 , '8' , 'muito bom'),
(null , 2 , '8' , 'muito bom');


select * from avaliacao ;

select * from usuario;


select count(id) from usuario;


















