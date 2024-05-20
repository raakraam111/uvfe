"use client"
import React, { useState, useEffect } from 'react';
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
import { packDetails } from '@/constants';

function Purchase() {
    const router = useRouter();
    const [packs, setPacks] = useState(packDetails);
    console.log(packs)
    const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
    const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
    const user = useSelector((state: RootState) => state.auth.user);
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (!isUserLoggedIn || !user) {
            console.log("User not logged in or user data not available, redirecting...");
            logout();
            toast.error('Please login to continue.');
        }
    }, [isUserLoggedIn, user]);

    const handleQuantityChange = (index, amount) => {
        const newPacks = [...packs];
        newPacks[index].quantity += amount;
        if (newPacks[index].quantity < 0) newPacks[index].quantity = 0; // Prevent negative quantities
        setPacks(newPacks);
    };

    const getTotalPrice = () => {
        return packs.reduce((acc, pack) => acc + (pack.quantity * pack.price), 0);
    };

    const handleNetworkChange = (e) => {
        setSelectedNetwork(e.target.value);
    };

    const handlePurchase = async () => {
        // Implementation depends on your payment gateway or crypto wallet integration
        console.log("Implement purchase logic here");
        toast.info("Purchase logic needs to be implemented.");
    };

    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-section">
                <SideMenu />
                <div className="stat-container">
                    <div className="df ac jc mb30">
                        <LogoWord firstWord="MORE WITH" secondWord="UPGRADES" />
                    </div>
                    {packs.map((pack, index) => (
                        <div className="rectangle-box mb30" key={pack.id} style={{ backgroundColor: '#0f0f0f' }}>
                            <div className="content-col dg ac jc">
                                <div className="row fs30 fw800 c-white">
                                     
                                    {pack.rolls.toFixed()  + ' rolls ' + pack.rollType      }
                                </div>
                                <div className="row c-gray fs20">
                                    {pack.name + ' ($' + pack.price + ')'}
                                </div>
                                <div className="col">
                                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                    <input type="text" value={pack.quantity} readOnly />
                                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                    <button onClick={() => handleQuantityChange(index, 5)}>+5</button>
                                    <button onClick={() => handleQuantityChange(index, 10)}>+10</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>Total: ${getTotalPrice().toFixed(2)}</div>
                    <select onChange={handleNetworkChange} value={selectedNetwork}>
                        <option value="ethereum">Ethereum</option>
                        <option value="binance">Binance</option>
                        <option value="polygon">Polygon</option>
                    </select>
                    <button onClick={handlePurchase}>Purchase</button>
                </div>
            </div>
        </div>
    );
}

export default Purchase;
