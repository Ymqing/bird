/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * ����๹�캯��
 * 01ʵ����
 * 02��̬����/����
 * 03ԭ�ͷ���
 */
//01
(function (w){
    function Sky(x,y){
        if(!Sky.isInit){
            throw '��ذ�';
        }
        this.x=x||0;
        this.y=y||0;
        this.speed=-3;
        //ÿ����һ��ʵ����ͳ��һ�¸�����
        Sky.total++;
    }
    //02ͳ�ƴ����˶�����ʵ���������ھ�̬����
    Sky.total=0;
    Sky.init=function (ctx,skyImgObj){
        Sky.ctx=ctx;
        Sky.skyImgObj=skyImgObj;
        Sky.imgWidth=Sky.skyImgObj.width;
        Sky.imgHeight=Sky.skyImgObj.height;
        //��ʼ����ϣ����Դ���ʵ����
        if(ctx&&skyImgObj){
            Sky.isInit=true;
        }
    };
    //03 ԭ��
    Sky.prototype={
        constructor:Sky,//���¸�ֵ�ᶪʧconstructor
        draw:function(){
            Sky.ctx.drawImage(Sky.skyImgObj, this.x,this.y);
        },
        update:function(){
            this.x+=this.speed;
            //this.x��һ����ֵ
            if(this.x<-Sky.imgWidth){
                //this.x=Sky.imgWidth//����������
                this.x+=Sky.imgWidth*Sky.total
            }
        }
    }

    w.Sky=Sky;
}(window))