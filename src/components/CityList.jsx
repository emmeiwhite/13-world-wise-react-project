import styles from './CityList.module.css'

export default function CityList({ cities, isLoading }) {
  console.log(cities)

  if (isLoading) {
    return <p>Loading ...</p>
  }
  return (
    <ul className={styles.cityList}>
      {cities?.map(city => {
        return (
          <li key={city.id}>
            <p>{city.cityName}</p>
          </li>
        )
      })}
    </ul>
  )
}
