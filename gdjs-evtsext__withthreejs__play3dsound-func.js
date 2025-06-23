
if (typeof gdjs.evtsExt__WithThreeJS__Play3DSound !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Play3DSound.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Play3DSound = {};


gdjs.evtsExt__WithThreeJS__Play3DSound.userFunc0xfee178 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Listener = gdjs.__WithThreeJS.get("Listener");
const ResourceName = eventsFunctionContext.getArgument("ResourceName");
const SoundId = eventsFunctionContext.getArgument("SoundId");
const Id = eventsFunctionContext.getArgument("Id");
const Loop = eventsFunctionContext.getArgument("Loop");
const Volume = eventsFunctionContext.getArgument("Volume") || 1;
const Pitch = eventsFunctionContext.getArgument("Pitch") || 1;
let MaxDistance = eventsFunctionContext.getArgument("MaxDistance") || 1000;
//
const ResourceFileName = gdjs.__WithThreeJS.get("GetResourceFileName")(ResourceName, "audio");
MaxDistance = MaxDistance <= 0 ? 0.0001 : MaxDistance;
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
let Sound = Obj.getObjectByName(SoundId);
if (!Sound) {
	Sound = new THREE.PositionalAudio(Listener);
	Sound.name = SoundId;
	Obj.add(Sound);
}
Sound.setRefDistance(1);//音量の低下が有効になり始める距離
Sound.setRolloffFactor(1)//音量が減少する速さ
Sound.setDistanceModel("linear");
Sound.setMaxDistance(MaxDistance);//リスナーの間の最大距離
//
Sound.setLoop(Loop);
Sound.setVolume(Volume);
Sound.setPlaybackRate(Pitch);//再生速度
// Sound.setDetune(0);//ピッチ（なぜかエラーになる）
//
const audioLoader = new THREE.AudioLoader();
audioLoader.load(ResourceFileName, function(buffer) {
	Sound.setBuffer(buffer);
	if (Sound.isPlaying) {
		Sound.stop();
	}
	Sound.play();
});


};
gdjs.evtsExt__WithThreeJS__Play3DSound.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Play3DSound.userFunc0xfee178(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Play3DSound.func = function(runtimeScene, ResourceName, SoundId, Id, Loop, Volume, Pitch, MaxDistance, parentEventsFunctionContext) {
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
if (argName === "ResourceName") return ResourceName;
if (argName === "SoundId") return SoundId;
if (argName === "Id") return Id;
if (argName === "Loop") return Loop;
if (argName === "Volume") return Volume;
if (argName === "Pitch") return Pitch;
if (argName === "MaxDistance") return MaxDistance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Play3DSound.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WithThreeJS__Play3DSound.registeredGdjsCallbacks = [];