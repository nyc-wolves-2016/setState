class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      currentBoard: [],
      correctGuesses: [],
      errors: [],
      gameId: 1
    };

    // Defines method to pull data from GameView
    this.handleThree = this.handleThree.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  constructDeck() {
    var colors = ['red', 'green', 'purple']
    var shapes = ['triad', 'triangle', 'sun']
    var shadings = ['filled', 'checkered', 'empty']
    var numbers = [1, 2, 3]

    var Card = {}
    var cards = [];
    for (var i=0; i<colors.length; i+=1) {
      for (var j=0; j<shapes.length; j+=1) {
        for (var k=0; k<shadings.length; k+=1) {
          for (var l=0; l<numbers.length; l+=1) {
            var thisCard = Object.create(Card, {
              'color': {
                value: colors[i],
                enumerable: true
              },
              'shape': {
                value: shapes[j],
                enumerable: true
              },
              'shading': {
                value: shadings[k],
                enumerable: true
              },
              'number': {
                value: numbers[l],
                enumerable: true
              }
            })
            cards.push(thisCard)
          }
        }
      }
    }
    return cards;
  }

  firstBoard() {
    var firstCards = [];
    for (var i=0; i<9; i+=1) {
      var index = Math.floor(Math.random()*this.state.cards.length)
      firstCards.push(this.state.cards[index])
      this.state.cards.splice(index, 1)
    }

    return firstCards
  }

  nextThree() {
    var newThree = [];
    for (var i=0; i<3; i+=1) {
      var index = Math.floor(Math.random()*this.state.cards.length)
      newThree.push(this.state.cards[index])
      this.state.cards.splice(index, 1)
    }
    return newThree
  }

  handleThree(set) {
    // set comes from onThree / handleThree
    // Remove set from GameView (?)
    var newCorrect =[];
    set.forEach(function(setCard) {
      correctGuesses.push(setCard)
      var boardIndex = this.state.currentBoard.indexOf(setCard)
      this.setState({currentBoard: this.state.gicurrentBoard.splice(boardIndex, 1)})
    })
    this.setState({correctGuesses: [...this.state.correctGuesses, newCorrect]})
  }

  handleError(error) {
    // False set comes in from GameView
    // Throw 'error' to top of GameView
    // this.setState(prevState)
  }

  componentWillMount(){
    this.setState({cards: this.constructDeck()}, () => {
      this.setState({currentBoard: this.firstBoard()})
    })
  }

  render() {
    let {currentBoard, correctGuesses, gameId} = this.state
    return (
      <div className="appContainer">
        <GameView board={currentBoard} guesses={correctGuesses} gameId={gameId} onThree={this.handleThree} onError={this.handleError} />
      </div>
    )
  }
}
