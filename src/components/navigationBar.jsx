
export const NavBar=() =>{
    return (
        <div className="flex justify-between m-5 items-center">
            <h1 className="text-5xl font-bold text-black">Stretch.</h1>
            <div className="">
                <ul className="flex flex-row justify-between gap-10 items-center  text-sm" >
                    <li ><a>Platfom</a></li>
                    <li ><a>Use cases</a></li>
                    <li ><a>Why Stretch</a></li>
                    <li ><a>Resources</a></li>
                    <li ><a>Pricing</a></li>
                    <li ><a>Platfomr</a></li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-8">
                <a>Login</a>
                <a>Get started</a>
            </div>
           
        </div>
    )

}