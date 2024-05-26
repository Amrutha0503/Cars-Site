import React from 'react'
import { Card } from 'react-bootstrap'
import { Data } from '../Data'
import '../styles/Cardstyle.css'
import { MdArrowDropDown } from "react-icons/md";
import '../styles/Carstyle.css'
import { FaFilter } from "react-icons/fa";
import { useState } from 'react';

export default function Cards() {
    const [item , setItems] = useState(Data)
    const [types , setType] = useState('')
    
    const cartypes = [{ id: '81', category: 'Hatchback' },
    { id: '82', category: 'Sedan' },
    { id: '83', category: 'SUV' },
    { id: '84', category: 'MUV' },
    { id: '85', category: 'Coupe' },
    { id: '86', category: 'Convertibles' },
    { id: '87', category: 'Pickup Trucks' }]
    const handlechange = (e) => {
        return setType(e.target.value)
    }
    const filterItems = (type) =>{
        const newItems = Data.filter((newVal)=>newVal.type===type)
        setItems(newItems)
    }
    const list = () => {
        return cartypes.map((t)=>t.category)
    }

    return (
        <div className='container'>
            <div className='search'>
                <div><FaFilter />   Select Category <MdArrowDropDown /></div>
                <input type='text' placeholder='company/model' onChange={handlechange}></input>
                <button onClick={()=>filterItems(types)}>Search</button>
            </div>
            <div className='row'>
                {item.map((car) => (
                    <div className='mheader col-lg-3 col-md-6 mb-4'>
                        <Card>
                            <Card.Header>
                                <div className='header d-flex justify-content-between'>
                                    <span>{car.date}</span>
                                    <a href='#'>Reviews {car.reviews}</a>
                                </div>
                            </Card.Header>
                            <Card.Body>

                                <div className='row mt-2'>
                                    <div className='carname'><strong>{car.carname}</strong></div>
                                    <div className='cartype'><strong>({car.type})</strong></div>
                                </div>
                                <img src={car.image} alt='img' />
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <strong>Mileage</strong><br />
                                        {car.mileage}
                                    </div>
                                    <div className='col-md-6'>
                                        <strong>Location</strong><br />
                                        {car.location}
                                    </div>
                                </div>
                                <div className='row mt-6'>
                                    <div className='col-md-6'>
                                        <strong>Engine</strong><br />
                                        {car.engine}
                                    </div>
                                    <div className='col-md-6'>
                                        <strong>Transimission</strong><br />
                                        {car.transmission}
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <p><strong>{car.price}</strong></p>
                                    </div>
                                    <div className='col-md-6'>
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
