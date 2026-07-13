import "../../styles/community.css";

function Community() {
  return (
    <>
    <div className="main">
      <div className="span">
        <div className="a"><span>   </span></div>
        <div className="b"><span>   </span></div>
        <div className="c"><span>   </span></div>
        <div className="d"><span>   </span></div>
        <div className="e"><span>   </span></div>
        <div className="f"><span>   </span></div>
        <div className="g"><span>   </span></div>
        <div className="h"><span>   </span></div>
        <div className="i"><span>   </span></div>
        <div className="j"><span></span></div>
        <div className="k"><span></span></div>
      </div>

      <section className="community">
        <img src="/image/gps.png" alt="" />
    
        <div className="community-content">
          <h2>Join Our Thriving Community</h2>

          <p>
            Discover why BrightPath Academy is the right choice for <br />your
            child's future. Applications for the next academic <br /> year are now
            open.
          </p>
        </div>

        <div className="community-buttons">
          <button className="apply-btn">Apply Now</button>

          <button className="tour-btn">Schedule a Tour</button>
        </div>
      </section>
    </div>
    </>
  );
}

export default Community;