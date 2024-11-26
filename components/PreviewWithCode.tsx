import React from "react";

import { TabsList, TabsTrigger, TabsContent } from "./tabs";

import { Tabs } from "fumadocs-ui/components/tabs";
export const PreviewWithCode = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};
type PreviewProps = {
  children: Readonly<React.ReactNode>;
  toPreview?: string;
  className?: string;
};
export const Preview = ({
  children,
  toPreview = "preview",
  className,
}: PreviewProps) => {
  return (
    <TabsContent value={toPreview} className={className}>
      <div className="min-h-80 w-full border border-secondary rounded-md flex flex-col items-center justify-center overflow-auto">
        {children}
      </div>
    </TabsContent>
  );
};
