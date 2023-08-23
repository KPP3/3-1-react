import './App.css';
import MyImg from './../src/assets/img.jpg';

var bio = [
  {
    main: " About Me",
    data:" Hello! I am currently attanding W3-Schools's web devloper bootcamp. Where I learn how to build this page with react app."
  },
  {
    main: " Contact Me",
    data:" Email : kppatel@gmail.com"
  }
]

function App() {
  return (
    <div className="App">
      <img className="img" src={MyImg} alt="Keyur's Photo"/>
      <h1> Keyur Patel</h1>
      <h2>Web Devloper to Be </h2>
      {bio.map((item) => {
        return (
          <div className="d1">
            <h3>{item.main}</h3>
            <hr/>
            <p>{item.data}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
