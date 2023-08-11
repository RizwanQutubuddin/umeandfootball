import Image from "next/image";
import Input from "./components/Input";
import Label from "./components/Label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Label className="font-bold">John</Label>
    </main>
  );
}
