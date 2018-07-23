export const text = state =>
  state.text.replace(/<h3>&nbsp; {.clearfix}<\/h3>/g, "");
