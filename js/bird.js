/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * 小鸟类模块
 * 1属性
 * 2小鸟类属性/方法
 * 3原型方法
 */
(function(w){
    //01创建小鸟类的构造函数，并定义实例属性
    function Bird(x,y,w,h){
        if(!Bird.isInit){
            throw '清先初始化Bird类！否则请回吧！';
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.index=0;
        this.clipX=0;
        this.clipY=0;
        this.speed=1;
        this.speedPlus=0.1;
    }
    //02小鸟类属性/方法
    Bird.init=function (ctx,birdImgObj){
        //给Bird类添加绘制环境对象
        Bird.ctx=ctx;
        //添加小鸟图像
        Bird.birdImgObj=birdImgObj;
        //剪切单个图像的宽高一样
        Bird.birdWidth=Bird.birdImgObj.width/3;
        Bird.birdHeight=Bird.birdImgObj.height;
        if(ctx){
            Bird.isInit=true;
        }
    };

    //03原型方法(这里用了一个方法扩展)
    extend(Bird.prototype,{
        //03.1绘制小鸟
        draw:function(){
            //保存原始状态
            Bird.ctx.save();
            //a计算小鸟的和坐标重合的中心位置
            var birdCoreX=this.x+this.w/2;
            var birdCoreY=this.y+this.h/2;
            //b平移坐标
            Bird.ctx.translate(birdCoreX,birdCoreY);
            //c旋转坐标
            //旋转角度也是一个变量
            var angle=this.speed*10;
            angle=angle>45?45:angle;
            Bird.ctx.rotate(Math.PI/180*angle);
            //d基于变换的坐标绘制小鸟
            Bird.ctx.drawImage(Bird.birdImgObj,
                this.clipX,this.clipY,this.w,Bird.birdHeight,
            -this.w/2,-this.h/2,this.w,this.h);

            //回滚到原始个状态
            Bird.ctx.restore();
        },
        //03.2绘制小鸟的数据值
        update:function(){
            this.clipX=Bird.birdWidth*this.index;
            this.index++;
            this.index=this.index>2?0:this.index;

            this.y+=this.speed;
            this.speed+=this.speedPlus;
        }
    });

    w.Bird=Bird;
}(window))