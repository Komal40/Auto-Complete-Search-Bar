import React, { useState } from 'react'
import './SearchBar.css'
import {FcSearch} from 'react-icons/fc'
import {BsMicFill} from 'react-icons/bs'
import axios from 'axios'

export default function SearchBar({setResult}) {

    const [user, setUser] = useState('')

    function handleChange(value){
        setUser(value)
        setSearch(value)
    }

    function setSearch(value){
        
        axios.get('http://cdn-api.co-vin.in/api/v2/admin/location/states ')
        .then((data)=>(data.data.states))
        // .then(res=>console.log(res))
        .then((res) => {
            const name = res.filter((val)=>{
                return value && val && val.state_name && val.state_name.toLowerCase().includes(value)
            })
            setResult(name)
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='search-bar'>
    <FcSearch id='search-input'/>
    <input id='write-input' placeholder='Search Here...'
        value={user}
        onChange={(e)=>handleChange(e.target.value)}
    />
    <BsMicFill id='mic-btn'/>
    </div>
  )
}



