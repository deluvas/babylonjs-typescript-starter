# Readme

Simple boilerplate project for [babylonjs](http://www.babylonjs.com/) using TypeScript and Webpack.

## Install

Install TypeScript (globally):

````
npm install -g typescript
````

Install dependencies:

````
npm install
npm link typescript
````

Additionally, to import `babylonjs` as a TypeScript module, modify `babylon.d.ts` inside
`node_modules` and add the following code at the bottom of the file:

````typescript
export = BABYLON;
````

## Compile & Run 

````
webpack -w 
````

Then open `index.html`

## Links

Engine docs:

- [Reference](http://doc.babylonjs.com/classes/2.4)
- [Live examples](http://www.babylonjs-playground.com)
- [Tutorials](http://doc.babylonjs.com/tutorials)