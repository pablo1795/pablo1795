"use client";
import { NavbarModal } from "@/components/customized";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function MainTemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="bg-stone-900 text-stone-800 dark:text-stone-200 min-h-screen">
        <NavbarModal />

        {children}
      </div>
    </ThemeProvider>
  );
}
