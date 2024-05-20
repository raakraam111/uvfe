// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ethers } from 'ethers';
// import { config } from '@/utils/config';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import { useRouter } from 'next/navigation';
// import SideMenu from '@/components/SideMenu';
// import Header from '@/components/Header';

// function Purchase() {
//   const [packs, setPacks] = useState([]);
//   const [userPack, setUserPack] = useState(0);
//   const [bnbPrice, setBnbPrice] = useState(0);
//   const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
//   const user = useSelector((state: RootState) => state.auth.user);
//   const router = useRouter();
  
//   if(!isUserLoggedIn || !user) {
//     router.push('/auth');
//   }

//   const baseApiUrl = config.apiBaseUrl; 

//   useEffect(() => {
//     const fetchPacks = async () => {
//       const packsResponse = await axios.get(`${baseApiUrl}/packs`);
//       setPacks(packsResponse.data.data);
//       console.log(packsResponse.data.data)  

//       const userPacksResponse = await axios.get(`${baseApiUrl}/packPurchases/uid/${user.uid}`);
//       setUserPack(userPacksResponse.data.data.find(pack => pack.status === 'active'));
//       console.log(userPacksResponse.data.data)
      
//       const priceResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
//       setBnbPrice(priceResponse.data.binancecoin.usd);
//         console.log(priceResponse.data.binancecoin.usd)
//     };

//     fetchPacks();
//   }, []);

//   const handleUpgrade = async (selectedPack) => {
//     if (!window.ethereum) {
//       alert('Please install MetaMask!');
//       return;
//     }

//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();
//     const account = await signer.getAddress();
        

//     // const currentPack = packs.find(pack => pack.id === userPack.pid);
//     // if (selectedPack.amount <= currentPack.amount) {
//     //   alert('You already have this pack or a higher one.');
//     //   return;
//     // }

//     // const amountToPayUSD = selectedPack.amount - currentPack.amount;
//     // const amountToPayBNB = amountToPayUSD / bnbPrice;
//     const amountToPayUSD = selectedPack.amount;
//     if(!bnbPrice){
//         console.log(bnbPrice)
//         setBnbPrice(600)
//      }
//     const amountToPayBNB = amountToPayUSD / bnbPrice;
//     try {
//       const tx = await signer.sendTransaction({
//         to: '0x41e08947af6Dec140a44Dc7CaA4A216663295D34', // Replace with your wallet address
//         value: ethers.parseEther(amountToPayBNB.toString())
//       });
//       console.log('Transaction successful:', tx);
//       alert('Upgrade successful!');
//     } catch (error) {
//       console.error('Payment failed:', error);
//       alert('Payment failed, please try again.');
//     }
//   };

//   return (
//     <div className="dashboard-container">
//     <Header />
//     <div className="dashboard-section">  
//       <SideMenu />
//       {packs.map(pack => (
//         <div key={pack.id} style={{ padding: '10px', backgroundColor: userPack && pack.id === userPack.pid ? '#4CAF50' : '#f0f0f0' }}>
//           <span>{pack.name} - ${pack.amount} for {pack.rolls} rolls</span>
//           {userPack && pack.id === userPack.pid && <span style={{ marginLeft: '10px' }}>&#10003;</span>}
//           <button onClick={() => handleUpgrade(pack)} style={{ marginLeft: '20px' }}>Upgrade</button>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }
// {packs.map((data, index) => (
//   <div className="rectangle-box mb30" key={index}>
//       <div className="col-md-10 content-col dg ac jc">
//           {/* Content goes here */}
//           <div className="row fs30 fw800 c-white">
//           {data.amount + ' USD'}
//           </div>
//           <div className="row c-gray fs20">
//           {data.name}
//           </div>
//       </div>
//       <div className="col-md-2 df jc ac fs30 c-white">
//           <i className='fa fa-shopping-cart'></i>  
//       </div>
//   </div>
// ))} 
// export default Purchase;

"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import { config } from '@/utils/config';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import SideMenu from '@/components/SideMenu';
import Header from '@/components/Header';
import LogoWord from '@/components/LogoWord';
import { logout } from '@/store/slices/authSlice';
import { toast } from 'react-toastify';

