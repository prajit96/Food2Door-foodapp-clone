import { Box, Button, Heading, Input, Progress, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../redux/SignUpReducer/action";


export const Register = ({ onClose }) => {
  const {isLoading} = useSelector((store)=>store.signUpReducer)
  // console.log("rgei")
  // console.log(register)
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const toast = useToast()

  const dispatch = useDispatch();
  
  const handleRegister = () => {
    const registerData = {
      name:firstName,
    //   lasttName,
    //   number,
      email:email,
      pass:password
    };
    
    dispatch(SignUp(registerData,onClose,toast,setFirstName,setLastName,setNumber, setEmail,setPassword))
  };

  return (
    <Box m="auto" display={"grid"} gap="20px" borderRadius={"16px"}>
       {isLoading && (
          <Progress
            isIndeterminate
            hasStripe={true}
            isAnimated={true}
            size="sm"
          />
        )}
      <Heading textAlign={"center"}>Register Now</Heading>
      <Input
        type={"text"}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter Your First Name"
        required
      />
      <Input
        type={"text"}
        value={lasttName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Your Last Name"
        required
      />
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Your Mobile Number"
        required
        
      />

      <Input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        required
        
      />
      <Input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        required
      />

      <Button onClick={handleRegister}colorScheme={"#e40046;"} >Register</Button>
    </Box>
  );
};