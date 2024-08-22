import React from "react";
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="https://img.freepik.com/free-psd/isolated-black-gift-ribbon-transparent-background_125540-4707.jpg?t=st=1724366685~exp=1724370285~hmac=2712548b9c6fd47dfea5152947883002a2ccda4fc6b9dca17305887979f252c7&w=1060" alt="banner" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Rimsha Shoaib</h6>
            <h3>Design with me !</h3>
            <p>
              I am a dedicated UI/UX Designer passionate about creating seamless and visually appealing User interfaces.
              My goal is to deliver pixel-perfect, user-friendly designs that not only look great but also provide an exceptional user experience.
            </p>
            <a className="btn" href="#projects">
              More about Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
