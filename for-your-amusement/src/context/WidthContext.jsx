import { createContext, useState, useEffect } from 'react';

export const WidthContext = createContext();

export function WidthProvider({ children }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((prev) => (prev = document.documentElement.clientWidth));
  }, [width]);

  return (
    <WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>
  );
}
