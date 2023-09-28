import { useState } from 'react';
import { Alert } from './Alert';
import { ejercicio } from './ejercicio';

function App() {
  const [output, setOutput] = useState("");
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(false);
    setDanger(false);

    const code = event.target.cadenaEntrada.value;
    const result = ejercicio(code);

    setOutput(result.msg);

    if (result.success) {
      setSuccess(true);
    } else {
      setDanger(true);
    }
  };
  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="card bg-info">
          <h5 className="card-title">Validación de cadenas</h5>
          <div className="row justify-content-center">
            <div className="col-auto">
              <form onSubmit={handleSubmit}>
                <label htmlFor="cadenaEntrada" className="form-label">
                  INGRESA TU CADENA:
                </label>
                <input
                  type="text"
                  id="cadenaEntrada"
                  className="input-group-text"
                />
                <button type="submit" className="btn btn-dark">
                  Validar
                </button>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card-text mt-3 col-auto">
              {success && <Alert message="Tu cadena es válida" type="success" />}
              {danger && <Alert message="Tu cadena no es válida" type="dark" />}
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
