import React from "react";

const FormCategory = ({ onChange, onSubmit, form }) => (
 
 <form onSubmit={onSubmit}>
    <p>Nueva Categoria:</p>
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
);

export default FormCategory;
