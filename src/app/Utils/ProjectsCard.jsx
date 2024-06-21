import { Link, redirect } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingCard from "./LoadingCard";
function ProjectsCard({item}){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },2000)
    },[])
    if(isLoading) {
        return (<>
            <LoadingCard/>
            </>
        )
    }
    else {
    if(item.link !== 'null' ) {
        return (
        <a target='_blank' href={item.link}>
            <div className="cardProjects">
                <div className="cardImage">
                    <img className={item.commingSoon ? ('commingSoonImage') : ('')} src = {item.image}/>
                </div>
                <div className="cardContext">
                    <h2>{item.title} {item.commingSoon ? (<span className="commingSoon">(Comming Soon)</span>) : (<></>)}</h2>
                    <p>{item.body}</p>
                </div>
            </div>
            </a>
            )
    }
    else {
        return (
            <Link to='/error'>
                <div className="cardProjects">
                    <div className="cardImage">
                        <img className={item.commingSoon ? ('commingSoonImage') : ('')} src = {item.image}/>
                    </div>
                    <div className="cardContext">
                        <h2>{item.title} {item.commingSoon ? (<span className="commingSoon">(Comming Soon)</span>) : (<></>)}</h2>
                        <p>{item.body}</p>
                    </div>
                </div>
            </Link>
            )
    }
}
}
export default ProjectsCard