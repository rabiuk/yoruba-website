import React from "react";
import CloseModal from "@/components/CloseModal";
import LogIn from "@/components/LogIn";

type LoginModalProps = {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal: React.FC<LoginModalProps> = ({
  showLoginModal,
  setShowLoginModal,
}) => {
  const closeModal = () => {
    setShowLoginModal(false);
  };

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    showLoginModal && (
      <div
        className="fixed inset-0 z-[100000] bg-zinc-900/20"
        onClick={closeModal}
      >
        <div className="container mx-auto flex h-full max-w-lg items-center">
          <div
            className="relative h-fit w-full rounded-lg bg-background-500 px-2 py-20"
            onClick={stopPropagation} // <-- stop the click event from bubbling up
          >
            <div
              className="absolute right-4 top-4"
              onClick={() => setShowLoginModal((prev) => !prev)}
            >
              <CloseModal height={4} width={4} />
            </div>
            <LogIn setShowLoginModal={setShowLoginModal} />
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
