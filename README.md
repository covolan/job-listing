# Static Job Listing

![image](https://i.imgur.com/NW8ESfF.png)

- Linguagens / Languages:
  - [:brazil:](#introdução) Português.
  - [:us:](#introduction) English.


## Introdução

Esta aplicação web foi desenvolvida como parte de um desafio do site [Frontend Mentor](https://www.frontendmentor.io/), que propôs a criação de uma aplicação web com os parâmetros fornecidos. Toda a lógica e estilização foram implementadas como parte desse desafio. Embora já tivesse completado o desafio anteriormente, realizei melhorias na lógica e recriei a aplicação utilizando o React.js.

## Objetivo

O objetivo deste projeto é desenvolver uma plataforma de listagem de empregos utilizando um arquivo JSON que contém informações sobre cada vaga disponível. As vagas serão organizadas em ordem de ID e poderão ser filtradas utilizando um botão de filtro, permitindo a seleção por ocupação, ferramentas ou linguagens específicas. O filtro será flexível, oferecendo diversas opções de seleção, e incluirá um botão para limpar os filtros aplicados.


## Conceitos

Neste projeto, são aplicados conceitos de HTML, CSS (Sass), JavaScript e React.js. Em relação ao JavaScript, são empregados conceitos como funções, importação de módulos, construtores, Arrays, além de métodos de array como .filter(), .map() e .includes(). Também são utilizadas estruturas de lógica condicional if e else, o operador de propagação (spread operator), a função console.log() para depuração e variáveis. No contexto de React.js, são empregados conceitos como o hook useState(), métodos de ciclo de vida dos componentes do React, passagem de props do componente pai para o filho e o método setState().

## Utilização

Para utilizar o aplicativo, comece clonando o repositório da forma que preferir. Dentro do diretório do repositório, com o terminal aberto no caminho */static-job-listings*, execute o comando:

```npm install```

para instalar os pacotes necessários para o desenvolvimento do projeto. 

Para iniciar o projeto, utilize o comando:

```npm run dev```

no terminal. 

Isso abrirá o site localmente no localhost. Para realizar o deploy do projeto, edite o arquivo ```vite.config.js```. Nele, você encontrará uma propriedade da função defineConfig chamada ```base: "/job-listing"```; esta deve conter o **nome do repositório** para o qual está sendo realizado o deploy. Após isso, execute o comando:

```npm run deploy```

e o deploy será realizado automaticamente para o GitHub Pages. Você poderá acessá-lo por meio das configurações do repositório.

---

## Introduction

This web application was developed as part of a challenge from the [Frontend Mentor](https://www.frontendmentor.io/) website, which proposed the creation of a web application based on the provided parameters. All the logic and styling were implemented as part of this challenge. Although I had already completed the challenge previously, I made improvements to the logic and recreated the application using React.js.

## Objective

The aim of this project is to develop a job listing platform using a JSON file containing information about each available position. Jobs will be arranged in order of ID and can be filtered using a filter button, allowing selection by occupation, tools, or specific languages. The filter will be flexible, providing various selection options, and will include a button to clear applied filters.

## Concepts

In this project, concepts of HTML, CSS (Sass), JavaScript, and React.js are applied. Regarding JavaScript, concepts such as functions, module imports, constructors, Arrays, as well as array methods like .filter(), .map(), and .includes() are employed. Conditional logic structures like if and else statements, the spread operator, console.log() function for debugging, and variables are also utilized. In the context of React.js, concepts such as the useState() hook, React component lifecycle methods, passing props from parent to child components, and the setState() method are employed.

## Usage: 

To use the application, begin by cloning the repository in your preferred manner. Within the repository directory, with the terminal open at the path */static-job-listings*, execute the command:

```npm install```

to install the necessary packages for project development.

To start the project, use the command: 

```npm run dev```

in the terminal. 

This will open the website locally at localhost. To deploy the project, edit the ```vite.config.js``` file. In it, you will find a property of the defineConfig function called base: ```"/job-listing"```; this should contain the name of the repository to which the deployment is being made. After that, execute the command:

```npm run deploy```

and the deployment will be automatically carried out to GitHub Pages. You can access it through the repository settings.
