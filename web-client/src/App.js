import {Button} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.imagescanada.ca/wp-content/uploads/2019/03/Spectacular-Photos-of-Niagara-Falls-Casinos.jpg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>
          CLICK ME
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hi I made a change</p>
      </header>
    </div>
  );
}

export default App;
