function sorting2(num){
num.sort((a,b)=>a.length-b.length || a.localeCompare(b));

console.log(num.join('\n'))
}
sorting2(['2','23','33'])