import { useEffect } from "react";

export const SITE_URL = "https://davigomesflorencio.com.br";

const upsertTag = (
  tag: "meta" | "link",
  key: string,
  keyValue: string,
  attr: string,
  value: string,
) => {
  let el = document.head.querySelector(`${tag}[${key}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

export default function useSeo(title: string, description: string, path: string) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertTag("meta", "name", "description", "content", description);
    upsertTag("link", "rel", "canonical", "href", url);
    upsertTag("meta", "property", "og:title", "content", title);
    upsertTag("meta", "property", "og:description", "content", description);
    upsertTag("meta", "property", "og:url", "content", url);
  }, [title, description, path]);
}
