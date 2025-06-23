
if (typeof gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras !== "undefined") {
  gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras = {};


gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.userFunc0x13505d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Canvas2D = gdjs.__WithThreeJS.get("Canvas2D");
const Rect = Canvas2D.getBoundingClientRect();
const AllCams = gdjs.__WithThreeJS.get("AllCams");
const Arguments = {};
Arguments.Camera1 = {};
Arguments.Camera1.Active = true;
Arguments.Camera1.Top = eventsFunctionContext.getArgument("Top1") || 0;
Arguments.Camera1.Bottom = eventsFunctionContext.getArgument("Bottom1") || 1;
Arguments.Camera1.Left = eventsFunctionContext.getArgument("Left1") || 0;
Arguments.Camera1.Right = eventsFunctionContext.getArgument("Right1") || 1;
Arguments.Camera2 = {};
Arguments.Camera2.Active = eventsFunctionContext.getArgument("Active2") || false;
Arguments.Camera2.Top = eventsFunctionContext.getArgument("Top2") || 0;
Arguments.Camera2.Bottom = eventsFunctionContext.getArgument("Bottom2") || 1;
Arguments.Camera2.Left = eventsFunctionContext.getArgument("Left2") || 0;
Arguments.Camera2.Right = eventsFunctionContext.getArgument("Right2") || 1;
Arguments.Camera3 = {};
Arguments.Camera3.Active = eventsFunctionContext.getArgument("Active3") || false;
Arguments.Camera3.Top = eventsFunctionContext.getArgument("Top3") || 0;
Arguments.Camera3.Bottom = eventsFunctionContext.getArgument("Bottom3") || 1;
Arguments.Camera3.Left = eventsFunctionContext.getArgument("Left3") || 0;
Arguments.Camera3.Right = eventsFunctionContext.getArgument("Right3") || 1;
Arguments.Camera4 = {};
Arguments.Camera4.Active = eventsFunctionContext.getArgument("Active4") || false;
Arguments.Camera4.Top = eventsFunctionContext.getArgument("Top4") || 0;
Arguments.Camera4.Bottom = eventsFunctionContext.getArgument("Bottom4") || 1;
Arguments.Camera4.Left = eventsFunctionContext.getArgument("Left4") || 0;
Arguments.Camera4.Right = eventsFunctionContext.getArgument("Right4") || 1;
//
for (const [K, V] of AllCams) {
    const C = Arguments[K];
    V.userData.CameraStatus.Active = C.Active;
    const T = V.userData.CameraStatus.T = 1 - C.Top;
    const B = V.userData.CameraStatus.B = 1 - C.Bottom;
    const L = V.userData.CameraStatus.L = C.Left;
    const R = V.userData.CameraStatus.R = C.Right;
    V.userData.CameraStatus.X = L * Rect.width;
    V.userData.CameraStatus.Y = B * Rect.height;
    const W = V.userData.CameraStatus.W = (R - L) * Rect.width;
    const H = V.userData.CameraStatus.H = (T - B) * Rect.height;
    V.aspect = W / H;
    V.updateProjectionMatrix();
}


};
gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.userFunc0x13505d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.func = function(runtimeScene, Top1, Bottom1, Left1, Right1, Active2, Top2, Bottom2, Left2, Right2, Active3, Top3, Bottom3, Left3, Right3, Active4, Top4, Bottom4, Left4, Right4, parentEventsFunctionContext) {
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
if (argName === "Top1") return Top1;
if (argName === "Bottom1") return Bottom1;
if (argName === "Left1") return Left1;
if (argName === "Right1") return Right1;
if (argName === "Active2") return Active2;
if (argName === "Top2") return Top2;
if (argName === "Bottom2") return Bottom2;
if (argName === "Left2") return Left2;
if (argName === "Right2") return Right2;
if (argName === "Active3") return Active3;
if (argName === "Top3") return Top3;
if (argName === "Bottom3") return Bottom3;
if (argName === "Left3") return Left3;
if (argName === "Right3") return Right3;
if (argName === "Active4") return Active4;
if (argName === "Top4") return Top4;
if (argName === "Bottom4") return Bottom4;
if (argName === "Left4") return Left4;
if (argName === "Right4") return Right4;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__SetupMultiple3DCameras.registeredGdjsCallbacks = [];