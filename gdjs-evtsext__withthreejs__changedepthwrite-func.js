
if (typeof gdjs.evtsExt__WithThreeJS__ChangeDepthWrite !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ChangeDepthWrite = {};


gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.userFunc0xa70fd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Id = eventsFunctionContext.getArgument("Id");
const Write = eventsFunctionContext.getArgument("Write");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
Obj.traverse((Child) => {
  if (Child.material) {
    if (Array.isArray(Child.material)) {
      for (let i = 0; i < Child.material.length; i++) {
        Child.material[i].depthWrite = Write;
      }
    } else {
      Child.material.depthWrite = Write;
    }
  }
});


};
gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.userFunc0xa70fd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.func = function(runtimeScene, Id, Write, parentEventsFunctionContext) {
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
if (argName === "Write") return Write;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__ChangeDepthWrite.registeredGdjsCallbacks = [];