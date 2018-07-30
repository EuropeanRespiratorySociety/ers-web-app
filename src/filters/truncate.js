import * as _ from "lodash/truncate";

export default function truncate(string, length, separator = "...") {
  return _(string, { length, separator });
}
