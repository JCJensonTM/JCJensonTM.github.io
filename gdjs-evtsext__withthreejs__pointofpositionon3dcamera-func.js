
if (typeof gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera !== "undefined") {
  gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera = {};


gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.userFunc0xeceea0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const CameraId = eventsFunctionContext.getArgument("CameraId");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(CameraId);
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const Axis = eventsFunctionContext.getArgument("Axis");
//
const WorldPosition = new THREE.Vector3(X, Y, Z);
const Project = WorldPosition.project(Camera);
//
const T = Camera.userData.CameraStatus.T;
const B = Camera.userData.CameraStatus.B;
const L = Camera.userData.CameraStatus.L;
const R = Camera.userData.CameraStatus.R;
const GameResolutionWidth = runtimeScene.getGame().getGameResolutionWidth();
const GameResolutionHeight = runtimeScene.getGame().getGameResolutionHeight();
const ScreenResolutionWidth = GameResolutionWidth * (R - L);
const ScreenResolutionHeight = GameResolutionHeight * (T - B);
const CameraScreenX = L * GameResolutionWidth;
const CameraScreenY = (1 - T) * GameResolutionHeight;
//
const PointX = CameraScreenX + ((ScreenResolutionWidth / 2) * (Project.x + 1.0));
const PointY = CameraScreenY + ((ScreenResolutionHeight / 2) * ((Project.y * -1) + 1.0));
//
if (Axis == "X") {
    eventsFunctionContext.returnValue = PointX;
} else {
    eventsFunctionContext.returnValue = PointY;
}


};
gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.userFunc0xeceea0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.func = function(runtimeScene, CameraId, X, Y, Z, Axis, parentEventsFunctionContext) {
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
if (argName === "CameraId") return CameraId;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__PointOfPositionOn3DCamera.registeredGdjsCallbacks = [];