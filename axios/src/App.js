import React, { Component } from 'react'
import './App.css'
import GetRequest from './Components/GetRequest'
import PostRequest from './Components/PostRequest'

class App extends Component {
	render() {
		return (
			<div className="App">
         <PostRequest />
				<GetRequest />

			</div>
		)
	}
}

export default App