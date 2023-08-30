import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="mt-[75px] flex h-[450px] w-full flex-col items-center justify-center space-y-4      ">
      <h1 className="text-3xl font-bold text-zinc-700">Coming Soon!</h1>
      <p className="text-zinc-700">
        Something wonderful is brewing. Check back soon!
      </p>
      <Link href="/">
        <p className="cursor-pointer no-underline hover:text-primary-500 hover:underline">
          Home
        </p>
      </Link>
    </div>
  );
};

export default ComingSoon;
