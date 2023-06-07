create database if not exists Desbravadores;

use Desbravadores;

create table if not exists Endereço (
	idEndereço int primary key auto_increment,
    cep char(9),
    rua varchar(100),
    numero varchar(45),
    bairro varchar(45),
    cidade varchar(45),
    país varchar(45),
    complemento varchar(45)
);

insert into Endereço values
	(null, '12345-678', 'Avenida Paulista', '1000', 'Jardins', 'São Paulo', 'Brasil', 'Digital Building');

create table if not exists Clube (
	idClube int primary key auto_increment,
    nome varchar(100),
    email varchar(50),
    senha varchar(100),
    dtFundação date,
    região varchar(50),
    associação varchar(50),
    fkEndClube int,
    constraint fkEndClube foreign key (fkEndClube)
		references Endereço(idEndereço),
	qtd_desbravadores int,
    qtd_unidades int,
    notificação int
);

insert into Clube values
	(null, 'Águia Real', 'aguia.real@clube.com', 'Senha123!', '2000-07-27', 'Decima Região', 'Paulista Sul', '1', '1', '0', null),
    (null, 'Clube Teste', 'clube.teste@clube.com', 'Senha123!', '2000-07-27', 'Decima Região', 'Paulista Sul', '1', '0', '0', null);

create table if not exists Unidade (
	idUnidade int auto_increment,
    nome varchar(45),
    qtd_desbravadores int,
    cor varchar(45),
    fkClube int,
    constraint fkClube foreign key (fkClube)
		references Clube(idClube),
	constraint pkCompostaUnidade primary key (idUnidade, fkClube)
);

/*insert into Unidade values
	(null, 'Condor', '10', '1');
*/
create table if not exists Desbravador (
	idDesbravador int primary key auto_increment,
    nome varchar(70),
    email varchar(50) unique not null,
    senha varchar(100),
    cpf char(11),
    dtNasc date,
    Nível_Lenço char(1)
		constraint chkCategoria check(Nível_Lenço in ('C','D','L','M','A')),
	cargo varchar(45),
    convite int,
    notificação int,
    fkClubeDvb int,
    constraint fkClubeDvb foreign key (fkClubeDvb)
		references Clube(idClube),
	fkUnidade int,
    constraint fkUnidade foreign key (fkUnidade)
		references Unidade(idUnidade),
	fkEndDvb int,
    constraint fkEndDvb foreign key (fkEndDvb)
		references Endereço(idEndereço),
	fkLíder int,
    constraint fkLíder foreign key (fkLíder)
		references Desbravador(idDesbravador)
);

insert into Desbravador (nome, email, senha, cpf, dtNasc, Nível_Lenço, cargo, fkClubeDvb, fkEndDvb, fkLíder) values 
('Diretor', 'diretor@clube.com', '123', '12312312312', '2000-01-01', 'L', 'Diretor', '1', '1', null);

create table if not exists Classe (
	idClasse int primary key auto_increment,
    nome varchar(50)
);

create table if not exists Especialidade (
	idEspecialidade int primary key auto_increment,
	nome varchar(70),
    categoria varchar(50)
);

create table if not exists PastaClasse (
	fkDesbravadorClasse int,
    constraint fkDesbravadorClasse foreign key (fkDesbravadorClasse)
		references Desbravador(idDesbravador),
	fkClasse int,
    constraint fkClasse foreign key (fkClasse)
		references Classe(idClasse),
	constraint pkCompostaPastaClasse primary key (fkDesbravadorClasse,fkClasse)
);

create table if not exists PastaEspecialidade (
	fkDesbravadorEspecialidade int,
    constraint fkDesbravadorEspecialidade foreign key (fkDesbravadorEspecialidade)
		references Desbravador(idDesbravador),
	fkEspecialidade int,
    constraint fkEspecialidade foreign key (fkEspecialidade)
		references Especialidade(idEspecialidade),
	constraint pkCompostaPastaEspecialidade primary key (fkDesbravadorEspecialidade,fkEspecialidade)
);

create table if not exists aviso (
	id int primary key auto_increment,
	titulo varchar(100),
	descricao varchar(300),
    dtHora datetime default current_timestamp,
	fkDesbravadorAviso int,
	constraint fkDesbravadorAviso foreign key (fkDesbravadorAviso) 
		references Desbravador(idDesbravador),
	fkClubeAviso int,
    constraint fkClubeAviso foreign key (fkClubeAviso)
		references Clube(idClube)
);

create table if not exists Comentarios (
	idComentarios int auto_increment,
    comentario varchar(150),
    dtHora datetime default current_timestamp,
    fkAviso int,
    constraint fkAviso foreign key (fkAviso)
		references aviso(id),
	constraint pkCompostaComentarios primary key (idComentarios, fkAviso)
);

insert into Classe (nome) values
	('Amigo'),
    ('Amigo da Natureza'),
    ('Companheiro'),
    ('Companheiro de Excursionismo'),
    ('Pesquisador'),
    ('Pesquisador de Campo e Bosque'),
    ('Pioneiro'),
    ('Pioneiro de Novas Fronteiras'),
    ('Excursionista'),
    ('Excursionista na Mata'),
    ('Guia'),
    ('Guia de Exploração');