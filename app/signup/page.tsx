import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
        <h2 className="text-3xl mb-4">SignUp</h2>
        <p className="mb-4">Create your account.</p>
        <form action="#">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Firstname"
              className="border border-gray-500 py-1 px-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Surname"
              className="border border-gray-500 py-1 px-2 rounded-md"
            />
          </div>
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-500 py-1 px-2 w-full rounded-md"
            />
          </div>

          <div className="mt-5">
            <button className="w-full bg-purple-500 py-3 text-center text-white">
             SIGN UP
            </button>
          </div>
          <h4 className="text-[12px] text-right mt-6">
              Already signed up? 
              <Link href={"/login"}>
                <span className="underline"> login</span>
              </Link>
            </h4>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
