function getFirstSelector(selector){
  return document.querySelector(selector)

}
function nestedTarget(){
  return document.querySelector('.target')
}
function increaseRankBy(n){
  const li = document.querySelectorAll('.ranked-list')
  let result = 1
  for (let i = 0; i < li.length; i++){
    li[i].innerHTML = (i+1).toString()
  }
}

const rankedLists = document.querySelectorAll('.ranked-list')
const firstList = rankedLists[0]
const secondList = rankedLists[1]

let children = firstList.children
let start = 1
for (let i = 0, l = children.length; i < l; i++) {
  expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
}