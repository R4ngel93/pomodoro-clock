import React from 'react';
import './styles.css';
import Title from './components/Title';
import Author from './components/Author';
import Break from './components/Break';
import Session from './components/Session';
import Clock from './components/Clock';
import Controls from './components/Controls';
import MyProvider from './context/Context'

function App() {
  return (
    <MyProvider>
      <div className='container text-center mt-4'>
        <header>
          <Title />
        </header>
        <main>
          <section className='d-flex justify-content-center'>
            <Break />
            <Session />
          </section>
          <section>
            <Clock />
          </section>
          <section>
            <Controls />
          </section>
        </main>
        <footer>
          <Author />
        </footer>
      </div>
    </MyProvider>
  );
}

export default App;
