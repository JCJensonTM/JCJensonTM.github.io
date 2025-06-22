
if (typeof gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead = {};


gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.userFunc0xeceea0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Operator = eventsFunctionContext.getArgument("Operator");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
const Parent = Obj.parent;
Scene.attach(Obj);
if (Operator == "=") {
    Obj.rotation.set(0, 0, 0);
    Obj.rotateY(gdjs.toRad(AngleY));
    Obj.rotateX(gdjs.toRad(AngleX));
    Obj.rotateZ(gdjs.toRad(AngleZ));
} else if (Operator == "+") {
    Obj.rotateX(gdjs.toRad(AngleX));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(AngleY));
    Obj.rotateZ(gdjs.toRad(AngleZ));
} else {
    Obj.rotateX(gdjs.toRad(-AngleX));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(-AngleY));
    Obj.rotateZ(gdjs.toRad(-AngleZ));
}
Parent.attach(Obj);


};
gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.userFunc0xeceea0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.func = function(runtimeScene, Id, Operator, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {
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


gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Rotate3DObjectLikeHead.registeredGdjsCallbacks = [];