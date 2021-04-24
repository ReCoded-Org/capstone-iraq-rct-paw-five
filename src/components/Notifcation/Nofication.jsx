import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DETAILS_ROUTE } from '../../routes'
import {updateCommentView} from '../../redux/comments/actions'

export default function Nofication() {
  const userState = useSelector(state => state.user)
  const { data } = useSelector(state => state.pets)
  const comments = useSelector(state => state.fetchComments)
  const notification = comments.filter(comment => comment.userId !== userState.user.uid  && comment.viewed !==true  )
  const fetchPets = data.filter(pet=>pet.uid === userState.user.uid  )
    const dispatch = useDispatch();
  const viewed = (e,id)=>{
    dispatch(updateCommentView(id))
  }

//   && comment.viewed !==true
  return (
    <div className="w-100 scrolll " style={{backgroundColor:'gray'}}>
      {notification
        ? notification.map(e => {
            
            return (
              <NavLink to={`${DETAILS_ROUTE}/${e.petId}`} className="notification-link"
              onClick={(ee)=>viewed(ee,e.id)}
              >
                  {fetchPets.find(pet => pet.id === e.petId)?
                <li className="p-2 rounded d-flex align-items-center">
                  {' '}
                 <p className="px-2" >{e.name} comment on  {' '}</p> 
                  <img
                    src={
                      data.find(pet => pet.id === e.petId)
                        ? data.find(pet => pet.id === e.petId).file
                        : 'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg'
                    }
                    width="40px"
                    height="40px" 
                    alt=""
                    className="float-right rounded"
                    style={{backgroundColor:'gray'}}
                  />{' '}

                  
                </li>
                :""}
                
              </NavLink>
            )
          })
        : ''}
      {/* </ul> */}
    </div>
  )
}
