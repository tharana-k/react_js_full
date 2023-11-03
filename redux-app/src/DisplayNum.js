import React from 'react'
import{ useDispatch, useSelector } from "react-redux"
import { printnums } from './PrintNumslice'

export function DisplayNum() {
const display = useSelector((state)=>state.print.num)
const dispatch = useDispatch()

  return (
    <div>
<button onClick={()=>dispatch(printnums())}>Print </button>
<h1>{display}</h1>

    </div>
  )
}

