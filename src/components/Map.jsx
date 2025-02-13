import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const latitude = searchParams.get('lat')
  const longitude = searchParams.get('lng')
  return (
    <div className={styles.mapContainer}>
      <h1>Position Details:</h1>

      <h3>
        Latitude: <strong>{latitude}</strong>
      </h3>

      <h3>
        Longitude: <strong>{longitude}</strong>
      </h3>
    </div>
  )
}
export default Map
