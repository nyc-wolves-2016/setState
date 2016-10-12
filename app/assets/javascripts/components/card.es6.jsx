class Card extends React.Component {

  drawSvg(card) {
      if (card.shape === "triangle" && card.shading === "checkered"){
        return <CheckeredTriangle card={card} />
      }
      else if (card.shape === "triangle" && card.shading === "empty"){
        return <EmptyTriangle card={card} />
      }
      else if (card.shape === "triangle" && card.shading === "fill"){
        return <FilledTriangle card={card} />
      }
      else if (card.shape === "triad" && card.shading === "checkered"){
        return <CheckeredTriad card={card} />
      }
      else if (card.shape === "triad" && card.shading === "empty"){
        return <EmptyTriad card={card} />
      }
    else if (card.shape === "triad" && card.shading === "fill"){
        return <FilledTriad card={card} />
      }
      else if (card.shape === "sun" && card.shading === "checkered"){
        return <CheckeredSun card={card} />
      }
      else if (card.shape === "sun" && card.shading === "empty"){
        return <EmptySun card={card} />
      }
      else if (card.shape === "sun" && card.shading === "fill"){
        return <FilledSun card={card} />
      }
    }

  drawCard(number, card) {
    if (number === 1) {
      return (
        <div className="card-svgs">
          {this.drawSvg(card)}
        </div>
      )
    } else if (number === 2) {
      return (
        <div className="card-svgs">
          {this.drawSvg(card)}
          {this.drawSvg(card)}
        </div>
            )
    } else {
      return (
        <div className="card-svgs">
          {this.drawSvg(card)}
          {this.drawSvg(card)}
          {this.drawSvg(card)}
        </div>
      )
    }
  }

  render(){
    debugger;
    let {number} = this.props.card
    return (
      <div className="card">
        {this.drawCard(number, this.props.card)}
      </div>
    );
  }
}
