import React from 'react';
import Blockies from 'react-blockies'; // This will use ethereum-blockies

function UserIdenticon({ address }) {
  return (
    <div className="flex items-center space-x-2">
      <Blockies
        seed={address.toLowerCase()} // Ensures the seed is consistent
        size={8}
        scale={3}
        className="rounded-full"
      />
      <span className="text-gray-200 font-semibold">
        {`0x${address.substring(2, 3)}…${address.substring(address.length - 2)}`}
      </span>
    </div>
  );
}

export default UserIdenticon;
