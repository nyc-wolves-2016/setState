class Card extends React.Component  {
render(){
  let { shape, color, shading, number } = this.props.data;
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
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path fill="#000000" d="M70.183,18.473c10.572,0,19.292,8.995,19.439,20.038c0.031,2.177-0.275,4.29-0.981,6.591  C88,48.11,83.907,55.483,63.708,71.074c-5.225,4.05-9.583,7.202-12.987,9.411c-3.26-2.138-9.394-6.181-13.514-9.176  c-20.684-15.151-24.961-22.36-25.764-25.621c-0.683-1.973-1.036-4.068-1.065-6.236c-0.084-5.785,2.205-11.328,6.265-15.22  c3.547-3.406,8.163-5.285,13.256-5.305c6.789,0,13.01,3.375,16.641,9.033c0.699,1.084,1.943,1.747,3.289,1.747h0.048  c1.37-0.018,2.615-0.713,3.289-1.823c3.511-5.81,9.717-9.323,16.611-9.411C69.777,18.473,70.176,18.473,70.183,18.473   M70.183,13.096h-0.405c-8.073,0.103-15.368,3.86-19.982,10.158c-4.721-6.111-12.008-9.705-19.896-9.705  c-6.416,0.025-12.437,2.441-16.979,6.804c-5.137,4.923-8.022,11.915-7.917,19.175c0.037,2.67,0.468,5.26,1.285,7.695  c1.166,4.393,5.483,12.116,27.742,28.421c4.043,2.939,9.778,6.735,13.743,9.335l2.932,1.924l2.942-1.909  c3.568-2.314,8.062-5.568,13.354-9.671c16.455-12.7,25.241-22.143,26.839-28.845c0.817-2.728,1.195-5.363,1.157-8.046  C94.811,24.465,83.68,13.096,70.183,13.096L70.183,13.096z"/><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Leyla Jacqueline</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
  )
}
}
