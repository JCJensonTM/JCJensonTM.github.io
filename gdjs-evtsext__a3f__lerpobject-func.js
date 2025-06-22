
if (typeof gdjs.evtsExt__A3F__LerpObject !== "undefined") {
  gdjs.evtsExt__A3F__LerpObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__LerpObject = {};
gdjs.evtsExt__A3F__LerpObject.forEachIndex2 = 0;

gdjs.evtsExt__A3F__LerpObject.forEachObjects2 = [];

gdjs.evtsExt__A3F__LerpObject.forEachTemporary2 = null;

gdjs.evtsExt__A3F__LerpObject.forEachTotalCount2 = 0;

gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1= [];
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2= [];
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects3= [];
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects1= [];
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects2= [];
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects3= [];


gdjs.evtsExt__A3F__LerpObject.userFunc0x136bc20 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
const Targets = eventsFunctionContext.getObjects("Target");
const FactorP = eventsFunctionContext.getArgument("FactorP");
const FactorR = eventsFunctionContext.getArgument("FactorR");
const Viewpoint = eventsFunctionContext.getArgument("Viewpoint");
//
if (Targets.length === 0) {
    return;
}
const Target3D = Targets[0].get3DRendererObject();
//
if (FactorP) {
    Object3D.position.lerp(Target3D.position, FactorP);
    //
    Object2D.x = Object3D.position.x;
    Object2D.y = Object3D.position.y;
    Object2D.setZ(Object3D.position.z);
}
if (FactorR) {
    Object3D.quaternion.slerp(Target3D.quaternion, FactorR);
    //
    Object2D._rotationX = gdjs.toDegrees(Object3D.rotation.x);
    Object2D._rotationY = gdjs.toDegrees(Object3D.rotation.y);
    Object2D.setAngle(gdjs.toDegrees(Object3D.rotation.z));
}


};
gdjs.evtsExt__A3F__LerpObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2, gdjs.evtsExt__A3F__LerpObject.GDObjectObjects3);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__A3F__LerpObject.GDObjectObjects3);
gdjs.evtsExt__A3F__LerpObject.userFunc0x136bc20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__A3F__LerpObject.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1);

for (gdjs.evtsExt__A3F__LerpObject.forEachIndex2 = 0;gdjs.evtsExt__A3F__LerpObject.forEachIndex2 < gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1.length;++gdjs.evtsExt__A3F__LerpObject.forEachIndex2) {
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2.length = 0;


gdjs.evtsExt__A3F__LerpObject.forEachTemporary2 = gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1[gdjs.evtsExt__A3F__LerpObject.forEachIndex2];
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2.push(gdjs.evtsExt__A3F__LerpObject.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__A3F__LerpObject.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__A3F__LerpObject.func = function(runtimeScene, Object, Capability3d, Target, TargetCapability3d, FactorP, FactorR, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Target": Target
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Target": gdjs.objectsListsToArray(Target)
},
  _behaviorNamesMap: {
"Capability3d": Capability3d
, "TargetCapability3d": TargetCapability3d
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
if (argName === "FactorP") return FactorP;
if (argName === "FactorR") return FactorR;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects3.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects1.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects2.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects3.length = 0;

gdjs.evtsExt__A3F__LerpObject.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects2.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDObjectObjects3.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects1.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects2.length = 0;
gdjs.evtsExt__A3F__LerpObject.GDTargetObjects3.length = 0;


return;
}

gdjs.evtsExt__A3F__LerpObject.registeredGdjsCallbacks = [];