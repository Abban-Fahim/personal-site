import BoxListItem from "../../components/BoxListItem";
import useSWR from "swr";
import { fetcher } from "../../components/api-utils";

const Page = () => {
    const {data, err} = useSWR("api/apps", fetcher);

    return <>
        <h1>My <span className="gradient">A</span>pplicAtions</h1>
        <div className="grid">
            {data?data.map((item)=>{
                return <BoxListItem {...item} key={item.title} />
            }):null}
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
    </>
}

export default Page;