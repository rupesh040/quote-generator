"use client"
import React, { useState } from 'react'

const joke = () => {
    const [joke,setJoke] = useState("Algorithm: A word used by programmers when they don't want to explain how their code works.");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
  return (
    <div class="card max-w-[500px] m-5 rounded-3xl bg-black overflow-hidden">
    <div class="top w-[100%] h-11 bg-[#BE80FF] text-white flex items-center p-5 justify-between gap-1">
     <p>Random Joke 😂</p>
     <i class="ri-reset-right-fill cursor-pointer font-bold" onClick={fetchApi}></i>
    </div>
    <p className="text-black p-5">
        {joke}
    </p>
</div>
  )
}

export default joke
