import {
   useParams
  } from "react-router-dom";

export function HybridCar() {

    const { carId } = useParams()

    return (
        <h1>Hybrid Car {carId}</h1>
    )
}