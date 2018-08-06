export const text = state =>
  state.type === "content"
    ? state.text.replace(/<h3>&nbsp; {.clearfix}<\/h3>/g, "")
    : state.title;
