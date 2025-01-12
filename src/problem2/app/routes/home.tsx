import { FancyForm } from "@/components/FancyForm";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exchange currency" },
    { name: "description", content: "Welcome to Fancy Page!" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-xl w-full">
        <FancyForm />
      </div>
    </div>
  );
}
