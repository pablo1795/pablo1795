"use client";
import { NavbarModal } from "@/components/customized";

export default function MainTemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stone-300 p-1"> 
      <NavbarModal stylesButton="sticky top-1 left-full print:hidden" />

      {children}
    </div>
  );
}
