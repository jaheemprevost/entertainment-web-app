import Image from 'next/image';
import Link from 'next/link';
function Register() {
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
          Sign Up
        </h1>

        <form className="mb-6">
          <input
            type="email"
            placeholder="Email address"
            className="w-full pb-4 mb-6 text-white placeholder-white placeholder-opacity-50 bg-transparent border-b text-body-medium indent-4 border-light_grey focus:outline-none focus:border-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pb-4 mb-6 text-white placeholder-white placeholder-opacity-50 bg-transparent border-b text-body-medium indent-4 border-light_grey focus:outline-none active:border-white focus:border-white"
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full pb-4 text-white placeholder-white placeholder-opacity-50 bg-transparent border-b text-body-medium indent-4 border-light_grey focus:outline-none active:border-white focus:border-white"
          />

          <button
            type="submit"
            className="w-full font-light text-body-medium text-white bg-primary_red py-[14px] sm:mt-10 md:mt-6 rounded-md hover:bg-white hover:text-dark_blue"
          >
            Create an account
          </button>
        </form>
        <p className="font-light text-center text-white text-body-medium">
          Already have an account?{' '}
          <Link href="/login" className="text-primary_red">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
