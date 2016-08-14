/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * С����ģ��
 * 1����
 * 2С��������/����
 * 3ԭ�ͷ���
 */
(function(w){
    //01����С����Ĺ��캯����������ʵ������
    function Bird(x,y,w,h){
        if(!Bird.isInit){
            throw '���ȳ�ʼ��Bird�࣡������ذɣ�';
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
    //02С��������/����
    Bird.init=function (ctx,birdImgObj){
        //��Bird����ӻ��ƻ�������
        Bird.ctx=ctx;
        //���С��ͼ��
        Bird.birdImgObj=birdImgObj;
        //���е���ͼ��Ŀ��һ��
        Bird.birdWidth=Bird.birdImgObj.width/3;
        Bird.birdHeight=Bird.birdImgObj.height;
        if(ctx){
            Bird.isInit=true;
        }
    };

    //03ԭ�ͷ���(��������һ��������չ)
    extend(Bird.prototype,{
        //03.1����С��
        draw:function(){
            //����ԭʼ״̬
            Bird.ctx.save();
            //a����С��ĺ������غϵ�����λ��
            var birdCoreX=this.x+this.w/2;
            var birdCoreY=this.y+this.h/2;
            //bƽ������
            Bird.ctx.translate(birdCoreX,birdCoreY);
            //c��ת����
            //��ת�Ƕ�Ҳ��һ������
            var angle=this.speed*10;
            angle=angle>45?45:angle;
            Bird.ctx.rotate(Math.PI/180*angle);
            //d���ڱ任���������С��
            Bird.ctx.drawImage(Bird.birdImgObj,
                this.clipX,this.clipY,this.w,Bird.birdHeight,
            -this.w/2,-this.h/2,this.w,this.h);

            //�ع���ԭʼ��״̬
            Bird.ctx.restore();
        },
        //03.2����С�������ֵ
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