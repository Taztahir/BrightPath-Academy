import "../../styles/hero.css";
function Hero() {
    return (
        <section>
            <div className="hero">
                <h1>Capturing Our Journey</h1>
                <p>Experience the vibrant life at BrightPath Academy. From Academic
                    excellence <br />to athletic triumphs and artistic expression, witness the moments that define <br /> our community.
                </p>
            </div>

            <div className="hero-buttons">
                <button>All</button>
                <button>Sports Day</button>
                <button>Graduation</button>
                <button>Classroom</button>
                <button>Campus</button>
            </div>
        </section>
    );

}

export default Hero;