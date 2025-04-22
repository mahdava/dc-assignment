"use client";

import { SharedFilesystemForm } from "@/components/organisms/SharedFilesystemForm";

export default function Home() {
  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Filesystem forms</h1>
      <SharedFilesystemForm />
    </main>
  );
}
