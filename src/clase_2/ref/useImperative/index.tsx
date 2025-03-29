import { Button } from "@mui/material"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"

/*
  Casos de uso de las referencias:
    -  Manipulacion del DOM
    -  Para declarar variables que no generen reenderizacion del componente
    -  
*/

const ComponenteLibreria = forwardRef<any, { hiddenControls: boolean; }>(({ hiddenControls }, ref) => {
  const [ count, setCount ] = useState(0)
  

  const prev = () => setCount(prev => prev - 1)
  const next = () => setCount(prev => prev + 1)

  useImperativeHandle(ref, () => ({
    prev,
    next
  }))

  return (
    <div>
      {!hiddenControls && <button onClick={prev}>-</button>}
      
      {count}
      {!hiddenControls && <button onClick={next}>+</button>}
    </div>
  )
})

const ExampleUseImperativeHandleRef = () => {
  const libreriaRef = useRef<any>(null)

  const prev = () => {
    libreriaRef.current.prev()
  }

  const next = () => {
    libreriaRef.current.next()
  }

  return (
    <div>
      <Button onClick={prev}>Disminuir</Button>
      <Button onClick={next}>Incrementar</Button>

      <ComponenteLibreria ref={libreriaRef} hiddenControls/>
    </div>
  )
}

export default ExampleUseImperativeHandleRef