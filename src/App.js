import "./App.css";
import Video from "./Components/Video";
import videoDB from "./Data/data";
import PlayButton from "./Components/PlayButton";
import { useState } from "react";
import AddVideo from "./Components/AddVideo";
function App() {
   console.log('render App');

   const [videos, setVideos] = useState(videoDB);
  return (
    <>
      <div className="App">
        <AddVideo></AddVideo>
        
        {videos.map((vidoe) => (
          <Video
            title={vidoe.title}
            views={vidoe.views}
            time={vidoe.time}
            channel={vidoe.channel}
            verified={vidoe.verified}
          >
            <PlayButton
              onPlay={() => console.log("Play")}
              onPause={() => console.log("Pause")}
            >
              Play
            </PlayButton>
          </Video>
        ))}
       </div>
      
    
    </>
  );
}
export default App;
