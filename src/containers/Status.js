import tds from "../assets/images/tds.png"
import temp from "../assets/images/temp.jpg"
import img2 from "../assets/images/img2.jpg"
import humidity from "../assets/images/humidity.png"

export const Status = () => {
    let temp_val = 40
    let tds_val = 148
    let humidity_val = 30
    
    return (<>
        <div className="mt-16">
            <div className="m-auto w-full">
                <img src={img2} alt="img2" />
                <div className="flex  my-10 justify-center">
                    <img className="w-24 mr-8" src={temp}/>
                    <div className="text-4xl h-auto te"> { " - " + temp_val + "°C"} </div>
                </div>
                <div className="flex mb-10 justify-center">
                    <img className="w-24 mr-6" src={tds}/>
                    <div className="text-4xl h-auto te"> {" - " + tds_val + " PPM"} </div>
                </div>
                <div className="flex mb-10 justify-center">
                    <img className="w-24 mr-6" src={humidity}/>
                    <div className="text-4xl h-auto te"> {" - " + humidity_val + " %"} </div>
                </div>
            </div>
        </div>
    </>)
}