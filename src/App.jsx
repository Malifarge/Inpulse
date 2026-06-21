import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AudioAnalyserProvider } from "./Context/AudioAnalyserContext";
import { InputAudioProvider } from "./Context/InputAudioContext";
import { MediaStreamProvider } from "./Context/MediaStreamContext";
import Inpulse from './Pages/Inpulse';
import { ColorContextProvider } from './Context/ColorContext';

const App = () =>{
  return (
    <BrowserRouter>
      <ColorContextProvider>
        <MediaStreamProvider video={false} audio={true}>
            <InputAudioProvider>
              <AudioAnalyserProvider>
                <Routes>
                  <Route path='/' element=<Inpulse/> />
                </Routes>
              </AudioAnalyserProvider>
          </InputAudioProvider>
        </MediaStreamProvider>
      </ColorContextProvider>
    </BrowserRouter>
  )

}

export default App;
