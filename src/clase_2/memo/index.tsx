import { FC, memo, useCallback, useMemo, useState } from "react"

/**
 * Modulo de mensajeria
 * Modulo de descarga de archivo
 * Modulo de importacion de archivos
 * Modulo de reportes
 * Modulo Detalle de elemento
 * ...
 * ...
 * ...
 * Page => (
 *  <Layout>
 *    <Modulo1 {...props1}/>
 *    <Modulo2 {...props2}/>
 *  </Layout>
 * )
 * 
 * 
 * 
 * import { lazy, Suspense } from 'react'
 */

interface VendedorColesProps {
  config: any;
  next: () => void;
}

const VendedorColes: FC<VendedorColesProps> = memo(({ config, next }) => {
  console.log('dejen de molestarme')

  return (
    <div>
      Vendedor de coles {JSON.stringify(config, null, 2)}
      <button onClick={next}>next 2</button>
    </div>
  )
})

const ExampleUseMemo = () => {
  const [ count, setCount ] = useState(0)

  // awdadawdwadwadawdwa

  const next = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const config = useMemo(() => {
    return {}
  }, [])

  return (
    <div>
      contador: {count}
      <button onClick={next}>next 1</button>
      <VendedorColes config={config} next={next}/>
    </div>
  )
}

/**
 * dir config_1 {}
 *  */ 

export default ExampleUseMemo