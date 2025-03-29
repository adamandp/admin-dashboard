"use client";

import { useSidebar } from "../shadcn/sidebar";

export const SiteMain = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useSidebar();
  return (
    <main
      className="px-c-11 py-c-9 h-full"
      onClick={() => setOpen(false)}
    >
      <div>{children}</div>
    </main>
  );
};
