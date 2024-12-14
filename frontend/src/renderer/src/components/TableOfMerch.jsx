import { useLocation } from 'wouter'

export default function TableOfMerch() {
  const [, setLocation] = useLocation()

  return (
    <div>
      <button onClick={() => setLocation('/')}>Volver</button>
      <h1>Table of Merch</h1>
    </div>
  )
}
