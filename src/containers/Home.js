
import img1 from "../assets/images/home.jpg"

export const Home = () => {

    return (<>
        <div className="pt-16 grid h-30 relative">
            <img className="absolute opacity-70" src={img1}/>
            <div className="mt-96 font-bold text-9xl flex justify-center align-middle text-black">Hydroponics</div>
            <div className="mt-20 font-semibold text-6xl flex justify-center align-middle text-black">The start of new Tech-farming</div>
        </div>
    </>)
}