import React, { useState } from "react";
import LoadingContext from "./loading-context";

const LoadingContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  return(
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading, 
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider;