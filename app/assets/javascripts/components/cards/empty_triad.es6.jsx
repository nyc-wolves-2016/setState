class EmptyTriad extends React.Component {
  render() {
    let {color} = this.props.card
    return(
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">

       <g>
        <title>background</title>
        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1"/>
       </g>
       <g>
        <title>Layer 1</title>
        <path fill="none" stroke={color} strokeWidth="2" stroke={color} id="triad" d="m49.600004,38.503447l-16.996775,-18.206896l0,-17.296551l-14.172859,0c0,0 0,12.744827 0,17.239655c-3.303448,3.527586 -16.730367,17.865517 -16.730367,17.865517l10.016908,10.696551l13.746608,-14.67931l14.119578,15.077586l10.016908,-10.696551z"/>
       </g>
      </svg>
    )
  }
}
