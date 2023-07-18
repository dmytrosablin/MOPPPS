import React from "react";

const One = (props) => {
    return (
        <div className={`mb-[15px]`}>
            <div className={`text-[10px]`}>{props.link.displayedLink}</div>
            <a href={props.link.links} className={`text-[#1a0db3]`} >{props.link.title}</a>
            <div>{props.link.snippet}</div>
        </div>
    );
}

export default One;