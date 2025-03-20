import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const Forms = () => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, control } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form">
      <h1>YouTube Form</h1>
      <form className="formdata" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Forms;
