import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = ({ history }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        data,
      );
      localStorage.setItem('token', response.data.payload);
      console.log(localStorage);
      history.push('/bubbles');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          ref={register({
            required: true,
          })}
          defaultValue="Lambda School"
        />
        <input
          type="password"
          name="password"
          defaultValue="i<3Lambd4"
          ref={register({
            required: true,
          })}
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
