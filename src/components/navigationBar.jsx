
export const NavBar=() =>{
    return (
        <div className="flex justify-between m-5 items-center">
            <a className="text-5xl font-bold text-black" href="/">Stretch.</a>
            <div className="">
                <ul className="flex flex-row justify-between gap-10 items-center  text-sm" >
                    <li  className="hover:bg-gray-400 rounded-xl py-2 hover:cursor-pointer px-3"><a href="/#" className="">Platfom</a>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ml-2 h-4 w-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
</li>
                    <li className="hover:bg-gray-400 rounded-xl py-2 hover:cursor-pointer px-3"><a href="/#">Use cases</a> <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ml-2 h-4 w-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></li>
                    <li className="hover:bg-gray-400 rounded-xl py-2 hover:cursor-pointer px-3"><a href="/#">Why Stretch</a></li>
                    <li className="hover:bg-gray-400 rounded-xl py-2 hover:cursor-pointer px-3" ><a href="/#">Resources</a></li>
                    <li  className="hover:bg-gray-400 rounded-xl py-2 hover:cursor-pointer px-3"><a href="/#">Pricing</a></li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-8">
                <a href="/Login" className="">Login</a>
                <a className="border-2 border-black p-2 transition ease-in-out duration-100 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600  " href="/sign up">Get started</a>
            </div>
           
        </div>
    )

}