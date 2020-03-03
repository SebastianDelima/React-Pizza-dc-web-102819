import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      toping: "",
      size: "",
      id: 0,
      vegetarian: false
    }
  }

  changeToping = (e) => {
     this.setState({
       toping: e.currentTarget.value
     })
  }

  changeSize = (e) => {
    this.setState({
      size: e.currentTarget.value
    })
 }

 bringTheMeat = (e) => {
   let val = ''
   if(e.currentTarget.value === "Vegetarian"){val = true}else{val = false}
  this.setState({
    vegetarian: val
  })
}

  setPizza = (e) => {
    this.setState({
      toping: e.currentTarget.dataset.toping,
      size: e.currentTarget.dataset.size,
      id: e.currentTarget.id,
      vegetarian: e.currentTarget.dataset.vegetarian
    })
  }

  update = () => {
    this.setState({
      update: "yes"
    })
  }

  updatePizza = (e) => {
    let veggies = ''
    if(e.currentTarget.dataset.vegetarian === "true"){veggies = true}else{veggies = false}
    let pizzs = this.state.pizzas
    let id    = e.currentTarget.dataset.id
    let objectConfig = {
      method: 'PATCH',
      headers: {
       'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        topping: e.currentTarget.dataset.toping,
        size:  e.currentTarget.dataset.size,
        vegetarian: veggies
      }))
    }
    fetch(`http://127.0.0.1:3000/pizzas/${id}`, objectConfig)
    .then(res => res.json())
    .then(data => {
      let index = pizzs.findIndex(item => 
        item.id === parseInt(id))
       pizzs.splice(index, 1, data)
      this.setState({
      pizzas: pizzs
    })})
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => 
      this.setState({
        pizzas: pizzas
      })
      )
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        changeToping={this.changeToping} 
        changeSize={this.changeSize}
        bringTheMeat={this.bringTheMeat}
        updatePizza={this.updatePizza} 
        toping={this.state.toping} 
        size={this.state.size} 
        id={this.state.id}
        vegetarian={this.state.vegetarian}
        />

        <PizzaList pizzas={this.state.pizzas} setPizza={this.setPizza}/>
      </Fragment>
    );
  }
}

export default App;
