class Timer extends React.Component {
  upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now-countTo);

    hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
    mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

    this.refs.hours = hours;
    this.refs.minutes = mins;
    this.refs.seconds = secs;

    clearTimeout(upTime.to);
      upTime.to=setTimeout(function(){ upTime(countTo); },1000);
    }

  componentDidMount() {
    uptime(this.props.now)
  }
  render() {
    return(
      <div id="countup">
        It's been
        <p ref="hours" id="hours">00</p>
        <p className="timeRefHours">hours</p>
        <p re="minutes" id="minutes">00</p>
        <p className="timeRefMinutes">minutes</p>
        <p ref="seconds" id="seconds">00</p>
        <p className="timeRefSeconds">second</p>
      </div>
    )
  }
}
