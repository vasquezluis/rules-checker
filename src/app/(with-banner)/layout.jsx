function PostsLayout ({ children }) {
  return (
    <div>
      <div className='w-full'>
        <marquee className='text-purple-600 bg-white'>Los mejores posts de la historia</marquee>
      </div>
      {children}
    </div>
  )
}

export default PostsLayout
