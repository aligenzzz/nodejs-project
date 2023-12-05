import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import '../site.css'
import Animal from '../components/Animal'

const AnimalList = observer(() => {
    const {list} = useContext(Context)
    return (
        <div className='gridContainer'>
            {list.animals.map(animal => (
                <Animal key={animal.id} animal={animal}/>
            ))}
        </div>
    )
})

export default AnimalList