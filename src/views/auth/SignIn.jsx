import apiLogin from "api/api.login";
import InputField from "components/fields/InputField";
import AuthContext from "context/AuthContext";
import { useForm } from "hooks/useForm";
import useStorage from "hooks/useStorage";
import { CredencialesUsuario } from "models/login/credenciales";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { FcGoogle } from "react-icons/fc";
// import Checkbox from "components/checkbox";

const initialForm = {
  email: "",
  contraseña: "",
};

const validationsForm = (form) => {
  let errs = {};

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    errs.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errs.email = "El campo email es incorrecto";
  }

  if (!form.contraseña.trim()) {
    errs.contraseña = "El campo contraseña es requerido";
  }

  return errs;
};



export default function SignIn() {
  const stdata = useStorage;
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const SendData = () => {
    apiLogin
      .Login(new CredencialesUsuario(form.email, form.contraseña))
      .then((data) => {
        if (data != undefined) {
          /*cookies.set("user", data.hash, {
            path: "/",
            expires: new Date(data.Expiracion),
            sameSite: "none",
            secure: true,
          });
          stdata.set("loginUser", data);
          setIsAuthenticated(true);
          navigate("/principal");*/
          console.log("Logeo correcto");
        }
      })
      .catch((err) => {
        try {
          const { response } = err;
          const { data } = response;
          console.log(data);
        } catch (error) {
          console.log(error.message);
        }
      });
  };

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm, SendData);

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Iniciar Sesion
        </h4>
        {/*
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Ingresar con Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> o </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="mb-9 ml-1 text-base text-gray-600">
            Introduzca su correo y contraseña para iniciar sesion
          </p>
        </div>
        
        */}
        
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Correo*"
            placeholder="email@sancesta.com"
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && <p className="warningText">{errors.email}*</p>}
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Contraseña*"
            placeholder="Min. 8 caracteres"
            id="password"
            type="password"
            name="contraseña"
            onChange={handleChange}
            value={form.contraseña}
          />
          {errors.contraseña && (
            <p className="warningText">{errors.contraseña}*</p>
          )}
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            {/* <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div> */}
            <a
              className="text-decoration-line: text-sm font-medium text-brand-500 underline hover:text-brand-600 dark:text-white"
              href=" "
            >
              ¿Olvidaste la contraseña?
            </a>
          </div>

          <input
            type="submit"
            value="Ingresar"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          ></input>

          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              ¿Aun no estas registrado?
            </span>
            <a
              href=" "
              className="text-decoration-line: ml-1 text-sm font-medium text-brand-500 underline hover:text-brand-600 dark:text-white"
            >
              Crear una cuenta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
