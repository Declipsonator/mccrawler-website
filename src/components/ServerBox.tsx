import { Component } from 'react'
import Dotdotdot from 'react-dotdotdot'
import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {Button} from "react-bootstrap";

type ServerBoxProps = React.HTMLProps<{ server: any }>;

export default class ServerBox extends Component<ServerBoxProps> {

  state = {
    server: {}
  }
  server: any;

  constructor(props: any) {
    super(props);
    this.server = props.server;
  }


  render() {
    var server = this.server;

    let knownPlayersArray = server.known_players;

    let knownPlayers = [];
    for (let i = 0; i < knownPlayersArray.length; i++) {
      knownPlayers.push(knownPlayersArray[i].name)
    }

    let knownPlayersString = knownPlayers.join("\n");
    return <div id="serverBox">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button style={{ width: "100%", height: "100%" }}>
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
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <br />
                <div className="server-info__item">
                  <h2 className="server-info__value"><b>{server.ip}</b></h2>
                </div>
                <div className="server-info__item">
                    <span className="server-info__label"><b>Version: </b></span>
                    <span className="server-info__value">{server.version}</span>
                </div>
                <div className="server-info__item">
                    <span className="server-info__label"><b>Description:  </b></span>
                    <span className="server-info__value">{server.description}</span>
                </div>
                <div className="server-info__item">
                    <span className="server-info__label"><b>Max Players: </b></span>
                    <span className="server-info__value">{server.max_players}</span>
                </div>
                <div className="server-info__item">
                    <span className="server-info__label"><b>Current Players: </b></span>
                    <span className="server-info__value">{server.current_players}</span>
                </div>
                <br />
                <div className="server-info__item" style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="server-info__label"><b>Known Players: </b></span>
                  <span style={{ marginLeft: '10px' }}></span>
                  <textarea className="server-info__value" readOnly={true} value={knownPlayersString == "" ? "None" : knownPlayersString} />
                </div>
                <br />
              <Dialog.Close asChild>
                <Button variant="btn btn-outline-primary" style={{ margin: "0px 10px 0px 10px", width: "30%" }} onClick={() => {
                }}>  Done  </Button>
              </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
    </div>
  }

}

