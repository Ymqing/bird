// 大地类模块
(function (w) {

    // 大地类
    function Land(x, y) {
        if (!Land.isInit) {
            throw '请先初始化类！';
        }

        this.x = x;  // 大地绘制的x轴坐标
        this.y = y;   // 大地绘制的y轴坐标
        this.speed = -1;  // 大地运动速度

        // 记录大地创建了多少个
        Land.total = Land.total? Land.total + 1 : 1;
    }

    // 大地类初始化方法，需要对方提供绘图环境对象和大地的图像资源
    Land.init = function (ctx, landImgObj) {
        Land.ctx = ctx; // 绘图环境对象
        Land.landImgObj = landImgObj;  // 大地的图像资源
        Land.imgWidth = landImgObj.width;  // 大地的宽高
        Land.imgHeight = landImgObj.height;  // 大地的高度

        // 如果调用了init方法，并且传入两个参数，那么认为对方已经初始化过该类了
        if (ctx && landImgObj) {
            Land.isInit = true;
        }
    };

    // 给原型添加一个绘制方法(这是提供给实例使用的)
    Land.prototype.draw = function () {
        Land.ctx.drawImage(Land.landImgObj, this.x, this.y);
    };

    // 给原型添加一个更新下一帧渲染大地时所需的数据(这是提供给实例使用的)
    Land.prototype.update = function () {
        this.x += this.speed;

        if(this.x < -Land.imgWidth) {
            this.x += Land.imgWidth * Land.total;
        }
    };

    w.Land = Land;

}(window));