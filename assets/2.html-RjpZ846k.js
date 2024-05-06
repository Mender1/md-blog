import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as u,c as l,a as e,b as i,d as t,f as a}from"./app-jd3yk316.js";const r={},d={id:"三维服务",tabindex:"-1"},v={class:"header-anchor",href:"#三维服务"},m={href:"http://lbs.tianditu.gov.cn/docs/#/sanwei/?id=%E4%B8%89%E7%BB%B4%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"},c={href:"https://console.tianditu.gov.cn/",target:"_blank",rel:"noopener noreferrer"},q={id:"代码示例",tabindex:"-1"},b={class:"header-anchor",href:"#代码示例"},p={href:"http://lbs.tianditu.gov.cn/docs/#/sanwei/?id=%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>本示例将展示如何添加天地图的影像服务，国界服务，地形服务以及三维地名服务。</p><blockquote><p>注意：Cesium必须挂载在window对象上</p></blockquote><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;title&gt;天地图三维服务接入&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; cesium=&quot;true&quot; src=&quot;https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Cesium.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; cesium=&quot;true&quot; src=&quot;https://api.tianditu.gov.cn/cdn/plugins/cesium/Cesium_ext_min.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; cesium=&quot;true&quot; src=&quot;https://api.tianditu.gov.cn/cdn/plugins/cesium/long.min.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; cesium=&quot;true&quot; src=&quot;https://api.tianditu.gov.cn/cdn/plugins/cesium/bytebuffer.min.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot; cesium=&quot;true&quot; src=&quot;https://api.tianditu.gov.cn/cdn/plugins/cesium/protobuf.min.js&quot;&gt;&lt;/script&gt;
    &lt;link rel=&quot;stylesheet&quot; cesium=&quot;true&quot; href=&quot;https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Widgets/widgets.css&quot;&gt;
    &lt;style&gt;
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
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;cesiumContainer&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javscript" tabindex="-1"><a class="header-anchor" href="#javscript"><span>Javscript</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;script&gt;
    var token = &#39;你申请的key&#39;;
    // 服务域名
    var tdtUrl = &#39;https://t{s}.tianditu.gov.cn/&#39;;
    // 服务负载子域
    var subdomains=[&#39;0&#39;,&#39;1&#39;,&#39;2&#39;,&#39;3&#39;,&#39;4&#39;,&#39;5&#39;,&#39;6&#39;,&#39;7&#39;];

    // cesium 初始化
    var viewer = new Cesium.Map(&#39;cesiumContainer&#39;, {
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
        url: tdtUrl + &#39;DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&#39; + token,
        subdomains: subdomains,
        tilingScheme : new Cesium.WebMercatorTilingScheme(),
        maximumLevel : 18
    });
    viewer.imageryLayers.addImageryProvider(imgMap); 

    // 叠加国界服务
    var iboMap = new Cesium.UrlTemplateImageryProvider({
        url: tdtUrl + &#39;DataServer?T=ibo_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&#39; + token,
        subdomains: subdomains,
        tilingScheme : new Cesium.WebMercatorTilingScheme(),
        maximumLevel : 10
    });
    viewer.imageryLayers.addImageryProvider(iboMap);

    // 叠加地形服务
    var terrainUrls = new Array();

    for (var i = 0; i &lt; subdomains.length; i++){
        var url = tdtUrl.replace(&#39;{s}&#39;, subdomains[i]) + &#39;mapservice/swdx?T=elv_c&amp;tk=&#39; + token;
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
            font:&quot;28px sans-serif&quot;,
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
        return tdtUrl + &#39;mapservice/GetTiles?lxys={z},{x},{y}&amp;tk=&#39;+ token; 
    }

    // 三维图标服务
    wtfs.getIcoUrl = function(){
        return tdtUrl + &#39;mapservice/GetIcon?id={id}&amp;tk=&#39;+ token;
    }

    wtfs.initTDT([{&quot;x&quot;:6,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:90,&quot;minY&quot;:0,&quot;maxX&quot;:135,&quot;maxY&quot;:45}},{&quot;x&quot;:7,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:135,&quot;minY&quot;:0,&quot;maxX&quot;:180,&quot;maxY&quot;:45}},{&quot;x&quot;:6,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:90,&quot;minY&quot;:45,&quot;maxX&quot;:135,&quot;maxY&quot;:90}},{&quot;x&quot;:7,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:135,&quot;minY&quot;:45,&quot;maxX&quot;:180,&quot;maxY&quot;:90}},{&quot;x&quot;:5,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:45,&quot;minY&quot;:0,&quot;maxX&quot;:90,&quot;maxY&quot;:45}},{&quot;x&quot;:4,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:0,&quot;minY&quot;:0,&quot;maxX&quot;:45,&quot;maxY&quot;:45}},{&quot;x&quot;:5,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:45,&quot;minY&quot;:45,&quot;maxX&quot;:90,&quot;maxY&quot;:90}},{&quot;x&quot;:4,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:0,&quot;minY&quot;:45,&quot;maxX&quot;:45,&quot;maxY&quot;:90}},{&quot;x&quot;:6,&quot;y&quot;:2,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:90,&quot;minY&quot;:-45,&quot;maxX&quot;:135,&quot;maxY&quot;:0}},{&quot;x&quot;:6,&quot;y&quot;:3,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:90,&quot;minY&quot;:-90,&quot;maxX&quot;:135,&quot;maxY&quot;:-45}},{&quot;x&quot;:7,&quot;y&quot;:2,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:135,&quot;minY&quot;:-45,&quot;maxX&quot;:180,&quot;maxY&quot;:0}},{&quot;x&quot;:5,&quot;y&quot;:2,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:45,&quot;minY&quot;:-45,&quot;maxX&quot;:90,&quot;maxY&quot;:0}},{&quot;x&quot;:4,&quot;y&quot;:2,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:0,&quot;minY&quot;:-45,&quot;maxX&quot;:45,&quot;maxY&quot;:0}},{&quot;x&quot;:3,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-45,&quot;minY&quot;:0,&quot;maxX&quot;:0,&quot;maxY&quot;:45}},{&quot;x&quot;:3,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-45,&quot;minY&quot;:45,&quot;maxX&quot;:0,&quot;maxY&quot;:90}},{&quot;x&quot;:2,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-90,&quot;minY&quot;:45,&quot;maxX&quot;:-45,&quot;maxY&quot;:90}},{&quot;x&quot;:0,&quot;y&quot;:1,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-180,&quot;minY&quot;:0,&quot;maxX&quot;:-135,&quot;maxY&quot;:45}},{&quot;x&quot;:1,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-135,&quot;minY&quot;:45,&quot;maxX&quot;:-90,&quot;maxY&quot;:90}},{&quot;x&quot;:0,&quot;y&quot;:0,&quot;level&quot;:2,&quot;boundBox&quot;:{&quot;minX&quot;:-180,&quot;minY&quot;:45,&quot;maxX&quot;:-135,&quot;maxY&quot;:90}}]);

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2><iframe src="http://api.tianditu.gov.cn/cdn/demo/sanwei/index.html" width="100%" height="500px" style="-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);text-size-adjust:none;box-sizing:border-box;font-size:15px;border:1px solid rgb(238, 238, 238);width:1px;min-width:100%;margin:1em 0px;color:rgb(52, 73, 94);font-family:&quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-indent:0px;text-transform:none;widows:2;word-spacing:0px;-webkit-text-stroke-width:0px;white-space:normal;background-color:rgb(255, 255, 255);text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;"></iframe>`,8);function x(g,C){const n=o("ExternalLinkIcon");return u(),l("div",null,[e("h1",d,[e("a",v,[e("span",null,[e("a",m,[i("三维服务"),t(n)])])])]),e("blockquote",null,[e("p",null,[i("天地图三维地名服务和地形服务需要利用 cesium 开源三维地球API与天地图扩展插件共同使用，目前支持cesuim1.108。天地图三维地名服务和三维地形服务对所有用户开放。使用本组服务之前，需要"),e("a",c,[i("申请key"),t(n)])])]),e("h2",q,[e("a",b,[e("span",null,[e("a",p,[i("代码示例"),t(n)])])])]),h])}const w=s(r,[["render",x],["__file","2.html.vue"]]),T=JSON.parse('{"path":"/front/Cesium/2.html","title":"三维服务","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-02-15T00:00:00.000Z","category":["Cesium","天地图"],"tag":["3D地图"],"editLink":false,"description":"三维服务 天地图三维地名服务和地形服务需要利用 cesium 开源三维地球API与天地图扩展插件共同使用，目前支持cesuim1.108。天地图三维地名服务和三维地形服务对所有用户开放。使用本组服务之前，需要申请key 代码示例 本示例将展示如何添加天地图的影像服务，国界服务，地形服务以及三维地名服务。 注意：Cesium必须挂载在window对象上 ...","head":[["meta",{"property":"og:url","content":"https://mender1.github.io/md-blog/md-blog/front/Cesium/2.html"}],["meta",{"property":"og:site_name","content":"闷豆的笔记"}],["meta",{"property":"og:title","content":"三维服务"}],["meta",{"property":"og:description","content":"三维服务 天地图三维地名服务和地形服务需要利用 cesium 开源三维地球API与天地图扩展插件共同使用，目前支持cesuim1.108。天地图三维地名服务和三维地形服务对所有用户开放。使用本组服务之前，需要申请key 代码示例 本示例将展示如何添加天地图的影像服务，国界服务，地形服务以及三维地名服务。 注意：Cesium必须挂载在window对象上 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T08:01:56.000Z"}],["meta",{"property":"article:author","content":"Mr.闷豆"}],["meta",{"property":"article:tag","content":"3D地图"}],["meta",{"property":"article:published_time","content":"2024-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T08:01:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三维服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T08:01:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.闷豆\\",\\"url\\":\\"https://mender1.github.io/md-blog/\\"}]}"]]},"headers":[{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[{"level":3,"title":"HTML","slug":"html","link":"#html","children":[]},{"level":3,"title":"Javscript","slug":"javscript","link":"#javscript","children":[]}]},{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]}],"git":{"createdTime":1714468187000,"updatedTime":1714982516000,"contributors":[{"name":"Yuanzz","email":"1149772382@qq.com","commits":1},{"name":"yuanzz","email":"1149772382@qq.com","commits":1}]},"readingTime":{"minutes":3.93,"words":1179},"filePathRelative":"front/Cesium/2.md","localizedDate":"2024年2月15日","excerpt":"\\n<blockquote>\\n<p>天地图三维地名服务和地形服务需要利用 cesium 开源三维地球API与天地图扩展插件共同使用，目前支持cesuim1.108。天地图三维地名服务和三维地形服务对所有用户开放。使用本组服务之前，需要<a href=\\"https://console.tianditu.gov.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">申请key</a></p>\\n</blockquote>\\n<h2><a class=\\"header-anchor\\" href=\\"#代码示例\\"><span></span></a><a href=\\"http://lbs.tianditu.gov.cn/docs/#/sanwei/?id=%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">代码示例</a></h2>","autoDesc":true}');export{w as comp,T as data};
