import { useState } from "react";
import "./App.css";
import { CheckIcon } from "@chakra-ui/icons";
import { Form, useFormik } from "formik";
import validate from "./utils/validate";

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

function App() {

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <Center h={"100vh"} bg={"green.50"}>
      <Box p="5" w={{ md: "100%", xl: "50%" }} bg="gray.200" borderRadius={5}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Flex flexDirection={"column"} mb={5}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                type="text"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="informe seu nome"
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
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="informe seu email"
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
                onChange={formik.handleChange}
                value={formik.values.password}
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
                bg={"darkgreen"}
                color={"white"}
              >
                Salvar
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Center>
  );
}

export default App;
