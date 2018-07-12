function getFirstSelector(selector){
  return document.querySelector(selector)

}
function nestedTarget(){
  return document.querySelector('.target')
}
function increaseRankBy(n){
  const li = document.querySelectorAll('.ranked-list')
  let result = n
  for (let i = 0; i < li.length; i++){
    li[i].innerHTML = (i+n).toString()
  }
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}