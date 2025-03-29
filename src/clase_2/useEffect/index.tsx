import { useEffect, useState } from "react"

/*
  Casos de uso de useEffect:
    - Manipulacion del DOM
    - Inicializar data, de las apis
    - Subscription, Listeners, Conexiones, Observes, ... sinonimos
*/

const JhonSnow = () => {
  const [ count, setCount ] = useState(0)

  const next = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    console.log('mount')

    const interval = setInterval(() => {
      console.log('buscando salvaje')
      next()
    }, 1_000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      El invierno se acerca
      tengo {count} hijos
    </div>
  )
}

const ExampleUseEffect = () => {
  const [ showSnow, setShowSnow ] = useState(true)


  const hidden = () => {
    setShowSnow(false)
  }

  return (
    <div>
      <button onClick={hidden}>Ocultar a Jhon</button>
      {showSnow && (
        <JhonSnow/>
      )}
    </div>
  )
}

export default ExampleUseEffect