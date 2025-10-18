function App() {
  console.log(import.meta.env)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1>Hello #10 Kubernetes..! From {import.meta.env.VITE_ENVIRONMENT}</h1>
    </div>
  )
}

export default App
