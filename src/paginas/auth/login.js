import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
    <center><div className="login-box">
        
  <div className="login-logo">
    <Link to={"#"}><b>INICIA</b>SESION</Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">¡Bienvenido!</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Correo" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8"> 
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Recordar Contraseña
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-dark">ingresar</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <Link to={"#"} className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Iniciar con cuenta  Facebook
        </Link>
        <Link to={"#"} className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Iniciar con cuenta Google+
        </Link>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <Link to="forgot-password.html">Olvide mi contraseña</Link>
      </p>
      <p className="mb-0">
        <Link to={"#"} className="text-center">Registrar nueva cuenta</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</center>


        )
}

export default Login;