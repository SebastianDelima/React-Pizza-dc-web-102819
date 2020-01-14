import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={props.changeToping} className="form-control"  placeholder="Pizza Topping"
            value={props.toping}
              />
        </div>
        <div className="col">
          <select onChange={props.changeSize} value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian"  onClick={props.bringTheMeat} value="Vegetarian" checked={props.vegetarian === "true" ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" onClick={props.bringTheMeat} value="Not Vegetarian" checked={props.vegetarian === "false" ? true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success"  
          data-vegetarian={props.vegetarian} 
          data-size={props.size} 
          data-toping={props.toping}
          data-id={props.id} onClick={props.updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
