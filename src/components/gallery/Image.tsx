import "../../styles/image.css";
function Image() {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        <div className="gallery1">
            <img src="/Images/gallery 1.png" alt="Gallery 1" />
            <img src="/Images/gallery 2.png" alt="Gallery 2" />
        </div>
        
        <div className="gallery2">
            <img src="/Images/gallery 3.png" alt="Gallery 3" />
            <img src="/Images/gallery 4.png" alt="Gallery 4" />
            <img src="/Images/gallery 5.png" alt="Gallery 5" />
        </div>
        
        <div className="gallery3">
            <img src="/Images/gallery 6.png" alt="Gallery 6" />
        </div>
        
      </div>
    </section>
  );
}

export default Image;