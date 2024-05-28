import React, { use } from 'react'
import LogoWord from '@/components/LogoWord';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { config } from '@/utils/config';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import InviteSection from './InviteSection';
 
function GlobalStats() {
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const globalData = useSelector((state: RootState) => state.globalData.globalData);
  console.log({user})

  const baseUrl = config.baseUrl; 
  const refUrl = `${baseUrl}/join/${user?.uid}`;

  console.log({refUrl})
  const statsData = [
    {
      title: 'Total Users',
      value: globalData?.totalUsers,
      icon: 'fa fa-users'
    },
    {
      title: 'Total Packs',
      value: globalData?.totalPacks,
      icon: 'fa fa-check-circle'
    },
    {
      title: 'Points Mined',
      value: globalData?.totalMines,
      icon: 'fa fa-usd'
    }
  ]  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refUrl).then(() => {
      toast.success('Your Invite Link copied to clipboard!');
    });
  };

  const shareOnWhatsApp = () => {
    const message = `Check out this amazing site: ${refUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth');
};
  return (
        <div className="stat-container ">
            <div className="df ac jc mb30">
                <LogoWord firstWord="GLOBAL" secondWord="STATS" />
            </div>
            {/* Stats */}
            {statsData.map((data, index) => (
                <div className="rectangle-box mb30" key={index}>
                  
                    <div className="col-md-10 content-col dg ac pl30">
                        {/* Content goes here */}
                        
                        
                        <div className="row fs30 fw800 c-white">
                        {data.value > 9000 ? data.value.toLocaleString() : data.value}
                        </div>
                        <div className="row c-gray fs20 ">
                        {data.title}
                        </div>
                    </div>
                    <div className="col-md-2 df jc ac fs30 c-white">
                        <i className={data.icon}></i>  
                    </div>
                </div>
            ))} 

          {/* <div className="invite-section">
            <h2>Invite Section</h2>
            <input type="hidden" value={refUrl} readOnly className="ref-url" />
            <button onClick={copyToClipboard} className="copy-button">Copy Invite Link</button>
            <button onClick={shareOnWhatsApp} className="whatsapp-button">Invite on WhatsApp</button>
            <button onClick={handleLogout} className="copy-button bc-orange c-black">Logout</button>
          </div> */}

      <InviteSection
        refUrl={refUrl}
        copyToClipboard={copyToClipboard}
        shareOnWhatsApp={shareOnWhatsApp}
        handleLogout={handleLogout}
      />
        </div>
  )
}

export default GlobalStats