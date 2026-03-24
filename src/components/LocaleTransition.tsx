"use client";

import { ReactNode } from "react";

// Text scramble handles the animation — no container transition needed
export default function LocaleTransition({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
