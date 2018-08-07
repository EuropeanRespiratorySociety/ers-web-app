import _slugify from "@sindresorhus/slugify";

export function slugify(string) {
  return typeof string === "string"
    ? _slugify(string)
    : _slugify(String(string));
}
