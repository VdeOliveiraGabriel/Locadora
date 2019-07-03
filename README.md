# Locadora
O desafio:  - Você irá criar um sistema de uma locadora de filmes. O sistema deve permitir a criação de usuários (clientes), logon e logoff de um usuário, listagem de filmes disponíveis, locação de um filme, devolução de um filme, e pesquisa de filme pelo título. - Um filme deve possuir um título e um diretor. - A locadora pode possuir múltiplas cópias de um mesmo filme. - Um usuário deve possuir um e-mail para se identificar no sistema, um nome (para exibição) e uma senha. - O sistema pode ser acessado concorrentemente por múltiplos usuários, que competirão pela locação dos filmes.

## Banco de Dados

 Script SQL de criação localizado em dataBase/locadora.sql
 
## Executar Aplicação

```sh
$ git clone https://github.com/VdeOliveiraGabriel/Locadora.git
$ cd Locadora
$ node server
```

## Lista de ENDPOINTS

- POST /users/create_user    (Cadastro de usuário)
- POST /auth/login           (Login da aplicação)
- GET /movies/all	     (Listagem de filmes)
- GET /movies/:title	     (Busca de filme pelo titulo)
- POST /rent		     (Locar filme)
- POST /rent/return	     (Devolver filme)
- POST /auth/logout	     (Logout da aplicação)



## Exemplos

### Cadastro de usuários

- POST /users/create_user 

Requisição:

```json
{
	"name":"Usuario Teste",
	"email":"teste@teste.com",
	"passWord":"teste123"
}

```

### Login da aplicação

- POST /auth/login

Requisição:

```json
{
	"email":"teste@teste.com",
	"passWord":"teste123"
}
```

Esta requisição retornara um token, o qual deve ser enviado no headers com a chave auth no restante das requisições.

### Listagem de filmes

- GET /movies/all

### Busca de filme pelo titulo

- Get /movies/:title

Titulo do filme deve ser passado por paramentro em :title.

Exemplo: 

```json
/movies/:title
```

### Locar filme

- POST /rent	

Requisição:

```json
{
	"idUser":"5",
	"idMovie":"1"
}
```

### Devolver filme:

- POST /rent/return

Requisição:

```json
{
	"idUser":"5",
	"idMovie":"1"
}
```

### Logout da aplicação

- POST /auth/logout



