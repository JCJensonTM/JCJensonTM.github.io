
if (typeof gdjs.evtsExt__WithThreeJS__Create3DSceneV2 !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DSceneV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DSceneV2 = {};


gdjs.evtsExt__WithThreeJS__Create3DSceneV2.userFunc0xa51180 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// console.log("Three.js create scene");
// v5.1.162 以上で Built-In 3D がゲームに含まれている
const BuiltIn3D = gdjs.__WithThreeJS.get("BuiltIn3D");
if (BuiltIn3D) {
  // runtimescene-pixi-renderer.ts カスタム
  console.log("[WithThreeJS] Built-in 3D is enabled.");
  if (!runtimeScene.getRenderer()._threeRenderer._render_WithThreeJS) {
    runtimeScene.getRenderer()._threeRenderer._render_WithThreeJS = runtimeScene.getRenderer()._threeRenderer.render;
    runtimeScene.getRenderer()._threeRenderer.render = function(S, C) {
      // Three.js のレンダラーが利用される場合の透過設定
      runtimeScene.getLayer("").getRenderer().getThreeScene().background = null;
      this._render_WithThreeJS(S, C);
    }
  }
  if (!runtimeScene.getRenderer().getPIXIRenderer()._clear_WithThreeJS) {
    runtimeScene.getRenderer().getPIXIRenderer()._clear_WithThreeJS = runtimeScene.getRenderer().getPIXIRenderer().clear;
    runtimeScene.getRenderer().getPIXIRenderer().clear = function() {
      // PixiJS のレンダラーが利用される場合の透過設定
      runtimeScene.setBackgroundColor(0,0,0);
      if (this.background) {
        this.background.alpha = 0;// For PixiJS 7
      } else {
        this.backgroundAlpha = 0;// For PixiJS 6
      }
      this._clear_WithThreeJS();
    }
  }
} else {
  console.log("[WithThreeJS] Built-in 3D is disabled.");
  // 警告表示
  let AlertElement = document.createElement('div');
  AlertElement.innerHTML = `<strong>Warning from WithThreeJS</strong><br>
  Please add an "Enable WithThreeJS" object to a scene.<br>
  For more information, <a href="https://pandako.itch.io/with-threejs-extension-for-gdevelop/devlog/631434/about-the-warning-please-add-an-enable-withthreejs-object-to-a-scene" target="_blank" style="color:yellow">please click here</a>.`;
  AlertElement.style.position = "absolute";
  AlertElement.style.zIndex = 999;
  AlertElement.style.top = 0;
  AlertElement.style.left = 0;
  AlertElement.style.backgroundColor = "red";
  AlertElement.style.color = "white";
  AlertElement.style.padding = "0.5em";
  document.body.appendChild(AlertElement);
  return;
}
//
const ProjectionScale = eventsFunctionContext.getArgument("ProjectionScale") || 1;
let ViewMode = eventsFunctionContext.getArgument("ViewMode");
if (ViewMode !== "Top Down" && ViewMode !== "Side") {
  ViewMode = "Top Down";
}
gdjs.__WithThreeJS.set("ProjectionScale", ProjectionScale);
gdjs.__WithThreeJS.set("ViewMode", ViewMode);
//
const Canvas2D = document.getElementsByTagName("canvas")[0];
gdjs.__WithThreeJS.set("Canvas2D", Canvas2D);
const Rect = Canvas2D.getBoundingClientRect();
//
let Scene;
if (gdjs.__WithThreeJS.has("Scene")) {
  Scene = gdjs.__WithThreeJS.get("Scene");
} else {
  Scene = new THREE.Scene();
  gdjs.__WithThreeJS.set("Scene", Scene);
}
Scene.name ="Scene";
if (!gdjs.__WithThreeJS.get("SceneIsReady")) {
  gdjs.__WithThreeJS.set("SceneIsReady", runtimeScene.getName());
}
//
const BG_RGB = eventsFunctionContext.getArgument("BackGroundColor") || "0;0;0";
const BG_Img = eventsFunctionContext.getArgument("BackGroundImage");
const Ambient_RGB = eventsFunctionContext.getArgument("AmbientColor") || "255;255;255";
const FogColor = eventsFunctionContext.getArgument("FogColor") || "";
const FogNear = eventsFunctionContext.getArgument("FogNear") || 1;
const FogFar = eventsFunctionContext.getArgument("FogFar") || 1000;
//
if (Scene.background) {
  if (Scene.background.isTexture) {
    Scene.background.dispose();
    Scene.background = null;
  }
}
//
if (BG_Img !== "") {
  const Resource = runtimeScene.getGame().getImageManager().getPIXITexture(BG_Img).baseTexture.resource;
  const ResourceWidth = Resource.width;
  const ResourceHeight = Resource.height;
  const BGTexture = new THREE.Texture();
  BGTexture.image = Resource.source;
  if (ResourceWidth == ResourceHeight * 2) {
    BGTexture.mapping = THREE.EquirectangularReflectionMapping;
  }
  BGTexture.colorSpace = THREE.SRGBColorSpace;
  BGTexture.needsUpdate = true;//必須
  Scene.background = BGTexture;
} else {
  const RGB = gdjs.rgbOrHexToRGBColor(BG_RGB);
  Scene.background = new THREE.Color(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`);
}
//
let AmbientLight;
const AmbientColor = Ambient_RGB.split(";");
if (gdjs.__WithThreeJS.has("AmbientLight")) {
  AmbientLight = gdjs.__WithThreeJS.get("AmbientLight");
} else {
  AmbientLight = new THREE.AmbientLight();
  AmbientLight.intensity = gdjs.__WithThreeJS.get("LightIntensityScale");// Three.js r160
  gdjs.__WithThreeJS.set("AmbientLight", AmbientLight);
}
Scene.add(AmbientLight);
AmbientLight.color.set(`rgb(${AmbientColor[0]}, ${AmbientColor[1]}, ${AmbientColor[2]})`);
//
if (FogColor === "") {
  Scene.fog = null;
} else {
  const RGB = FogColor.split(";");
  Scene.fog = new THREE.Fog(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, FogNear, FogFar);
  // Scene.fog = new THREE.FogExp2("rgb(0,0,0)", 0.005);
}
//
// 複数カメラ
let AllCams, Camera1, Camera2, Camera3, Camera4;
if (gdjs.__WithThreeJS.has("AllCams")) {
  AllCams = gdjs.__WithThreeJS.get("AllCams");
  Camera1 = AllCams.get("Camera1");
  Camera2 = AllCams.get("Camera2");
  Camera3 = AllCams.get("Camera3");
  Camera4 = AllCams.get("Camera4");
} else {
  AllCams = new Map();
  Camera1 = new THREE.PerspectiveCamera();
  Camera2 = new THREE.PerspectiveCamera();
  Camera3 = new THREE.PerspectiveCamera();
  Camera4 = new THREE.PerspectiveCamera();
  AllCams.set("Camera1", Camera1);
  AllCams.set("Camera2", Camera2);
  AllCams.set("Camera3", Camera3);
  AllCams.set("Camera4", Camera4);
  gdjs.__WithThreeJS.set("AllCams", AllCams);
}
for (const [K, V] of AllCams) {
  V.name = K;
  V.fov = 50;
  V.aspect = Rect.width / Rect.height;
  V.near = 0.1;
  V.far = 10000;//1000
  V.position.set(0, 0, 0);
  V.rotation.set(0, 0, 0);
  V.zoom = 1;
  V.layers.enable(0);
  V.layers.enable(1);
  V.updateProjectionMatrix();//必須
  V.userData.CameraStatus = {};
  V.userData.CameraStatus.Active = false;
  V.userData.CameraStatus.T = 1;
  V.userData.CameraStatus.B = 0;
  V.userData.CameraStatus.L = 0;
  V.userData.CameraStatus.R = 1;
  V.userData.CameraStatus.X = 0;
  V.userData.CameraStatus.Y = 0;
  V.userData.CameraStatus.W = Rect.width;
  V.userData.CameraStatus.H = Rect.height;
}
Camera1.userData.CameraStatus.Active = true;
//
let Listener;
if (gdjs.__WithThreeJS.has("Listener")) {
  Listener = gdjs.__WithThreeJS.get("Listener");
} else {
  Listener = new THREE.AudioListener();
  gdjs.__WithThreeJS.set("Listener", Listener);
}
Listener.name ="Listener";
Camera1.add(Listener);
//
let Renderer;
if (gdjs.__WithThreeJS.has("Renderer")) {
  Renderer = gdjs.__WithThreeJS.get("Renderer");
} else {
  Renderer = new THREE.WebGLRenderer();
  document.body.appendChild( Renderer.domElement );
  gdjs.__WithThreeJS.set("Renderer", Renderer);
}
Renderer.setPixelRatio(window.devicePixelRatio);
// Renderer.setSize( window.innerWidth, window.innerHeight );
Renderer.setSize(Rect.width, Rect.height);
Renderer.domElement.id = "WithThreeJS_Canvas";
Renderer.domElement.style.position = "absolute";
Renderer.domElement.style.zIndex = -99;
Renderer.domElement.style.left = Rect.left + "px";
Renderer.domElement.style.top = Rect.top + "px";
Renderer.setScissorTest(true);
Renderer.shadowMap.enabled = false;
Renderer.shadowMap.type = THREE.PCFSoftShadowMap;//THREE.BasicShadowMap THREE.PCFShadowMap THREE.PCFSoftShadowMap THREE.VSMShadowMap
// Renderer.outputColorSpace = THREE.LinearSRGBColorSpace;//NoColorSpace SRGBColorSpace LinearSRGBColorSpace
//
let AnimationMixer;
if (gdjs.__WithThreeJS.has("AnimationMixer")) {
  AnimationMixer = gdjs.__WithThreeJS.get("AnimationMixer");
} else {
  AnimationMixer = new THREE.AnimationMixer(Scene);
  gdjs.__WithThreeJS.set("AnimationMixer", AnimationMixer);
}
//
let AnimationActions;
if (gdjs.__WithThreeJS.has("AnimationActions")) {
  AnimationActions = gdjs.__WithThreeJS.get("AnimationActions");
} else {
  AnimationActions = new Map();
  gdjs.__WithThreeJS.set("AnimationActions", AnimationActions);
}
//
// Resize
window.addEventListener('resize', () => {
  const Rect = Canvas2D.getBoundingClientRect();

  // レンダラーのサイズを調整する
  Renderer.setPixelRatio(window.devicePixelRatio);
  Renderer.setSize(Rect.width, Rect.height);

  // カメラのアスペクト比を正す
  // Camera.aspect = Rect.width / Rect.height;
  // Camera.updateProjectionMatrix();
  for (const [K, V] of AllCams) {
    const T = V.userData.CameraStatus.T;
    const B = V.userData.CameraStatus.B;
    const L = V.userData.CameraStatus.L;
    const R = V.userData.CameraStatus.R;
    const X = V.userData.CameraStatus.X = L * Rect.width;
    const Y = V.userData.CameraStatus.Y = B * Rect.height;
    const W = V.userData.CameraStatus.W = (R - L) * Rect.width;
    const H = V.userData.CameraStatus.H = (T - B) * Rect.height;
    V.aspect = W / H;
    V.updateProjectionMatrix();
  }

  // CSS
  Renderer.domElement.style.position = "absolute";
  Renderer.domElement.style.zIndex = -99;
  Renderer.domElement.style.left = Rect.left + "px";
  Renderer.domElement.style.top = Rect.top + "px";
});



};
gdjs.evtsExt__WithThreeJS__Create3DSceneV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DSceneV2.userFunc0xa51180(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DSceneV2.func = function(runtimeScene, BackGroundColor, BackGroundImage, AmbientColor, FogColor, FogNear, FogFar, ProjectionScale, ViewMode, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "BackGroundColor") return BackGroundColor;
if (argName === "BackGroundImage") return BackGroundImage;
if (argName === "AmbientColor") return AmbientColor;
if (argName === "FogColor") return FogColor;
if (argName === "FogNear") return FogNear;
if (argName === "FogFar") return FogFar;
if (argName === "ProjectionScale") return ProjectionScale;
if (argName === "ViewMode") return ViewMode;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DSceneV2.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Create3DSceneV2.registeredGdjsCallbacks = [];