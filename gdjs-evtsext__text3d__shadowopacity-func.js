
if (typeof gdjs.evtsExt__Text3D__ShadowOpacity !== "undefined") {
  gdjs.evtsExt__Text3D__ShadowOpacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Text3D__ShadowOpacity = {};
gdjs.evtsExt__Text3D__ShadowOpacity.GDObjectObjects1= [];


gdjs.evtsExt__Text3D__ShadowOpacity.userFunc0x11ce310 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.TextRuntimeObject} */
const object = objects[0];

eventsFunctionContext.returnValue = object.getShadowOpacity();

};
gdjs.evtsExt__Text3D__ShadowOpacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Text3D__ShadowOpacity.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Text3D__ShadowOpacity.GDObjectObjects1);
gdjs.evtsExt__Text3D__ShadowOpacity.userFunc0x11ce310(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Text3D__ShadowOpacity.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Text3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Text3D"),
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

gdjs.evtsExt__Text3D__ShadowOpacity.GDObjectObjects1.length = 0;

gdjs.evtsExt__Text3D__ShadowOpacity.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Text3D__ShadowOpacity.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Text3D__ShadowOpacity.registeredGdjsCallbacks = [];