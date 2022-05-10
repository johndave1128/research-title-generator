import React from 'react';
import './App.css';
import titles from './components/titles';


function App (){
  const [title, setTitle] = React.useState(titles[0]);

  const getTitle = () => {
    setTitle(titles[Math.floor(Math.random()*titles.length)])
  }
  return(
    <div className="App">
      <header className='App-header'>
        <div className='container'>
          <h1> Research Title Generator</h1>
          <p>This application provides study title suggestions at random for your reference or inspiration.</p>
          <p>Currently, the titles generated are for majors in computer science  and information technology</p>
          <p>Click the button below to generate other.</p>
          <div className='containerresult'>
            {
              
              <h3 className='result'>{title}</h3>
             
            }
          
          </div> <br></br><br></br>
          <button onClick={getTitle} className='btn'>
            Generate</button>
          <p>Developed by Juritzu</p>
        </div>
      </header>
    </div>
  );
}

export default App;
