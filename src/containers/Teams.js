import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import veena from "../assets/images/Veena.jpeg";
import mukul from "../assets/images/Mukul.jpg";
import pearl from "../assets/images/Pearl.jpg";
import rahul from "../assets/images/Rahul.jpg";
import aman from "../assets/images/Aman.jpeg";

export const Teams = () => {

    return (<>
        <div className="pt-16">
            <TeamContainer/>
        </div>
    </>)
}

const TeamContainer = (props) => {
    const data = [
        {
            name : "Veena K",
            url : veena,
            email: "veena.k@iitgn.ac.in",
            linkedin: "https://www.linkedin.com/in/veena-k-a062b0226/"
        },
        {
            name : "Mukul Raj",
            url : mukul,
            email: "mukul.raj@iitgn.ac.in",
            github: "https://github.com/mk-mukul",
            linkedin: "https://www.linkedin.com/in/mk-mukul/"
        },
        {
            name : "Pearl Khare",
            url : pearl,
            email: "pearl.khare@iitgn.ac.in",
            linkedin: "https://www.linkedin.com/in/pearl-khare-24969a202"
        },
        {
            name : "Rahul Raj",
            url : rahul,
            email: "raj.rahul@iitgn.ac.in",
            linkedin: "https://www.linkedin.com/in/rahul-raj-b566151bb/"
        },
        {
            name : "Aman Raj",
            url : aman,
            email : "aman.raj@iitgn.ac.in"
        }
    ]
    return (<>
        <div className="team-container">
            <h2 className="team-heading text-6xl font-medium">Our Team</h2>
            <div className='grid grid-cols-3 w-full'>
                {
                    data.map((val, ind) => {
                        // console.log(val.position)
                        return <TeamCard
                            key={ind}
                            name={val.name}
                            img_src={val.url}
                            alt= "Photo"
                            email={val.email}
                            github={val.github}
                            linkedin={val.linkedin}
                        />
                    })
                }
            </div>
        </div>
    </>)
}

const TeamCard = (props) => {
    return (
        <>
            <div className="team m-auto">
                <div className="card">
                    <h5 className="card-title">{props.name}</h5>
                    <img src={props.img_src} className="card-img-top" alt="Hello" />
                    <div className="card-body ml-4 mb-2">
                        {props.github ?
                            <a className="text-black hover:text-dark-801" href={props.github}>
                                <GitHubIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                        {props.linkedin ?
                            <a className="text-black hover:text-dark-801" href={props.linkedin}>
                                <LinkedInIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                        {props.email ?
                            <a className="text-black hover:text-dark-801" href={"mailto: "+props.email} >
                                <EmailIcon fontSize="large"/>
                            </a>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}