<template><div><h1 id="三维服务" tabindex="-1"><a class="header-anchor" href="#三维服务"><span><a href="http://lbs.tianditu.gov.cn/docs/#/sanwei/?id=%E4%B8%89%E7%BB%B4%E6%9C%8D%E5%8A%A1" target="_blank" rel="noopener noreferrer">三维服务<ExternalLinkIcon/></a></span></a></h1>
<blockquote>
<p>天地图三维地名服务和地形服务需要利用 cesium 开源三维地球API与天地图扩展插件共同使用，目前支持cesuim1.108。天地图三维地名服务和三维地形服务对所有用户开放。使用本组服务之前，需要<a href="https://console.tianditu.gov.cn/" target="_blank" rel="noopener noreferrer">申请key<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span><a href="http://lbs.tianditu.gov.cn/docs/#/sanwei/?id=%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">代码示例<ExternalLinkIcon/></a></span></a></h2>
<p>本示例将展示如何添加天地图的影像服务，国界服务，地形服务以及三维地名服务。</p>
<blockquote>
<p>注意：Cesium必须挂载在window对象上</p>
</blockquote>
<h3 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;title>天地图三维服务接入&lt;/title>
    &lt;script type="text/javascript" cesium="true" src="https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Cesium.js">&lt;/script>
    &lt;script type="text/javascript" cesium="true" src="https://api.tianditu.gov.cn/cdn/plugins/cesium/Cesium_ext_min.js">&lt;/script>
    &lt;script type="text/javascript" cesium="true" src="https://api.tianditu.gov.cn/cdn/plugins/cesium/long.min.js">&lt;/script>
    &lt;script type="text/javascript" cesium="true" src="https://api.tianditu.gov.cn/cdn/plugins/cesium/bytebuffer.min.js">&lt;/script>
    &lt;script type="text/javascript" cesium="true" src="https://api.tianditu.gov.cn/cdn/plugins/cesium/protobuf.min.js">&lt;/script>
    &lt;link rel="stylesheet" cesium="true" href="https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Widgets/widgets.css">
    &lt;style>
        html, body{
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        #cesiumContainer {
            width: 100%;
            height: 100%;
        }

        #cesiumContainer .cesium-viewer-bottom{
            display: none;
        }
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div id="cesiumContainer">&lt;/div>
&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javscript" tabindex="-1"><a class="header-anchor" href="#javscript"><span>Javscript</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;script>
    var token = '你申请的key';
    // 服务域名
    var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
    // 服务负载子域
    var subdomains=['0','1','2','3','4','5','6','7'];

    // cesium 初始化
    var viewer = new Cesium.Map('cesiumContainer', {
        shouldAnimate: true, //是否允许动画
        selectionIndicator: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        showRenderLoopErrors: false,
        shadows: false,
    });

    // 抗锯齿
    viewer.scene.fxaa = true;
    viewer.scene.postProcessStages.fxaa.enabled=false;
    // 水雾特效
    viewer.scene.globe.showGroundAtmosphere = true;
    // 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
    viewer.scene.screenSpaceCameraController.constrainedPitch = Cesium.Math.toRadians(-20);
    viewer.scene.screenSpaceCameraController.autoResetHeadingPitch = false;
    viewer.scene.screenSpaceCameraController.inertiaZoom = 0.5;
    viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50;
    viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [
        Cesium.CameraEventType.RIGHT_DRAG,
        Cesium.CameraEventType.WHEEL,
        Cesium.CameraEventType.PINCH,
    ];
    viewer.scene.screenSpaceCameraController.tiltEventTypes = [
        Cesium.CameraEventType.MIDDLE_DRAG,
        Cesium.CameraEventType.PINCH,
        {
            eventType: Cesium.CameraEventType.LEFT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
        },
        {
            eventType: Cesium.CameraEventType.RIGHT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
        },
    ];
    // 取消默认的双击事件
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    // 叠加影像服务
    var imgMap = new Cesium.UrlTemplateImageryProvider({
        url: tdtUrl + 'DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=' + token,
        subdomains: subdomains,
        tilingScheme : new Cesium.WebMercatorTilingScheme(),
        maximumLevel : 18
    });
    viewer.imageryLayers.addImageryProvider(imgMap); 

    // 叠加国界服务
    var iboMap = new Cesium.UrlTemplateImageryProvider({
        url: tdtUrl + 'DataServer?T=ibo_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=' + token,
        subdomains: subdomains,
        tilingScheme : new Cesium.WebMercatorTilingScheme(),
        maximumLevel : 10
    });
    viewer.imageryLayers.addImageryProvider(iboMap);

    // 叠加地形服务
    var terrainUrls = new Array();

    for (var i = 0; i &lt; subdomains.length; i++){
        var url = tdtUrl.replace('{s}', subdomains[i]) + 'mapservice/swdx?T=elv_c&amp;tk=' + token;
        terrainUrls.push(url);
    }

    var provider = new Cesium.GeoTerrainProvider({
        urls: terrainUrls
    });

    viewer.terrainProvider = provider;

    // 将三维球定位到中国
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 17850000),
        orientation: {
            heading :  Cesium.Math.toRadians(348.4202942851978),
            pitch : Cesium.Math.toRadians(-89.74026687972041),
            roll : Cesium.Math.toRadians(0)
        },
        complete:function callback() {
            // 定位完成之后的回调函数
        }
    });

    // 叠加三维地名服务
    var wtfs = new Cesium.GeoWTFS({
        viewer,
        //三维地名服务，使用wtfs服务
        subdomains:subdomains,
        metadata:{
            boundBox: {
                minX: -180,
                minY: -90,
                maxX: 180,
                maxY: 90
            },
            minLevel: 1,
            maxLevel: 20
        },
        depthTestOptimization: true,
        dTOElevation: 15000,
        dTOPitch: Cesium.Math.toRadians(-70),
        aotuCollide: true, //是否开启避让
        collisionPadding: [5, 10, 8, 5], //开启避让时，标注碰撞增加内边距，上、右、下、左
        serverFirstStyle: true, //服务端样式优先
        labelGraphics: {
            font:"28px sans-serif",
            fontSize: 28,
            fillColor:Cesium.Color.WHITE,
            scale: 0.5,
            outlineColor:Cesium.Color.BLACK,
            outlineWidth: 2,
            style:Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground:false,
            backgroundColor:Cesium.Color.RED,
            backgroundPadding:new Cesium.Cartesian2(10, 10),
            horizontalOrigin:Cesium.HorizontalOrigin.LEFT,
            verticalOrigin:Cesium.VerticalOrigin.TOP,
            eyeOffset:Cesium.Cartesian3.ZERO,
            pixelOffset: new Cesium.Cartesian2(5, 5),
            disableDepthTestDistance:undefined
        },
        billboardGraphics: {
            horizontalOrigin:Cesium.HorizontalOrigin.CENTER,
            verticalOrigin:Cesium.VerticalOrigin.CENTER,
            eyeOffset:Cesium.Cartesian3.ZERO,
            pixelOffset:Cesium.Cartesian2.ZERO,
            alignedAxis:Cesium.Cartesian3.ZERO,
            color:Cesium.Color.WHITE,
            rotation:0,
            scale:1,
            width:18,
            height:18,
            disableDepthTestDistance:undefined
        }
    });

    //三维地名服务，使用wtfs服务
    wtfs.getTileUrl = function(){
        return tdtUrl + 'mapservice/GetTiles?lxys={z},{x},{y}&amp;tk='+ token; 
    }

    // 三维图标服务
    wtfs.getIcoUrl = function(){
        return tdtUrl + 'mapservice/GetIcon?id={id}&amp;tk='+ token;
    }

    wtfs.initTDT([{"x":6,"y":1,"level":2,"boundBox":{"minX":90,"minY":0,"maxX":135,"maxY":45}},{"x":7,"y":1,"level":2,"boundBox":{"minX":135,"minY":0,"maxX":180,"maxY":45}},{"x":6,"y":0,"level":2,"boundBox":{"minX":90,"minY":45,"maxX":135,"maxY":90}},{"x":7,"y":0,"level":2,"boundBox":{"minX":135,"minY":45,"maxX":180,"maxY":90}},{"x":5,"y":1,"level":2,"boundBox":{"minX":45,"minY":0,"maxX":90,"maxY":45}},{"x":4,"y":1,"level":2,"boundBox":{"minX":0,"minY":0,"maxX":45,"maxY":45}},{"x":5,"y":0,"level":2,"boundBox":{"minX":45,"minY":45,"maxX":90,"maxY":90}},{"x":4,"y":0,"level":2,"boundBox":{"minX":0,"minY":45,"maxX":45,"maxY":90}},{"x":6,"y":2,"level":2,"boundBox":{"minX":90,"minY":-45,"maxX":135,"maxY":0}},{"x":6,"y":3,"level":2,"boundBox":{"minX":90,"minY":-90,"maxX":135,"maxY":-45}},{"x":7,"y":2,"level":2,"boundBox":{"minX":135,"minY":-45,"maxX":180,"maxY":0}},{"x":5,"y":2,"level":2,"boundBox":{"minX":45,"minY":-45,"maxX":90,"maxY":0}},{"x":4,"y":2,"level":2,"boundBox":{"minX":0,"minY":-45,"maxX":45,"maxY":0}},{"x":3,"y":1,"level":2,"boundBox":{"minX":-45,"minY":0,"maxX":0,"maxY":45}},{"x":3,"y":0,"level":2,"boundBox":{"minX":-45,"minY":45,"maxX":0,"maxY":90}},{"x":2,"y":0,"level":2,"boundBox":{"minX":-90,"minY":45,"maxX":-45,"maxY":90}},{"x":0,"y":1,"level":2,"boundBox":{"minX":-180,"minY":0,"maxX":-135,"maxY":45}},{"x":1,"y":0,"level":2,"boundBox":{"minX":-135,"minY":45,"maxX":-90,"maxY":90}},{"x":0,"y":0,"level":2,"boundBox":{"minX":-180,"minY":45,"maxX":-135,"maxY":90}}]);

&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2>
<iframe src="http://api.tianditu.gov.cn/cdn/demo/sanwei/index.html" width="100%" height="500px" style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box; font-size: 15px; border: 1px solid rgb(238, 238, 238); width: 1px; min-width: 100%; margin: 1em 0px; color: rgb(52, 73, 94); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></iframe></div></template>


