
if (typeof gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera !== "undefined") {
  gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera = {};


gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.userFunc0xc28f18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Raycaster")) {
    gdjs.__WithThreeJS.set("Raycaster", new THREE.Raycaster());
    gdjs.__WithThreeJS.set("RaycastResult", new Array());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Raycaster = gdjs.__WithThreeJS.get("Raycaster");
//
const Id = eventsFunctionContext.getArgument("Id");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(Id);
const ScreenX = eventsFunctionContext.getArgument("ScreenX");
const ScreenY = eventsFunctionContext.getArgument("ScreenY");
const ScreenPoint = new THREE.Vector2();
//
Camera.updateWorldMatrix(false, false);//必要
const T = Camera.userData.CameraStatus.T;
const B = Camera.userData.CameraStatus.B;
const L = Camera.userData.CameraStatus.L;
const R = Camera.userData.CameraStatus.R;
const GameResolutionWidth = runtimeScene.getGame().getGameResolutionWidth();
const GameResolutionHeight = runtimeScene.getGame().getGameResolutionHeight();
const ScreenResolutionWidth = GameResolutionWidth * (R - L);
const ScreenResolutionHeight = GameResolutionHeight * (T - B);
const CameraScreenX = ScreenX - (L * GameResolutionWidth);
const CameraScreenY = ScreenY - ((1 - T) * GameResolutionHeight);
//
ScreenPoint.x = (CameraScreenX / ScreenResolutionWidth) * 2 - 1;
ScreenPoint.y = -(CameraScreenY / ScreenResolutionHeight) * 2 + 1;
//
Raycaster.setFromCamera(ScreenPoint, Camera);
Raycaster.far = Camera.far;
Raycaster.layers.enable(0);
Raycaster.layers.enable(2);
gdjs.__WithThreeJS.set("RaycastResult", Raycaster.intersectObjects(Scene.children, true));


};
gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.userFunc0xc28f18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.func = function(runtimeScene, Id, ScreenX, ScreenY, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "ScreenX") return ScreenX;
if (argName === "ScreenY") return ScreenY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__RaycastFrom3DCamera.registeredGdjsCallbacks = [];