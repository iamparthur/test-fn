

import React, { Component } from 'react'

export class UserCreate extends Component {
    state = {
        name: ''
    }

   handlenameChange = e => {
        const name = e.target.value;

        this.setState({name})
   }

   handleUserCreate = () => {
       const {name} = this.state
    fetch('http://localhost:3000/users', {
        method: 'POST',
         body: JSON.stringify({name}),
        headers: {
            'Content-Type': 'application/json'
        }
        })
    .then(() => {alert('Пользователь создан');
    this.setState({name: ''})
})
   }

    render() {
        const {name} = this.state
        return (
            <div>
              <input onChange={this.handlenameChange} type="text" name="name" value={name}/><br/>
              <input onClick={this.handleUserCreate} type="button" value="create" disabled={!name.length}/>
            </div>
        )
    }
}

