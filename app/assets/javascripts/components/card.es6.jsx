class Card extends React.Component  {
render(){
  // let { shape, color, shading, number } = this.props.data;
  function renderRect(number, color, shading)
    {if (number === 1) {
      <g class="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      </g>
    } else if (number === 2) {
      <g class="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      <rect x="10" y="65" width="100" height="50"/>
      </g>
    } else {
      <g class="shapes">
      <rect x="10" y="0" width="100" height="50"/>
      <rect x="10" y="65" width="100" height="50"/>
      <rect x="10" y="130" width="100" height="50"/>
      </g>
    };
  }
  function renderCircle(number, color, shading)
    {if (number === 1) {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      </g>
    } else if (number === 2) {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      </g>
    } else {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      <circle cx="50" cy="150" r="30"/>
      </g>
    };
  }
  function renderTriangle(number, color, shading)
    {if (number === 1) {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      </g>
    } else if (number === 2) {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      </g>
    } else {
      <g class="shapes">
      <circle cx="50" cy="20" r="30"/>
      <circle cx="50" cy="85" r="30"/>
      <circle cx="50" cy="150" r="30"/>
      </g>
    };
  }

  return (
    <div className="card">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="100px" height="100px" x="0px" y="0px" viewBox="0 0 100 100" >
        <g>
        <path d="M23.387,23.161L12.441,0.273c-0.166-0.348-0.736-0.348-0.902,0l-11,23c-0.074,0.155-0.063,0.337,0.028,0.482    c0.091,0.145,0.251,0.234,0.423,0.234h22.02c0.276,0,0.5-0.224,0.5-0.5C23.51,23.364,23.464,23.249,23.387,23.161z"/></g>
      </svg>
    </div>
  )
}
}
