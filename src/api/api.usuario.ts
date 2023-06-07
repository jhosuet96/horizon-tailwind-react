import request from "../helper/api/api";


const controller = '/Usuario/';

const apiUsuario =
{
    ActivarUsuarioPorCorreo: (look: string) => request.post<string>(controller+'ActivarUsuarioPorCorreo', look),
}

export default apiUsuario;