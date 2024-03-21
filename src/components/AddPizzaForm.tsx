import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import './styles.css'

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] = 
     useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >> ', e.target)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log('handle change >> ', e.target)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input 
                name="price"
                type="text"
                placeholder="Sale"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input 
                name="img"
                type="text"
                placeholder="Image"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">
                + Add in menu
            </button>
        </form>
    )
}

export default AddPizzaForm