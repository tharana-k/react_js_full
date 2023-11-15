import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteUser } from './Creadslice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export  const Creaddelete = () => {

 const navigate2 = useNavigate()
const dispatch = useDispatch();
const userList = useSelector((state) => state.users.data);
const {user} = useParams()
const viewdata = userList[user]
    console.log(viewdata)
  return (
    <div>
<h1>Are You sure you want to delete</h1>
<Button onClick={()=>navigate2(-1)}>cancel</Button>

<Button
                onClick={() =>{
                  dispatch(
                    deleteUser({
                      id:viewdata.id
                    })
                  )
                  navigate2("/")
                }
                }
              >
                Delete User
              </Button>

    </div>
  )
}

