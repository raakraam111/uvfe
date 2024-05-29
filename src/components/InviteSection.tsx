import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function InviteSection({ refUrl , copyToClipboard, shareOnWhatsApp }) {
  return (
    <div className="invite-section text-center">
      <h2>Invite Section</h2>
      <input type="hidden" value={refUrl} readOnly className="ref-url" />
      
      <div className="flex justify-center space-x-4 mt-4">
        <div className="bg-black rounded-full p-3 cursor-pointer hover:bg-gray-800" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} className="text-white" />
        </div>
        
        <div className="bg-black rounded-full p-3 cursor-pointer hover:bg-gray-800" onClick={shareOnWhatsApp}>
          <FontAwesomeIcon icon={faShareAlt} className="text-white" />
        </div>
        
        
      </div>
    </div>
  );
}

export default InviteSection;
