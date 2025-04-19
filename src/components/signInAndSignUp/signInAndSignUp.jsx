import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginUser, signUpUser} from "../../store/user/userSlice.js";

export const SignInAndSignUp = ({buttonLabel, textLabel, type}) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (type === 'signup'){
      dispatch(signUpUser(data));
    }else {
      dispatch(loginUser(data));
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-4 py-2"
          {...register("email", { required: true })}
        />
        {errors.email && <small className="text-red-500">Email is required</small>}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-4 py-2"
          {...register("password", { required: true })}
        />
        {errors.email && <small className="text-red-500">Email is required</small>}
        <button type="submit"
                className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700">{buttonLabel}
        </button>
      </form>
      <p className="text-center text-gray-500 mt-4">{textLabel} <a href="/sign-up"
                                                                              className="text-blue-500">Sign Up</a></p>

    </>
  );
}

