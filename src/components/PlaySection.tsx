import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "react-bootstrap"; // Adjust as needed
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { config } from "@/utils/config";
import { toast } from "react-toastify";
import { updateUser } from "@/store/slices/authSlice";
import { changeGlobalData } from "@/store/slices/globalSlice";

export default function ImageColumn() {
  const dispatch = useDispatch();
  const [result, setResult] = useState("");
  const [roll, setRoll] = useState(null);
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.isUserLoggedIn
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const [rolling, setRolling] = useState(false);
  // console.log({token})
  const handleButtonClick = async () => {
    if (user?.rolls?.total == 0) {
      toast.error("No Rolls available for today");
      return;
    }
    // console.log("clicked")
    if (!isUserLoggedIn) {
      return;
    }
    const headerConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // Adjust your auth token
        "Content-Type": "application/json",
      },
    };

    const requestBody = { uid: user?.uid };

    try {
      setRolling(true);
      const mineApiUrl = config.mineApiUrl; // Adjust your API URL
      const userMineGlobalUrl = config.userMineGlobalApiUrl+'/'+user?.uid; // Adjust your API URL
      const response = await axios.post(mineApiUrl, requestBody, headerConfig);
      const response2 = await axios.get(
        userMineGlobalUrl, 
        headerConfig
      );
      console.log(response2.data.data);
      const userData = response2.data.data.user;
      const globalData = response2.data.data.globalData;
     
      if (response.data.type === "SUCCESS") {
        setRoll(response.data.data.roll);
        setResult(response.data.data.description);
      } else {
        console.log(response.data.data);
        setResult(response.data.data);
      }
      setTimeout(() => {
        setRolling(false);
      }, 3000);
      setTimeout(() => {
        setRoll(null);
        dispatch(updateUser({ user: userData }));
        dispatch(changeGlobalData({ globalData }));
  
      }, 6000);

  
    } catch (error) {
      setResult("An error occurred");
      console.error(error);
      setTimeout(() => {
        setRolling(false);
      }, 3000);
      setTimeout(() => {
        setRoll(null);
      }, 8000);
    }
  };

  // Image source based on the roll
  const getImageSrc = () => {
    if (roll === null) return "/assets/dice.png";
    return `/assets/dice-${roll}.png`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // This part is optional, you can display a confirmation message
        console.log("Text copied to clipboard");
        alert("UID copied to clipboard!");
      })
      .catch((err) => {
        // If the user didn't allow clipboard access, or some other error
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text, please try again!");
      });
  };
  return (
    <div className="image-column col-md-6 d-flex flex-column justify-content-center align-items-center">
      {/* Image */}
      <div className="fs15 fw900 mb--40 c-p pb-3">
        {"Welcome " + user?.nickname}
      </div>
      {/* <div className='fs120 fw900 mb--60 c-p'>{rolling ? <Image src="/assets/dice-game.gif" priority = {true} alt="Dashboard" width="200" height={200} className='p40'/> : roll || 0}</div> */}
      <div className="fs120 fw900 mb--60 c-p">
        {/* {rolling
          ? <Image src="/assets/dice-game.gif" priority={true} alt="Rolling Dice" width="200" height="200" className='p40'/>
          : (roll !== null 
            ? roll 
            : <Image src="/assets/dice.png" priority={true} alt="Static Dice" width="200" height="200" className='p40'/>)
        } */}
        {rolling ? (
          <Image
            src="/assets/dice-game.gif"
            priority={true}
            alt="Rolling Dice"
            width="200"
            height="200"
            className="p40"
          />
        ) : (
          <Image
            src={getImageSrc()}
            priority={true}
            alt={`Dice ${roll || ""}`}
            width="200"
            height="200"
            className="p40"
          />
        )}
      </div>

      <Image
        src="/assets/hero-left.png"
        priority={true}
        alt="Dashboard"
        width="400"
        height={200}
        className="pt20"
      />

      {/* {rolling ? <p className='pt30 text-xl c-white'> {"Good luck! rolling..."} </p> : <p className='pt30 text-xl c-white'>{user?.rolls?.total == 0 ? "No Rolls available for today" : result || 'Ready to Roll!'}</p>} */}

      {rolling ? (
        <p className="pt30 text-xl c-white">{"Good luck! Rolling..."}</p>
      ) : (
        <p className="pt30 text-xl c-white">
          {roll === null
            ? user?.rolls?.total === 0
              ? "No Rolls available for today"
              : "Ready to Roll!"
            : result}
        </p>
      )}
    {roll === null && !rolling   
      ? <Button
        className="icon-holder2 mt20 c-btn o70"
        onClick={handleButtonClick}
      >
        <i className="fa fa-play fs40 text-center pt10 pl10"></i>
      </Button>
      : <Button
        className="icon-holder2 mt20 c-btn o70"
        disabled={rolling}
        >
        <i className="fa fa-stop fs40 text-center pt10 "></i>
      </Button>}
    </div>
  );
}
