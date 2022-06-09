import BoxListItem from "../../components/BoxListItem"
import mcq from "./ez-mcq.png"

const testArray = [{
    img: mcq, 
    title: "EZ MCQs", 
    desc: "A little app to help you prepare for the IGCSE Science MCQs",
    links: [
        {type: "globe", link: "https://ez-mcq.herokuapp.com"},
        {type: "github", link: "https://github.com/Abban-Fahim/MCQ"}
    ]
}]

const Page = () => {
    return <>
        <h1>My <span className="gradient">A</span>pplication</h1>
        <div className="grid">
            {testArray.map((item)=>{
                return <BoxListItem {...item} />
            })}
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
    </>
}

export default Page;