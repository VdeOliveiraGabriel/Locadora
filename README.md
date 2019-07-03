# Locadora
O desafio:  - Você irá criar um sistema de uma locadora de filmes. O sistema deve permitir a criação de usuários (clientes), logon e logoff de um usuário, listagem de filmes disponíveis, locação de um filme, devolução de um filme, e pesquisa de filme pelo título. - Um filme deve possuir um título e um diretor. - A locadora pode possuir múltiplas cópias de um mesmo filme. - Um usuário deve possuir um e-mail para se identificar no sistema, um nome (para exibição) e uma senha. - O sistema pode ser acessado concorrentemente por múltiplos usuários, que competirão pela locação dos filmes.

# Banco de Dados

 Script SQL de criação localizado em dataBase/locadora.sql
 
 #Executar Aplicação

#ENDPOINTS
Cadastro de usuário:

POST /users/create_user
http://localhost:3010/users/create_user

{
	"name":"Usuario Teste",
	"email":"teste@teste.com",
	"passWord":"teste123"
}

Login de usuário: 

POST /auth/login

{
	"email":"teste@teste.com",
	"passWord":"teste123"
}

Listagem de todos os filmes cadastrados:

GET /movies/all

Busca de fileme pelo titulo
Get /:title

Locar filme
POST /rent

devolvovelver filme:

POST /auth/logout



