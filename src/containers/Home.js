import React, { useState, useEffect } from "react";
import img1 from "../assets/images/home.jpg";
import img2 from "../assets/images/home2.jpg";

export const Home = () => {

    return (<>
        
        <div className="h-screen grid relative">
            <div className="py-10 px-4 mt-80 bg-green-800 bg-opacity-60 h-1/4 font-semibold z-10 text-sm grid justify-center align-middle ">
                <div className="sm:text-6xl text-4xl text-white">Hydroponics</div>
                <div className="mt-4 text-white sm:text-2xl text-xl">The start of new Tech-farming</div>
            </div>
            <div className="absolute">
                <img className="h-screen" src={img1}/>
            </div>
        </div>
        <div className="pt-16 px-8 grid gap-10 sm:grid-cols-2 h-30">
            <div>
                <h1 className=" font-bold text-xl flex justify-center align-middle text-black">What is Hydroponics?</h1>
                <div className="text-justify mt-4"> Hydroponics, also known as aquaculture or tank farming, began as a way of studying scientifically the mechanisms of plant nutrition. Hydroponically grown plants may have no solid material under them at all. instead, their roots often simply hang in water with a rich mix of nutrients dissolved in it. The principal advantage to hydroponics is the savings from reduced labor costs, since it's generally carried on in enclosed areas and the irrigation and fertilizing are done mechanically. Peppers, cucumbers, and various other vegetables are produced hydroponically in huge quantities.
                </div>
            </div>
            <div className="">
             <img className="w-96 m-auto rounded-md" src={img2}/>
            </div>
        </div>
        <div className="w-full grid justify-center mt-10 ">
            <div className="text-4xl mb-6">Profit Calculator</div>
            <Calc/>
        </div>
    </>)
}


const Calc = () => {
    const data = [
        {
            crop : "Tomato",
            time : 2,
            price : 6,
            nutrients : 1
        },
        {
            crop : "Lettuce",
            time : 1,
            price : 45,
            nutrients : 2
        }
    ];
    
    const [crop, setCrop] = useState({
        crop : "",
        time : 0,
        price : 0,
        nutrients : 0
    });
    const [holeNo, setHoleNo] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (holeNo < 0) {
            setHoleNo(0);
        } else {
            const e = document.getElementById("selectList");
            var value = e.options[e.selectedIndex].value;
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (element.crop == value) {
                    setCrop(element);
                    setPrice(holeNo*element.price)
                }
            }
            
        }
    }, [holeNo])

    return (
        <>
            <div className="mb-2 text-lg">Select your requrements</div>

            <div className="mb-1 text-sm">Select your crop</div>
            <select className="mb-2 py-1 px-2 border-2 max-w-xs rounded-md bg-gray-50 border-gray-400 focus:border-green-900" name="selectList" id="selectList">
                {data.map((val,ind) => {
                    return (
                        <option value={val.crop} key={ind}>{val.crop}</option>
                    )
                })}
            </select>

            <div className="mb-1 text-sm">Select no of hole</div>
            <input 
                className="mb-2 py-1 px-2 border-2 rounded-md max-w-xs bg-gray-50 border-gray-400 focus:border-green-900 "
                type="number"
                placeholder="No. of hole"
                value={holeNo}
                onChange={(e) => {
                    setHoleNo(e.target.value);
                }}
            />

            
            <div className="mb-2 mt-2 text-lg"> Output </div>
            <div className="mb-2">Time taken = {crop.time} months</div>
            <div className="mb-2">Output price = {price} Rs.</div>
            <div className="mb-2">Nutrients requirements = <a className="text-red-900" href="https://www.amazon.in/GreenLoop-Pure-Hydroponic-Nutrients-LEAFY-200/dp/B078BHP7YC/ref=asc_df_B078BHP7YC/?tag=googleshopdes-21&linkCode=df0&hvadid=396988257276&hvpos=&hvnetw=g&hvrand=15019462066470790213&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9300947&hvtargid=pla-404894960294&ext_vrnc=hi&th=1" target="_blank">Click Here</a></div>
        </>
    )
}