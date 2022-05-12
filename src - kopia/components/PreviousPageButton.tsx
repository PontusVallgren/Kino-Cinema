import React from "react";
import { useRouter } from "next/router";
import { PreviousPageBtn } from "./CustomMUI/CustomUI";

const PreviousPageButton: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <PreviousPageBtn onClick={() => router.back()}></PreviousPageBtn>
    </>
  );
};

export default PreviousPageButton;
