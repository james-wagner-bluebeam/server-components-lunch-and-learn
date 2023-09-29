"use client"
import { useRouter } from "next/navigation"

export default function TimeSinceForm(props) {
  const router = useRouter();
  let inputDate = props.initialValue;

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/?then=${encodeURIComponent(inputDate)}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="MM/DD/YYYY" onChange={(e) => inputDate = e.target.value} />
      <button type="submit">Submit</button>
    </form>
  )
}
