import logo1 from '../assets/chercher.png'
import logo2 from '../assets/facebook.png'
import logo3 from '../assets/twitter.png'
import logo4 from '../assets/linkedin.png'
export const FooterPage=()=>{
    return(
        <>
        <footer className='flex justify-center gap-20  t-4 p-10 '>
            <div className="text-gray-400 text-sm">
                More than 14,0000 businesses trust Stretch to help them grow.
            </div>
            <div className='flex gap-20'>
                <img src={logo1} alt = "logo" className="w-10 h-10"/>
                <img src={logo2} alt = "logo" className="w-10 h-10"/>
                <img src={logo3} alt = "logo" className="w-10 h-10"/>
                <img src={logo4} alt = "logo" className="w-10 h-10"/>

               
            </div>
        </footer>
        </>
    )

}