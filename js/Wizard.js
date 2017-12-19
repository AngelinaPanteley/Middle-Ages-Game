//
// Wizard (enemy)
//

function Wizard(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'wizard');

    this.speed = 100;
    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
    this.animations.add('die', [8, 9], 12);
    this.animations.add('attack', [10, 11], 6);
    this.animations.play('walk');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = this.speed;
    this.velocity = this.speed;

    this.wallRight = new AttackWall(game, this, x+110, y);
    this.wallLeft = new AttackWall(game, this, x-10, y);
}

// inherit from AttackEnemy
Wizard.prototype = Object.create(AttackEnemy.prototype);
Wizard.prototype.constructor = Wizard;

