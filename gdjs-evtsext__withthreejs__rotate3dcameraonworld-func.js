
if (typeof gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld = {};


gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.userFunc0x13d6ab0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Id = eventsFunctionContext.getArgument("Id");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(Id);
const Operator = eventsFunctionContext.getArgument("Operator");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
//
if (Operator == "=") {
    Camera.rotation.set(0, 0, 0);
    Camera.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(AngleX));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(AngleY));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(AngleZ));
} else if (Operator == "+") {
    Camera.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(AngleX));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(AngleY));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(AngleZ));
} else {
    Camera.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(-AngleX));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(-AngleY));
    Camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(-AngleZ));
}


};
gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.userFunc0x13d6ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.func = function(runtimeScene, Id, Operator, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {
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
if (argName === "Operator") return Operator;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Rotate3DCameraOnWorld.registeredGdjsCallbacks = [];