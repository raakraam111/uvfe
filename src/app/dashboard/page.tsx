'use client';
import React from 'react';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import GlobalStats from '@/components/GlobalStats';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store/store';
import { logout } from '@/store/slices/authSlice';
import PlaySection from '@/components/PlaySection';
import NewHeader from '@/components/NewHeader';

function Dashboard() {
  
  const router = useRouter();
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const globalData = useSelector((state: RootState) => state.globalData.globalData);
  
  console.log({globalData});
  if (!isUserLoggedIn || !user) {
    logout();
    router.push('/auth');
  }

  return (
    <div className="dashboard-container">
      <NewHeader />
      <div className="dashboard-section">

        <SideMenu />
        <PlaySection />
        <GlobalStats />
        
      </div>
    </div>
  )
}

export default Dashboard