import Navbar from "../components/layout/Navbar";
import Hero from "../components/gallery/Hero";
import Image from "../components/gallery/Image";
import Community from "../components/gallery/Community";
function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Hero />
                <Image />
            </div>

            <Community />

        </>
    );
}

export default Home;