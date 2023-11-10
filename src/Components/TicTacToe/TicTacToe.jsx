import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_img from "../Assets/circle.png";
import cross_img from "../Assets/cross.png";

let data = ["","","","","","","","",""];

export const TicTacToe = () => {

  let [count , setCount ] = useState(0);
  let [lock , setLock ] = useState(false);
  let titleRef =useRef(null)
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);

  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const toggle = (e,num) => {
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img className="play_img" src="${cross_img}" alt=""/>`
      data[num] = 'X';
      setCount(++count)
    }
    else{
      e.target.innerHTML = `<img className="play_img" src="${circle_img}" alt=""/>`
      data[num] = 'O';
      setCount(++count)
    }
    

    const checkwin = () => {
      if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
        won(data[2])
      }
      else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
        won(data[5])
      }
      else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
        won(data[6])
      }
      else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
        won(data[6])
      }
      else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
        won(data[6])
      }
    }
    checkwin();
  }

  const won=(winner)=>{
    setLock(true)
    if(winner==="X"){
      titleRef.current.innerHTML= `<h3 className="main_title">The Winner is <span>CROSS</span>`
    }
    else{
      titleRef.current.innerHTML= `<h3 className="main_title">The Winner is <span>CIRCLE</span>`
    }
   
   }


   const Reset = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML=`<div>TicTacToe Game In <span>React</span> </div>`
    box_array.map((e)=>e.current.innerHTML='');
   }
  
  return (
    <>
      <div className="Container">
        <h1 className="title" ref={titleRef}>
          <div>TicTacToe Game In <span>React</span> </div>
        </h1>
        <div className="board">
          <div className="first-row">
            <div className="box" ref={box1} onClick={(e) => {toggle(e,0)}}></div>
            <div className="box" ref={box2} onClick={(e) => {toggle(e,1)}}></div>
            <div className="box" ref={box3} onClick={(e) => {toggle(e,2)}}></div>
          </div>
          <div className="second-row">
            <div className="box" ref={box4} onClick={(e) => {toggle(e,3)}}></div>
            <div className="box" ref={box5} onClick={(e) => {toggle(e,4)}}></div>
            <div className="box" ref={box6} onClick={(e) => {toggle(e,5)}}></div>
          </div>
          <div className="third-row">
         
            <div className="box" ref={box7} onClick={(e) => {toggle(e,6)}}></div>
            <div className="box" ref={box8} onClick={(e) => {toggle(e,7)}}></div>
            <div className="box" ref={box9} onClick={(e) => {toggle(e,8)}}></div>
          </div>
        </div>
        <button className="Reset" onClick={()=>{Reset()}}>Reset</button>
        <h1 className="title">Made By Me</h1>
        <h1 className="title">Github : GUJJU03</h1>
      </div>
    </>
  );
};
