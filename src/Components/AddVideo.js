import "./AddVideo.css"
function AddVideo(){

    return(

        <form>
         <input type="text"  placeholder="title" />
         <input type="text"  placeholder="views" />
       
         <button className="addVideo" onClick={()=>
         {
            // setVideos([...videos,{
            //     title:   "Demo App Practice",
            //     views:   "130K",
            //     time:    "12 days ago",
            //     channel: "Code Dost",
            //     verified: true}]);
        }}
        >
            Add Video</button>
        </form>

    )
}

export default AddVideo;