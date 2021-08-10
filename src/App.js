import React, { useState } from 'react';
import './App.css';

function App() {

const [count, setCount] = useState(0)

	return (
		<div className="app">
			<div className="button-wrapper">
				<h1>Count App</h1>
				<h1>{count}</h1>
				<button className="btn" onClick={()=>setCount(count-1)}>-</button>
				<button className="btn" onClick={()=>setCount(count+1)}>+</button>
			</div>
		</div>
	);
}

export default App;
