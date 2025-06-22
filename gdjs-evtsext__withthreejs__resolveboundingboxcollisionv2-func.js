
if (typeof gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2 !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2 = {};


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.userFunc0x19264a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const TargetId = eventsFunctionContext.getArgument("TargetId");
const Unmoved = eventsFunctionContext.getArgument("Unmoved");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
const TargetObj = gdjs.__WithThreeJS.get("SearchObject")(TargetId);
if (!Obj || !TargetObj) {
    console.warn("3D Object not found: " + Id + " or " + TargetId);
    return;
}
//
const BoundingBoxCollisionResult = gdjs.__WithThreeJS.get("SetBoundingBoxCollisionResult")(Obj, TargetObj);
const Move3 = new THREE.Vector3(BoundingBoxCollisionResult.MoveX, BoundingBoxCollisionResult.MoveY, BoundingBoxCollisionResult.MoveZ);
if (Unmoved) {
    const WorldPosition = new THREE.Vector3();
    Obj.getWorldPosition(WorldPosition);
    WorldPosition.add(Move3);
    Obj.position.copy(Obj.parent.worldToLocal(WorldPosition));
} else {
    Move3.divideScalar(2);
    const Move3Neg = Move3.clone().negate();
    //
    const WorldPosition1 = new THREE.Vector3();
    const WorldPosition2 = new THREE.Vector3();
    Obj.getWorldPosition(WorldPosition1);
    TargetObj.getWorldPosition(WorldPosition2);
    WorldPosition1.add(Move3);
    WorldPosition2.add(Move3Neg);
    Obj.position.copy(Obj.parent.worldToLocal(WorldPosition1));
    TargetObj.position.copy(TargetObj.parent.worldToLocal(WorldPosition2));
}


};
gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.userFunc0x19264a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.func = function(runtimeScene, Id, TargetId, Unmoved, parentEventsFunctionContext) {
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
if (argName === "Unmoved") return Unmoved;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__ResolveBoundingBoxCollisionV2.registeredGdjsCallbacks = [];