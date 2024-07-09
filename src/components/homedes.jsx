export const HomeDescripton=()=>{
    return (
        <>
        <section className="flex flex-col justify-between gap-10 items-center p-8    absolute top-0 right-0 w-1/2 bg-white rounded-2xl h-full">
            <div className="text-8xl font-sans font-bold text-black text-center">
            Everything you need to scale a global team

            </div>
            <div className="text-gray-500 text-center text-xl ">
            Grow bigger with Stretch. Hire faster by adopting the best HR processes, simplify payroll, and stay compliant, no matter where your team is located.
            </div>
            <div className="flex rounded-xl border-2 border-black bg-white  overflow-hidden w-96">
                 <input type="text" className="border-none px-3 py-4 flex-auto" placeholder="Type your awesome email"/>
                 <a className=" bg-black text-white py-4 px-3 rounded-tl-xl rounded-bl-xl" href="/Request">Request a demo </a>
            </div>

        </section>
        </>

    )
}