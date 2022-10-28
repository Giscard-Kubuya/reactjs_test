import { Navigate,useNavigate } from "react-router-dom"
function PostPage() {
    const navigate = useNavigate();
    const status = 200;
    if(status==404){
        return <Navigate to='/notFound'/>
    }

    const takeMeOut = ()=>{
        navigate('/about');
    }
    // let params = useParams();
  return (
    <div>
        <h1>This is the post</h1>
        {/* <p>And the auther is : {params.author}</p> */}
        <button onClick={takeMeOut}>Go back Round</button>
    </div>
  )
}

export default PostPage
