export const If = ({ condition, children }) => condition ? children : null;
export const Else = ({ condition, children }) => condition ? null : children;
export const IsObjectEmpty = (object) => !!Object.keys(object).length;