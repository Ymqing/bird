/**
 * Created by Administrator on 2016/7/22 0022.
 */
/**
 * �����
 * 01ʵ����
 * 02��̬����/����
 * 03ԭ�ͷ���
 */
//01
(function(w){
    function Land(x,y){
        if(!Land.isinit){
            throw '���ȳ��Ի�Land����';
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
    //���ƴ��
    Land.prototype.draw=function (){
        Land.ctx.drawImage(Land.landImgObj,this.x,this.y);
    };
    //��������
    Land.prototype.update=function(){
        this.x+=this.speed;
        //�жϴ��ͼƬ�߳��������ٷ���ȥ���ں���
            if(this.x<-Land.imgWidth){
                this.x+=Land.imgWidth*Land.total;
            }
    };
    w.Land=Land;
}(window))
