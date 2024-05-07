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

    const deleteHandler = (id,cat) => {
        localStorage.removeItem(id.toString())
        let parent
        switch (cat){
            case 'food':  parent=document.getElementById('food')
            break
            case 'electronics':  parent=document.getElementById('electronics')
            break
            case 'skincare':  parent=document.getElementById('skincare')
            break
        }
        let childToRemove = document.getElementById(id);
        parent.removeChild(childToRemove);
    }
    
    foodData= foodData.length===0 ? [] : foodData
    electronicsData= electronicsData.length===0 ? [] : electronicsData
    skincareData= skincareData.length===0 ? [] : skincareData

    return (
        <Card>
            <ul id="food">Food
                {foodData.map((formData) => (
                    <li id={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                        <button onClick={() => deleteHandler(formData.productId, formData.category)}>Delete</button>
                    </li>
                ))
                }
            </ul>
            <ul id="electronics">Electronics
                {electronicsData.map((formData) => (
                    <li id={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                        <button onClick={() => deleteHandler(formData.productId, formData.category)}>Delete</button>
                    </li>
                ))
                }
            </ul>
            <ul id="skincare">Skincare
                {skincareData.map((formData) => (
                    <li id={formData.productId}>
                        {formData.sellingPrice} {formData.productName} {formData.category}
                        <button onClick={() => deleteHandler(formData.productId, formData.category)}>Delete</button>
                    </li>
                ))
                }
            </ul>
        </Card>
    )
}




export default UI