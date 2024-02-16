/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const Game = (() => {\r\n  let lives, score;\r\n  let fruits, bombs, bonus;\r\n\r\n  const start = () => {\r\n    lives = 3;\r\n    score = 0;\r\n    fruits = [], bombs = [], bonus = [];\r\n\r\n  }\r\n\r\n  const checkCollision = () => {\r\n\r\n  }\r\n\r\n  function isColliding(rect1, rect2) {\r\n    return rect1.x < rect2.x + rect2.width &&\r\n           rect1.x + rect1.width > rect2.x &&\r\n           rect1.y < rect2.y + rect2.height &&\r\n           rect1.y + rect1.height > rect2.y;\r\n  }\r\n\r\n\r\n  return {\r\n    start\r\n  }\r\n})();\r\n\r\nconst Board = (() => {\r\n  const score = document.querySelector('#score');\r\n  const lives = document.querySelector('#lives');\r\n\r\n  const updateScore = (val) => {\r\n    score.textContent = val;\r\n  }\r\n  const updateLives = (val) => {\r\n    \r\n  }\r\n\r\n  return {\r\n    updateScore, updateLives\r\n  }\r\n})();\r\n\r\nconst Basket = (() => {\r\n  const basketUI = document.querySelector(\"#Basket\")\r\n\r\n  const move = (() => {\r\n    \r\n  })\r\n\r\n  return {\r\n\r\n  }\r\n})();\r\n\r\nfunction Fruit() {\r\n  \r\n  return {\r\n\r\n  }\r\n}\r\n\r\nfunction Bomb() {\r\n\r\n  return {\r\n\r\n  }\r\n}\n\n//# sourceURL=webpack://catch-fruit/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;