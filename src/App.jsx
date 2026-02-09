import { useState } from 'react' // Don't forget this!
import Layout from './components/Layout'

function App() {
  const [darkMode, setDarkMode] = useState(false); // Define the state here

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
    </Layout>
  )
}

export default App
