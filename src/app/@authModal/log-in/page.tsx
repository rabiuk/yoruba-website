// app/@authModal/(.)log-in/page.jsx
import CloseModal from "@/components/CloseModal";
import LogIn from "@/components/LogIn";

const page = () => {
  return (
    // <></>
    <div className="intercept fixed inset-0 z-[100000] bg-zinc-900/20">
      <div className="intercept container mx-auto flex h-full max-w-lg items-center">
        <div className="intercept relative h-fit w-full rounded-lg bg-background-500 px-2 py-20">
          <div className="intercept absolute right-4 top-4">
            {" "}
            <CloseModal />{" "}
          </div>
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default page;
