"use client";

import { X } from "lucide-react";

type CloseModalProps = {
  height: number;
  width: number;
};

const CloseModal = ({ height, width }: CloseModalProps) => {
  return (
    <>
      <button aria-label="close modal">
        <X className={`h-${height} w-${width}`}></X>
      </button>
    </>
  );
};

export default CloseModal;
