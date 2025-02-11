import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
const CityList = ({ loading, error, cities }) => {
  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  )
}
export default CityList
