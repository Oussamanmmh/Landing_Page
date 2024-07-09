import './App.css'
import { FooterPage } from './components/footer'
import { HomeDescripton } from './components/homedes'
import { NavBar } from './components/navigationBar'
import { LandSection } from './components/section'

function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        {/* <HomeDescripton/> */}
        <LandSection/>
        <FooterPage/>
       </div>
    </>
  )
}

export default App
