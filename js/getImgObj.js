/**
 * Created by Administrator on 2016/7/21 0021.
 */
/**
 * ������Ϸ����ͼ����Դ
 */
(function(w){
  //���������Ϸ���������ͼ�����Դ��ַ����ŵ�·����
    var imgSrc={
        bird:'../img/birds.png',
        land:'img/land.png',
        pipeDown:'img/pipeDown.png',
        pipeUp:'img/pipeUp.png',
        sky:'img/sky.png'
    };
    //��������Ѿ�����·����ͼ��
    var imgObj={};
    //ͳ��ͼ���Ѿ������˼���
    var imgCount=0;
    var temImg=null;

    //��ȫͼ��·�������洢
    //ͼ��׼����������¼�����
    //��ͼ�񶼼�����ɿ���ִ�д���ĺ���������ʱ��ʵ�δ��룩
    function getImgObj(fn){
        for(var key in imgSrc){
            temImg=new Image();
            temImg.src=imgSrc[key];
            temImg.addEventListener('load',function(){
                imgCount++;
                if(imgCount>=5){
                    //fn�Ƕ������ⲿ��һ��������Ҫ�����ⲿ�ĺ���ʹ��
                    //imgObj����ʵ�ε������fn�����������д���
                    fn(imgObj);
                }
            });
            //�µ�img����Ҫ������imgObj{}������
            imgObj[key]=temImg;
        }
    }

    //�ֲ�������ת��Ϊȫ�ֱ���
    w.getImgObj=getImgObj;
}(window))