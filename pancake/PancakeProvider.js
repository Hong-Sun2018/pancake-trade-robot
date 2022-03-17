import loginAccount from '../store/account';
import pContract from '../store/contract';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';
import { TEXT_NET } from '../configs/chain'; 
import pancakeABI from '../configs/pancake-abi.json';
import { globalStore } from 'rekv';

const PancakeProvider = ({children}) => {

  const wallet = useWallet();
  const {ethereum, account} = useWallet();
  const {contract} = TEXT_NET;
  const web3 = new Web3(ethereum);
  const pancakeContract = new web3.eth.Contract(pancakeABI, contract);
  console.log('Contract: ', pancakeContract);
  console.log('Account', account)

  pContract.setState({contract: pancakeContract});
  loginAccount.setState({account: account});

  return (
    <>
      {children}
    </>
  );
}

export default PancakeProvider;