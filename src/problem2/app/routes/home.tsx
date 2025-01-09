import { FancyForm } from "@/components/FancyForm";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exchange currency" },
    { name: "description", content: "Welcome to Fancy Page!" },
  ];
}

export default function Home() {
  return <FancyForm />;
}
