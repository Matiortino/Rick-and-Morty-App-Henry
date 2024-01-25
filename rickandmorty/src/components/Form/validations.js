export const validation  = ({email, password}) => {
  let errors = {}

  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/
    
  if (!regexEmail.test(email)) {
    errors.email = 'El email es inválido';
  }

  if (!email){
    errors.email = 'El email esta vacio';
  }

  if (email.length > 35){
    errors.email = 'El email es muy largo';
  }

  // si empieza con un numero
  // if (/^[0-9]/.test(password)){
  if (!regexPassword.test(password)) {
    errors.password = 'La contraseña debe tener al menos una mayuscula';
  }

  if (password.length < 6 || password.length > 10) {
    errors.password = 'La contraseña debe tener al menos 6 y 10 caracteres';
  }

  return errors;
}