import Navbar from "./Navbar"
import Banner from "./Banner"
import Marquee from "./Marquee"
import Compliance from "./Compliance"
import Footer from "./Footer"

function Home()
{

return(
    <>
    <div className= "bg-[url('https://vita.spsnet.com/assets/images/vita/compliance/bg1.png')]">
    <header>
    <Navbar/>
    </header>
    <main>
    <Banner/>
    <Marquee/>
    </main>
    </div>
    <main>
    <Compliance/>
    </main>
    <Footer/>
    </>
)
}

export default Home