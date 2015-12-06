import GameState from './states/GameState';
import Menu from './states/Menu';
// import TextTools from '../../phaser-plugin-text-tools';

class Game extends Phaser.Game {
  constructor () {
    super(576, 384, Phaser.AUTO, 'content', null, false, false);
    this.state.add('GameState', GameState, false);
    this.state.add('Menu', Menu, false);
    // this.state.start('Menu');
    this.state.start('GameState');
  }
}

new Game();
