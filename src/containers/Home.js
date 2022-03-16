
import img1 from "../assets/images/home.jpg"

export const Home = () => {

    return (<>
        
        <div className="h-screen grid relative">
            <div className="py-10 mt-80 bg-green-100 bg-opacity-50 h-1/4 font-semibold z-10 text-sm grid justify-center align-middle text-black">
                <div className="text-6xl">Hydroponics</div>
                <div className="mt-4 text-2xl">The start of new Tech-farming</div>
            </div>
            <div className="absolute">
                <img className="h-screen" src={img1}/>
            </div>
        </div>
        <div className="pt-16 px-4  h-30">
            <h1 className=" font-bold text-xl flex justify-center align-middle text-black">Hydroponics</h1>
            <div className="text-justify"> Hydroponics, also known as aquaculture or tank farming, began as a way of studying scientifically the mechanisms of plant nutrition. Hydroponically grown plants may have no solid material under them at all; instead, their roots often simply hang in water with a rich mix of nutrients dissolved in it. The principal advantage to hydroponics is the savings from reduced labor costs, since it's generally carried on in enclosed areas and the irrigation and fertilizing are done mechanically. Peppers, cucumbers, and various other vegetables are produced hydroponically in huge quantities.
            </div>
        </div>
    </>)
}