import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import {Button} from 'react-bootstrap'; // Adjust as needed
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { config } from '@/utils/config';

export default function ImageColumn() {
  const [result, setResult] = useState('');
  const [roll, setRoll] = useState(null);
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
console.log({token})
  const handleButtonClick = async () => {
    console.log("clicked")
    if (!isUserLoggedIn) {
      return;
    }
    const headerConfig = {
      headers: {
        'Authorization': `Bearer ${token}`, // Adjust your auth token
        'Content-Type': 'application/json',
      },
    };

    const requestBody = { uid: user?.uid };

    try {
      const mineApiUrl = config.mineApiUrl; // Adjust your API URL
      const response = await axios.post(mineApiUrl, requestBody, headerConfig);

      if (response.data.type === 'SUCCESS') {
        setRoll(response.data.data.roll);
        setResult(response.data.data.description);
      } else {
        console.log(response.data.data);
        setResult(response.data.data);
      }
    } catch (error) {
      setResult('An error occurred');
      console.error(error);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // This part is optional, you can display a confirmation message
        console.log('Text copied to clipboard');
        alert('UID copied to clipboard!');
      })
      .catch(err => {
        // If the user didn't allow clipboard access, or some other error
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text, please try again!');
      });
  };
  return (
    <div className="image-column col-md-6 d-flex flex-column justify-content-center align-items-center">
      {/* Image */}
      <div className='fs15 fw900 mb--40 c-p' >
      {"Welcome " + user?.nickname}</div>  
      {/* <div className='fs15 fw900 mb--40 c-p' onClick={() => copyToClipboard(user?.uid)}>
      {user?.uid}
    </div>       */}
    <div className='fs120 fw900 mb--60 c-p'>{roll || 0}</div>
      <Image src="/assets/hero-left.png" priority = {true} alt="Dashboard" width="400" height={200} className='pt20'/>
      <p className='pt30 text-xl c-white'>{result || 'Ready to Roll!'}</p>
      <Button className="icon-holder2 mt20 c-btn o70" onClick={handleButtonClick}>
        <i className="fa fa-play fs40 text-center pt10 pl10"></i> 
      </Button>
    </div>
  );
}
