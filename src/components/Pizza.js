import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? 'yes' : "no"}</td>
      <td><button 
          type="button" 
          className="btn btn-primary" 
          data-vegetarian={props.pizza.vegetarian} 
          data-size={props.pizza.size} 
          data-toping={props.pizza.topping}
          id={props.pizza.id} 
          onClick={props.setPizza}>Edit Pizza</button ></td>
    </tr>
  )
}

export default Pizza
