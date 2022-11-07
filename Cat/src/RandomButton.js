import { useState} from 'react'
import './App.css';
export default function RandomButton({catData}) {
    const [tempLink, setTempLink] = useState("")
    function triggerRandom() {
        let i = Math.floor(Math.random() * 25)
        console.log(i)
        setTempLink(catData[i].url)
    }   

    return (
        <div className = "container">
        <button className = "RandomButton" onClick  = {triggerRandom} >
            Random
        </button>
        <br></br>
        <img className = 'photo' src = {tempLink} alt = ''></img>
        </div>

    )   
}
