import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary 
      </header>
       <main>
      <Dictionary defaultKeyword="lemon" />
      </main>
      <footer className="App-footer">
        <small>
          Coded by <a href="https://github.com/Valentinawalechan/My-dictionary-app" target="_blank" rel="noreferrer"> Valentina Di Santo</a> 
        </small>
      </footer>
    </div>
  );
}

export default App;
