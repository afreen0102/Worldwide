import styles from "./Map.module.css"
import { useSearchParams, useNavigate } from "react-router-dom"


const Map = () => {

  const [ searchParams ] = useSearchParams();

  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // console.log(lat);
  // console.log(lng);

  return (
    <div className={styles.mapContainer} onClick={() => { navigate("form")}}>
      Map , positions: {lat}, {lng}
    </div>
  )
}

export default Map
