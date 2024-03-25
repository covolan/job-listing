# Static Job Listing

## Introdução:

Esta aplicação web foi desenvolvida como desafio do site: Frontend Mentor. Este consiste em criar uma aplicação web com os parâmetros apresentados. Toda a lógica e estilização são realizados como parte do desafio. Já havia completado o mesmo, porém realizei o melhoramento da lógica e criei o mesmo utilizando o React.js.

## Objetivo:

O objetivo deste projeto é desenvolver uma plataforma de listagem de empregos utilizando um arquivo JSON que contém informações sobre cada vaga disponível. As vagas serão organizadas em ordem de ID e poderão ser filtradas utilizando um botão de filtro, permitindo a seleção por ocupação, ferramentas ou linguagens específicas. O filtro será flexível, oferecendo diversas opções de seleção, e incluirá um botão para limpar os filtros aplicados.


## Conceitos:

Neste projeto, são aplicados conceitos de HTML, CSS (Sass), JavaScript e React.js. Em relação ao JavaScript, são empregados conceitos como funções, importação de módulos, construtores, Arrays, além de métodos de array como .filter(), .map() e .includes(). Também são utilizadas estruturas de lógica condicional if e else, o operador de propagação (spread operator), a função console.log() para depuração e variáveis. No contexto de React.js, são empregados conceitos como o hook useState(), métodos de ciclo de vida dos componentes do React, passagem de props do componente pai para o filho e o método setState().

## Utilização:
Para utilizar o aplicativo, comece clonando o repositório da forma que preferir. Dentro do diretório do repositório, com o terminal aberto no caminho */static-job-listings*, execute o comando:

```npm install```

para instalar os pacotes necessários para o desenvolvimento do projeto. 

Para iniciar o projeto, utilize o comando:

```npm run dev```

no terminal. 

Isso abrirá o site localmente no localhost. Para realizar o deploy do projeto, edite o arquivo ```vite.config.js```. Nele, você encontrará uma propriedade da função defineConfig chamada ```base: "/job-listing"```; esta deve conter o **nome do repositório** para o qual está sendo realizado o deploy. Após isso, execute o comando:

```npm run deploy```

e o deploy será realizado automaticamente para o GitHub Pages. Você poderá acessá-lo por meio das configurações do repositório.
