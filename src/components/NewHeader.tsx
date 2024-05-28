import React, { useState, useEffect } from 'react';
import Blockies from 'react-blockies';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

function NewHeader() {
    const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
    const user = useSelector((state: RootState) => state.auth.user);
    const ethAddress = user?.pubKey || '';

    const [iconSize, setIconSize] = useState(window.innerWidth >= 1024 ? 56 : 28);

    useEffect(() => {
      function handleResize() {
        setIconSize(window.innerWidth >= 1024 ? 56 : 28);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div className="bg-inherit p-4 flex justify-between items-center text-white">
        <img src="/assets/nlogo2.png" alt="Logo" className="w-14 h-14 lg:w-28 lg:h-28" />
        {isUserLoggedIn && (
          <div className="flex items-center">
            <span className="text-gray-200 font-semibold mr-2">
              {`0x…${ethAddress.substring(ethAddress.length - 4)}`}
            </span>
            <UserIdenticon address={ethAddress} size={iconSize} />
          </div>
        )}
      </div>
    );
}
function UserIdenticon({ address, size }) {
    return (
      <Blockies
        seed={address.toLowerCase()}
        size={8} // Fixed grid size (smaller number for finer grid)
        scale={size / 8} // Dynamic scale based on input size
        className="rounded-full"
      />
    );
  }
  
export default NewHeader;
