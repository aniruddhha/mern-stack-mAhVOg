import { Link } from "react-router-dom";

export function Mobile() {
    return (
        <>
            <h1>This is Mobile</h1>
            {/* <a href="..">Home</a> */}
            <Link to={'..'}>Home</Link>
        </>
    )
}