import Navbar from '../navigation/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-gray-800 overflow-hidden'>{children}</main>
    </>
  )
}