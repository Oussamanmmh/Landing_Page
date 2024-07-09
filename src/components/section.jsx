import img from '../assets/landing.jpg'
import { HomeDescripton } from './homedes'
export const LandSection =()=>{
    return(
        <>
        <div className='m-5 mt-10 relative h-[700px]'>
            <img src={img} alt="landing" className="w-full h-full object-cover rounded-2xl"/>
            <HomeDescripton />
        </div>
        </>
    )
}