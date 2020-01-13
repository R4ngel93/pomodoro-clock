import React from 'react';

class Author extends React.Component {
  constructor() {
    super();
    this.state = {
      target: '_blank'
    };
  };
  render() {
    return (
      <div id='author'>
        <div>Coded by <code>r4ngel93</code></div>
        <div>
          <a href='https://github.com/R4ngel93' target={this.state.target}><i className=" fab fa-github mx-1"></i></a>
          <a href='https://www.freecodecamp.org/r4ngel93' target={this.state.target}><i className="fab fa-free-code-camp mx-1"></i></a>
          <a href='https://twitter.com/OscarRa65705186' target={this.state.target}><i className="fab fa-twitter mx-1"></i></a>
        </div>
      </div>
    );
  };
}

export default Author;