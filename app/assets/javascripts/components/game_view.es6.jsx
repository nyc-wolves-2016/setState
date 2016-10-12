class GameView extends React.Component {
  constructor() {
    super();
    this.composeSet = this.composeSet.bind(this);
    this.validateSet = this.validateSet.bind(this);
    this.validateBoard = this.validateBoard.bind(this);
    this.setArray = [];
  }

  // componentDidMount() {
    // this.setState(prev)
  // }

  validateBoard() {
    var combos = []
    var board = this.props.data.currentBoard;
    for (var i=0; i < board.length - 2; i+=1){
    	var j = i + 1;
    	for (j; j < board.length - 1; j+=1) {
    		var k = j + 1;
    		for (k; k < board.length; k+=1) {
    			combos.push([array[i], array[j], array[k]])
		      }
	      }
    }
    return Boolean(combos.filter(combo => validateSet(combo)).length > 0)
  }



  updateGame(setArray){
    var set = validateSet(setArray);
    if (set) {
      var correct = {correct: true};
    } else {
      var correct = {correct: false};
    }
    $.ajax ({
      method: 'PUT',
      url: '/games/' + this.props.data.gameId,
      data: correct
    })
    .done(response => {
      if (correct) {
        this.props.onThree(setArray)
      } else {
        this.props.onError("Doh!")
      }
    })
  }

  composeSet(cardValue) {
    this.setArray.push(cardValue)
    console.log(this.setArray)
    if (this.setArray.length === 3 && this.validateSet(this.setArray)) {
      this.props.onThree(this.setArray)
      // Reset set array
      this.setArray = [];
    } else if (this.setArray.length === 3) {
      this.props.onError("Yah fucked up, boi (or girl, i didn't assume any gender)")
      // Reset set array
      this.setArray = [];
    }
  }

  validateSet(setArray) {
    var hasDuplicates = function(array) {
        return (new Set(array)).size !== array.length;
    }
    var verifier = []
    for (var key in setArray[0]) {
    	let currentProp = []
    	setArray.forEach(card => {
    		currentProp.push(card[key])
    	})
    	let repeats = currentProp.filter(card => currentProp[0] === card).length
    	if ((hasDuplicates(currentProp) && repeats === 3) || !hasDuplicates(currentProp)) {
    		verifier.push("OK!")
    	}
    }
    return Boolean(verifier.length ===4)
  }



  render() {
    let { board } = this.props;
    return(
  <div className="container board">
    <div className="row">
      {board.map((card, i) =>
        <div className="col-md-4 text-center">
          <Card key={i} card={card} handleClick={this.composeSet} />
        </div>
        )
      }
    </div>
  <div className="row">
    <div className="col-md-4 col-md-offset-8">

      <button type="button" onClick={this.props.onNextThree} className="btn btn-primary addThreeButton">Add Three</button>
      <button type="button" onClick={this.props.onQuit} className="btn btn-primary addQuitButton">Quit</button>
    </div>
  </div>
  </div>
      )
  }
}
