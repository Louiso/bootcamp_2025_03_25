import { useRef, useState } from "react"

/*
  Casos de uso de las referencias:
    -  Manipulacion del DOM
    -  Para declarar variables que no generen reenderizacion del componente
    -  
*/

const ContadorSecreto = () => {
  const countRef = useRef(0)

  const [ , setState ] = useState({})

  const prev = () => {
    countRef.current --
  }
  const next = () => {
    countRef.current ++
  }

  const updateRender = () => {
    setState({})
  }

  return (
    <>
      <button onClick={prev}>-</button>
      {countRef.current}
      <button onClick={next}>+</button>
      <button onClick={updateRender}>actualiza el secreto</button>
    </>
  )
}

const ExampleUseRef = () => {
  const [ count, setCount ] = useState(0)
  const buttonNextRef = useRef<any>(null)
  

  const prev = () => setCount(prev => prev - 1)
  const next = () => setCount(prev => prev + 1)

  const nextExterno = () => {
    const nextButton = buttonNextRef.current

    nextButton?.click()
  }

  return (
    <div>
      <button onClick={prev} id="prev">-</button>
      {count}
      <button onClick={next} id="next" ref={buttonNextRef}>+</button>

      <button onClick={nextExterno}>externo +</button>

      <div>
        <ContadorSecreto/>
      </div>
    </div>
  )
}

export default ExampleUseRef