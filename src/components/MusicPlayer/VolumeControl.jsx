import React, { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../../context/PlayerContext';
import { FaVolumeDown, FaVolumeOff, FaVolumeUp } from 'react-icons/fa';

const VolumeControl = () => {

    const { audioRef } = useContext(PlayerContext);
    const [volume, setVolume] = useState(1);
    const [VolumeIcon, setVolumeIcon] = useState(()=>FaVolumeDown);

    function handleVolume(e){
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume)
    }

    useEffect(()=>{
        if(audioRef.current){
        audioRef.current.volume = volume;
        if(volume === 0){
            setVolumeIcon(()=>FaVolumeOff)
        }else if(volume > 0 && volume <= 0.5){
            setVolumeIcon(()=>FaVolumeDown)
        }else{
            setVolumeIcon(()=>FaVolumeUp)
        }
    }
    },[audioRef,volume])



  return (
    <div className='hidden lg:flex gap-2 lg:max-w-[10rem] xl:max-w-[20rem] w-full items-center justify-end'>
        <VolumeIcon className='text-white text-2xl xl:text-3xl'/>
        <input type="range" min={0} step={0.01} max={1} value={volume} onChange={handleVolume} name="volume-range" id="volume-range" className='lg:w-28 xl:w-30 custom-range'/>
    </div>
  )
}

export default VolumeControl