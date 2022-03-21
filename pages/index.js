import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { useWallet } from 'use-wallet';
import account from '../store/account';
import contract from '../store/contract';
import { useState, useEffect } from 'react';
import { setAllownce } from '../api/pancake-api';

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
  const loginAccount = account.useState('account');
  const pancakeContract = contract.useState('contract');
  console.log(loginAccount);
  console.log(pancakeContract);
  let result = null;
  let res = null; 

  useEffect(() => {
    
  }, [loginAccount, pancakeContract]);

  const showResult = () => {
    
      console.log("options******************************************")
      // res = pancakeContract.methods.balanceOf(loginAccount).sendAsync();
      result = setAllownce(pancakeContract.contract, loginAccount);
    
    console.log('result', result);
    console.log('res', res);
  }


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
        {`pancake balance: ${res}`}
      </Box>
      <Box>
        {`set allowance: ${result}`}
      </Box>
      <Box>
        <Button onClick={() => wallet.connect()} variant={'contained'} > MetaMask</Button>
      </Box>
      <Box>
        <Button onClick={showResult} variant={'contained'} > Show result</Button>
      </Box>
    </Box>
  )
}

export default Home;
