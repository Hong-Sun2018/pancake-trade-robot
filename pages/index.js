import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { useWallet } from 'use-wallet';

const useStyles = makeStyles({
  root: {
    width: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

const Home = () => {

  const classes = useStyles();
  const wallet = useWallet();

  return (
    <Box className={classes.root}>
      Home 
      <Box>
        {`Account: ${wallet.account}`}
      
      </Box>
      <Box>
        {`Balance: ${wallet.balance}`}
        
      </Box>
      <Box>
        <Button onClick={() => wallet.connect()} > MetaMask</Button>
      </Box>
    </Box>
  )
}

export default Home;
