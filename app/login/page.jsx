import Image from 'next/image';
import Link from 'next/link';

function Login() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-12 bg-midnight_black">
      <Image
        src="/assets/icons/logo.svg"
        alt="EWA Logo"
        width={32}
        height={25}
        className="object-contain mb-[60px]"
      />

      <div className="max-w-[400px] rounded-[10px] bg-dark_blue sm:p-6 md:p-8">
        <h1 className="mb-10 font-light text-white text-heading-large">
          Login
        </h1>

        <form className="mb-6">
          <input
            type="email"
            placeholder="Email address"
            className="w-full pb-4 mb-6 text-white placeholder-white placeholder-opacity-50 bg-transparent border-b text-body-medium indent-4 border-light_grey focus:outline-none focus:border-white caret-primary_red"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pb-4 text-white placeholder-white placeholder-opacity-50 bg-transparent border-b text-body-medium indent-4 border-light_grey focus:outline-none active:border-white focus:border-white caret-primary_red"
          />

          <button
            type="submit"
            className="w-full font-light text-body-medium text-white bg-primary_red py-[14px] sm:mt-10 rounded-md hover:bg-white hover:text-dark_blue"
          >
            Login to your account
          </button>
        </form>
        <p className="font-light text-center text-white text-body-medium">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary_red">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
