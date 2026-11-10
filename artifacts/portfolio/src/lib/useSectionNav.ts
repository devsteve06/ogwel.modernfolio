import type { MouseEvent } from "react";
import { useCallback } from "react";
import { useLocation } from "wouter";

/**
 * Builds click handlers for section links that scroll to a section without
 * adding a `#hash` to the URL. When a section lives on the home page and the
 * visitor is on another route (for example `/cv`), it navigates home first and
 * scrolls once the page has rendered.
 */
export function useSectionNav() {
  const [location, navigate] = useLocation();

  return useCallback(
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();

      const scroll = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (location === "/") {
        scroll();
        // Drop any hash left over from an older link.
        if (window.location.hash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`,
          );
        }
      } else {
        navigate("/");
        requestAnimationFrame(() => requestAnimationFrame(scroll));
      }
    },
    [location, navigate],
  );
}
