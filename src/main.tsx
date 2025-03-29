// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ExampleUseEffect from './clase_2/useEffect'
// import ExampleUseMemo from './clase_2/memo'
// import ExampleUseRef from './clase_2/ref/useRef'
import ExampleUseImperativeHandleRef from './clase_2/ref/useImperative'
// import App from './clase_1/App.tsx'

createRoot(document.getElementById('root')!).render(
  // <ExampleUseEffect/>
  // <ExampleUseMemo/>
  // <ExampleUseRef/>
  <ExampleUseImperativeHandleRef/>
)
