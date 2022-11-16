-- drop database vanGogh;

create database vanGogh;

use vanGogh;

create table usuario (
id int primary key auto_increment,

	nome varchar(50),
	email varchar(50) unique,
	senha varchar(50),
    
fkIndicador int unique , 
foreign key (fkIndicador) references usuario (id)
);

insert into usuario values
(null ,'isabella' , 'isabella@email' , '123' , null),
(null , 'mariana' , 'mariana@email' , '123' , null),
(null ,'victor' , 'victor@email' , '123' , null),
(null , 'lucas' , 'lucas@email' , '123' , null),
(null ,'eliete' , 'eliete@email' , '123' , null),
(null , 'mateus' , 'mateus@email' , '123' , null),
(null ,'jonas' , 'jonas@email' , '123' , null),
(null ,'camily' , 'camily@email' , '123' , null),
(null ,'lorem' , 'lorem@email' , '123' , null),
(null ,'violeta' , 'violeta@email' , '123' , null),
(null ,'jessica' , 'jessica@email' , '123' , null),
(null ,'gabriela' , 'gabriela@email' , '123' , null),
(null ,'gabriel' , 'gabriel@email' , '123' , null),
(null ,'filipe' , 'filipe@email' , '123' , null),
(null ,'marcos' , 'marcos@email' , '123' , null),
(null ,'britnei' , 'britnei@email' , '123' , null),
(null ,'estrela' , 'estrela@email' , '123' , null),
(null , 'vera' , 'vera@email' , '123' , null);

select * from usuario;

create table indicacaoObra(
idIndicacaoObra int auto_increment,
fkUsuario int ,
foreign key (fkUsuario) references Usuario(id),
primary key(idIndicacaoObra , fkUsuario), 

Obra varchar(15)
);

insert into indicacaoObra values
( null , 1 , 'frida'),
( null , 1 , 'michelangelo');


select * from indicacaoObra ;

select count(idIndicacaoObra) from indicacaoObra where Obra = 'frida';
select count(idIndicacaoObra) as countMichelangelo from indicacaoObra where Obra = 'michelangelo';



















