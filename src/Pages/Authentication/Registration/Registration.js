import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider";
import { sweetToast } from "../../../utilities/sweetToast";
const Registration = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const pass = data.password;
    console.log(data);
    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        handleUpdateUser({ displayName: name });
        sweetToast();
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
    reset();
  };

  const handleUpdateUser = (info) => {
    updateUser(info)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="enter your full name" {...register("name")} />
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

export default Registration;
