import { useState } from 'react';
import { data } from "./data";
import './App.css';

function App() {

	const [wishes, setWishes] = useState(data);

	const removeWish = (id) => {
		let newWishes = wishes.filter(wish => wish.id !==id);
		setWishes(newWishes);
	}

	return (
	<div>
		<div className="container">
			<h1>My Whishlist for 2022-2023 ({ wishes.length } wishes)</h1>
		</div>
		{wishes.map((element=> {
			const { id, item, image } = element;
			return(<div key = { id }>
				<div className="container">
					<h2> {id} - {item}</h2>
				</div>

				<div className="container">
				<img src={ image } width="340" height="300" alt="wish" />
				</div>

				<div className="container">
					<button className="custom-btn btn-6" onClick={ ()=> removeWish(id) }> <span>REMOVE</span></button>
				</div>
			</div>
			)
		}))}
		<div className="container">
			<button className="custom-btn btn-6" onClick={()=>setWishes([])}> <span>DELETE ALL</span></button>
		</div>
	</div>
	);
}

export default App;
