"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { config } from "@/utils/config";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import SideMenu from "@/components/SideMenu";
import LogoWord from "@/components/LogoWord";
import { logout } from "@/store/slices/authSlice";
import { toast } from "react-toastify";
import { packDetails, pricing } from "@/constants";
import NewHeader from "@/components/NewHeader";
import { PackPurchaseRequest, DepositRequest } from "@/types/requests";

function Purchase() {
  const router = useRouter();
  const [packs, setPacks] = useState(packDetails);
  const [minQ, setMinQ] = useState(0);
  const [maxQ, setMaxQ] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [depositAddress, setDepositAddress] = useState(
    "0xee7F9d4af4Ce44b609b88E45D04F0564a5e229c3"
  );
  const [bnbPrice, setBnbPrice] = useState(600);
  // console.log(packs);
  const [selectedNetwork, setSelectedNetwork] = useState("ethereum");
  let isUserLoggedIn;
  let user;
  let token;
  useEffect(() => {
    isUserLoggedIn = useSelector(
      (state: RootState) => state.auth.isUserLoggedIn
    );
      user = useSelector((state: RootState) => state.auth.user);
      token = useSelector((state: RootState) => state.auth.token);
     if (!isUserLoggedIn || !user) {
      console.log(
        "User not logged in or user data not available, redirecting..."
      );
      logout();
      toast.error("Please login to continue.");
    }
  }, [isUserLoggedIn, user]);

  const fetchBnbPrice = async () => {
    const urls = [
      "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT", // Binance API
      //   'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd',  // CoinGecko API
    ];

    try {
      // Fetch data from all URLs
      const promises = urls.map((url) => axios.get(url));
      const results = await Promise.all(promises);

      // Extract prices from responses
      // Binance response format: { symbol: "BNBUSDT", price: "300.00" }
      // CoinGecko response format: { binancecoin: { usd: 299.00 } }
      const prices = [];
      prices.push(parseFloat(results[0].data.price)); // From Binance
      //   prices.push(results[1].data.binancecoin.usd); // From CoinGecko

      console.log({ prices });

      // Calculate average price from the fetched results
      const averagePrice =
        prices.reduce((acc, price) => acc + price, 0) / prices.length;
      console.log({ averagePrice });

      // Set the state with the new average price
      setBnbPrice(averagePrice * 0.97);
    } catch (error) {
      console.error("Failed to fetch BNB prices:", error);
      // You might want to handle errors, e.g., by setting a fallback price or showing an error message
    }
  };

  // useEffect to set interval for fetching the BNB price every minute
  useEffect(() => {
    fetchBnbPrice(); // Initial fetch when component mounts
    const intervalId = setInterval(fetchBnbPrice, 6000); // Set up an interval to fetch price every minute
    setMounted(false);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const handleNetworkChange = (e: any) => {
    setSelectedNetwork(e.target.value);
  };

  const handlePurchase = async (bnbVal: any, usdVal: any, packId: any) => {
    toast.info("Processing transaction...");
    const headerConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // Adjust your auth token
        "Content-Type": "application/json",
      },
    };
    const packPurchasesUrl = `${config.apiBaseUrl}/packPurchases`;
    const depositRequestsUrl = `${config.apiBaseUrl}/deposits`;
    if (!window.ethereum) {
      toast.error("Please install / use web3 supported platform to proceed.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request account access
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      // get balance
      const balance = await provider.getBalance(address);
      // console.log({balance})
      const balInBnb = ethers.formatEther(balance);
      // console.log({balInBnb})
      if (parseFloat(balInBnb) < parseFloat(bnbVal)) {
        toast.error("Insufficient balance to proceed with the transaction.");
        return;
      }

      const transactionParameters = {
        to: depositAddress, // Required except during contract deployments
        from: address, // must match user's active address.
        value: ethers.parseUnits(bnbVal, "ether").toString(), // Convert Ether value to a hexadecimal value
      };

      const tx = await signer.sendTransaction(transactionParameters);
      await tx.wait(3);
      // create pack purchase request
      const packName = packId === "1" ? "mini" : "maxi";
      const qty = packId === "1" ? minQ : maxQ;
      const packPurchaseRequest: PackPurchaseRequest = {
        uid: user?.uid,
        numberOfPacks: qty,
        packName: packName,
        status: "active",
        lastUpdatedUid: user?.uid,
      };

      // create deposit request
      const depositRequest: DepositRequest = {
        uid: user?.uid,
        address: depositAddress,
        amount: parseFloat(bnbVal),
        network: "BSC",
        currency: "BNB",
        usdValue: parseFloat(usdVal),
        txnHash: tx.hash,
        status: "active",
        lastUpdatedUid: user?.uid,
      };

      // make API calls
      const packPurchaseResponse = await axios.post(
        packPurchasesUrl,
        packPurchaseRequest,
        headerConfig
      );
      const depositResponse = await axios.post(
        depositRequestsUrl,
        depositRequest,
        headerConfig
      );

      toast.info(`Purchase successful!  `);
    } catch (error) {
      const e = error as { code?: string }; // Assuming error will always have a 'code' or be undefined

      console.error(e.code);

      if (e.code === "ACTION_REJECTED") {
        toast.error("Transaction rejected by user: Please try again");
      } else {
        toast.error("Transaction failed: Please try later");
      }
    }
  };

  const additional = [1, 5, 20, 50, 100, 0];

  function handleMinChange(event: ChangeEvent<HTMLInputElement>): void {
    // Convert the input value to a number first
    const value = parseInt(event.target.value);
    // If the value is not a valid number (NaN), set state to 0; otherwise, set it to the parsed number
    setMinQ(isNaN(value) ? 0 : value);
  }

  function handleMaxChange(event: ChangeEvent<HTMLInputElement>): void {
    // Convert the input value to a number first
    const value = parseInt(event.target.value);
    // If the value is not a valid number (NaN), set state to 0; otherwise, set it to the parsed number
    setMaxQ(isNaN(value) ? 0 : value);
  }

  function incrementQuantity(packType: string, amount: number): void {
    if (amount === 0) {
      setMinQ(0);
      setMaxQ(0);
      return;
    }
    if (packType === "mini") {
      setMinQ((prev) => Math.max(0, prev + amount));
    } else if (packType === "maxi") {
      setMaxQ((prev) => Math.max(0, prev + amount));
    }
  }

  return (
    <div className="dashboard-container">
      <NewHeader />
      <div className="dashboard-section">
        <SideMenu />
        <div className="stat-container text-white">
          <div className="df ac jc mb30">
            <LogoWord firstWord="MORE WITH" secondWord="UPGRADES" />
          </div>{" "}
          <div className="flex flex-col-reverse lg:flex lg:flex-row-reverse lg:place-content-evenly">
            {pricing.map((item: any) => (
              <div
                key={item.id}
                className="w-[22rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem]  py-10 my-4 lg:p-10 lg:m-10 "
              >
                <h4
                  className="h4 mb-4 font-bold"
                  style={{ color: item.id === "1" ? "#FF5733" : "#33C3F0" }}
                >
                  {item.title}
                </h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                  {item.description}
                </p>

                <div className="flex items-center h-[5.5rem] mb-6">
                  {item?.price && (
                    <>
                      <div className="h3">$</div>
                      <div className="text-[5.5rem] leading-none font-bold">
                        {item?.price}
                      </div>
                    </>
                  )}
                </div>
                <input
                  type="number"
                  min="0"
                  value={item.id === "1" ? minQ : maxQ}
                  onChange={item.id === "1" ? handleMinChange : handleMaxChange}
                  className="bg-gray-700 text-white text-center rounded-2 py-2 mt-2 w-full"
                />
                <div className="c-gray fs15 pt-4 df ac jc lg:flex">
                  {additional.map((add, index) => (
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default form submission behavior
                        incrementQuantity(
                          item.id === "1" ? "mini" : "maxi",
                          add
                        );
                      }}
                      className="pt-2 px-2 py-1 mx-2 bg-green-700 text-white rounded-md font-semibold last:bg-red-700 last:text-white last:rounded-md"
                      key={index}
                    >
                      {add === 0 ? "R" : `+${add}`}
                    </button>
                  ))}
                </div>

                <button
                  className="w-full my-6 py-3 bg-purple-800 rounded-md font-semibold font-sans"
                  onClick={() => {
                    const bnbVal =
                      item.id === "1"
                        ? ((minQ * item?.price) / bnbPrice).toFixed(5)
                        : ((maxQ * item?.price) / bnbPrice).toFixed(5);
                    // console.log({ bnbVal });
                    const usdVal =
                      item.id === "1"
                        ? (minQ * item?.price).toFixed(2)
                        : (maxQ * item?.price).toFixed(2);
                    handlePurchase(bnbVal, usdVal, item.id);
                  }}
                >
                  {minQ === 0 && maxQ === 0
                    ? "Pay"
                    : item.id === "1"
                    ? minQ === 0
                      ? "Pay"
                      : `Pay ${((minQ * item?.price) / bnbPrice).toFixed(
                          5
                        )} BNB (${(minQ * item?.price).toFixed(2)} USDT)`
                    : maxQ === 0
                    ? "Pay"
                    : `Pay ${((maxQ * item?.price) / bnbPrice).toFixed(
                        5
                      )} BNB (${(maxQ * item?.price).toFixed(2)} USDT)`}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
