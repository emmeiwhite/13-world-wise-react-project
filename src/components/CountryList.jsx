import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'

export default function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />
  }

  if (!cities.length) {
    return <Message message="Click on the map to add your first city 🚀" />
  }

  let countriesMap = new Map()

  cities.forEach(city => {
    if (!countriesMap.has(city.country)) {
      // We are making our Map
      countriesMap.set(city.country, city)
    }
  })

  console.log(countriesMap)
  let uniqueCountries = Array.from(countriesMap.values)
  console.log(uniqueCountries)

  return (
    <ul className={styles.countryList}>
      {uniqueCountries?.map(city => {
        return (
          <CountryItem
            key={city.id}
            city={city}
          />
        )
      })}
    </ul>
  )
}
