import { useLocation } from 'wouter'

export default function UploadNewMerch() {
  const [, setLocation] = useLocation()

  return (
    <div>
      <button onClick={() => setLocation('/')}>Volver</button>
      <h1>Upload New Merch</h1>
    </div>
  )
}
