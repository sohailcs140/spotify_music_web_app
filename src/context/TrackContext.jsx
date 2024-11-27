import { createContext,useContext, useState } from "react";


const trackContext =  createContext({
    currTrack:{}
})


export const TrackContextProvider = ({children})=>{
    const [currTrack,setCurrTrack] = useState("")


    return <trackContext.Provider  value={{currTrack, setCurrTrack}}>
        {children}
    </trackContext.Provider>
}


const useTrackContext = ()=>{

    const {currTrack, setCurrTrack} = useContext(trackContext)

    return {currTrack, setCurrTrack}
}


export default useTrackContext