/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * 天空类构造函数
 * 01实例类
 * 02静态属性/方法
 * 03原型方法
 */
//01
(function (w){
    function Sky(x,y){
        if(!Sky.isInit){
            throw '请回吧';
        }
        this.x=x||0;
        this.y=y||0;
        this.speed=-3;
        //每创建一个实例，统计一下该数字
        Sky.total++;
    }
    //02统计创建了多个大地实例对象，属于静态属性
    Sky.total=0;
    Sky.init=function (ctx,skyImgObj){
        Sky.ctx=ctx;
        Sky.skyImgObj=skyImgObj;
        Sky.imgWidth=Sky.skyImgObj.width;
        Sky.imgHeight=Sky.skyImgObj.height;
        //初始化完毕，可以创建实例了
        if(ctx&&skyImgObj){
            Sky.isInit=true;
        }
    };
    //03 原型
    Sky.prototype={
        constructor:Sky,//重新赋值会丢失constructor
        draw:function(){
            Sky.ctx.drawImage(Sky.skyImgObj, this.x,this.y);
        },
        update:function(){
            this.x+=this.speed;
            //this.x是一个负值
            if(this.x<-Sky.imgWidth){
                //this.x=Sky.imgWidth//连接有问题
                this.x+=Sky.imgWidth*Sky.total
            }
        }
    }

    w.Sky=Sky;
}(window))