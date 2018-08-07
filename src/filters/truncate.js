import t from "lodash.truncate";

export function truncate(string, length, omission = "...") {
  return t(string, { length, omission });
}
