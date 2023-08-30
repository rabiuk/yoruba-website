"use client";

const VerifyRequest = () => {
  return (
    <div className="flex flex-col items-center justify-evenly space-y-1">
      <h1 className="text-center text-3xl font-bold uppercase tracking-tight text-zinc-800 xl:text-4xl">
        Check your email
      </h1>
      <p className="text-center text-base text-zinc-600 xl:text-lg">
        A sign-in link has been sent to your email.
      </p>
      <p className="text-center text-base text-zinc-600 xl:text-lg">
        Please check your email and click on the link to sign in.
      </p>
    </div>
  );
};

export default VerifyRequest;
