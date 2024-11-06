import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'

export default function CityList({ cities, isLoading }) {
  console.log(cities)

  if (isLoading) {
    return <Spinner />
  }

  if (!cities.length) {
    return <Message message="Click on the map to add your first city 🚀" />
  }

  return (
    <ul className={styles.cityList}>
      {cities?.map(city => {
        return (
          <CityItem
            key={city.id}
            city={city}
          />
        )
      })}
    </ul>
  )
}
