"use client";
import React, { useEffect, useState } from "react";
import {
  LoomCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/loomui/Card";

const ClientOnlyCard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <LoomCard>
      <CardHeader>
        <CardTitle>LoomUI NewsLetter</CardTitle>
        <CardDescription>Stay ahead of 99% developers</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Subscribe to our newsletter for the latest updates</p>
        <input placeholder="Subscribe to us !!" name="email" />
      </CardContent>
      <CardFooter className="text-muted-foreground">
        See you on the other side.
      </CardFooter>
    </LoomCard>
  );
};

export default ClientOnlyCard;
