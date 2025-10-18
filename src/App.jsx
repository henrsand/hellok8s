function App() {
  console.log(import.meta.env)

  return (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1>Hello #11 Kubernetes!</h1>
    </div>
    <div>
      <small>From {import.meta.env.VITE_ENVIRONMENT}</small>
    </div>
    </>
  )
}

export default App
