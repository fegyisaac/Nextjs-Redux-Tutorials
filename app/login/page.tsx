import Link from "next/link";

const LogIn = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
          <h2 className="text-3xl mb-4">Log into your account</h2>
          <form action="#">
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-500 py-1 px-2 w-full rounded-md"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-500 py-1 px-2 w-full rounded-md"
              />
            </div>

            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                LOG IN
              </button>
            </div>
            <h4 className="text-[12px] text-right mt-6">
              Don't have an account?
              <Link href={"/signup"}>
                <span className="underline"> Sign Up</span>
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
