import { useEffect, useState } from "react";
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home";

const Main = () => {

  const [trip,setTrip] = useState([])
  const [search,setSearch] = useState("")

  const getTourism = async() =>{
    const url = 'https://tourist-attraction.p.rapidapi.com/search';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '9f25642618mshcd452cfdb0dac25p17ae62jsn31858a325da9',
		'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
	},
	body: new URLSearchParams({
		location_id: '45963',
		language: 'en_US',
		currency: 'USD',
		offset: '0'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setTrip(result?.results?.data);
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
     getTourism()
  },[])

  return (
    <div>
      <Navbar/>
      <Menubar setSearch={setSearch}/>
      <Home trip={trip} search={search}/>
    </div>
  )
}

export default Main
