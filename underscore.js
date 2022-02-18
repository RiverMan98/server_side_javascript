var _ = require('underscore'); // _를 변수로 두는 관습
var arr=[3,6,9,1,12];
console.log(arr[0]); // java 자체
console.log(_.first(arr));  // underscore 내
console.log(arr[arr.length-1]);
console.log(_.last(arr));
console.log(_.rest(arr,3));
console.log(_.without(arr,3,9));
