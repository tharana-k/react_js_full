import React from 'react'
import Props_no_destructure2 from './Props_no_destructure2'
import { useState } from 'react'

const Props_no_destructure1 = () => {
    const [arrobj1, setarrobj1] = useState([{name:"harsha",place:"bnglr"},{name:"dany",place:"cochin"},{name:"anu",place:"goa"}])
const a ="hai";

  return (
    <div>
<Props_no_destructure2  arrobj1={arrobj1}  val={a} />

    </div>
  )
}

export default Props_no_destructure1