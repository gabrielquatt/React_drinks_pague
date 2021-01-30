import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
            sint!
          </p>
        </div>

        <div className="col">
          <h5 className="text-uppercase">Cursos</h5>
          <ul>
            <li>
              <a href="https://codigofacilito.com/videos/curso_react_instalar_react">
                Curso ReactJs
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=zIY87vU33aA&t=21s">
                Curso ReactJs 2
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=zIY87vU33aA&t=21shttps://www.youtube.com/watch?v=yFAIMEupsuo&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo">
                Curso ReactJs 3{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Link de Interes:</h5>

          <ul className="list-unstyled">
            <li>
              <a href="https://projects.lukehaas.me/css-loaders/">
                CSS Loaders
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/morgan">Librery Morgan</a>
            </li>
            <li>
              <a href="https://uigradients.com/#Relay">GradienteCOLORS</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/morganhttps://github.com/gabrielquatt/DrinksApi_Express">
                Git de la Api Express+MySQL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-info text-center text-dark">
      <h3>© 2020 Copyright: ReactJs Drinks Practice</h3>
    </div>
  </footer>
);

export default Footer;
