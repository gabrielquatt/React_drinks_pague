import React from "react";
import "../styles/NewForm.css";

const DrinkNew = ({onChange, onSubmit, form}) => (
  
  <div>
    <form onSubmit={onSubmit}>
      <p>Datos de la Nueva Bebida:</p>
      <div className="form-group">
        <label>TITULO:</label>
        <input
        className="form-control"
         
          type="text"
          autoComplete="off" 
          placeholder="title"
          name="title"
          onChange={onChange}
          value={form.title}
        />
      </div>
      <p></p>
      <div className="form-group">
        <label>DESCRIPCION:</label>
        <textarea  name="description" rows="2" cols="35"
          className="form-control"
        autoComplete="off" 
        placeholder="description" 
        onChange={onChange}
        value={form.description}
        ></textarea>
      </div>
      <p></p>
      <div>
        <label>URL ICONO:</label>
        <input
          className="form-control"
          type="text"
          autoComplete="off" 
          placeholder="icono url"
          name="logo"
          onChange={onChange}
          value={form.logo}
        />
      </div>
      <p></p>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
      
                <div className="col">
                <label>color izquierda:</label>
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="leftColor" 
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                <label>color derecha:</label>
                    <input 
                    className="form-control"
                        type="text" 
                        placeholder="rightColor" 
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />    
                </div>
            </div>
            <p></p>
      <div className="btn-submit">
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </div>
    </form>
  </div>


      


       



)



export default DrinkNew;
