import React from 'react';
import { MyContext } from '../context/Context';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {};
  };
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div id='timer-wrap'>
              <h3 id='timer-label'>{context.state.status ? "Session" : "Break"}</h3>
              <div
                id='time-left'
                className={context.state.min === ('0' + 0) ? "red-warning" : 'no-warning'}>
                {context.state.min + ':' + context.state.sec}
              </div>
              <audio id='beep' src='https://goo.gl/65cBl1'></audio>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>

    );
  };
}

export default Clock;