
if (typeof gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper !== "undefined") {
  gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper = {};


gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.userFunc0x139efc8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Id = eventsFunctionContext.getArgument("Id");
const Color = eventsFunctionContext.getArgument("Color") || "0;0;0";
const RGB = Color.split(";");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
if (!Obj.geometry) {
    console.warn("Geometry not found: " + Id);
    return;
}
//
// BoxHelper では子まで含んでしまう
let Box3Helper = gdjs.__WithThreeJS.get("SearchObject")(Id + "_Box3Helper");
if (Box3Helper) {
    Box3Helper.box.copy(Obj.geometry.boundingBox).applyMatrix4(Obj.matrixWorld);
} else {
    Obj.updateMatrixWorld(true);//シーン開始直後のみ必要だが一応全て最初に実行する
    const Box3 = new THREE.Box3();
    Box3.copy(Obj.geometry.boundingBox).applyMatrix4(Obj.matrixWorld);
    Box3Helper = new THREE.Box3Helper(Box3, `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`);
    Box3Helper.name = Id + "_Box3Helper";
    Box3Helper.layers.set(1);
    Scene.add(Box3Helper);
}


};
gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.userFunc0x139efc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.func = function(runtimeScene, Id, Color, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__UpdateBoundingBoxHelper.registeredGdjsCallbacks = [];