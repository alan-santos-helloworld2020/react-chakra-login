import { CheckIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import validate from "../../utils/validate";

import {
  Container,
  Box,
  Center,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/home");
    },
  });

  return (
    <Center h={"100vh"} bg={"black"}>
      <Box p="5" w={{ md: "100%", xl: "40%" }} bg="darkgray" borderRadius={5}>

        <Text textAlign={"center"} fontWeight={"bold"} color={"green.600"}>
          Cadastro de Usuário
        </Text>
        <form onSubmit={formik.handleSubmit}>

          <FormControl>

            <Flex flexDirection={"column"} mb={5}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                type="text"
                id="username"
                name="username"
                borderColor={"blackAlpha.300"}
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Informe seu nome"
              />
              {formik.errors.username ? (
                <FormHelperText color={"red"}>
                  {formik.errors.username}
                </FormHelperText>
              ) : (
                ""
              )}
            </Flex>

            <Flex flexDirection={"column"} mb={5}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                name="email"
                id="email"
                borderColor={"blackAlpha.300"}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Informe seu email"
              />
              {formik.errors.email ? (
                <FormHelperText color={"red"}>
                  {formik.errors.email}
                </FormHelperText>
              ) : (
                ""
              )}
            </Flex>

            <Flex flexDirection={"column"} mb={5}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                borderColor={"blackAlpha.300"}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Informe sua senha"
              />
              {formik.errors.password ? (
                <FormHelperText color={"red"}>
                  {formik.errors.password}
                </FormHelperText>
              ) : (
                ""
              )}
            </Flex>

            <Flex flexDirection={"row"} justifyContent={"end"}>
              <Button
                type="submit"
                leftIcon={<CheckIcon />}
                bg={"green.600"}
                color={"white"}
                _hover={{backgroundColor:"green.700"}}
              >
                Salvar
              </Button>
            </Flex>

          </FormControl>
        </form>
      </Box>
    </Center>
  );
};

export default Cadastro;
