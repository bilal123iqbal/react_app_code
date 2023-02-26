import "./Video.css"
function Video({title, channel, views, time, verified, children}) {
      console.log('render Video'); 
      

  return (
    <>
      <div className='container'>
      <div className= "pic">
      <img src="https://loremflickr.com/280/180" alt="Katherine Johnson" />
      </div>
      
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified ? "✅" : "Not Verified"}  </div> 
      <div className="views">
      {views} views <span>.</span> {time}
      
      <div>{children}</div>
      </div>

      </div>


    </>
  );
}
 
export default Video;
