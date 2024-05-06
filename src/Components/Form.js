import React, { useState, useEffect } from 'react'
// import classes from './Form.module.css'

import Card from './Card'
import UI from './UI'

const Form = (props) => {
    let [formData, setFormData] = useState({
        productId: "",
        sellingPrice: "",
        productName: "",
        category: "food"
    })

    let [formIsValid, setFormIsValid] = useState(false)

    let [allFormData, setAllFormData] = useState([])

    // let productIdIsValid = formData.productId > 0 ? true : false
    // let sellingPriceIsValid = formData.sellingPrice > 0 ? true : false
    // let productNameIsValid = formData.productName.trim().length > 2 ? true : false
    // let categoryIsValid = formData.category.trim().length > 2 ? true : false

    useEffect(() => {
        const timerId = setTimeout(() => {
            setFormIsValid(
                formData.productId > 0 && formData.sellingPrice > 0 && formData.productName.trim().length > 2 && formData.category.trim().length > 2
            )
        }, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [ formData])

    const productIdChangeHandler = (e) => {
        setFormData(prevState => (
            {
                ...prevState, productId: e.target.value
            }
        ))
    }
    const sellingPriceChangeHandler = (e) => {
        setFormData((prevState) => (
            {
                ...prevState, sellingPrice: e.target.value
            }
        ))
    }
    const productNameChangeHandler = (e) => {
        setFormData((prevState) => (
            {
                ...prevState, productName: e.target.value
            }
        ))
    }
    const categoryChangeHandler = (e) => {
        // console.log(data)
        setFormData((prevState) => (
            {
                ...prevState, category: e.target.value
            }
        ))
    }

    const submitHander = (e) => {
        e.preventDefault()
        setAllFormData((prevState)=>([
            ...prevState, formData
        ]))
        setFormData({
            productId: "",
            sellingPrice: "",
            productName: "",
            category: "food"
        })
    }

    return (
        <Card >
            <form onSubmit={submitHander}>
                <div
                >
                    <label>Product Id</label>
                    <input
                        type="number"
                        value={formData.productId}
                        onChange={productIdChangeHandler}
                    />
                </div>
                <div
                >
                    <label>Selling Price</label>
                    <input
                        type="number"
                        value={formData.sellingPrice}
                        onChange={sellingPriceChangeHandler}
                    />
                </div>
                <div

                >
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={formData.productName}
                        onChange={productNameChangeHandler}
                    />
                    <br/>
                    <br/>
                    <label>Select Category
                    <select value={formData.category} onChange={categoryChangeHandler}>
                        <option value="food" >Food</option>
                        <option value="electronics" >Electronics</option>
                        <option value="skincare" >Skin Care</option>
                    </select>
                    </label>
                <button type="submit" 
                    disabled={!formIsValid}>Add Product</button>
                </div>
            </form>
            { <UI allFormData={allFormData}/>}
        </Card>
    )
}

export default Form