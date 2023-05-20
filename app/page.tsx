import Image from 'next/image';

import Navbar from './components/Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />

      <h1 className="text-rose-500 text-6xl">Hello Airbnb</h1>
    </main>
  )
}

export default Home;
