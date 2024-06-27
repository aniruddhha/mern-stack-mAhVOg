export function Car({ isLightOn, isIgnited, color }) {

    return (
        <>
            <Engine isIgnited={isIgnited}/>

            <Body isLightOn={isLightOn} color={color}/>
        </>
    )
}

export function Engine({ isIgnited }) {
    return (
        <>
            <h1>Engine {isIgnited}</h1>
        </>
    )
}

export function Body({color, isLightOn}) {
    return (
        <>
        <h1>Body {color} </h1>
            <Seat isLightOn={isLightOn}/>
        </>
    )
}


export function Seat({ isLightOn }) {
    return (
        <>
         <h1>Seats {isLightOn}</h1>
            <Light/>
        </>
    )
}

export function Light({ isLightOn}) {
    return (
        <>
             <h1>Light</h1>
        </>
    )
}


