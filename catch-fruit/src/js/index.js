import { generate as generateID } from "shortid";

console.log(generateID());

const Controller = (() => {
  let lives, score;
  let fruits = {}, bombs = {}, bonus = {};

  const start = () => {
    lives = 3;
    score = 0;
    fruits = {}, bombs = {}, bonus = {};

    Interface.updateLives(lives);
    Interface.updateScore(score);
  }

  const checkCollision = () => {
    for (key in fruits) {
      
    }
    for (key in bombs) {
      
    }
    for (key in bonus) {

    }
  }

  function isColliding(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
  }

  return {
    start
  }
})();

const Interface = (() => {
  const score = document.querySelector('.score');
  const lives = document.querySelector('.lives');

  const updateScore = (val) => {
    score.textContent = val;
  }

  const updateLives = (val) => {
    if (val > 0) {
      for (let i = 0; i < val; i++) {
        lives.appendChild(createHeart());
      }
    } else {
      lives.removeChild(lives.lastChild);
    }
  }

  const add = () => {
    let id = generateID();


  }

  return {
    updateScore, updateLives
  }
})();

const Basket = (() => {
  const basketUI = document.querySelector(".Basket");
  let X = 50;

  const move = (val) => {
    
  }

  return {
    move
  }
})();

function Fruit(id) {
  const startX = Math.floor(Math.random() * 60 + 20);
  
  return {
    id
  }
}

function Bomb(id) {
  const startX = Math.floor(Math.random() * 60 + 20);
  
  return {
    id
  }
}

function createHeart() {
  const ui = document.createElement('div');
  ui.classList.add('heart');

  return ui;
}