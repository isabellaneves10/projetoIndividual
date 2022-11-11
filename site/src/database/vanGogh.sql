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
(null , 'lucas' , 'lucas@email' , '123' , null);

select * from usuario;

create table avaliacao(
idAvaliacao int auto_increment,
fkUsuario int ,
constraint ctFk_Usuario foreign key (fkUsuario) references Usuario(id),
primary key(idAvaliacao , fkUsuario), 

nota varchar(2),
descricao varchar(50)
);



insert into avaliacao values
(null , 1 , '8' , 'muito bom'),
(null , 2 , '8' , 'muito bom');


select * from avaliacao ;




















