import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="m-10">
        <h1 className="text-3xl mb-10">Hello Button</h1>
        <div>
          <Button>Button</Button>
        </div>
        <div className="border-t-2 mt-10">
          <Link href="/">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
