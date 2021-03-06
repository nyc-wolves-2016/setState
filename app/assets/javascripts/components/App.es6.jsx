class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      currentBoard: [],
      correctGuesses: [],
      errors: [],
      gameId: null
    };

    // Defines method to pull data from GameView
    this.handleThree = this.handleThree.bind(this);
    this.handleError = this.handleError.bind(this);
    this.addCorrectGuess = this.addCorrectGuess.bind(this);
    this.handleNextThree = this.handleNextThree.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
    this.updateGame = this.updateGame.bind(this);

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

  addCorrectGuess(card) {
    this.setState((prevState) => {
      return {
        correctGuesses: [...prevState.correctGuesses, card]
      }
    })
  }

  removeFromBoard(newBoard) {
    if (newBoard.length <= 9) {
      newBoard = newBoard.concat(this.nextThree())
    }
    this.setState((prevState) => {
      return {
        currentBoard: newBoard
      }
    })
  }


  handleThree(set) {
    // set comes from onThree / handleThree
    // Remove set from GameView (?)
    var that = this;
    var updateBoard = this.state.currentBoard.slice();
    set.forEach(function(setCard) {
      var boardIndex = updateBoard.indexOf(setCard)
      that.addCorrectGuess(setCard)
      updateBoard.splice(boardIndex, 1)
    })
    that.removeFromBoard(updateBoard)
    this.updateGame({valid: true});
  }

  updateGame(bool) {
    var path = '/games/' + this.state.gameId
    $.ajax({
      url: path,
      method: 'put',
      data: bool
    })

  }

  handleError(error) {

    // False set comes in from GameView
    // Throw 'error' to top of GameView
    // this.setState(prevState)
    this.updateGame({valid: false});
  }

  handleNextThree() {
    this.setState((prevState) => {
      return {
        currentBoard: prevState.currentBoard.concat(this.nextThree())
      }
    })
  }

  handleQuit(event) {

  }

  componentDidMount(){
    this.setState({cards: this.constructDeck()}, () => {
      this.setState({currentBoard: this.firstBoard()})
    })
    this.setState({gameId: this.props.gameId})
  }

  render() {
    let {currentBoard, correctGuesses, gameId} = this.state
    return (
      <div className="appContainer">

        <GameView key={gameId} board={currentBoard} guesses={correctGuesses} gameId={gameId} onThree={this.handleThree} onError={this.handleError} onQuit={this.handleQuit} onNextThree={this.handleNextThree} />

      </div>
    )
  }
}
