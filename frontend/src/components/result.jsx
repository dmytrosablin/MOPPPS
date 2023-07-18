import React, {useEffect} from "react";
import One from "./one.jsx";
import axios from "axios";


const Result = (props) => {
    useEffect(() =>  {
        // console.log('start')
        // axios.get(`https://mopppsik.onrender.com/api/sinobot`).then((response) => {
        //     console.log(response.data)
        //     // const json = response.json()
        //
        //         props.setLinki(response.data)
        //
        // })
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