import React, {useEffect} from "react";
import One from "./one";

const Result = (props) => {
    useEffect(() =>  {
        const fetchLinks = async () => {
            const response = await fetch(`/api/${props.input}`)
            const json = await response.json()
            console.log(props.input)
            if (response.ok) {
                props.setLinki(json)
            }
        }
        fetchLinks()
    }, [])
    return (
        <div className={`bg-white  w-fit m-auto mt-[30px] rounded-3xl p-[20px]`}>
            {props.linki && props.linki.map(link => <One link={link}/>)}
        </div>
    )
}

export default Result;