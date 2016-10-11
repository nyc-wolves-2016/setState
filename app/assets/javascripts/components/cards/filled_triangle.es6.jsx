class FilledTriangle extends React.Component {
  render() {
    let {color} = this.props.card
    return(
      <svg width="50" height="50">
       <g>
        <title>background</title>
        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1"/>
       </g>
       <g>
        <title>Layer 1</title>
        <g stroke="null" id="svg_1">
         <g stroke="null" id="svg_2">
             <g>

               <path fill={color} stroke={color} strokeWidth="2" id="triangle" d="m46.809916,46.404017l-20.920659,-43.812866c-0.317269,-0.666152 -1.406688,-0.666152 -1.723957,0l-21.023867,44.027259c-0.141433,0.296705 -0.120409,0.645095 0.053515,0.922658c0.173925,0.277563 0.479726,0.44793 0.808463,0.44793l42.085959,0c0.527508,0 0.95563,-0.428787 0.95563,-0.957114c0,-0.239279 -0.087918,-0.459415 -0.235085,-0.627867z"/>
              </g>
            </g>
          </g>
          </g>
        </svg>
    )
  }
}
