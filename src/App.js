import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

let timer = null;
function App() {
  const [counter, setCounter] = useState(0);

  const OnStart = (setCounter,counter) => {
    timer = setInterval(() => {
      console.log(counter)
      setCounter(preCounter => preCounter + 1);
    }, 500);
  }
  
  const onStop = () => {
    clearInterval(timer);
  }
  
  const onReset = (setCounter) => {
    clearInterval(timer);
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="App-div">
        <p>
          {counter}
        </p>
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
            <Button variant="contained" onClick={() => OnStart(setCounter,counter)}>Start</Button>
            <Button variant="contained" onClick={onStop}>Stop</Button>
            <Button variant="contained" onClick={() => { onReset(setCounter)}}>Reset </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
