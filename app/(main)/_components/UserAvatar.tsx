"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

type Props = {};

export default function UserAvatar({}: Props) {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}
