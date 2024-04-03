"use client";
import ClearButton from "@/components/ClearButton";
import DecrementButton from "@/components/DecrementButton";
import IncrementButton from "@/components/IncrementButton";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 p-24">
      <h1 className="text-2xl capitalize font-semibold">
        Persist redux to local storage
      </h1>
      <p>Simple counter</p>
      <div className="flex flex-row space-x-6 justify-center items-center">
        <IncrementButton />
        <span className="text-2xl font-semibold w-10 text-center">{count}</span>
        <DecrementButton />
      </div>
      <ClearButton />
    </main>
  );
}
