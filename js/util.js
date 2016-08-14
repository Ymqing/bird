/**
 * Created by Administrator on 2016/7/21 0021.
 */
//copy继承函数
function extend(obj1,obj2){
    for(var key in obj2){
        obj1[key]=obj2[key];
    }
}
//util对象，里面有很多工具方法
var util={
    extend:extend
}