'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { Button } from 'react-bootstrap';
import SideMenu from '@/components/SideMenu';
import GlobalStats from '@/components/GlobalStats';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store/store';
import { logout } from '@/store/slices/authSlice';
import PlaySection from '@/components/PlaySection';

function Dashboard() {
  const router = useRouter();
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  if (!isUserLoggedIn || !user) {
    logout();
    router.push('/auth');
  }
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-section">  
        <SideMenu />
        <PlaySection />
        {/* <div className="image-column col-md-6 d-flex flex-column justify-content-center align-items-center">
          {/* Image */}
          {/* <div className='fs120 fw900 mb--40 c-p'>4</div>
          <Image src="/assets/hero-left.png" alt="Dashboard" width="400" height={200} />
          <p className='pt30 text-xl c-white'>You rolled a 4!</p>
          <Button className="icon-holder2 mt20 c-btn o70">
            <i className="fa fa-play fs40  text-center pt10  pl10"></i> 
          </Button>
        </div>   */}
        
        <GlobalStats />
        
      </div>
    </div>
  )
}

export default Dashboard