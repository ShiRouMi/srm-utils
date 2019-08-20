// 深拷贝
function shenkaobei(obj) {
  if(typeof obj !== 'object') {
    console.error('object arguments need')
  }
  var newObj = obj instanceof Array ? [] : {}
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? shenkaobei(obj[key]) : obj[key]
    }
  }
  return newObj;
}