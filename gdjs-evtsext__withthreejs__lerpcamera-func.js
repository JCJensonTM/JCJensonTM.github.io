
if (typeof gdjs.evtsExt__WithThreeJS__LerpCamera !== "undefined") {
  gdjs.evtsExt__WithThreeJS__LerpCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__LerpCamera = {};


gdjs.evtsExt__WithThreeJS__LerpCamera.userFunc0x148fff0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(Id);
const TargetId = eventsFunctionContext.getArgument("TargetId");
const FactorP = eventsFunctionContext.getArgument("FactorP");
const FactorR = eventsFunctionContext.getArgument("FactorR");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(TargetId);
if (!Obj) {
    console.warn("3D Object not found: " + TargetId);
    return;
}
//
if (FactorP) {
    const WPos = new THREE.Vector3();
    Obj.getWorldPosition(WPos);
    Camera.position.lerp(WPos, FactorP);
}
if (FactorR) {
    const WQua = new THREE.Quaternion();
    Obj.getWorldQuaternion(WQua);
    Camera.quaternion.slerp(WQua, FactorR);
}


};
gdjs.evtsExt__WithThreeJS__LerpCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__LerpCamera.userFunc0x148fff0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LerpCamera.func = function(runtimeScene, Id, TargetId, FactorP, FactorR, parentEventsFunctionContext) {
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
if (argName === "TargetId") return TargetId;
if (argName === "FactorP") return FactorP;
if (argName === "FactorR") return FactorR;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__LerpCamera.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__LerpCamera.registeredGdjsCallbacks = [];