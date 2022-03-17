import { UseWalletProvider } from 'use-wallet';
import { TEXT_NET } from '../configs/chain';
import PancakeProvider from '../pancake/PancakeProvider';

const  MyApp = ({ Component, pageProps }) => {
  return (
      < UseWalletProvider
        chainId={TEXT_NET.chainId}
        connectors={{
          walletconnect: {
            rpc: TEXT_NET.rpc
          }
        }}
      >
        <PancakeProvider>
          <Component {...pageProps} />
        </PancakeProvider>        
      </UseWalletProvider>
  );
}

export default MyApp 
