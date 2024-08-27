import { Link, Outlet } from "react-router-dom";

export function Car() {

   
    return (
        <section>
             <h1> This is Car </h1>
             <div>
                <Link to={'./automatic'}>Automatic</Link>
                <Link to={'./manual'}>Manual</Link>
                <Link to={'./hybrid/12'}>Hybrid</Link>
             </div>
             <div>
                <Outlet/>
             </div>
        </section>
    )
}