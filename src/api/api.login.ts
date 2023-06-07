import request from "../helper/api/api";
import { CredencialesUsuario, LoginReturnDTO } from "../models/login/credenciales";
import { UsuarioDTOCrear } from "../models/login/registro";

const controller = '/Login/';

const apiLogin =
{
    Login: (look: CredencialesUsuario) => request.post<LoginReturnDTO>(controller+'Login', look),
    Register: (look: UsuarioDTOCrear) => request.post<string>(controller+'Registrar', look),
}

export default apiLogin;