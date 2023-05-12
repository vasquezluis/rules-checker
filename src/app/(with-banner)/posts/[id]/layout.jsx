import Link from 'next/link'

const getposts = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
  const data = await response.json()

  return data
}

async function ListOfPosts ({ children, params }) {
  const { id } = params
  const post = await getposts(id)

  return (
    <article key={post.id}>
      <h2 className='text-[#09f] text-2xl mb-2 font-bold'>{post.title}</h2>
      <p className='text-gray-600'>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comenctarios</Link>
      {children}
    </article>
  )
}

export default ListOfPosts
