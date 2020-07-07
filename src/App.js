import React from 'react';
import Barchart from "./Barchart";
import AppBar from "./appbar";
import { makeStyles } from '@material-ui/core/styles';
import{ Paper, TextField ,Button ,CircularProgress} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  Paper:{height:350,
  width:350,
  margin:"0 auto",
marginTop: 30,
textAlign:"center",
padding:15
},
input:{width :"95%",
marginBottom:10
}
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
   <AppBar />
    <Paper elevation={3} className={classes.Paper}>
    <h1><center><Avatar src="/broken-image.jpg" ></Avatar>
    </center> Login Form Using React </h1>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField   id="standard-basic" label="Enter User Email" className={classes.input}/>
  <TextField id="standard-basic" label="Enter Password" className={classes.input}/></form>
  <Button variant="contained" color="primary"className={classes.input}>
  Log-In
</Button>
<CircularProgress value={50} />
</Paper>
<Barchart />
  </div>
  );
}

export default App;
