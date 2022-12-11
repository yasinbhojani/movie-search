import React from "react";

const LoadingContext = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoadingContext;
