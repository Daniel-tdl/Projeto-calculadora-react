import React , { Component } from 'react'
import './Calculator.css'

import Button from '../components/Buttun'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMenmory = this.clearMenmory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }

    clearMenmory() {
       console.log('Limpar') 
    }

    setOperation(operation) {
        console.log(operation) 
    }

    addDigito(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100} /> 
                <Button label="AC"  click={this.clearMenmory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigito} />
                <Button label="8" click={this.addDigito}/>
                <Button label="9" click={this.addDigito}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito}/>
                <Button label="3" click={this.addDigito}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigito} double/>
                <Button label="." click={this.addDigito}/>
                <Button label="=" click={this.setOperation} operation/>                
            </div> 
        )
    }
}