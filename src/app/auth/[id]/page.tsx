 
"use client";
import { useDispatch, useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';

import { login, logout } from '@/store/slices/authSlice';
import { RootState } from '@/store/store';
import { BSC_MAINNET, BSC_TESTNET } from '@/utils/NetworkUtils';

require('dotenv').config();

const TOKEN_EXPIRATION = 5 * 60 * 1000; // 5 minutes

export default function AuthPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id: routeId } = useParams();
  const [id, setId] = useState(routeId || '1'); // Default ID is '1' if not specified
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(handleLogout, TOKEN_EXPIRATION));
  };
  if (!isUserLoggedIn  ) {
    logout();
    router.push('/auth');
  }
  useEffect(() => {
    if (!isUserLoggedIn) {
      handleLogout(); // Ensures user is redirected to login page if not logged in
    }
  }, [isUserLoggedIn]);

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
          const signer = provider.getSigner();
          const pubKey = await signer.getAddress();
          const resp = await axios.get(`http://localhost:3333/api/auth/pubKey/${pubKey}/rid/${id}`);
          const signature = await signer.signMessage(resp.data.data.nonce);
          const response = await axios.post('http://localhost:3333/api/auth/verify', {
            pubKey,
            signature,
          });
          if (response.data.data.verified) {
            dispatch(login({ user: response.data.data.user, token: response.data.data.access_token }));
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

  const handleLogout = () => {
    dispatch(logout());
    if (timer) clearTimeout(timer);
    router.push('/auth');
  };

  return (
    <div className="df ac jc" style={{ height: "100%" }}>
      <div className="neon-circle dg">
        <div className="row">
          <Image
            src="/assets/logo200.png"
            width={150}
            height={150}
            alt="Logo"
            sizes="(max-width: 600px) 100vw, 150px"
            className='mt--60'
          />
          <div className='ffp text-2xl fw600 df ac jc c-p mt--40'>
            {"UPSIDE"} <span className='c-s ml10'>{"VAULT"}</span>
          </div>
        </div>
        <div className='df ac jc'>
          <button type="submit" className="l-btn bc-p c-black" onClick={handleLogin}>Enter</button>
        </div>
      </div>
    </div>
  );
}
