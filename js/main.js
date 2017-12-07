// =============================================================================
// entry point
// =============================================================================

window.onload = function () {
    let game = new Phaser.Game(1200, 800, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.add('loading', LoadingState);
    game.state.start('loading');
};
