import Image from 'next/image'
import Navbar from './component/Navbar'
import Card from './parts/Card'
import Pool from './parts/Pool'
import Items from './parts/Items'
import Footer from './component/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main style={{ backgroundColor: 'white', height: '100vh', fontWeight: 'bold' }} className='text-teal-500'>
      <div style={cover} className='px-5 py-5'>
        <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '6rem' }}>Cheer And Fantasize <br /> with Music !</p>
        <div className="flex justify-center items-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20" style={{ borderRadius: '15px' }}>
          <a href='/menu'>Daftar pilihan lainnya</a>
        </button>
        </div>
      </div>
      <Pool/>
      <Card/>
      <Items/>
      <Footer/>
    </main>
    
    </>
    
  )
}

const cover = {
  height: '32rem',
  backgroundColor: '#222831'
  // backgroundImage: 'url(/concert.jpg)',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center'
}
