"use client";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";  
// import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

import { BSC_MAINNET, BSC_TESTNET } from "@/utils/NetworkUtils";

import { login, logout } from "@/store/slices/authSlice";
import { changeGlobalData } from "@/store/slices/globalSlice";
import { RootState } from "@/store/store";

require("dotenv").config();

const TOKEN_EXPIRATION = 15 * 60 * 1000; // 5 mins

export default function AuthPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.isUserLoggedIn
  );
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(handleLogout, TOKEN_EXPIRATION));
  };
  const handleLogout = () => {
    dispatch(logout());
    if (timer) clearTimeout(timer);
    router.push("/auth");
  };

  // useEffect for handling login status
  useEffect(() => {
    if (!isUserLoggedIn) {
      handleLogout(); // Ensures user is redirected to login page if not logged in
    }
  }, [isUserLoggedIn]); // Depend on the login status

  const handleLogin = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const network = await provider.getNetwork();
        const isDev = process.env.NODE_ENV === "development";
        const correctNetwork = isDev
          ? BSC_TESTNET.chainId
          : BSC_MAINNET.chainId;
        // console.log(typeof correctNetwork,typeof network.chainId)
        // console.log( correctNetwork, network.chainId)
        // Convert both chain IDs to decimal or hexadecimal as needed before comparison
        const currentChainId = BigInt(network.chainId); // This should already be in decimal form
        const expectedChainId = BigInt(
          isDev ? BSC_TESTNET.chainId : BSC_MAINNET.chainId,
          16
        ); // Convert from hex string to decimal
        console.log(currentChainId, expectedChainId);

        if (currentChainId !== expectedChainId) {
          console.log("Please switch to the correct network");
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [isDev ? BSC_TESTNET : BSC_MAINNET],
          });
        } else {
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          console.log(signer);
          const pubKey = await signer.getAddress();
          const resp = await axios.get(
            `http://localhost:3333/api/auth/pubKey/${pubKey}/rid/1`
          );
          const signature = await signer.signMessage(resp.data.data.nonce);
          const response = await axios.post(
            "http://localhost:3333/api/auth/verify",
            {
              pubKey,
              signature,
            }
          );
          if (response.data.data.verified) {
            dispatch(
              login({
                user: response.data.data.user,
                token: response.data.data.access_token,
              })
            );
            dispatch(
              changeGlobalData({ globalData: response.data.data.globalData })
            );
            resetTimer();
            router.push("/dashboard");
            toast.success("Login successful!");
          } else {
            toast.error("Login failed. Please try again.");
          }
        }
      } catch (error) {
        // console.log({errorCode: error.code});
        if (error.code === "ACTION_REJECTED") {
          // User rejected the request
          toast.error("Login request was rejected.");
        } else {
          toast.error("Error during login process.");
        }
      }
    } else {
      toast.error(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
      );
    }
  };

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
          {/* <div className='ffp text-2xl fw600 df ac jc c-p mt--40' >
              {"UPSIDE"} <span className='c-s ml10'>{"VAULT"}</span>
            </div> */}

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
