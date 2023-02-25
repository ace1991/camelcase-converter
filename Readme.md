# Kata: camelCase converter - Testing Sostenible con TypeScript

En esta kata se nos pide implementar una función pura que convierta un texto, cuyas palabras están delimitadas por guiones, tanto bajos como altos y espacios, en formato camel case. 

Dentro del estilo camel case, existen dos, principalmente: el UpperCamelCase, más conocido como PascalCase, que se da cuando la primera letra de cada una de las palabras es mayúscula, y lowerCamelCase, que es igual que la anterior con la excepción de que la primera letra es minúscula.

En nuestro caso vamos a implementar el primero, el estilo PascalCase.

## Instrucciones
* `npm install`
* `npm test`

## Actualización dependencias
Al compilar el proyecto original obtenia fallos de compilación en las dependencias por lo que decidí actualizarlas a la última versión:
* `npx npm-upgrade` -> Decir Sí a todo

* `npm i`
* `npm run tsc` -> Sigue dando el mismo error ya que se siguen utilizando las dependencias anteriores aún.

Para asegurar que usa las nuevas dependencias del package.json actualizado en el primer paso elimino el package-lock y los node_modules anteriores.
* `rm package-lock.json`
* `rm -Rf node_modules/`

Y se regeneran actualziados acorde al nuevo package.json con:
* `npm i`

Finalmente:
* `npm run tsc` -> no error!


Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
