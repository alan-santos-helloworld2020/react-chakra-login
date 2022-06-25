const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "o nome de usuario é obrigatório";
  } else if (values.username.length < 3) {
    errors.username = "nome muito curto";
  }

  if (!values.email) {
    errors.email = "o email é obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "email inválido";
  }

  if (!values.password) {
    errors.password = "o password é obrigatório";
  } else if (values.password.length < 5) {
    errors.password = "senha muito curta";
  }

  return errors;
};

export default validate;
