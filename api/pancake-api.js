import { Contract } from 'web3-eth-contract';

const setAllownce = (contract, account) => {

  const res = contract.methods.approve(account.account, 10).send({from: account.account}).then(res => {
    console.log(res)
  });
  
  return res;
}

export { setAllownce };

const swap = (contract, account, toAddress) => {
  contract.methods.swap()
}