export const PageAnimation ={
    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y:0,
        transition: {
            
            duration: 1,
            when: 'beforChildren'
        },
    },
    exit:{
        opacity: 0,
        y:300,
        transition: {
            duration:1
        }
    }
}
export const TitleAnimation = {
    hidden:{
        y:200
    },
    show:{
        y:0,
        transition:{duration:0.75, ease:"easeOut"}
    }
}
export const slider = {
    hidden:{
        x:"-130%",
        skew: "45deg",
    },
    show:{
        x:"100%",
        skew:"0deg",
        transition:{ease:"easeOut", duration:0.75},
    }
}
export const SwitchAnim = {
   hidden:{
    opacity:0,
    y:200,
   },
   show:{
    opacity:0,
    y:0,
    transition: {duration:2}
   }

}