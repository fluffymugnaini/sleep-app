
import './App.css';
import React, {useState} from 'react';
import Button from '../Button';
import Tips from '../Tips';
import logo from './logo.svg';
import sleepTips from './tipsData';
import myths from './mythsData';

// const initialState = {list:["eat", "sleep"]};

// function listReducer(state, action){
//   switch (action.type) {
//     case "TIPS":
//       return [
//           ...state,
//           {
//             id: state.length,
//             name: action.name
//           }
//         ];
    
//     case "THANKS":
//       return {...state, list: "Thanks to..."}
//     default:
//       return state;
//   } 
// }



function App() {
const [tips, setTips] = useState([]);
const [thanks, setThanks] = useState("");

// let sleepTips = ["eat", "sleep", "don't look at screens"]
function showTips(){
    setTips(sleepTips);
    setThanks("");
}

function showThanks(){
  let thankyous = "Big thanks to everyone who made these suggestions. So thank you to... DICKY, SARAH, FLEM FLEM, LAUREN, SUSIE Q, LITTLE LION CUB, MARIA, LOUISE, NATALIE, HALAAAAAN, PETER, YAIZA, CHARLIE, SADIE, EMMANUELLA, KRISTOFFHER, CHARLOTTE, REBECCA, ELI, SEIZON, ZOE, GEMMA, MOLLY... and everyone else who frequently lies awake at night."
  setThanks(thankyous);
  setTips([]);
}

function showMyths(){
  
  alert(myths[Math.round(Math.random()*myths.length - 1)])
  console.log(Math.round(Math.random()*myths.length))
}

  // const [state, dispatch] = useReducer(listReducer, initialState)
  return (
    <div className="App">
      <h1>~ For the Nocturnals ~</h1>
      <img src={logo} alt="illustration of woman sleeping" width="200px"/>
      <p>Apparently it takes the average person 7 minutes to fall asleep. Well, I'm not average. A good night's sleep is me falling asleep within the hour and then only waking up about 3 times. A bad but not disastrous night is getting to sleep at 5am. The nightmare scenario is no sleep at all. I was recently going through a period of just not-so-disastrous-nights and nightmare-nights, and so I did a callout on twitter for tips that didn't include the usual (I've tried meditation, and baths, and all the supplements). The support and suggestions genuinely helped me get sleeping under control. I've collated them here, just in case they may help someone else. Happy sleeping, and if you're not sleeping, try and relish the time! </p>
      <div className="buttons">
      <Button show={showMyths} text="MYTHS"/>
      <Button show={showTips} text="TIPS"/>
      <Button show={showThanks} text="THANKS"/>
      </div>
      <Tips tips={tips}/>
      <p className="thanks">{thanks}</p>
    </div>
  );
        }


export default App;
