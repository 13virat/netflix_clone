import useBillboard from "@/hooks/useBillboard";
import React from "react";
const Billboard=()=>{
    const{data}= useBillboard();
    return(
        <div className="relative h-[56.25vw]">
            <video
            className="
            
            "
            autoPlay
            muted
            loop 
            poster={data?.thumbnailUrl}
            src={data?.videoUrl}>

            </video>

        </div>
    )
}
export default Billboard;