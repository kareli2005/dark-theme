import { useState } from 'react'

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>((): boolean => {
    return localStorage.getItem('darkTheme') === 'true'
  })

  const switchTheme = () => {
    const newTheme = !darkTheme
    setDarkTheme(!darkTheme)
    localStorage.setItem('darkTheme', newTheme.toString())
  }

  return (
    <div className={`w-full h-screen flex justify-center items-center duration-300 ${darkTheme ? 'bg-black' : 'bg-white'}`}>
      <button
        onClick={switchTheme}
        className={`p-4 rounded-3xl border-2 duration-300 font-bold select-none ${darkTheme ? 'bg-white text-black border-white hover:bg-black hover:text-white' : 'bg-black text-white border-black hover:bg-white hover:text-black'}`}
      >
        Switch theme
      </button>
    </div>
  )
}

export default App
