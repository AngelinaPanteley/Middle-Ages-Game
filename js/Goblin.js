//
// Goblin (enemy)
//

function Goblin(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'goblin');

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('crawl', [0, 1, 2, 3, 4, 5, 6, 7], 8, true);
    this.animations.add('die', [8, 9, 8, 9, 8, 9, 8, 9, 8, 9], 12);
    this.animations.play('crawl');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = Enemy.SPEED;
}

// inherit from Enemy
Goblin.prototype = Object.create(Enemy.prototype);
Goblin.prototype.constructor = Goblin;
