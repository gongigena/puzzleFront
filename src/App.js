import React , { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';



function App() {
  const [counter, setCounter] = useState(0);

  const onStart = () => {
    setCounter(counter + 1);
  }

  const onStop = () => {
    console.log('stop');
  }

  const onReset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="App-div">
        <p>
          {counter}
        </p>
        <Grid
          container
          justify="center"
        >
          <Grid
            xs={3}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Button variant="contained" onClick={onStart}>Start</Button>
            <Button variant="contained" onClick={onStop}>Stop</Button>
            <Button variant="contained" onClick={onReset}>Reset </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
