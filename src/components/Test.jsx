import CityList from "./CityList";


const Test = () => {

  const isLoading = false;
  const cities = { 
    id : "001",
    city :"bengaluru"}


  return (
    <div>
      <CityList isLoading={isLoading} cities={cities}/>
    </div>
  )
}

export default Test
