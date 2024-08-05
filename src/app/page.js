"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import 'remixicon/fonts/remixicon.css';
import Joke from "./components/Joke";
export default function Home() {
      const [generate,setGenerate] = useState(true);
    const search = async (quotes)=> {
    const url = `https://type.fit/api/quotes`;
    const response = await fetch(url);
    const data = await response.json();
    random();
    setQuote({
        text:data[quoter].text,
        author:data[quoter].author
    })}
    const [quote,setQuote] = useState({
        text:"Genius is one percent inspiration and ninety-nine percent perspiration.",
        author:"Thomas Edison, type.fit"
    });
    const [quoter,setQuoter] = useState("");
    function random() {
        const ran = Math.floor(Math.random()*15);
        setQuoter(ran);
    }
      console.log(quoter);
    const btn = () =>{
        setGenerate(prevState => !prevState);
    };
    console.log(quoter);
  return (
   <>
  <div class="container w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
    <button className="absolute top-[20%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] px-3 py-2  bg-[#BE80FF] text-white" onClick={btn}> {!generate? "Generate joke" : "Generate quotes" }</button>
       {!generate? <div class="card max-w-[500px] m-5 rounded-3xl bg-black overflow-hidden">
            <div class="top w-[100%] h-11 bg-orange-300 flex items-center p-5 justify-between gap-1">
             <p>{quote.author.split(", type.fit")}</p>
             <i class="ri-reset-right-fill cursor-pointer font-bold" onClick={search}></i>
            </div>
            <p className="text-black p-5">
                {quote.text}
            </p>
        </div> : <Joke/>}

        <h1 className="text-[35vh] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] opacity-40 text">Rupesh.</h1>
  </div>
  </>
 );
}
