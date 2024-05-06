import React from 'react'
import Card from './Card'

const UI = (props) => {

    let foodData=props.allFormData.filter((formData) => {
        localStorage.setItem(formData.productId.toString(),JSON.stringify(formData))
        return formData.category === "food"
    })
    let electronicsData=props.allFormData.filter((formData) => {
        localStorage.setItem(formData.productId.toString(),JSON.stringify(formData))
        return formData.category === "electronics"
    })
    let skincareData=props.allFormData.filter((formData) => {
        localStorage.setItem(formData.productId.toString(),JSON.stringify(formData))
        return formData.category === "skincare"
    })
    
    foodData= foodData.length===0 ? [] : foodData
    electronicsData= electronicsData.length===0 ? [] : electronicsData
    skincareData= skincareData.length===0 ? [] : skincareData

    return (
        <Card>
            <ul id="food">Food
                {foodData.map((formData) => (
                    <li key={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                    </li>
                ))
                }
            </ul>
            <ul id="electronics">Electronics
                {electronicsData.map((formData) => (
                    <li key={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                    </li>
                ))
                }
            </ul>
            <ul id="skincare">Skincare
                {skincareData.map((formData) => (
                    <li key={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                    </li>
                ))
                }
            </ul>
        </Card>
    )
}




export default UI