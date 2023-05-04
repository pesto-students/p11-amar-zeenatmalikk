// Create the game object
const game = {
    lives: 3,
    coins: 0,
  
    // Getter for points
    get points() {
      return this.coins * 10;
    },
  
    // Method to subtract 1 from lives
    playerDies() {
      if (this.lives > 0) {
        this.lives--;
      }
    },
  
    // Method to start a new game
    newGame() {
      this.lives = 3;
      this.coins = 0;
    }
  };
  
  // Test the game object
  console.log("lives =", game.lives);  // Output: lives = 3
  console.log("coins =", game.coins);  // Output: coins = 0
  console.log("points =", game.points);  // Output: points = 0
  
  game.coins = 2;
  console.log("points =", game.points);  // Output: points = 20
  
  game.playerDies();
  console.log("lives =", game.lives);  // Output: lives = 2
  
  game.playerDies();
  console.log("lives =", game.lives);  // Output: lives = 1
  
  game.playerDies();
  console.log("lives =", game.lives);  // Output: lives = 0
  
  game.newGame();
  console.log("lives =", game.lives);  // Output: lives = 3
  console.log("coins =", game.coins);  // Output: coins = 0
  