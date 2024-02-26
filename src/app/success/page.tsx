import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="h-80 w-full flex flex-col justify-center items-center gap-2">
      <CheckCircle2 size={100} className="text-green-500" />
      <h1>Success</h1>
      <Link href={"/"} className="text-green-500 underline">
        Back to Home
      </Link>
    </div>
  );
}
