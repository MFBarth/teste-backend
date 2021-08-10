# O que faz após baixar o projeto

- Inicialmente você deve dar um **yarn** no seu terminal para instalar todas as dependências
- Agora vamos inciar o banco de dados utilizando o comando **docker-compose: docker-compose up -d**, para funcionar corretamente o docker deve estar incializado na sua maquina.
- Com o banco de dados rodando vamos executar o comando **yarn sequelize db:create**  que é resposável por criar as migrations e tabelas no banco de dados.
- Por último vamos executar o comando **yarn sequelize db:seed:all**, esse comando irá criar o adminitrador da nossa aplicação para que possamos nos autenticar e usar as APIS

# Excutar o projeto

**yarn dev**

# Acessos

Login: mfbarth
Senha: admin123

# Arquivo do Postman

O arquivo do postman se encontra na base do projeto com o seguinte nome: teste-backend.postman_collection.json

#  Teste backend

Você deverá criar uma API que o site IMDb irá consultar para exibir seu conteúdo, sua API deve conter as seguintes features:

- Admin

  - Cadastro
  - Edição
  - Exclusão lógica (Desativação)

- Usuário

  - Cadastro
  - Edição
  - Exclusão lógica (Desativação)

- Filmes

  - Cadastro (Somente um usuário administrador poderá realizar esse cadastro)
  - Voto (A contagem dos votos será feita por usuário de 0-4 que indica quanto o usuário gostou do filme)
  - Listagem (deverá ter filtro por diretor, nome, gênero e/ou atores)
  - Detalhe do filme trazendo todas as informações sobre o filme, inclusive a média dos votos

**Obs.: Apenas os usuários poderão votar nos filmes e a API deverá validar quem é o usuário que está acessando, ou seja, se é admin ou não**