class GameView extends React.Component {
  constructor() {
    super();
    this.initialCards = this.initialCards.bind(this);
  }

  initialCards() {
    var firstCards = [];
    for (var i=0; i<9; i++) {
      var index = Math.floor(Math.random()*this.props.cards.length)
      firstCards.push(this.props.cards[index])
      this.props.cards.splice(index, 1)
    }
    return firstCards
  }
  render() {
    let { cards } = this.props.cards;
    return(
  <div className="board">
  <div className="row">
    {cards.map((card, i) =>
      <div className="col-md-4">
        <Card key={i} data={card} />
      </div>
      )}
  </div>
  <div className="row">
    <div className="col-md-4 col-md-offset-8">
      <button type="button" className="btn btn-primary guessButton">Submit Guess</button>
    </div>
  </div>
  </div>
      )
  }
}
