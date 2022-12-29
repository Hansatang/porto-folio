
import logo from './logo.svg';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className="Main-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="Main-logo">Swirl</h1>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Main;
