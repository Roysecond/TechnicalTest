import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <CreditCard className="text-primary size-20" />
      <h1 className="text-primary text-4xl font-bold">Welcome to kasbon app</h1>
      <Link href="/dashboard">
        <Button className="mt-2 bg-primary" size="lg">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
