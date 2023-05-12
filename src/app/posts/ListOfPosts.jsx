import LikeButton from './LikeButton'

const getposts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  const data = await response.json()

  return data
}

async function ListOfPosts () {
  const posts = await getposts()

  return posts.map((post) => (
    <article key={post.id}>
      <h2 className='text-[#09f]'>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}

export default ListOfPosts
