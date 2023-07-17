import {useState} from "react";
import Result from "./components/result";


function App() {
    const [linki, setLinki] = useState(null)
    const [input, setInput] = useState('')
    const [resultState, setresultState] = useState(false)


    const HandleLinkForm = (e) => {
        e.preventDefault()
        setresultState(true)

    }


    return (
        <div className="bg-[#6699ff] ">
            <div className={`mx-[30px] `}>
                <h1 className={`text-5xl font-bold text-black w-fit m-auto pt-[20px]`}>MOPPPS</h1>
                <form onSubmit={HandleLinkForm}>
                    <div className={`h-[50px] grid phone:grid-cols-mobileform pc:grid-cols-form mt-[30px]`}>
                        <div></div>
                        <input className={'pl-[10px] mr-[10px]  outline-[#1C366A] border-2 border-[#1C366A] rounded-2xl'} type="text" onChange={e => setInput(e.target.value)} value={input}/>
                        <button className={`bg-white rounded-2xl bg-search bg-cover p-[5px] border-2 border-[#1C366A]`}></button>
                        <div></div>
                    </div>
                </form>
                {resultState && <Result linki={linki} setInput={setInput} setLinki={setLinki} input={input}/>}
            </div>
        </div>
    );
}

export default App;
