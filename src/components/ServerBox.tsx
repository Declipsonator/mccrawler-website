import { Component } from 'react'
import Dotdotdot from 'react-dotdotdot'

export default class ServerBox extends Component {

  state = {
    server: {}
  }


  constructor(props) {
    super(props);
    this.server = props.server;
  }


  render() {
    var server = this.server;
    return <div id="serverBox">
      <button style={{width: "100%", height: "100%"}}> 
      <div>
        <h2>{server.ip}</h2>
        <Dotdotdot clamp={1}>
          <div className="server-info__item">
            <span className="server-info__label"><b>Version: </b></span>
            <span className="server-info__value">{server.version}</span>
          </div>
        </Dotdotdot>
        <div className="server-info__item">
          <Dotdotdot clamp={1}>
            <span className="server-info__label"><b>Description:  </b></span>
            <span className="server-info__value">{server.description}</span>
          </Dotdotdot>
        </div>
        <div className="server-info__item">
          <span className="server-info__label"><b>Max Players: </b></span>
          <span className="server-info__value">{server.max_players}</span>
        </div>
        <div className="server-info__item">
          <span className="server-info__label"><b>Current Players: </b></span>
          <span className="server-info__value">{server.current_players}</span>
        </div>
      </div>
    </button>
    </div>
  }

}

