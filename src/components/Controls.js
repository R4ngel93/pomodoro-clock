import React from 'react';
import { MyContext } from '../context/Context';

class Controls extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>
              <button
                id='start_stop'
                className={context.state.play ? "btn btn-lg btn-warning" : "btn btn-lg btn-success"}
                onClick={context.handlePlay}>
                <i className={context.state.play ? "fas fa-pause" : "fas fa-play"}></i>
              </button>
              <button id='reset' className='btn btn-lg btn-danger' onClick={context.resetTimer}>
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  };
}

export default Controls;