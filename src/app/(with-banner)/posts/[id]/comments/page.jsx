import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } })
  const data = await response.json()

  return data
}

async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.email} />
          <h2 className='font-bold text-2xl'>{comment.name}</h2>
          <p className='text-gray-400'>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Comments
