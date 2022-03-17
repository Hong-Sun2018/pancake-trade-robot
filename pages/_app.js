import { UseWalletProvider } from 'use-wallet';
import { TEXT_NET } from '../chain-config';

const  MyApp = ({ Component, pageProps }) => {
  return (
    <>
      < UseWalletProvider
        chainId={TEXT_NET.chainId}
        connectors={{
          walletconnect: {
            rpc: TEXT_NET.rpc
          }
        }}
      >
        <Component {...pageProps} />
      </UseWalletProvider>
    </>
  );
}

export default MyApp 
