
import { useContext } from 'react';
import AudioVisualiser from '../Components/AudioVisualiser';
import { useMediaStream } from '../Context/MediaStreamContext';
import { Color1, Color2, Contain } from '../Styles/Inpulse';
import { ColorContext } from '../Context/ColorContext';

const Inpulse = () => {
  const { stream, start, stop } = useMediaStream();

  const {color1, setColor1, color2, setColor2} = useContext(ColorContext)

  const toggleMic = () => {
    stream ? stop() : start()  
  };

  const Color1Change = (e) =>{
    setColor1(e.target.value)
  }

  const Color2Change = (e) =>{
    setColor2(e.target.value)
  }

  return (
    <div>
      <Contain>
        <button onClick={toggleMic}>
          {stream ? 'Close Microphone' : 'Open Microphone'}
        </button>
        <Color1 type='color' defaultValue={color1} onChange={Color1Change}/>
        <Color2 type='color'defaultValue={color2} onChange={Color2Change}/>
        <AudioVisualiser/>
      </Contain>
    </div>
  );
};

export default Inpulse