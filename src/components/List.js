import React, { Component } from 'react'

class List extends Component{
    constructor(props){
        super()
        this.state = {}
    }
    render(){
        const fruitArray = this.props.yoFruits.map((fruitItem, index) => {
            return <li className="box" key={index}>{fruitItem}</li>
        })
        
     
        return(
            <div>
                <ul>
                    {fruitArray}
                </ul>
            </div>
        )
    }
}
export default List