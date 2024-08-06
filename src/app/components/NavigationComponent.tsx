import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const NavigationComponent = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-between items-center h-[10vh] px-8 border-b-[1px]">
      <Link
        href={"/dashboard"}
        className="text-xl font-extrabold text-blue-700"
      >
        Invoicer
      </Link>
      <div className="flex items-center gap-5">
        {/*-- if user is signed out --*/}
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        {/*-- if user is signed in --*/}
        <SignedIn>
          <Link href="/dashboard" className="">
            Dashboard
          </Link>
          <UserButton showName />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavigationComponent;
