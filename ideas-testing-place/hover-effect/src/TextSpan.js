import {React, useState} from 'react'
import {motion, useAnimationControls} from 'framer-motion'
function TextSpan({children}) {
    const control = useAnimationControls()
    const [isPlaying, setIsPlaying] = useState(false)
    const booing = ()=>{
        control.start({
            transform:[
                "scale3d(1, 1, 1)", //x,y,z
                "scale3d(1.4, 0.55, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.25, 0.85, 1)",
                "scale3d(0.9, 1.05, 1)",
                "scale3d(1, 1, 1)"
            ],
            transition:{
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9]
            }
        })
        setIsPlaying(true)
    }
  return (
    <motion.span animate={control}
    onMouseOver={()=>{
        if(!isPlaying){
            booing()
        }
    }}
    onAnimationComplete={()=>setIsPlaying(false)}>
        {children}
    </motion.span>
  )
}

export default TextSpan