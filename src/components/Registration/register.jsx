import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { registerThunk } from "redux/authReducer";
import { Button, ErrorMessage, Form, FormContainer, Input, Label, Title } from "./registartion.styled";



const RegisterPage = () =>{
   
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm()
        const dispatch = useDispatch()


        const onSubmit = (data) => {
            dispatch(registerThunk(data))
            reset()}
      
        return (
          
          
          <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Please register to access the PhoneBook</Title>
        <Label>
          <span>Email: </span>
          <Input {...register("email", { required: true })} type="email" />
          {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
        </Label>
        <Label>
          <span>Name: </span>
          <Input {...register("name", { required: true })} type="text" />
          {errors.name && <ErrorMessage>This field is required</ErrorMessage>}
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

export default RegisterPage