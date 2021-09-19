function grades(grade){
let des ;

 if(grade<3){
des = 'Fail (2)'
}else if (grade>=3 && grade<3.5){
des = 'Poor'
}else if(grade >=3.5 && grade<4.5){
des = 'Good'
}else if(grade >=4.5 && grade<5.5){
des = 'Very good'
}else {
    des = 'Excellent'
}


console.log(`${des} (${grade.toFixed(2)})`)

}
grades(2);