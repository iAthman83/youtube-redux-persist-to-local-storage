"use client";
import { MoveDown } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { decrement } from "@/store/features/counterSlice";
import { useAppSelector } from "@/store/hooks";

const DecrementButton = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  return (
    <button
      disabled={count === 0}
      onClick={() => dispatch(decrement())}
      className="bg-yellow-400 py-2 px-6 rounded-md flex flex-row space-x-2 justify-center items-center hover:bg-yellow-300"
    >
      <MoveDown className="h-4 w-4" /> <span>Decrement</span>
    </button>
  );
};

export default DecrementButton;
