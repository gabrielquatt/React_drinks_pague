import React from "react";
import reactImg from "../images/react.png";

const Info = () => (
  <div className="container-fluid">
<div>
  <h2>React Js</h2>
</div>

    <img src={reactImg} className="rounded mx-auto d-block" alt="react"></img>
    <div className="row">
      <div className="col">
        <h4>Declarativo</h4>
        <p>
          React te ayuda a crear interfaces de usuario interactivas de forma
          sencilla. Diseña vistas simples para cada estado en tu aplicación, y
          React se encargará de actualizar y renderizar de manera eficiente los
          componentes correctos cuando los datos cambien. Las vistas
          declarativas hacen que tu código sea más predecible, por lo tanto,
          fácil de depurar.
        </p>
      </div>

      <div className="col">
        <h4>Basado en componentes</h4>

        <p>
          Crea componentes encapsulados que manejen su propio estado, y
          conviértelos en interfaces de usuario complejas. Ya que la lógica de
          los componentes está escrita en JavaScript y no en plantillas, puedes
          pasar datos de forma sencilla a través de tu aplicación y mantener el
          estado fuera del DOM.
        </p>
      </div>

      <div className="col">
        <h5>Aprende una vez, escríbelo donde sea</h5>

        <p>
          En React no dejamos fuera al resto de tus herramientas tecnológicas,
          así que podrás desarrollar nuevas características sin necesidad de
          volver a escribir el código existente. React puede también renderizar
          desde el servidor usando Node, así como potencializar aplicaciones
          móviles usando React Native.
        </p>
      </div>
    <div>
        <a href="https://es.reactjs.org/" >Saber mas..</a>
    </div>

    </div>
  </div>
);
export default Info;
