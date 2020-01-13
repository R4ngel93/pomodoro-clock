import React from 'react';
import { MyContext } from '../context/Context'

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div id='session-id'>
              <h3 id='session-label'>Session length</h3>
              <div>
                <i id='session-increment' className="fas fa-arrow-circle-up" onClick={context.incrementSession}></i>
                <span id='session-length'>{context.state.session_display}</span>
                <i id='session-decrement' className="fas fa-arrow-circle-down" onClick={context.decrementSession}></i>
              </div>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  };
}

export default Session;