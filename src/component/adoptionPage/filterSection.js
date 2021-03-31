import React from 'react'
import {Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {TopSection2} from './topSection2'
import Select from './select'
import {FilterPets} from '../../redux/actions/pets'

function FilterSection(){
    const {data,filters} = useSelector(state => state.pets)
    const dispatch = useDispatch()

const selections={
    'Gender':['Male','Female'],
    'Age':['< 3 months','> 3 months'],
    'Address':['Mosul','Baghdad']
}

return (<>

<Col className="col-12 p-0 position-relative">
<TopSection2 className=""/>
<div className="w-100 px-lg-5 position-absolute top-50 d-flex flex-wrap align-self-center justify-content-around align-items-center" style={{height:'6rem'}}>

{Object.keys(selections).map((key)=>
 <Select title={key} options={selections[key]}/>
)}

<button type="button" className="py-2 px-4 rounded btn_width bg-white font-weight-bold" 
onClick={()=>{dispatch(FilterPets(data,filters))}}>

<i className="fa fa-search pr-3 text-warning" aria-hidden="true"/>

Find A Pet</button>
</div>
</Col>





</>)
}

export default FilterSection