
import logo from './logo.svg';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <p>
          This is my page made with React, where I improve my skill with it
        </p>
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          It also works as my portfolio 
        </p>
      </header>
    </div>
  );
}

export default Main;
