import {
  FaGoogle,
  FaSnapchat,
  FaFacebook,
  FaRegEnvelope,
  FaUser,
  FaLock,
} from "react-icons/fa";

function AppRight() {
  return (
    <div className="py-10 px-2  flex  flex-col bg-white rounded-r-2xl ">
      <div className="py-4">
        <h2 className="text-3xl font-bold text-blue mb-1">SignUp to Account</h2>
        <div className="border-2 w-20 border-blue inline-block "></div>
      </div>
      <header className="flex justify-center  ">
        <a href="#" className="border-2 border-gray rounded-full p-3 mx-1">
          <FaGoogle className="text-2xl" />
        </a>
        <a href="#" className="border-2 border-gray rounded-full p-3 mx-1">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="#" className="border-2 border-gray rounded-full p-3 mx-1">
          <FaSnapchat className="text-2xl" />
        </a>
      </header>
      <p className="text-gray my-3">or use your e-mail Account</p>
      <div className="flex flex-col items-center">
        <div className="bg-gray w-64 p-2 flex items-center mb-2">
          <FaUser className="text-blue m-2" />
          <input
            type="email"
            name="email"
            placeholder="Email / Username"
            className="bg-gray outline-none text-sm flex-1"
          />
        </div>
        <div className="bg-gray w-64 p-2 flex items-center mb-2">
          <FaLock className="text-blue m-2" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-gray outline-none text-sm flex-1"
          />
        </div>
        <div className="flex justify-between w-64 mb-5">
          <a href="#" className="text-xs">
            By joining, you agree to our Terms of Service and Privacy Policy
          </a>
        </div>
        <a
          href="#"
          className="border-2 border-blue text-blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue hover:text-white "
        >
          Create New Account
        </a>
      </div>
    </div>
  );
}

export default AppRight;
