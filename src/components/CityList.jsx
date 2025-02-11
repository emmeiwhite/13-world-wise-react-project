import CityItem from './CityItem'
import styles from './CityList.module.css'
import Message from './Message'
import Spinner from './Spinner'
const CityList = ({ loading, error, cities }) => {
  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  if (!cities?.length) return <Message message="Add your first city by clicking on the city map" />

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
