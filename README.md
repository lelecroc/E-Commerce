# E-Commerce

![proj](https://github.com/lelecroc/E-Commerce/assets/149404185/a31d0de4-785a-45a2-838d-cd94745c610e)

## Our aim

This is a group project made to test our knowledge and skill with Vue.js. We chose an e-commerce project that sells pokemon related items because this brand fits well with this concept.

## What tools did we use

We used the latest version of Vue.js and Tailwind. We created 2 .json files. We used axios for our API calls, AOS library for the animations, FontAwesome, Pinia.

## Coding Rules

- Our code is in English to provide the best experience for everyone;
- We followed the CamelCase convention;
- The skeleton of the .vue pages always follows this structure: 1. Script, 2. Template, 3.Style;
- Our comments will always be on one line;

## Roadmap

After the "release" we will implement a fully working checkout process.

## Diary

### 04/03/24

We created our base project, our .json files, we decided on a structure to follow and we gave ourselves tasks to complete.

### 05/03

We created every view page necessary to this project. We updated the various cards and created a single reusable card that could fit our needs. We updated our .json to meet our needs, maily adding a key. We linked the items to a single detailed page of itself, that works for every item in the site.

### 06/03

The site is now completely responsive. We started working on the different pages and components. We implemented FontAwesome.

### 07/03

We restructured every SinglePage, we added the ability to like or dislike the item. We completed page404, our Checkoutpage and the Login/logout functionality. We implemented AOS. On the "peluche" single page we used axios to interact with PokeAPI and display the actual info of the pokemon itself.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
