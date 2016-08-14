/**
 * Created by Administrator on 2016/7/22 0022.
 */
/**
 * 大地类
 * 01实例类
 * 02静态属性/方法
 * 03原型方法
 */
//01
(function(w){
    function Land(x,y){
        if(!Land.isinit){
            throw '请先初试话Land数据';
        }
        this.x=x||0;
        this.y=y||0;
        this.speed=-3;
        Land.total=Land.total?Land.total+1:1;
    }
//02
    Land.init=function(ctx,landImgObj){
        Land.ctx=ctx;
        Land.landImgObj=landImgObj;
        Land.imgWidth=Land.landImgObj.width;
        Land.imgHeight=Land.landImgObj.height;
        if(ctx&&landImgObj){
            Land.isinit=true;
        }
    }
//03
    //绘制大地
    Land.prototype.draw=function (){
        Land.ctx.drawImage(Land.landImgObj,this.x,this.y);
    };
    //更新数据
    Land.prototype.update=function(){
        this.x+=this.speed;
        //判断大地图片走出画布后再返回去连在后面
            if(this.x<-Land.imgWidth){
                this.x+=Land.imgWidth*Land.total;
            }
    };
    w.Land=Land;
}(window))
