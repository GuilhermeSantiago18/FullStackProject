# Boas-vindas ao challenge da Lexart Labs.

Este é um projeto desenvolvido para realizar web scraping de produtos nos sites Mercado Livre e Buscapé. O projeto permite que o usuário faça pesquisas com filtros e categorias específicas para encontrar produtos de acordo com suas necessidades.


## Funcionalidades
  * Pesquisa de produtos nos sites Meli e Buscapé.
  * Categorias pré-definidas para facilitar a busca.
  * Exibição dos resultados de forma organizada.
  * Armazenamento dos resultados no banco de dados.

## Tecnologias utilizadas

<details>
  <summary><strong>Front-end</strong></summary>

  * React
  * Javascript
  * Axios
  * Material UI


  <br>
</details>

<details>
  <summary><strong>Back-end</strong></summary>

  * NodeJS
  * Express
  * MongoDB
  * Mongoose
  * Axios
  * Cheerio

  

  <br>
</details>

# Orientações

<details>
  <summary><strong>Pré-requisitos</strong></summary>

  * NodeJS e NPM instalados
MongoDB instalado e rodando localmente ou em um servidor remoto



<details>
  <summary><strong>Como usar</strong></summary>

1. Clone o repositório em sua máquina
2. Abra o terminal e acesse a pasta do projeto
3. Instale as dependências do backend com o comando npm install
4. Acesse a pasta app/frontend e instale as dependências do frontend com o comando npm install
5. Ainda na pasta app/frontend execute o comando npm start 
6. Em outro terminal, acesse a pasta app/backend e inicie com o comando npm run dev

<details>
<summary><strong>Utilização</strong></summary>
Ao acessar o frontend, o usuário irá se deparar com uma página de busca, onde poderá digitar o nome do produto que deseja pesquisar. Ao clicar em "Pesquisar", o frontend irá enviar uma requisição para o backend, que irá buscar as informações sobre o produto no Mercado Livre e no Buscapé.

Os resultados da busca serão exibidos ao usuário em uma lista, contendo informações como o nome do produto, preço e imagem. O usuário poderá clicar em um dos itens da lista e será redirecionado para o mercado real escolhido e conseguirá ver mais informações sobre o produto ou comprá-lo.


