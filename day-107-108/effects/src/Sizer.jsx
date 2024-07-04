import { useEffect } from "react"

export function Sizer() {

    useEffect(() => {

        function handleWindowSizeChange() {
            console.log(window.innerWidth)
        }
        window.addEventListener('resize',handleWindowSizeChange )

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    })

    return (
        <h1> Window Size </h1>
    )
}