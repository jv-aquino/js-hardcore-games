const Game = (() => {
  let lives, score;

  const start = () => {
    lives = 3;
    score = 0;

  }

  return {

  }
})();

const Board = (() => {
  const score = document.querySelector('#score');
  const lives = document.querySelector('#lives');

  const updateScore = (val) => {
    score.textContent = val;
  }
  const updateLives = (val) => {
    
  }

  return {
    updateScore, updateLives
  }
})();

const Basket = (() => {

  const move = (() => {
    
  })

  return {

  }
})();

const Fruit = () => {

  return {

  }
}

const Bomb = () => {

  return {

  }
}