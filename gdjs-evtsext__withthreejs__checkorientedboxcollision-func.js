
if (typeof gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision = {};


gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.userFunc0x1b947a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const OtherId = eventsFunctionContext.getArgument("OtherId");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
const OtherObj = gdjs.__WithThreeJS.get("SearchObject")(OtherId);
if (!Obj || !OtherObj) {
    console.warn("3D Object not found: " + Id + " or " + OtherId);
    return;
}
// geometryを持たない場合を回避。なぜかSpriteにはgeometryがある
const Geo1 = Obj.geometry;
const Geo2 = OtherObj.geometry;
if (!Geo1 || !Geo2) {
    console.warn("Geometry not found: " + Id + " or " + OtherId);
    return;
}
//
const OBB1 = new THREE.OBB().fromBox3(Geo1.boundingBox);
const OBB2 = new THREE.OBB().fromBox3(Geo2.boundingBox);
Obj.updateMatrixWorld(false);//必要?
OtherObj.updateMatrixWorld(false);//必要?
OBB1.applyMatrix4(Obj.matrixWorld);
OBB2.applyMatrix4(OtherObj.matrixWorld);
eventsFunctionContext.returnValue = OBB1.intersectsOBB(OBB2);


};
gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.userFunc0x1b947a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.func = function(runtimeScene, Id, OtherId, parentEventsFunctionContext) {
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
if (argName === "OtherId") return OtherId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__CheckOrientedBoxCollision.registeredGdjsCallbacks = [];