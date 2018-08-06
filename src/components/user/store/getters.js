export const user = state => state.data;
export const permissions = state => state.permissions;

export const name = state => {
  const { Title, FirstName, LastName } = state.data;
  return Title || FirstName || LastName
    ? [Title, FirstName, LastName].filter(i => i !== undefined).join(" ")
    : false;
};

export const street = state => {
  const { MainStreet1, MainStreet2, MainStreet3, MainStreet4 } = state.data;
  return MainStreet1 || MainStreet2 || MainStreet3 || MainStreet4
    ? [MainStreet1, MainStreet2, MainStreet3, MainStreet4]
        .filter(i => i !== undefined)
        .join(", ")
    : "";
};

export const interestsDiseases = state => {
  return state.interests.reduce((a, c) => {
    if (c.title === "diseases") {
      a.push(c.values);
    }
    return a;
  }, [])[0];
};

export const interestsMethods = state => {
  return state.interests.reduce((a, c) => {
    if (c.title === "methods") {
      a.push(c.values);
    }
    return a;
  }, [])[0];
};
