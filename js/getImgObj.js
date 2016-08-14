/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * 加载游戏所需图像资源
 */
(function(w){
  //用来存放游戏所需的所有图像的资源地址（存放的路径）
    var imgSrc={
        bird:'../img/birds.png',
        land:'img/land.png',
        pipeDown:'img/pipeDown.png',
        pipeUp:'img/pipeUp.png',
        sky:'img/sky.png'
    };
    //用来存放已经保存路径的图像
    var imgObj={};
    //统计图像已经加载了几张
    var imgCount=0;
    var temImg=null;

    //补全图像路径，并存储
    //图像准备好了添加事件监听
    //当图像都加载完成可以执行传入的函数（调用时以实参传入）
    function getImgObj(fn){
        for(var key in imgSrc){
            temImg=new Image();
            temImg.src=imgSrc[key];
            temImg.addEventListener('load',function(){
                imgCount++;
                if(imgCount>=5){
                    //fn是定义在外部的一个函数，要想让外部的函数使用
                    //imgObj，以实参的身份在fn（）的括号中传入
                    fn(imgObj);
                }
            });
            //新的img对象要保存在imgObj{}对象中
            imgObj[key]=temImg;
        }
    }

    //局部不变量转换为全局变量
    w.getImgObj=getImgObj;
}(window))