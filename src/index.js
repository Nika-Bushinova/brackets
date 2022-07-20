module.exports = function check(str, bracketsConfig){
  let brackets = bracketsConfig.join('').replace(/,/g, '').split('')
  let openBrackets=[]
  let closeBrackets=[]
    brackets.forEach((element,index)=>{
    index%2===0?openBrackets.push(element):openBrackets
      index%2!==0?closeBrackets.push(element):closeBrackets
  })
  let brackets_pair={}
    let bracketsObj = Object.fromEntries(bracketsConfig)
 Object.entries(bracketsObj).forEach(([key, value]) => {
  brackets_pair[value] = key
})
  let stack=[]
  for(let i=0;i<str.length;i++){
    let curr=str[i]
        let topEl=stack[stack.length-1]
    if(openBrackets.includes(curr)){
if(closeBrackets.includes(curr)&&curr===topEl){
  stack.pop()
}else{
       stack.push(curr)
}
    }else{
            if(stack.length===0){
            return false//
            }
      if(brackets_pair [curr]==topEl){
  stack.pop()
       
      }else{
  return false
}      
  }
  }
  return stack.length===0
}