function Purchase() {
//   const router = useRouter();
//   const [packs, setPacks] = useState([]);
//   const [userPack, setUserPack] = useState(null);
//   const [bnbPrice, setBnbPrice] = useState(null);
//   const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
//   const user = useSelector((state: RootState) => state.auth.user);
//   const token = useSelector((state: RootState) => state.auth.token);

//   if (!isUserLoggedIn || !user) {
//     logout();
//     router.push('/auth');
//     toast.error('Please login to continue.');
//   }

//   const baseApiUrl = config.apiBaseUrl;
//   const headerConfig = {
//     headers: {
//       'Authorization': `Bearer ${token}`, // Adjust your auth token
//       'Content-Type': 'application/json',
//     },
//   };
//   useEffect(() => {
//     const fetchPacksAndPrices = async () => {
//       try {
//         const packsResponse = await axios.get(`${baseApiUrl}/packs`);
//         setPacks(packsResponse.data.data);

//         const userPacksResponse = await axios.get(`${baseApiUrl}/packPurchases/uid/${user.uid}`);
//         setUserPack(userPacksResponse.data.data.find(pack => pack.status === 'active'));

//         const priceResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
//         setBnbPrice(priceResponse.data.binancecoin.usd);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         alert('Failed to fetch data. Please check your network connection.');
//       }
//     };

//     fetchPacksAndPrices();
//   }, [user.uid]);

//   // console.log(userPack)
//   const handleUpgrade = async (selectedPack) => {
//     if (!window.ethereum) {
//       alert('Please install MetaMask!');
//       return;
//     }

//     if(!bnbPrice){
//         console.log(bnbPrice)
//         setBnbPrice(600)
//     }
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();
//     console.log({signer})
//     const amountToPayUSD = selectedPack.amount;
//     const amountToPayBNB = amountToPayUSD / bnbPrice;
//     const formattedAmountToPayBNB = Number(amountToPayBNB.toFixed(18)); // Limit to 18 decimals

//     try {// before initiating check if the user address has enough balance
//       const balance = await provider.getBalance(signer.address);
//       const balanceInEth = ethers.formatEther(balance);
//       console.log({first: balanceInEth, second: amountToPayBNB})
//       if (balanceInEth < amountToPayBNB) {
//         alert('Insufficient balance. Please have sufficient funds in your wallet.');
//         return;
//       }
//       const tx = await signer.sendTransaction({
//         to: '0x8491953b372CaC196a8270E9aB9477460029cC23', // Replace with your wallet address
//         value: ethers.parseEther(formattedAmountToPayBNB.toString())
//       });
//       const receipt = await tx.wait(3); // Wait for 3 confirmations
//       console.log('Transaction confirmed:', receipt);
  
    //   // After confirmation, perform database updates
    //   const depositData = {
    //     uid: user?.uid,
    //     amount: formattedAmountToPayBNB, // The original amount of the purchase
    //     network: 'BSC',
    //     currency: 'BNB',
    //     usdValue: amountToPayUSD, // USD equivalent of the BNB amount
    //     txnHash: receipt?.blockHash,
    //     status: 'completed',
    //     lastUpdatedUid: user?.uid,
    // };

    // // Construct the pack purchase data
    // const packPurchaseData = {
    //     uid: user?.uid,
    //     pid: userPack?.id,
    //     lastUpdatedUid: user?.uid,
    //     status: 'active',
    // };

    // // Post the deposit data
    // try {
    //     const depositResponse = await axios.post(`${baseApiUrl}/deposits`, depositData, headerConfig);
    //     console.log('Deposit recorded:', depositResponse.data);
    // } catch (error) {
    //     console.error('Failed to record deposit:', error);
    // }

    // // Post the pack purchase data
    // try {
    //     const purchaseResponse = await axios.post(`${baseApiUrl}/packPurchases`, packPurchaseData, headerConfig);
    //     console.log('Pack purchase recorded:', purchaseResponse.data);
    //     toast.success('Upgrade successful!');

    // } catch (error) {
    //     console.error('Failed to record pack purchase:', error);
    // }
    //   console.log('Transaction successful:', tx);
    // } catch (error) {
    //   console.error('Payment failed:', error);
    //   toast.error('Payment failed, please try again.');
    // }

//   };


//   async function updateDatabase(txnHash) {
//     // Construct the deposit data
// }

  const router = useRouter();
  const [packs, setPacks] = useState([]);
  const [userPack, setUserPack] = useState(null);
  const [bnbPrice, setBnbPrice] = useState(null);
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);

  if (!isUserLoggedIn || !user) {
    console.log("User not logged in or user data not available, redirecting...");
    logout();
    // router.push('/auth');
    toast.error('Please login to continue.');
  }

  const baseApiUrl = config.apiBaseUrl;
  const headerConfig = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const fetchPacksAndPrices = async () => {
      try {
        console.log("Fetching packs data...");
        const packsResponse = await axios.get(`${baseApiUrl}/packs`);
        setPacks(packsResponse.data.data);
        console.log("Packs data fetched successfully:", packsResponse.data.data);

        console.log("Fetching user pack data...");
        const userPacksResponse = await axios.get(`${baseApiUrl}/packPurchases/uid/${user.uid}`);
        setUserPack(userPacksResponse.data.data.find(pack => pack.status === 'active'));
        console.log("User pack data fetched successfully:", userPacksResponse.data.data);

        console.log("Fetching BNB price...");
        const priceResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
        setBnbPrice(priceResponse.data.binancecoin.usd);
        console.log("BNB price fetched successfully:", priceResponse.data.binancecoin.usd);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please check your network connection.');
      }
    };

    fetchPacksAndPrices();
  }, [ ]);

  const handleUpgrade = async (selectedPack) => {
    console.log("Handling upgrade for selected pack:", selectedPack);
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    if (!bnbPrice) {
      console.log("BNB price not set, setting manually...");
      setBnbPrice(600);
    }
    console.log("Using BNB price:", bnbPrice);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log("Signer obtained:", signer);

    const amountToPayUSD = selectedPack.amount;
    const amountToPayBNB = amountToPayUSD / bnbPrice;
    const formattedAmountToPayBNB = Number(amountToPayBNB.toFixed(18));
    console.log("Amount to pay in BNB:", formattedAmountToPayBNB);

    try {
      console.log("Checking wallet balance...");
      const balance = await provider.getBalance(signer.address);
      const balanceInEth = ethers.formatEther(balance);
      console.log("Wallet balance:", balanceInEth);

      if (balanceInEth < amountToPayBNB) {
        alert('Insufficient balance. Please have sufficient funds in your wallet.');
        return;
      }
      const depositData = {
        uid: user?.uid,
        amount: formattedAmountToPayBNB, // The original amount of the purchase
        network: 'BSC',
        currency: 'BNB',
        usdValue: amountToPayUSD, // USD equivalent of the BNB amount
        lastUpdatedUid: user?.uid,
    };
    // Post the deposit data
    let depositResponse;
    try {
      depositResponse = await axios.post(`${baseApiUrl}/deposits`, depositData, headerConfig);
      console.log('Deposit recorded:', depositResponse.data);
    } catch (error) {
      console.error('Failed to record deposit:', error);
    }


      console.log("Initiating transaction...");
      const tx = await signer.sendTransaction({
        to: '0x8491953b372CaC196a8270E9aB9477460029cC23',
        value: ethers.parseEther(formattedAmountToPayBNB.toString())
      });
      // const receipt = await tx.wait(3);
      // console.log('Transaction confirmed:', receipt);
      const updateData = {
             
        status: 'completed',
        lastUpdatedUid: user?.uid,
      };
    // PUT the pack purchase data
    //router.put('/deposits/:id', deposits.updateDeposit);
    try {
      const depositUpdateResponse = await axios.put(`${baseApiUrl}/deposits/${depositResponse.data.id}`, updateData, headerConfig);
      console.log('Deposit updated:', depositUpdateResponse.data);
    }
    catch (error) {
      console.error('Failed to update deposit:', error);
    }

    const packPurchaseData = {
        uid: user?.uid,
        pid: userPack?.id,
        lastUpdatedUid: user?.uid,
        status: 'active',
    };

    // Post the pack purchase data
    let purchaseResponse;
    try {
      purchaseResponse = await axios.post(`${baseApiUrl}/packPurchases`, packPurchaseData, headerConfig);
      console.log('Pack purchase recorded:', purchaseResponse.data);
      toast.success('Upgrade successful!');
    }
    catch (error) {
      console.error('Failed to record pack purchase:', error);
    } 

      console.log("Updating database with transaction details...");
      // Database update logic here
      console.log('Transaction successful:', tx);
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed, please try again.');
    }
  };
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-section">
        <SideMenu />
        <div className="image-column col-md-6 d-flex flex-column justify-content-center align-items-center">
        </div>
        <div className="stat-container ">
             
            {/* Stats */}
            <div className="df ac jc mb30">
                <LogoWord firstWord="MORE WITH" secondWord="UPGRADES" />
            </div>
            {packs.map((data, index) => (
              <div className="rectangle-box mb30" key={index} style={{ backgroundColor: userPack && userPack.pid === data.id ? '#2f2f2f' : '#0f0f0f' }}>
                  <div className="col-md-10 content-col dg ac jc">
                      {/* Content displayed here */}
                      <div className="row fs30 fw800 c-white">
                          {data.rolls + ' rolls per day'}
                      </div>
                      <div className="row c-gray fs20">
                          {data.name + '( '+ data.amount + ' USD)'}  {/* Display the name of the pack */}
                      </div>
                  </div>
                  <div className="col-md-2 df jc ac fs30 c-white">
                      {userPack && userPack.pid === data.id ? (
                          <i className='fa fa-check' style={{ color: 'lime' }}></i>  // Tick mark for active pack
                      ) : (
                          <i className='fa fa-shopping-cart' onClick={() => handleUpgrade(data)} style={{ cursor: 'pointer' }}></i>  // Cart icon for other packs
                      )}
                  </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default Purchase;
