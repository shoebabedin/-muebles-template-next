
const AboutHero = () => {
    return (
        <div className="about_page_hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>WELCOME TO MUEBLES</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h4>WE START AT 2015</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h4>WIN BEST ONLINE SHOP AT 2017</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="img-fluid about_hero_img"
                src={("/assets/images/about/about.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutHero;