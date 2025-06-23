
if (typeof gdjs.evtsExt__WithThreeJS__Lerp3DObject !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Lerp3DObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Lerp3DObject = {};


gdjs.evtsExt__WithThreeJS__Lerp3DObject.userFunc0x13b7ff0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const TargetId = eventsFunctionContext.getArgument("TargetId");
const FactorP = eventsFunctionContext.getArgument("FactorP");
const FactorR = eventsFunctionContext.getArgument("FactorR");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
const TargetObj = gdjs.__WithThreeJS.get("SearchObject")(TargetId);
if (!Obj || !TargetObj) {
    console.warn("3D Object not found: " + Id + " or " + TargetId);
    return;
}
//
const Parent = Obj.parent;
Scene.attach(Obj);
if (FactorP) {
    const WPos = new THREE.Vector3();
    TargetObj.getWorldPosition(WPos);
    Obj.position.lerp(WPos, FactorP);
}
if (FactorR) {
    const WQua = new THREE.Quaternion();
    TargetObj.getWorldQuaternion(WQua);
    Obj.quaternion.slerp(WQua, FactorR);
}
Parent.attach(Obj);


};
gdjs.evtsExt__WithThreeJS__Lerp3DObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Lerp3DObject.userFunc0x13b7ff0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Lerp3DObject.func = function(runtimeScene, Id, TargetId, FactorP, FactorR, parentEventsFunctionContext) {
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


gdjs.evtsExt__WithThreeJS__Lerp3DObject.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Lerp3DObject.registeredGdjsCallbacks = [];