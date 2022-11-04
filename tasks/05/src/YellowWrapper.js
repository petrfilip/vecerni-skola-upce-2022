import {useState} from "react";

export default function YellowWrapper({title, children}) {
    return (<div style={{
        backgroundColor:  "#FFFF99",
    }}>
        <h1>{title}</h1>
        {children}
    </div>);
}

