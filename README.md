# LRY

## Quick start

To start, just clone the repository with following commands:

- clone using `HTTP`

```sh
git clone https://github.com/recraftrelic/LRY.git
cd LRY
npm install
```

- clone using `SSH`

```sh
git clone git@github.com:recraftrelic/LRY.git
cd LRY
npm install
```

## Roadmap
 
* ~`Array.chunks`~
* `Array.tree`
* `Array.removeRange`
* `Array.group`
* `Array.bubbleSort`
* `Array.mergeSort`
* `Array.quickSort`
* `Tree.find`
* `Object.deepClone`
* `Object.toArray`
* `Object.find`
* `Object.filter`


## Available scripts

+ `clean` - remove coverage data, Nyc cache and transpiled files,
+ `clean:modules` - remove and reinstall node_modules packages and package-lock.json,
+ `build` - transpile TypeScript to ES5,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests
+ `test:coverage` - run tests and create code coverage reports
