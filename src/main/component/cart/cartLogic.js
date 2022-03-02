import {  atom } from "recoil";
const totalItems = atom({
    key: "totalItem", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

function  set(items , item , setItems){

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
function remove(items , item  ,setItems){
    const index = items.findIndex((listItem) => listItem.id === item);
    const newList = removeItemAtIndex(items, index);
    setItems(newList);
}
function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

export {  set , remove } 
 export default totalItems;