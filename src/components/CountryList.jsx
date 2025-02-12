import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Message from './Message'
import Spinner from './Spinner'

const CountryList = ({ loading, error, cities }) => {
  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  if (!cities?.length) return <Message message="Add your first city by clicking on the city map" />

  // Let's derive countries from the cities:

  const uniqueCountries = cities.reduce((acc, city) => {
    if (!acc.has(city.country)) {
      acc.set(city.country, {
        country: city.country,
        emoji: city.emoji,
        id: city.id
      })
    }

    return acc
  }, new Map())

  console.log(uniqueCountries)
  // Converting the Map to an Array
  const resultCountries = Array.from(uniqueCountries.values())

  return (
    <ul className={styles.countryList}>
      {resultCountries.map(country => (
        <CountryItem
          country={country}
          key={country.id}
        />
      ))}
    </ul>
  )
}
export default CountryList
