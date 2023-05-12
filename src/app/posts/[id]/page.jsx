function Post ({ params }) {
  const { id } = params

  return (
    <div>Este es el post {id}</div>
  )
}

export default Post
