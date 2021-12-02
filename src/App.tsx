import React from "react";
import './App.css';
import Regster from "./addd";
class App extends React.Component {

	// Constructor
	constructor(props: any) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

  saveCar=async ()=>{
    alert("sucess");
  }

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://localhost:44377/api/Car")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } :any= this.state;
		if (!DataisLoaded) return <div>
			<h1>Loading..!</h1> </div> ;

		return (
		<div className = "App">
			<h1> Car details</h1> {
				items.map((item:any) => (
				<ol key = { item.id } >
				Id: { item.id },
					CarName: { item.name },
					Car_Price: { item.price }
					</ol>
				)
        
        
        )
			}
      <div>
        <Regster/>
      </div>
		</div>
    
	);
}
}

export default App;
