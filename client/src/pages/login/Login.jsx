import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginRegisterForm from "../../components/Form/LoginRegisterForm";

const ExtraLoginComponent = () => {
  return (
    <>
      <div className="text-center mt-4">
        <span className="text-gray-500 text-sm">or login with</span>
      </div>
      <div className="flex justify-center mt-2">
        <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with Google</span>
          <BsGoogle />
        </button>
        <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with Facebook</span>
          <BsFacebook />
        </button>
      </div>
      <div className="text-center mt-4">
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-600 text-sm">
          Don't have an account? Register here
        </Link>
      </div>
      <p className="text-center mt-2 font-semibold text-sm text-gray-500 cursor-pointer hover:text-gray-600 ">
        Forgot password?
      </p>
    </>
  );
};

const Login = () => {
  return (
    <LoginRegisterForm
      title="Login"
      authSystemName="Login"
      ExtraLoginComponent={<ExtraLoginComponent />}
      isRegistration={false}
    />
  );
};
export default Login;
