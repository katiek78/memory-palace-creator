import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/Error/ErrorFallback'
import Router from './components/Routes/Router'

function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Router />        
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
