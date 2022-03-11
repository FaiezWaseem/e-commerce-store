import React from "react";
import {  atom , useRecoilState } from "recoil";
const totalItems = atom({
    key: "totalItem", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

const useCart =() =>{
  const [items , setItems] = useRecoilState(totalItems);
  const [item  , setItem] = React.useState(null);
  const [removeItem  , setRemoveItem] = React.useState(null);
  
   React.useEffect(()=>{
     if(item){
      const index = items.findIndex((listItem) => listItem.id === item.id);
      const exists = items.find((i) => i.id === item.id)
      if(exists){
          const newList = replaceItemAtIndex(items, index, item);
            setItems(newList);
      }else{
          setItems((old)=> [
              ...old,
              item
          ])
      }
     }
   },[item])

   React.useEffect(()=>{
    if(removeItem){
      const index = items.findIndex((listItem) => listItem.id === removeItem);
      const newList = removeItemAtIndex(items, index);
      setItems(newList);
    }
   },[removeItem])

  return [  setItem ,  setRemoveItem];
}


export { useCart } 
export default totalItems;