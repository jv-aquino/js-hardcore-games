const Game = (() => {
  let lives, score;
  let fruits, bombs, bonus;

  const start = () => {
    lives = 3;
    score = 0;
    fruits = [], bombs = [], bonus = [];

  }

  const checkCollision = () => {

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

const Board = (() => {
  const score = document.querySelector('#score');
  const lives = document.querySelector('#lives');

  const updateScore = (val) => {
    score.textContent = val;
  }
  const updateLives = (val) => {
    if (val > 0) {
      lives.appendChild(createHeart());
    } else {
      lives.removeChild(lives.lastChild);
    }
  }

  return {
    updateScore, updateLives
  }
})();

const Basket = (() => {
  const basketUI = document.querySelector(".Basket");
  let X = 50;

  const move = (() => {
    
  })

  return {

  }
})();

function Fruit() {
  const startX = Math.floor(Math.random() * 60 + 20);
  
  return {

  }
}

function Bomb() {
  const startX = Math.floor(Math.random() * 60 + 20);
  
  return {

  }
}

function createHeart() {
  const ui = document.createElement('div');
  ui.classList.add('heart');

  return ui;
}