// =============================================================================
// entry point
// =============================================================================


window.onload = function () {
    let game;
    const form = document.forms.settings;
    const heroes = form.elements.hero;
    PlayState.audioAdded = false;

    document.getElementById('play-btn').addEventListener('click', function(e) {
        heroes.forEach(function(elem) {
          if(elem.checked)
            LoadingState.hero = elem.id.slice(-1);
        });

        lifeCount = 7;
        allCoins = 0;

        game = new Phaser.Game(1200, 600, Phaser.AUTO, 'game');
        game.state.add('play', PlayState);
        game.state.add('loading', LoadingState);
        game.state.start('loading');

        document.getElementById('game').classList.add('open');
        document.getElementById('start-window').classList.remove('open');
    });

    document.getElementById('play-again').addEventListener('click', function(e) {
        document.getElementById('start-window').classList.add('open');
        document.getElementById('final-window').classList.remove('open');
    });
};
