class Card extends React.Component  {

  drawSvg(card) {
    switch (card) {
      case (card.shape === "triangle" && shading === "checkered"):
        return <CheckeredTriangle card={card} />
      case (card.shape === "triangle" && shading === "empty"):
        return <EmptyTriangle card={card} />
      case (card.shape === "triangle" && shading === "fill"):
        return <FilledTriangle card={card} />
      case (card.shape === "triad" && shading === "checkered"):
        return <CheckeredTriad card={card} />
      case (card.shape === "triad" && shading === "empty"):
        return <EmptyTriad card={card} />
      case (card.shape === "triad" && shading === "fill"):
        return <FilledTriad card={card} />
      case (card.shape === "sun" && shading === "checkered"):
        return <CheckeredSun card={card} />
      case (card.shape === "sun" && shading === "empty"):
        return <EmptySun card={card} />
      case (card.shape === "sun" && shading === "fill"):
        return <FilledSun card={card} />
    }
  }
  drawCard(number, card){
    if (number === 1) {
      drawSvg(card)
    } else if (number === 2) {
      drawSvg(card)
      drawSvg(card)
    } else {
      drawSvg(card)
      drawSvg(card)
      drawSvg(card)
    }
  };
  render(){
    return (
          <div className="card">
            {this.drawCard(this.props.card.number, this.props.card)}
          </div>
          )
    }
}
