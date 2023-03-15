export default function avrage( lessons ){
    let avg = 0 
    
    lessons.forEach(element => {
        avg += +element.point
    });

    avg /= lessons.length
    
    return avg

}