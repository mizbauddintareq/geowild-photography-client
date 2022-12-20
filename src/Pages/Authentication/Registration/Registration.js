import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider";
import { sweetToast } from "../../../utilities/sweetToast";
const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const pass = data.password;
    console.log(data);
    createUser(email, pass)
      .then((userCredential) => {
        // const user = userCredential.user;
        handleUpdateUser({ displayName: name });
        sweetToast("Registration successful");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
  };

  const handleUpdateUser = (info) => {
    updateUser(info)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        sweetToast("Registration successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
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
      <div>
        <Button variant="primary" onClick={handleGoogleLogin}>
          Log in with google
        </Button>
      </div>
    </div>
  );
};

export default Registration;
