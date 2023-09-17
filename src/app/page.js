import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <ul className='text-lg pt-5 pl-5'>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/imgUpload">Image upload</Link></li>
      </ul>
    </>
  )
}
