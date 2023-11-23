"use client";

import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1"
    >
      Volver
    </button>
  );
};

export default BackButton;
