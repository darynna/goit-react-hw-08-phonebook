import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/authReducer";
import { Button, ErrorMessage, Form, FormContainer, Input, Label } from "./registartion.styled";




export const LoginPage = () =>{
   
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm()
        const dispatch = useDispatch()


        const onSubmit = (data) => {
            console.log(data);
            dispatch(loginThunk(data))
            reset()}
      

        return (
          
          <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Sign up</Button>
      </Form>
    </FormContainer>
        )
      
}