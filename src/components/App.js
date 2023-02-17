import React, { useState } from "react";
import Nav from "./Nav";
import HogTilesList from "./HogTilesList"
import Filter from "./Filter"


import hogs from "../porkers_data";

function App() {
	const [greasedFilter, setGreasedFilter] = useState(false)
	const [hogsByName, setHogsByName] = useState(hogs)
	
	// let sortHogsByName = hogsByName.sort((a, b) => {
	//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
	//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
	//   if (nameA < nameB) {
	// 	return -1;
	//   }
	//   if (nameA > nameB) {
	// 	return 1;
	//   }
	//   // names must be equal
	//   return 0;
	// })


	// console.log("sort hogs", sortHogsByName)

	const handleGreaseFilter = () => setGreasedFilter(!greasedFilter)

	const handleSortChange = (value) => {
		if(value === 'Name'){
			let sortHogsByName = [...hogsByName]
			sortHogsByName.sort((a, b) => {
				const nameA = a.name.toUpperCase(); // ignore upper and lowercase
				const nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (nameA < nameB) {
				  return -1;
				}
				if (nameA > nameB) {
				  return 1;
				}
				// names must be equal
				return 0;
			  })
			return setHogsByName(sortHogsByName)
		} else if (value === 'Weight'){
			 let sortHogsByWeight = [...hogsByName]
			 sortHogsByWeight.sort((a,b) =>{
				const weightA = a.weight
				const weightB = b.weight
				if (weightA < weightB) {
					return 1;
				}
				if (weightA > weightB) {
					return -1;
				}
				return 0;
			 })
			 console.log("hogs by weight", sortHogsByWeight)
			 return setHogsByName(sortHogsByWeight)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter 
				greasedFilter={greasedFilter} 
				handleGreaseFilter={handleGreaseFilter} 
				hogsByName={hogsByName} 
				handleSortChange={handleSortChange}
			/>
			<HogTilesList 
				hogs={hogsByName} 
				greasedFilter={greasedFilter} 
			/>
		</div>
	);
}

export default App;
