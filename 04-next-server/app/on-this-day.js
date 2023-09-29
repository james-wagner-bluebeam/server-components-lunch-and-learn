export default async function OnThisDay(props) {
  console.log(`${props.month + 1}/${props.day}`)
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/${props.month + 1}/${props.day}`)
  const data = await response.json()

  return (
    <ul>
      {
        data.births.map(birth => <li key={birth.text}>{`${birth.year}: ${birth.text}`}</li>)
      }
    </ul>
  )
}
