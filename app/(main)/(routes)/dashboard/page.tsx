"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  const user = useUser();
  console.log(user);

  return <div>Hello, {user.user?.firstName}</div>;
};

export default DashboardPage;
