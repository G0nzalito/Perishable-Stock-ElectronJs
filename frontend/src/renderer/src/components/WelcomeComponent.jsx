import { useLocation } from 'wouter'

const WelcomeComponent = () => {
  const [, setLocation] = useLocation()

  return (
    <>
      <h2> Sistema de Stock con fecha de vencimiento </h2>
      <div>
        <button onClick={() => setLocation('/upload')}>Subir un nuevo producto</button>
        <button onClick={() => setLocation('/table')}>Ver productos</button>
      </div>
    </>
  )
}

export default WelcomeComponent
