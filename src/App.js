import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

let timer = null;
function App() {
  const [counter, setCounter] = useState(0);

  const OnStart = () => {
    if(timer === null){
      timer = setInterval(() => {
        setCounter(preCounter => (preCounter + 1) <= 15 ? preCounter + 1: 0);
      }, 500);
    }
  }
  
  const onStop = () => {
    clearInterval(timer);
    timer = null;
  }
  
  const onReset = () => {
    clearInterval(timer);
    timer = null;
    setCounter(0);
  }

  const generateSquares = () => {
    var divs = [];
    for(var i = 0; i < 15; i++){
      divs.push(
        <div className={(i < counter) ? "squareRed": "square"}></div>
      );
    }
    return divs;
  }


  return (
    <div className="App">
      <div className="App-div">
        <h1 className="title">Progress Bar</h1>
        <Grid
          xs={6}
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className="divsContainer"
        >
          {generateSquares()}
        </Grid>
        <Grid
          item
          container
          justify="center"
        >
          <Grid
            item
            xs={3}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Button variant="contained" onClick={OnStart}>Start</Button>
            <Button variant="contained" onClick={onStop}>Stop</Button>
            <Button variant="contained" onClick={onReset}>Reset </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
