// // src/types/ethereum.d.ts
// import { MetaMaskInpageProvider } from "@metamask/providers";

// declare global {
//   interface Window{
//     ethereum?:MetaMaskInpageProvider
//   }
// }
interface RequestArguments {
  method: string;
  params?: Array<any>;  // This can be more specific depending on what types of params are expected
}

interface Ethereum extends EventTarget {
  isMetaMask?: true;
  request: (args: RequestArguments) => Promise<any>;
}

interface Window {
  ethereum?: Ethereum;
}
