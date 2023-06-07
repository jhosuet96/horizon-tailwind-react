export class UsuarioDTOCrear {
    urlEnvio: string = ''
    correo: string = ''
    contrasena: string = ''
    sexo: string = ''
    usuarioInfoDTO: UsuarioInfoDTO

    constructor(email: string = '', clave: string = '', sexo: string = '', usuarioInfoDTO: UsuarioInfoDTO)
    {
      this.correo = email;
      this.contrasena = clave;
      this.sexo = sexo;
      this.usuarioInfoDTO = usuarioInfoDTO;
    }
  }

  export class UsuarioInfoDTO {
    altura: number = 0
    peso: number = 0
    fechaNacimiento: Date

    constructor(altura: number, peso: number, fechaNacimiento: Date)
    {
      this.altura = altura;
      this.peso = peso;
      this.fechaNacimiento = fechaNacimiento;
    }
  }