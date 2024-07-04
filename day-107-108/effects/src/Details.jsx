import { useEffect, useState } from "react"

export function Details() {

    const [st, setSt] = useState(false)

    useEffect(() => {
        console.log(`First useEffect`)
        //i would be getting called for each component rerender

        // setSt(!st) // bad idea
    })

    useEffect(() => {
        console.log(`Second useEffect`)
        //i would be getting called only once i.e for first rendering
    }, [])

    useEffect(() => {
        console.log(`Third useEffect`)

        //i would be getting called only when the value of st gets changed
    }, [st])

    useEffect(() => {

        // connect to fb
        console.log(`Fourth useEffect`)

        return () => {
            console.log(`Here we are cleaning up`)
            // used for cleaning the side effect
            // disconnect from fb
        }

    }, [])

    return (
        <section>
            <h1> Details Page {st ? 'TRUE' : 'FALSE'}</h1>
            <input type="button" value="Okay" onClick={() => setSt(!st)} />
        </section>
    )
}