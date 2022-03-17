import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { useWallet } from 'use-wallet';
import account from '../store/account';
import contract from '../store/contract';

const useStyles = makeStyles({
  root: {
    width: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const Home = () => {

  const classes = useStyles();
  const wallet = useWallet();
  const loginAccount = account.useState('account') ;
  const pancakeContract = contract.useState('contract');
  console.log(loginAccount);
  console.log(pancakeContract);

  return (
    <Box className={classes.root}>
      Home 
      <Box>
        {`Account: ${loginAccount}`}
      
      </Box>
      <Box>
        {`Balance: ${pancakeContract}`}
        
      </Box>
      <Box>
        <Button onClick={() => wallet.connect()} > MetaMask</Button>
      </Box>
    </Box>
  )
}

export default Home;
