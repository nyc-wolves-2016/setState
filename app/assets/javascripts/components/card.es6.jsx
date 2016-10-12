class Card extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  drawSvg(card) {
      if (card.shape === "triangle" && card.shading === "checkered"){
        return <CheckeredTriangle card={card} />
      }
      else if (card.shape === "triangle" && card.shading === "empty"){
        return <EmptyTriangle card={card} />
      }
      else if (card.shape === "triangle" && card.shading === "filled"){
        return <FilledTriangle card={card} />
      }
      else if (card.shape === "triad" && card.shading === "checkered"){
        return <CheckeredTriad card={card} />
      }
      else if (card.shape === "triad" && card.shading === "empty"){
        return <EmptyTriad card={card} />
      }
    else if (card.shape === "triad" && card.shading === "filled"){
        return <FilledTriad card={card} />
      }
      else if (card.shape === "sun" && card.shading === "checkered"){
        return <CheckeredSun card={card} />
      }
      else if (card.shape === "sun" && card.shading === "empty"){
        return <EmptySun card={card} />
      }
      else if (card.shape === "sun" && card.shading === "filled"){
        return <FilledSun card={card} />
      }
    }

  drawCard(number, card) {
    if (number === 1) {
      return (
        <div onClick={this.handleClick} className="card-svgs">
          {this.drawSvg(card)}
        </div>
      )
    } else if (number === 2) {
      return (
        <div onClick={this.handleClick} className="card-svgs">
          {this.drawSvg(card)}
          {this.drawSvg(card)}
        </div>
            )
    } else {
      return (
        <div onClick={this.handleClick} className="card-svgs">
          {this.drawSvg(card)}
          {this.drawSvg(card)}
          {this.drawSvg(card)}
        </div>
      )
    }
  }

  handleClick() {
    var cardValue = this.props.card;
    this.props.handleClick(cardValue)
  }

  render(){
    let {number} = this.props.card
    return (
      <div className="card">
        {this.drawCard(number, this.props.card)}
      </div>
    );
  }
}
