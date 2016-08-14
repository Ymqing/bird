/**
 * Created by Administrator on 2016/7/22 0022.
 */
/**
 *柱子类
 * 01实例类
 * 02静态属性/方法
 * 03原型方法
 */
(function (w){
    function Pipe(x){
        this.x=x;
        //柱子的高度时一个随机高度，考虑到地面柱子和空隙的高度，
        // 天空柱子可视高度最高300,最低100
        this.viewTopH=Math.floor(Math.random()*200)+100;
        this.topY=this.viewTopH-Pipe.heightImgObj;//**天空的柱子的y坐标是负值
        //地面柱子的高度随天空柱子的高度的确定而确定
        this.bottomY=this.viewTopH+Pipe.space;
        this.speed=-3;
        //柱子间隙
        Pipe.space=150;
        //计数创建的实例数
        Pipe.total=Pipe.total?Pipe.total+1:1;//在调用时如果没有赋值就先赋值1
    }
    //柱子间隙
    Pipe.space=150;
    //绘图环境和图像资源初始化
    Pipe.init=function(ctx,downImgObj,upImgObj){
        Pipe.ctx=ctx;
        Pipe.downImgObj=downImgObj;
        Pipe.upImgObj=upImgObj;
        Pipe.widthImgObj=downImgObj.width;
        Pipe.heightImgObj=downImgObj.height;
    }
    Pipe.prototype.draw=function(){
        //绘制天空和地面两处的钢管
        Pipe.ctx.drawImage(Pipe.downImgObj,this.x,this.topY);
        Pipe.ctx.drawImage(Pipe.upImgObj,this.x,this.bottomY);
        this.drawPipePath();
    }
    //根据管道绘制矩形路径
    Pipe.prototype.drawPipePath=function(){
        //Pipe.ctx.beginPath();
        //Pipe.ctx.strokeStyle='red';
        Pipe.ctx.rect(this.x,this.topY,Pipe.widthImgObj,Pipe.heightImgObj);
        Pipe.ctx.rect(this.x,this.bottomY,Pipe.widthImgObj,Pipe.heightImgObj);
        //Pipe.ctx.stroke();
    }
    Pipe.prototype.update=function(){
        this.x+=this.speed;
        if(this.x<=-Pipe.widthImgObj){
            this.x+=Pipe.widthImgObj*3*Pipe.total;
            //重新出现的柱子需要重新生成高度
            this.viewTopH=Math.floor(Math.random()*200)+100;
            this.topY=this.viewTopH-Pipe.heightImgObj;
            this.bottomY=this.viewTopH+Pipe.space;
        }
    }
    w.Pipe=Pipe;
}(window))