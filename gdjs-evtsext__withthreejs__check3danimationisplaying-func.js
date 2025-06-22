
if (typeof gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying = {};


gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.userFunc0xf66c00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const AnimationMixer = gdjs.__WithThreeJS.get("AnimationMixer");
const AnimationActions = gdjs.__WithThreeJS.get("AnimationActions");
const Id = eventsFunctionContext.getArgument("Id");
const ANumber = eventsFunctionContext.getArgument("ANumber");
eventsFunctionContext.returnValue = false;
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
const Clip = Obj.animations[ANumber];
if (!Clip) {
    return;
}
//
const OBJ_UUID = Obj.uuid;
const Clip_UUID = Clip.uuid;
if (AnimationActions.has(OBJ_UUID)) {
    if (AnimationActions.get(OBJ_UUID).has(Clip_UUID)) {
        const Action = AnimationActions.get(OBJ_UUID).get(Clip_UUID);
        eventsFunctionContext.returnValue = Action.isRunning();
    }
}


};
gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.userFunc0xf66c00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.func = function(runtimeScene, Id, ANumber, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__Check3DAnimationIsPlaying.registeredGdjsCallbacks = [];