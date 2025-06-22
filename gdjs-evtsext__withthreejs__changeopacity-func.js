
if (typeof gdjs.evtsExt__WithThreeJS__ChangeOpacity !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ChangeOpacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ChangeOpacity = {};


gdjs.evtsExt__WithThreeJS__ChangeOpacity.userFunc0xa79870 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Id = eventsFunctionContext.getArgument("Id");
const Operator = eventsFunctionContext.getArgument("Operator");
const Opacity = eventsFunctionContext.getArgument("Opacity");
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
                if (!Child.material[i].transparent) {
                    Child.material[i].transparent = true;
                    Child.material[i].needsUpdate = true;
                }
                if (Operator == "=") {
                    Child.material[i].opacity = Opacity;
                } else if (Operator == "+") {
                    Child.material[i].opacity += Opacity;
                } else {
                    Child.material[i].opacity -= Opacity;
                }
                if (Child.material[i].opacity < 0) Child.material[i].opacity = 0;
                if (Child.material[i].opacity > 1) Child.material[i].opacity = 1;
            }
        } else {
            if (!Child.material.transparent) {
                Child.material.transparent = true;
                Child.material.needsUpdate = true;
            }
            if (Operator == "=") {
                Child.material.opacity = Opacity;
            } else if (Operator == "+") {
                Child.material.opacity += Opacity;
            } else {
                Child.material.opacity -= Opacity;
            }
            if (Child.material.opacity < 0) Child.material.opacity = 0;
            if (Child.material.opacity > 1) Child.material.opacity = 1;
        }
    }
});


};
gdjs.evtsExt__WithThreeJS__ChangeOpacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ChangeOpacity.userFunc0xa79870(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ChangeOpacity.func = function(runtimeScene, Id, Operator, Opacity, parentEventsFunctionContext) {
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
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ChangeOpacity.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__ChangeOpacity.registeredGdjsCallbacks = [];