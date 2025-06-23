
if (typeof gdjs.evtsExt__WithThreeJS__Create3DLight !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DLight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DLight = {};


gdjs.evtsExt__WithThreeJS__Create3DLight.userFunc0x1372c20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const LightId = eventsFunctionContext.getArgument("LightId");
const LightType = eventsFunctionContext.getArgument("Type");
const Color = eventsFunctionContext.getArgument("Color") || "255;255;255";
let Intensity = eventsFunctionContext.getArgument("Intensity");
const Distance = eventsFunctionContext.getArgument("Distance");
const Decay = 2;
const SpotAngle = eventsFunctionContext.getArgument("SpotAngle");
const SpotPenumbra = eventsFunctionContext.getArgument("SpotPenumbra");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
//
const RGB = Color.split(";");
let Light;
if (LightType == "Directional Light") {
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityScale");// Three.js r160
    Light = new THREE.DirectionalLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity);
    const Target = new THREE.Group();
    Target.translateZ(-1);
    Light.add(Target);
    Light.target = Target;
} else if (LightType == "Spot Light") {
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityCandela");// Three.js r160
    Light = new THREE.SpotLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity, Distance, gdjs.toRad(SpotAngle), SpotPenumbra, Decay);
    const Target = new THREE.Group();
    Target.translateZ(-1);
    Light.add(Target);
    Light.target = Target;
} else {
    // Point
    Intensity *= gdjs.__WithThreeJS.get("LightIntensityCandela");// Three.js r160
    Light = new THREE.PointLight(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`, Intensity, Distance, Decay);
}
Light.name = LightId;
Light.position.set(X, Y, Z);
Light.rotation.set(gdjs.toRad(AngleX), gdjs.toRad(AngleY), gdjs.toRad(AngleZ));
Scene.add(Light);


};
gdjs.evtsExt__WithThreeJS__Create3DLight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DLight.userFunc0x1372c20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DLight.func = function(runtimeScene, LightId, Type, Color, Intensity, Distance, SpotAngle, SpotPenumbra, X, Y, Z, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {
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
if (argName === "LightId") return LightId;
if (argName === "Type") return Type;
if (argName === "Color") return Color;
if (argName === "Intensity") return Intensity;
if (argName === "Distance") return Distance;
if (argName === "SpotAngle") return SpotAngle;
if (argName === "SpotPenumbra") return SpotPenumbra;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DLight.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Create3DLight.registeredGdjsCallbacks = [];