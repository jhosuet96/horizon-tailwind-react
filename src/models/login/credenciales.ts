export class CredencialesUsuario {
    Correo: string = ''
    Contrasena: string = ''

    constructor(email: string = '', clave: string = '')
    {
      this.Correo = email;
      this.Contrasena = clave;
    }
  }


  export class LoginReturnDTO {
    Hash: string
    Expiracion : Date
    UsuarioActual: UsuarioActualDTO
    UsuarioLimites : LimitesConsumoUsuarioDTO
  }

  
  export class UsuarioActualDTO {
    Id: number
    Email: string
    Nombre: string 
    Roles: string[]
  }

  export class LimitesConsumoUsuarioDTO {
    LimiteCalorias: number
    LimiteCarbohidratosMinimo: number
    LimiteCarbohidratosMaximo: number
    LimiteProteinasMinimo: number
    LimiteProteinasMaximo: number
    LimiteGrasaTotalMinimo: number
    LimiteGrasaTotalMaximo: number
    LimiteSodioMaximo: number
    LimiteColesterolMaximo: number
    LimiteFibraDietéticaMaximo: number
    AzucaresMaximo: number
  }

  export class UsuarioDTOActivarPorCorreo {
    hashId: string = ''

    constructor(hashId: string = '')
    {
      this.hashId = hashId;
    }
  }