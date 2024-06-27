import { useContext } from "react"
import { CarContext } from "./CarContext"

export function CarNew() {

    return (
        <>
            <EngineNew />

            <BodyNew/>
        </>
    )
}

export function EngineNew() {
    const {st, setSt} = useContext(CarContext)
    return (
        <>
            <h1>Engine {st.isIgnited ? 'ON': 'OFF'}</h1>
        </>
    )
}

export function BodyNew() {

    const {st, setSt} = useContext(CarContext)

    return (
        <>
        <h1>Body {st.color}</h1>
            <SeatNew />
        </>
    )
}


export function SeatNew() {
    const {st, setSt} = useContext(CarContext)
    return (
        <>
         <h1>Seats {st.isLightOn ? 'ON': 'OFF'}</h1>
            <LightNew/>
        </>
    )
}

export function LightNew() {
    const {st, setSt} = useContext(CarContext)

    const handleClick = () => {
        setSt({ ...st, isIgnited: !st.isIgnited })
    }
    return (
        <>
             <h1>Light {st.isLightOn ? 'ON': 'OFF'}</h1>
             <input type="button" value="Okay" onClick={handleClick} />
        </>
    )
}


