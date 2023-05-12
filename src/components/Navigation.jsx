import Link from 'next/link'

const LINKS = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }
]

function Navigation () {
  return (
    <header className='border border-gray-500 rounded-sm p-4 mb-3'>
      <nav>
        <ul className='flex flex-row list-none gap-[32px]'>
          {LINKS.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
