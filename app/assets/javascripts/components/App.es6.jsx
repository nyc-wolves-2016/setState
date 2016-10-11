class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards = [];
      currentBoard = [];
      correctGuesses = [];
      errors = [];
      gameId = 1;
    };
    // Defines method to pull data from GameView
    this.handleThree = this.handleThree.bind(this);
  }

  handleThree(set) {
    // set comes from onThree / handleThree
    // Remove set from GameView (?)
  }

  handleError(error) {
    // False set comes in from GameView
    // Throw 'error' to top of GameView
    // this.setState(prevState)
  }

  render() {
    return (
      <div className="appContainer">
        <GameView data={this.state.currentBoard, this.state.correctGuesses, this.state.gameId} addThree={} onThree={this.handleThree} onError={this.handleError} />
      </div>
    )
  }
}
