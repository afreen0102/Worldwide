import styles from "./Map.module.css"
import { useSearchParams } from "react-router-dom"


const Map = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // console.log(lat);
  // console.log(lng);

  return (
    <div className={styles.mapContainer}>
      Map , positions: {lat}, {lng}
    </div>
  )
}

export default Map
