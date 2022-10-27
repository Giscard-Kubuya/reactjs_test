import { useParams } from "react-router-dom"
function PostPage() {
    let params = useParams();
  return (
    <div>
        <h1>This is the post number {params.position}</h1>
        <p>And the auther is : {params.author}</p>
    </div>
  )
}

export default PostPage
