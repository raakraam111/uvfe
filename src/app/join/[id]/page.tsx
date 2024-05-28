 
// "use client";
// import { useDispatch, useSelector } from 'react-redux';
// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useRouter, useParams } from 'next/navigation';
// import Image from 'next/image';

// import { login, logout } from '@/store/slices/authSlice';
// import { RootState } from '@/store/store';
// import { BSC_MAINNET, BSC_TESTNET } from '@/utils/NetworkUtils';

// require('dotenv').config();

// const TOKEN_EXPIRATION = 5 * 60 * 1000; // 5 minutes

// export default function JoinPage() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { id: routeId } = useParams();
//   console.log({routeId})
//   const [id, setId] = useState(routeId || '1'); // Default ID is '1' if not specified
//   const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
//   const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
//   console.log({id})

//   const resetTimer = () => {
//     if (timer) clearTimeout(timer);
//     setTimer(setTimeout(handleLogout, TOKEN_EXPIRATION));
//   };

//   useEffect(() => {
//     if (!isUserLoggedIn) {
//       logout();
//       router.push('/auth');
//     }
//   }, [isUserLoggedIn, logout, router]);
  
  
//   useEffect(() => {
//     if (!isUserLoggedIn) {
//       handleLogout(); // Ensures user is redirected to login page if not logged in
//     }
//   }, [isUserLoggedIn]);

  // const handleLogin = async () => {
  //   if (typeof window.ethereum !== 'undefined') {
  //     try {
  //       const provider = new ethers.BrowserProvider(window.ethereum);
  //       const network = await provider.getNetwork();
  //       const isDev = process.env.NODE_ENV === 'development';
  //       const currentChainId = BigInt(network.chainId);
  //       const expectedChainId = BigInt(isDev ? BSC_TESTNET.chainId : BSC_MAINNET.chainId);

  //       if (currentChainId !== expectedChainId) {
  //         console.log('Please switch to the correct network');
  //         await window.ethereum.request({
  //           method: 'wallet_addEthereumChain',
  //           params: [isDev ? BSC_TESTNET : BSC_MAINNET],
  //         });
  //       } else {
  //         await provider.send('eth_requestAccounts', []);
  //         const signer = provider.getSigner();
  //         const pubKey = await signer.getAddress();
  //         const resp = await axios.get(`http://localhost:3333/api/auth/pubKey/${pubKey}/rid/${id}`);
  //         const signature = await signer.signMessage(resp.data.data.nonce);
  //         const response = await axios.post('http://localhost:3333/api/auth/verify', {
  //           pubKey,
  //           signature,
  //         });
  //         if (response.data.data.verified) {
  //           dispatch(login({ user: response.data.data.user, token: response.data.data.access_token }));
  //           resetTimer();
  //           router.push('/dashboard');
  //           toast.success('Login successful!');
  //         } else {
  //           toast.error('Login verification failed.');
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error during login process:', error);
  //       if (error.code === 'ACTION_REJECTED') {
  //         toast.error('Login request was rejected.');
  //       } else {
  //         toast.error('Error during login process.');
  //       }
  //     }
  //   } else {
  //     toast.error('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
  //   }
  // };

//   const handleLogout = () => {
//     dispatch(logout());
//     if (timer) clearTimeout(timer);
//     router.push('/auth');
//   };

//   return (
//     <div className="df ac jc" style={{ height: "100%" }}>
//       <div className="neon-circle dg">
//         <div className="row">
//           <Image
//             src="/assets/logo200.png"
//             width={150}
//             height={150}
//             alt="Logo"
//             sizes="(max-width: 600px) 100vw, 150px"
//             className='mt--60'
//           />
//           <div className='ffp text-2xl fw600 df ac jc c-p mt--40'>
//             {"UPSIDE"} <span className='c-s ml10'>{"VAULT"}</span>
//           </div>
//         </div>
//         <div className='df ac jc'>
//           <button type="submit" className="l-btn bc-p c-black" onClick={handleLogin}>Enter</button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import Image from 'next/image';

import { login, logout } from '@/store/slices/authSlice';
import { RootState } from '@/store/store';
import { BSC_MAINNET, BSC_TESTNET } from '@/utils/NetworkUtils';
import NewHeader from '@/components/NewHeader';
import { config } from '@/utils/config';
import { changeGlobalData } from '@/store/slices/globalSlice';
require('dotenv').config();

const TOKEN_EXPIRATION = 15 * 60 * 1000; // 15 minutes

export default function JoinPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const [rid, setRId] = useState(id || '1');
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    console.log({id});
    setRId(id || '1');
  }, [id]);
 

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
    // setTimer(setTimeout(handleLogout, TOKEN_EXPIRATION));
  };

  const handleLogin = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const network = await provider.getNetwork();
        const isDev = process.env.NODE_ENV === 'development';
        const currentChainId = BigInt(network.chainId);
        const expectedChainId = BigInt(isDev ? BSC_TESTNET.chainId : BSC_MAINNET.chainId);

        if (currentChainId !== expectedChainId) {
          console.log('Please switch to the correct network');
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [isDev ? BSC_TESTNET : BSC_MAINNET],
          });
        } else {
          await provider.send('eth_requestAccounts', []);
          const signer = await provider.getSigner();
          console.log(signer);
          const pubKey = await signer.getAddress();
          const resp = await axios.get(`http://localhost:3333/api/auth/pubKey/${pubKey}/rid/${id}`);
          const signature = await signer.signMessage(resp.data.data.nonce);
          const response = await axios.post('http://localhost:3333/api/auth/verify', {
            pubKey,
            signature,
          });
          if (response.data.data.verified) {
            dispatch(login({ user: response.data.data.user, token: response.data.data.access_token }));
            const userMineGlobalUrl = config.userMineGlobalApiUrl+'/'+response?.data?.data?.user?.uid; // Adjust your API URL
            const headerConfig = {
              headers: {
                Authorization: `Bearer ${response?.data?.data?.access_token}`, // Adjust your auth token
                "Content-Type": "application/json",
              },
            };
            const response2 = await axios.get(
              userMineGlobalUrl, 
              headerConfig
            );
            const globalData = response2.data.data.globalData;
            dispatch(changeGlobalData({ globalData }));

            resetTimer();
            router.push('/dashboard');
            toast.success('Login successful!');
          } else {
            toast.error('Login verification failed.');
          }
        }
      } catch (error) {
        console.error('Error during login process:', error);
        if (error.code === 'ACTION_REJECTED') {
          toast.error('Login request was rejected.');
        } else {
          toast.error('Error during login process.');
        }
      }
    } else {
      toast.error('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   // router.push('/auth');
  // };

  return (
    <>
    {/* <NewHeader /> */}
    
    <div className="df ac jc" style={{ height: "100%" }}>
      <div className="dg ac jc  ">
        <div className=" ">
          <Image
            src="/assets/nlogo2.png"
            width={300}
            height={300}
            alt="Logo"
            // sizes="(max-width: 600px) 100vw, 150px"
            priority={true}
            className="mt--50 "
          /> 
          <div className="df ac jc">
            <div
              className=" df jc ac w-[40%] h-10 rounded-lg neon-red text-yellow-50 hover:cursor-pointer"
              onClick={handleLogin}
            >
              Enter
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
}