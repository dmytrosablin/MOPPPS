import React, {useEffect} from "react";
import One from "./one";

const Result = (props) => {
    useEffect(() =>  {
        const fetchLinks = async () => {
            console.log('start')
            const response = await fetch(`/api/${props.input}`)
            console.log('end')
            const json = await response.json()
            if (response.ok) {
                props.setLinki(json)
            }
        }
        fetchLinks()
    }, [])
    return (
        <div className={`bg-white sm:w-[500px] mb-[30px]  w-fit m-auto mt-[30px] rounded-3xl p-[20px]`}>
            {props.linki && props.linki.map(link => <One link={link}/>)}
        </div>
    )
}

export default Result;