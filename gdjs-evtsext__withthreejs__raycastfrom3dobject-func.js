
if (typeof gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject !== "undefined") {
  gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject = {};


gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.userFunc0xb94380 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
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
const Camera = gdjs.__WithThreeJS.get("GetCamera")(1);// 現状は1で固定
const Raycaster = gdjs.__WithThreeJS.get("Raycaster");
//
const Id = eventsFunctionContext.getArgument("Id");
const Distance = eventsFunctionContext.getArgument("Distance");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
const WorldPosition = new THREE.Vector3();
const WorldDirection = new THREE.Vector3();
Obj.getWorldPosition(WorldPosition);
Obj.getWorldDirection(WorldDirection);
//
Raycaster.camera = Camera;
Raycaster.set(WorldPosition, WorldDirection);
Raycaster.far = Distance;
Raycaster.layers.enable(0);
Raycaster.layers.enable(2);
gdjs.__WithThreeJS.set("RaycastResult", Raycaster.intersectObjects(Scene.children, true));


};
gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.userFunc0xb94380(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.func = function(runtimeScene, Id, Distance, parentEventsFunctionContext) {
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
if (argName === "Distance") return Distance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__RaycastFrom3DObject.registeredGdjsCallbacks = [];