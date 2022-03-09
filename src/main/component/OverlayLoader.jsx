import React from 'react'
import Spinner from 'react-spinner-material';
import { useRecoilState } from "recoil";
import {loader} from "../state"
export default function OverlayLoader() {
  const [show ] = useRecoilState(loader);
  return (
    <div >
        {
            show ? <div  className='overlay' >
            <Spinner size={120} spinnercolor={"#ffffff"} spinnerWidth={2} visible={show} />
          </div> : <></>
        }
        
    </div>
  )
}
