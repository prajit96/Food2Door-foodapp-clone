import axios from "axios";
import { SignUp_FAILURE, SignUp_REQUEST, SignUp_SUCCESS } from "./actionTypes";

export const SignUp =
  (
    data,
    onClose,
    toast,
    setFirstName,
    setLastName,
    setNumber,
    setEmail,
    setPassword
  ) =>
  (dispatch) => {
    console.log(data);
    //POST
    

    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.number === "" ||
      data.email === "" ||
      data.password === ""
    ) {
      toast({
        title: "Fail.",
        description: "Please Fill All the Fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch({ type: SignUp_REQUEST });
      axios
        .post("https://login-datas.onrender.com/users/register", data)
        .then((res) => {
          console.log(res);
          dispatch({ type: SignUp_SUCCESS, payload: data });
        })
        .catch(() => {
          dispatch({ type: SignUp_FAILURE });
        });
      setFirstName("");
      setLastName("");
      setNumber("");
      setEmail("");
      setPassword("");
      toast({
        title: "Account created",
        description:"Registeration Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    }
  };