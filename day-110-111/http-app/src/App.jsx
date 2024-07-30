import { useEffect, useState } from 'react'


function Post({ userId, id, title, body }) {
  return (
    <div>
        <p> {id}</p>
        <p style={{color: 'gray'}}>{userId}: {title}</p>
        <p>{body}</p>
        <hr />
    </div>
  )
}

function App() {

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ userId: 0, title: '', body: '' })

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json())
    .then( body => setPosts(body) )
    .catch(e => console.log(e))

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(`handle clicked`)
    console.log(post)

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handleIpChange = e => {
    const { name, value } = e.target
    console.log(`User Name Changed `)
    setPost({ ...post, [name]: value })
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type='number' placeholder='UserID' value={post.userId} name="userId" onChange={handleIpChange}/>
        <input type='text' placeholder='Title' name="title" value={post.title} onChange={handleIpChange}/>
        <input type='text' placeholder='Body'  name="body" value={post.body} onChange={handleIpChange}/>
        <input type='submit' value="Save"/>
      </form>
    </div>
     <div>{posts.map(post => <Post key={post.id} {...post}/>)}</div>
    </>
  )
}

export default App
