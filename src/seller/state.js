import {  atom ,  selector  , useRecoilState } from "recoil";

const selected = atom({
    key: "selected", // unique ID (with respect to other atoms/selectors)
    default: "dashboard", // default value (aka initial value)
  });

  const getselected = selector ({
      key : "selectedSelector",
      get : ({get}) =>{
             const x = get(selected); 
            return  x;
      },
  })

const useSelected = () => {
      const [value , setValue] = useRecoilState(selected);
      return [value  , setValue];
} 



  export { selected , getselected  , useSelected };