import { ViewTransition } from "react";

/**
 * Remounts on navigation — pairs with ViewTransition so main content
 * crossfades while header/footer (layout) stay put.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <ViewTransition default="page-fade">{children}</ViewTransition>;
}
