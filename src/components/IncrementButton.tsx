"use client";
import { MoveUp } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { increment } from "@/store/features/counterSlice";

const IncrementButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(increment())}
      className="bg-green-400 hover:bg-green-300 py-2 px-6 rounded-md flex flex-row space-x-2 justify-center items-center"
    >
      <MoveUp className="h-4 w-4" /> <span>Increment</span>
    </button>
  );
};

export default IncrementButton;
