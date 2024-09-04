import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.css";

const LoginPage = () => {
  //   const [user, setUser] = useState({
  //     name: "",
  //     phoneNumber: "",
  //   });

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(user);
  //   };

  const onSubmit = (formData) => console.log(formData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              //   onChange={(e) => {
              //     setUser({ ...user, name: e.target.value });
              //   }}
              //   value={user.name}

              {...register("name", { required: true, minLength: 3 })}
              className="form_text_input"
              placeholder="Enter your name"
            />
            {errors.name?.type === "required" && (
              <em className="form_error">Please Enter your name</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_error">
                Name should be 3 or more characters
              </em>
            )}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              //   onChange={(e) => {
              //     setUser({
              //       ...user,
              //       phoneNumber: parseInt(e.target.value),
              //     });
              //   }}
              //   value={user.phoneNumber}

              {...register("phone", { valueAsNumber: true })}
              className="form_text_input"
              placeholder="Enter your phone number"
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
