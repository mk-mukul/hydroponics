
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
    </>)
}