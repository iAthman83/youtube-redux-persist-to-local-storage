"use client";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { clearCount } from "@/store/features/counterSlice";
import { useAppSelector } from "@/store/hooks";

const ClearButton = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  return (
    <button
      disabled={count === 0}
      onClick={() => dispatch(clearCount())}
      className="bg-red-400 hover:bg-red-300 py-2 px-6 rounded-md flex flex-row space-x-2 justify-center items-center"
    >
      <Trash2 className="h-4 w-4" /> <span>Clear</span>
    </button>
  );
};

export default ClearButton;
