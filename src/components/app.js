import React  from 'react'
import KitapListesi from './kitapListesi/kitapListesi.js'
import KitapDetay from './kitapDetay/kitapDetay.js'
import './app.scss'

const App = () => {
  return(
   <div className="app-container">
     <KitapListesi/>
     <KitapDetay />
   </div> 
  )
}

export default App