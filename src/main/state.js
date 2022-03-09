import {  atom ,  selector  } from "recoil";

const loader = atom({
    key: "isLoading", // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

  const getLoader = selector ({
      key : "isLoadingSelector",
      get : ({get}) =>{
             const x = get(loader); 
            return  x;
      },
  })

  export { loader , getLoader  };