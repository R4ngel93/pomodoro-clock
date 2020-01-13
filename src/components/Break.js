import React from 'react';
import { MyContext } from '../context/Context';

class Break extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div id='break-id'>
              <h3 id='break-label'>Break length</h3>
              <div>
                <i id='break-increment' className="fas fa-arrow-circle-up" onClick={context.incrementBreak}></i>
                <span id='break-length'>{context.state.break_display}</span>
                <i id='break-decrement' className="fas fa-arrow-circle-down" onClick={context.decrementBreak}></i>
              </div>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  };
}

export default Break;