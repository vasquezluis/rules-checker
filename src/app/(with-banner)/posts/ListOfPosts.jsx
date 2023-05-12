import Link from 'next/link'
import LikeButton from './LikeButton'

const getposts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
  const data = await response.json()

  return data
}

async function ListOfPosts () {
  const posts = await getposts()

  return posts.map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 className='text-[#09f] text-2xl mb-2 font-bold'>{post.title}</h2>
      </Link>
      <p className='text-gray-600'>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}

export default ListOfPosts
