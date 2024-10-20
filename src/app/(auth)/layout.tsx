import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pantryo - Discover & Share Delicious Recipes",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
