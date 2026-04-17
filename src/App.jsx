import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/Pages/Home'
import ITServices from '@/Pages/ITServices'
import TalentLab from '@/Pages/TalentLab'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/it-services" element={<ITServices />} />
      <Route path="/talent-lab" element={<TalentLab />} />
    </Routes>
  )
}

export default App
