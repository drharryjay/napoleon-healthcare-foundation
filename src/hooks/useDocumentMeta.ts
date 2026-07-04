import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultPageMeta, pageMeta } from "../lib/pageMeta";

export function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? defaultPageMeta;
    document.title = meta.title;
    const description = document.querySelector("meta[name='description']");
    description?.setAttribute("content", meta.description);
  }, [pathname]);
}
