import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="m-10">
        <h1 className="text-3xl mb-10">Hello Switch</h1>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <div className="border-t-2 mt-10">
          <Link href="/">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
