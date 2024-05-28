// window.d.ts
import { ExternalProvider } from '@ethersproject/providers';

interface EthereumProvider extends ExternalProvider {
  isMetaMask?: boolean;
  request?: (...args: any[]) => Promise<any>;
}

interface Window {
  ethereum?: EthereumProvider;
}
