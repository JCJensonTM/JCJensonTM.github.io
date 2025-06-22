
if (typeof gdjs.evtsExt__A3F__DistanceObjects !== "undefined") {
  gdjs.evtsExt__A3F__DistanceObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__DistanceObjects = {};
gdjs.evtsExt__A3F__DistanceObjects.GDObjectObjects1= [];
gdjs.evtsExt__A3F__DistanceObjects.GDTargetObjectObjects1= [];


gdjs.evtsExt__A3F__DistanceObjects.userFunc0x13d4308 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
//eventsFunctionContext.returnValue = 0;
const TargetObjects = eventsFunctionContext.getObjects("TargetObject");
if (objects.length == 0 || TargetObjects.length == 0) {
    return;
}
const Object2D = objects[0];
const TargetObject2D = TargetObjects[0];
const Object3D = Object2D.get3DRendererObject();
const TargetObject3D = TargetObject2D.get3DRendererObject();
let Distance = 0;
if (Object3D && TargetObject3D) {
    const PosA = Object3D.position;
    const PosB = TargetObject3D.position;
    Distance = PosA.distanceTo(PosB);
}
eventsFunctionContext.returnValue = Distance;


};
gdjs.evtsExt__A3F__DistanceObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__DistanceObjects.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__A3F__DistanceObjects.GDObjectObjects1);
gdjs.evtsExt__A3F__DistanceObjects.userFunc0x13d4308(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__A3F__DistanceObjects.func = function(runtimeScene, Object, TargetObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__DistanceObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__DistanceObjects.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__A3F__DistanceObjects.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__DistanceObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__DistanceObjects.GDTargetObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__A3F__DistanceObjects.registeredGdjsCallbacks = [];