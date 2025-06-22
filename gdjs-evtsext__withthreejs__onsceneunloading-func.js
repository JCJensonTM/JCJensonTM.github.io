
if (typeof gdjs.evtsExt__WithThreeJS__onSceneUnloading !== "undefined") {
  gdjs.evtsExt__WithThreeJS__onSceneUnloading.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__onSceneUnloading = {};


gdjs.evtsExt__WithThreeJS__onSceneUnloading.userFunc0xb080a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__WithThreeJS.get("BuiltIn3D")) {
    if (runtimeScene.getRenderer()._threeRenderer._render_WithThreeJS) {
        runtimeScene.getRenderer()._threeRenderer.render = runtimeScene.getRenderer()._threeRenderer._render_WithThreeJS;
        runtimeScene.getRenderer()._threeRenderer._render_WithThreeJS = null;
    };
    if (runtimeScene.getRenderer().getPIXIRenderer()._clear_WithThreeJS) {
        runtimeScene.getRenderer().getPIXIRenderer().clear = runtimeScene.getRenderer().getPIXIRenderer()._clear_WithThreeJS;
        runtimeScene.getRenderer().getPIXIRenderer()._clear_WithThreeJS = null;
    };
}
if (runtimeScene.getRenderer().getPIXIRenderer().background) {
    runtimeScene.getRenderer().getPIXIRenderer().background.alpha = 1;// For PixiJS 7
} else {
    runtimeScene.getRenderer().getPIXIRenderer().backgroundAlpha = 1;// For PixiJS 6
}
gdjs.__WithThreeJS.set("SceneIsReady", false);


};
gdjs.evtsExt__WithThreeJS__onSceneUnloading.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__onSceneUnloading.userFunc0xb080a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__WithThreeJS__onSceneUnloading.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == gdjs.evtsExt__WithThreeJS__CreatedSceneName.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WithThreeJS__Clear3DScene.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__onSceneUnloading.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__WithThreeJS__onSceneUnloading.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__onSceneUnloading.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__onSceneUnloading.registeredGdjsCallbacks = [];
gdjs.evtsExt__WithThreeJS__onSceneUnloading.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WithThreeJS__onSceneUnloading.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneUnloadingCallback(gdjs.evtsExt__WithThreeJS__onSceneUnloading.registeredGdjsCallbacks[gdjs.evtsExt__WithThreeJS__onSceneUnloading.registeredGdjsCallbacks.length - 1]);
