import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
