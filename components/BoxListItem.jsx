import Image from "next/image";
import { useState } from "react";

const BoxListItem = ({img, title, desc, links}) => {
    const [hovering, setHovering] = useState(false);

    return <div className="item" 
    onMouseEnter={()=>setHovering(true)} 
    onMouseLeave={()=>setHovering(false)}
    style={hovering?{background: "linear-gradient("+String(Math.random()*360) + "deg, #ffb800, #fab2fa"}:null}>
        <div style={{transitionDuration: "0.4s", scale: hovering ? "1.07" : "1"}}>
           <Image width="1920px" height="916px" src={img} alt="screenshot of app" /> 
        </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="links">
                {links?links.map((det)=>{
                    return <a key={det.det} className="icon" href={det.link}><i className={"bi bi-"+det.type}></i></a>
                }):null}
            </div>
        </div>
}
 
export default BoxListItem;