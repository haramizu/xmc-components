import { ModeToggle } from "@/components/mode";
import Image from "next/image";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full h-16 border-b border-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-gray-500 flex item-center">
        <div className="flex justify-between items-center w-full">
          <div className="ml-5">
            <Image
              src="/logo/XMCloud-logo-color.png"
              alt="XM Cloud"
              height="50"
              width="40"
            />
          </div>
          <div className="mr-5">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
