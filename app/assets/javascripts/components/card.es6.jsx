class Card extends React.Component  {
render(){
  // let { shape, color, shading, number } = this.props.data;
  function renderRect(number, color, shading)
    {if (number === 1) {
      <g className="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      </g>
    } else if (number === 2) {
      <g className="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      <rect x="10" y="65" width="100" height="50"/>
      </g>
    } else {
      <g className="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      <rect x="10" y="65" width="100" height="50"/>
      <rect x="10" y="130" width="100" height="50"/>
      </g>
    };
  }
  function renderCircle(number, color, shading)
    {if (number === 1) {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      </g>
    } else if (number === 2) {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      </g>
    } else {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      <circle cx="50" cy="150" r="30"/>
      </g>
    };
  }
  function renderTriangle(number, color, shading)
    {if (number === 1) {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      </g>
    } else if (number === 2) {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      </g>
    } else {
      <g className="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      <circle cx="50" cy="150" r="30"/>
      </g>
    };
  }

  return (
          <div>
              <svg width="50" height="50">

               <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1"/>
               </g>
               <g>
                <title>Layer 1</title>
                <g stroke="null" id="svg_1">
                 <g stroke="null" id="svg_2">
                  <path fill="none" stroke="black" id="triangle" d="m46.809916,46.404017l-20.920659,-43.812866c-0.317269,-0.666152 -1.406688,-0.666152 -1.723957,0l-21.023867,44.027259c-0.141433,0.296705 -0.120409,0.645095 0.053515,0.922658c0.173925,0.277563 0.479726,0.44793 0.808463,0.44793l42.085959,0c0.527508,0 0.95563,-0.428787 0.95563,-0.957114c0,-0.239279 -0.087918,-0.459415 -0.235085,-0.627867z"/>
                 </g>
                </g>
               </g>
              </svg>
              <svg width="50" height="50">

               <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1"/>
               </g>
               <g>
                <title>Layer 1</title>
                <path stroke="null" id="svg_1" d="m49.600004,38.503447l-16.996775,-18.206896l0,-17.296551l-14.172859,0c0,0 0,12.744827 0,17.239655c-3.303448,3.527586 -16.730367,17.865517 -16.730367,17.865517l10.016908,10.696551l13.746608,-14.67931l14.119578,15.077586l10.016908,-10.696551z"/>
               </g>
              </svg>
              </div>
            )
        }
}
