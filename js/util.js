/**
 * Created by Administrator on 2016/7/21 0021.
 */
//copy�̳к���
function extend(obj1,obj2){
    for(var key in obj2){
        obj1[key]=obj2[key];
    }
}
//util���������кܶ๤�߷���
var util={
    extend:extend
}