/**
 * Created by Administrator on 2016/7/22 0022.
 */
/**
 *������
 * 01ʵ����
 * 02��̬����/����
 * 03ԭ�ͷ���
 */
(function (w){
    function Pipe(x){
        this.x=x;
        //���ӵĸ߶�ʱһ������߶ȣ����ǵ��������ӺͿ�϶�ĸ߶ȣ�
        // ������ӿ��Ӹ߶����300,���100
        this.viewTopH=Math.floor(Math.random()*200)+100;
        this.topY=this.viewTopH-Pipe.heightImgObj;//**��յ����ӵ�y�����Ǹ�ֵ
        //�������ӵĸ߶���������ӵĸ߶ȵ�ȷ����ȷ��
        this.bottomY=this.viewTopH+Pipe.space;
        this.speed=-3;
        //���Ӽ�϶
        Pipe.space=150;
        //����������ʵ����
        Pipe.total=Pipe.total?Pipe.total+1:1;//�ڵ���ʱ���û�и�ֵ���ȸ�ֵ1
    }
    //���Ӽ�϶
    Pipe.space=150;
    //��ͼ������ͼ����Դ��ʼ��
    Pipe.init=function(ctx,downImgObj,upImgObj){
        Pipe.ctx=ctx;
        Pipe.downImgObj=downImgObj;
        Pipe.upImgObj=upImgObj;
        Pipe.widthImgObj=downImgObj.width;
        Pipe.heightImgObj=downImgObj.height;
    }
    Pipe.prototype.draw=function(){
        //������պ͵��������ĸֹ�
        Pipe.ctx.drawImage(Pipe.downImgObj,this.x,this.topY);
        Pipe.ctx.drawImage(Pipe.upImgObj,this.x,this.bottomY);
        this.drawPipePath();
    }
    //���ݹܵ����ƾ���·��
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
            //���³��ֵ�������Ҫ�������ɸ߶�
            this.viewTopH=Math.floor(Math.random()*200)+100;
            this.topY=this.viewTopH-Pipe.heightImgObj;
            this.bottomY=this.viewTopH+Pipe.space;
        }
    }
    w.Pipe=Pipe;
}(window))