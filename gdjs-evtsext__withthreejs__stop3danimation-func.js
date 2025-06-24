
if (typeof gdjs.evtsExt__WithThreeJS__Stop3DAnimation !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Stop3DAnimation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Stop3DAnimation = {};


gdjs.evtsExt__WithThreeJS__Stop3DAnimation.userFunc0x8b9ad8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const AnimationActions = gdjs.__WithThreeJS.get("AnimationActions");
const Id = eventsFunctionContext.getArgument("Id");
const ANumber = eventsFunctionContext.getArgument("ANumber");
const Duration = eventsFunctionContext.getArgument("Duration");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
const Clip = Obj.animations[ANumber];
if (!Clip) {
    console.warn("3D Animation not found: " + ANumber);
    return;
}
//
let Action;
const OBJ_UUID = Obj.uuid;
const Clip_UUID = Clip.uuid;
if (AnimationActions.has(OBJ_UUID)) {
    if (AnimationActions.get(OBJ_UUID).has(Clip_UUID)) {
        const Action = AnimationActions.get(OBJ_UUID).get(Clip_UUID);
        if (Duration === 0) {
            Action.stop();
        } else {
            Action.fadeOut(Duration);  
        }
    }
}


};
gdjs.evtsExt__WithThreeJS__Stop3DAnimation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Stop3DAnimation.userFunc0x8b9ad8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Stop3DAnimation.func = function(runtimeScene, Id, ANumber, Duration, parentEventsFunctionContext) {
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
if (argName === "ANumber") return ANumber;
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Stop3DAnimation.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Stop3DAnimation.registeredGdjsCallbacks = [];