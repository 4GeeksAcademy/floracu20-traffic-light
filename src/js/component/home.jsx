import React, {useState} from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [purpleLight, setPurpleLight] = useState(false);

	const addPurpleLight = () => {
		setPurpleLight(true);
	};

	const lightClick = (lightColor) => {
		setColor(lightColor);
	};

	return (
		<>
		<div id="top" className="d-flex flex-column align-items-center bg-dark" style={{width: "20px", height: "60px", boxShadow: "rgba(170, 164, 164, 0.853) 5px 9px 6px 3px"}} >
		</div>
		<div id="lights" className="d-flex flex-column align-items-center p-3 bg-dark" style={{width: "130px", borderRadius: "15px", boxShadow: "rgba(170, 164, 164, 0.855) 4px 3px 6px 3px"}}>
			<div className={`red light ${color === "red" ? "selected" : ""} rounded-circle`} style={{width: "100px", height: "100px"}} onClick={()=> setColor("red")}>
			</div>
			<div className={`yellow light ${color === "yellow" ? "selected" : ""} rounded-circle`} style={{width: "100px", height: "100px"}} onClick={()=> setColor("yellow")}>
			</div>
			<div className={`green light ${color === "green" ? "selected" : ""} rounded-circle`} style={{width: "100px", height: "100px"}} onClick={()=> setColor("green")}>
			</div>
			{purpleLight && (
					<div className={`purple light ${color === "purple" ? "selected" : ""} rounded-circle`} style={{width: "100px", height: "100px" }} onClick={() => lightClick("purple")}></div>
			)}
		</div>
		<div id="buttons" className="d-flex flex-column p-3" style={{flexWrap: "wrap"}}>
			<button className="btn btn-danger" onClick={()=> setColor("red")}>Change to red</button>
			<button className="btn btn-warning" onClick={()=> setColor("yellow")}>Change to yellow</button>
			<button className="btn btn-success" onClick={()=> setColor("green")}>Change to green</button>
			<button className="btn btn-primary" onClick={addPurpleLight}>Add purple light!</button>
			{purpleLight && (
				<button className="btn btn-primary" style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>Change to purple</button>
			)}
		</div>
		</>
	);
};

export default Home;
