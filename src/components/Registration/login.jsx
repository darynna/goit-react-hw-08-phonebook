import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/authReducer";
import { Button, ErrorMessage, Form, FormContainer, Input, Label , Title} from "./registartion.styled";




const LoginPage = () =>{
   
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm()
        const dispatch = useDispatch()


        const onSubmit = (data) => {
            dispatch(loginThunk(data))
            reset()}
      

        return (
          
          <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Please Log in to access the PhoneBook</Title>
        <Label>
          <span>Email: </span>
          <Input {...register("email", { required: true })} type="email" />
          {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
        </Label>
        <Label>
          <span>Password: </span>
          <Input {...register("password", { required: true })} type='password' />
          {errors.exampleRequired && <ErrorMessage>This field is required</ErrorMessage>}
        </Label>

        <Button type="submit">Log in</Button>
      </Form>
    </FormContainer>
        )
      
}

export default LoginPage