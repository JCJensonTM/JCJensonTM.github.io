
if (typeof gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult = {};


gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.userFunc0x13554c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("RaycastResult")) {
    console.warn("No Raycast has been done yet.");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const RaycastResult = gdjs.__WithThreeJS.get("RaycastResult");
//
const Id = eventsFunctionContext.getArgument("Id");
const Index = eventsFunctionContext.getArgument("Index");
const Position = eventsFunctionContext.getArgument("Position");
const Normal = eventsFunctionContext.getArgument("Normal");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
if (Index < 0 || RaycastResult.length <= Index) {
    console.warn("Incorrect Raycast Result index.");
    return;
}
//
const Parent = Obj.parent;
Scene.attach(Obj);
if (Position) {
    Obj.position.copy(RaycastResult[Index].point);
}
if (Normal && RaycastResult[Index].normal) {
    const DirY = new THREE.Vector3(0, 1, 0);
    const DifQua = new THREE.Quaternion();
    DirY.applyQuaternion(Obj.quaternion);
    DifQua.setFromUnitVectors(DirY, RaycastResult[Index].normal);
    Obj.applyQuaternion(DifQua);
}
Parent.attach(Obj);


};
gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.userFunc0x13554c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.func = function(runtimeScene, Id, Index, Position, Normal, parentEventsFunctionContext) {
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
if (argName === "Index") return Index;
if (argName === "Position") return Position;
if (argName === "Normal") return Normal;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Place3DObjectUsingRaycastResult.registeredGdjsCallbacks = [];