import React from 'react';

const MyContext = React.createContext();
class MyProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true,
      play: false,
      break_display: 5,
      session_display: 25,
      min: 25,
      sec: '0' + 0,
      seconds: 60
    }
  }

  handleTimer = (play) => {

    let audioEl = document.getElementById('beep');

    if (play) {

      this.interval = setInterval(() => {

        if (this.state.seconds === 60 && this.state.min >= 11) {
          this.setState({ sec: this.state.seconds - 1, seconds: this.state.seconds - 1, min: this.state.min - 1 });
        } else if (this.state.seconds === 60 && this.state.min < 11) {
          this.setState({ sec: this.state.seconds - 1, seconds: this.state.seconds - 1, min: '0' + (this.state.min - 1) });
        } else if (this.state.seconds < 60 && this.state.seconds >= 10) {
          this.setState({ sec: this.state.seconds, seconds: this.state.seconds - 1 });
        } else if (this.state.seconds < 10) {//&& this.state.seconds >= 0
          this.setState({ sec: '0' + this.state.seconds, seconds: this.state.seconds - 1 });
        }

        if (this.state.seconds === -1) {
          audioEl.play()
        }

        if (this.state.min === ('0' + 0) && this.state.seconds === -2) {
          this.setState({
            status: !this.state.status,
            min: this.state.break_display,
            sec: '0' + 0,
            seconds: 60
          })
        }

      }, 300);

    } else {
      clearInterval(this.interval);
    }

  }


  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        incrementBreak: () => this.setState(prevState => {
          if (prevState.break_display < 60 && !this.state.play) {
            return {
              break_display: prevState.break_display + 1
            }
          }
        }),
        decrementBreak: () => this.setState(prevState => {
          if (prevState.break_display > 1 && !this.state.play) {
            return {
              break_display: prevState.break_display - 1
            }
          }
        }),
        incrementSession: () => this.setState(prevState => {
          if (prevState.session_display < 9 && !this.state.play) {
            return {
              session_display: prevState.session_display + 1,
              min: '0' + (prevState.session_display + 1),
              sec: '0' + 0,
              seconds: 60
            }
          } else if (prevState.session_display < 60 && prevState.session_display >= 9 && !this.state.play) {
            return {
              session_display: prevState.session_display + 1,
              min: prevState.session_display + 1,
              sec: '0' + 0,
              seconds: 60
            }
          }
        }),
        decrementSession: () => this.setState(prevState => {
          if (prevState.session_display > 10 && !this.state.play) {
            return {
              session_display: prevState.session_display - 1,
              min: prevState.session_display - 1,
              sec: '0' + 0,
              seconds: 60
            }
          } else if (prevState.session_display > 1 && prevState.session_display <= 10 && !this.state.play) {
            return {
              session_display: prevState.session_display - 1,
              min: '0' + (prevState.session_display - 1),
              sec: '0' + 0,
              seconds: 60
            }
          }
        }),
        resetTimer: () => {
          clearInterval(this.interval);
          this.setState({
            status: true,
            play: false,
            break_display: 5,
            session_display: 25,
            min: 25,
            sec: '0' + 0,
            seconds: 60
          })
          document.getElementById('beep').pause();
          document.getElementById('beep').currentTime = 0;
        },
        handlePlay: () => {

          this.setState(prevState => { return { play: !prevState.play } });
          this.handleTimer(!this.state.play);
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
export { MyContext };

