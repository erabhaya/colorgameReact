import React, { useState } from 'react';
import './Style.css'

const Game = () => {
  const [count, setCount] = useState(0)

  const container = {
    width: "50%",
    margin: "auto",
    display: "flex",
    justifyContent:'center'
  };
  function check() {
    var num= 0;
    var len =document.getElementsByClassName("btn").length;
    for (let i = 0; i < len; i++)
    {
    var x = document.getElementsByClassName("btn")[i].className.split(/\s+/);  
    if (x[1] === 'blue') {
    console.log(x[1]);
    num++;
     }
    }
    if(num === 0){
      alert("you won")
  }
}
function one() {
  document.getElementById('1').classList.toggle("blue");
  document.getElementById('2').classList.toggle("blue");
  document.getElementById('4').classList.toggle("blue");
  setCount(count+1)
  check()
}
function two() {
  document.getElementById('1').classList.toggle("blue");
  document.getElementById('2').classList.toggle("blue");
  document.getElementById('3').classList.toggle("blue");
  document.getElementById('5').classList.toggle("blue");
  setCount(count+1)
  check()
}
function three() {
  document.getElementById('2').classList.toggle("blue");
  document.getElementById('3').classList.toggle("blue");
  document.getElementById('6').classList.toggle("blue");
  setCount(count+1)
  check()
}
function four() {
  document.getElementById('1').classList.toggle("blue");
  document.getElementById('4').classList.toggle("blue");
  document.getElementById('5').classList.toggle("blue");
  document.getElementById('7').classList.toggle("blue");
  setCount(count+1)
  check()
}
function five() {
  document.getElementById('2').classList.toggle("blue");
  document.getElementById('4').classList.toggle("blue");
  document.getElementById('5').classList.toggle("blue");
  document.getElementById('6').classList.toggle("blue");
  document.getElementById('8').classList.toggle("blue");
  setCount(count+1)
  check()
}
function six() {
  document.getElementById('3').classList.toggle("blue");
  document.getElementById('5').classList.toggle("blue");
  document.getElementById('6').classList.toggle("blue");
  document.getElementById('9').classList.toggle("blue");
  setCount(count+1)
  check()
}
function seven() {
  document.getElementById('4').classList.toggle("blue");
  document.getElementById('7').classList.toggle("blue");
  document.getElementById('8').classList.toggle("blue");
  setCount(count+1)
  check()
}
function eight() {
  document.getElementById('5').classList.toggle("blue");
  document.getElementById('7').classList.toggle("blue");
  document.getElementById('8').classList.toggle("blue");
  document.getElementById('9').classList.toggle("blue");
  setCount(count+1)
  check()
}
function nine() {
  document.getElementById('6').classList.toggle("blue");
  document.getElementById('8').classList.toggle("blue");
  document.getElementById('9').classList.toggle("blue");
  setCount(count+1)
  check()
}
  return (
    <div className='main'>
       <div className='heading'>
       <img className='teer' src="teer.png" alt="" />
         <h1>Color Game</h1>
       </div>
       <div className='buddy'>
         <div className='buddy1'>
           <div className="container" style={container}>
           <table className='' id="table">
        <th>
            <tr>
               <td><button className="btn blue"  id="1" onClick={one} ></button></td>
               <td><button className='btn'  id="2" onClick={two} ></button></td>
               <td><button className="btn blue" id="3" onClick={three}></button></td>
            </tr>
            <tr>
                <td><button className='btn' id="4" onClick={four} ></button></td>
                <td><button className="btn blue" id="5" onClick={five} ></button></td>
                <td><button className='btn' id="6" onClick={six} ></button></td>
            </tr>
            <tr>
                <td><button class="btn blue" id="7" onClick={seven} ></button></td>
                <td><button className='btn' id="8" onClick={eight} ></button></td>
                <td><button class="btn blue" id="9" onClick={nine}></button></td>
            </tr>
        </th>
    </table>

           </div>
         </div>
       </div>
    </div>
  )
}
export default Game;
