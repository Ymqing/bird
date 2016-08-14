/*
* 管道的一些特点：
* 1、管道的显示高度是随机生成的
* 2、上下管道的间隔一样
* 3、随机生成了上管道的高，那么下管道也就可以计算出来了
* 4、上下管道成对出现，也就是说x轴和speed属性共享
* 5、一对上下管道走出画布，向右拼接时，需要重新生成他们的高度
* */

// 管道类模块
(function (w) {

    // 管道类
    function Pipe(x) {
        if (!Pipe.isInit) {
            throw '走开！别碰我！';
        }

        this.x = x;
        this.PipeSpace = 150;
        // 随机生成上管道的可视高度，最小为100，最高为279
        this.viewTopPipeH = Math.floor(Math.random() * 130) + 100;
        // 计算上管道的y轴坐标，算法-(上管道高 - 可视高)，转换为了现在的算法 可视高 - 上管道高
        this.topPipeY = this.viewTopPipeH - Pipe.topH;
        // 计算下管道的y轴坐标，算法 上管道可视高 + 上下管道的空间间隔
        this.bottomPipeY = this.viewTopPipeH  + this.PipeSpace;
        // 管道运动的速度
        this.speed = -1;
        // 管道运动加速度
        this.speedPlus = -0.00001;
    }

    // 初始化方法
    Pipe.init = function (ctx, imgTopPipeObj, imgBottomPipeObj) {
        Pipe.ctx = ctx;  // 把绘图环境添加类上
        Pipe.imgTopPipeObj = imgTopPipeObj;  // 把上管道图像资源加到类上
        Pipe.topW = imgTopPipeObj.width; // 把上管道图像的宽加到类上
        Pipe.topH = imgTopPipeObj.height;  // 把上管道图像的高加到类上

        Pipe.imgBottomPipeObj = imgBottomPipeObj;  // 把下管道图像资源加到类上

        // 如果初始化了类，才可以创建实例
        if (ctx && imgTopPipeObj && imgBottomPipeObj) {
            Pipe.isInit = true;
        }
    };

    // 给Pipe类的原型扩展一些实例方法
    extend(Pipe.prototype, {

        // 绘制方法
        draw: function () {
            Pipe.ctx.drawImage(Pipe.imgTopPipeObj, this.x, this.topPipeY);
            Pipe.ctx.drawImage(Pipe.imgBottomPipeObj, this.x, this.bottomPipeY);
            this.drawPipePath();
        },

        drawPipePath: function () {
            //Pipe.ctx.strokeStyle = 'red';
            Pipe.ctx.rect(this.x, this.topPipeY, Pipe.topW, Pipe.topH);
            Pipe.ctx.rect(this.x, this.bottomPipeY, Pipe.topW, Pipe.topH);
            //Pipe.ctx.stroke();
        },

        // 计算下一帧管道绘制时所需的数据
        update: function () {
            this.x += this.speed;
            this.speed += this.speedPlus;

            // 管道走出画布，向右拼接
            if (this.x < -Pipe.topW) {
                this.x += Pipe.topW * 3 * 6;
                // 随机生成上管道的可视高度，最小为100，最高为279
                this.viewTopPipeH = Math.floor(Math.random() * 180) + 100;
                // 计算上管道的y轴坐标，算法-(上管道高 - 可视高)，转换为了现在的算法 可视高 - 上管道高
                this.topPipeY = this.viewTopPipeH - Pipe.topH;
                // 计算下管道的y轴坐标，算法 上管道可视高 + 上下管道的空间间隔
                this.bottomPipeY = this.viewTopPipeH  + this.PipeSpace;
            }
        }
    });

    w.Pipe = Pipe;

}(window));