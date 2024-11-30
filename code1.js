gdjs.phone_32detectedCode = {};
gdjs.phone_32detectedCode.localVariables = [];
gdjs.phone_32detectedCode.GDthingObjects1= [];
gdjs.phone_32detectedCode.GDthingObjects2= [];
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects1= [];
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects2= [];
gdjs.phone_32detectedCode.GDbgObjects1= [];
gdjs.phone_32detectedCode.GDbgObjects2= [];
gdjs.phone_32detectedCode.GDmottoObjects1= [];
gdjs.phone_32detectedCode.GDmottoObjects2= [];
gdjs.phone_32detectedCode.GDwarningdrawingObjects1= [];
gdjs.phone_32detectedCode.GDwarningdrawingObjects2= [];
gdjs.phone_32detectedCode.GDwarningObjects1= [];
gdjs.phone_32detectedCode.GDwarningObjects2= [];
gdjs.phone_32detectedCode.GDwarning2Objects1= [];
gdjs.phone_32detectedCode.GDwarning2Objects2= [];
gdjs.phone_32detectedCode.GDJCJenson_958482Objects1= [];
gdjs.phone_32detectedCode.GDJCJenson_958482Objects2= [];


gdjs.phone_32detectedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.randomInRange(1, 50);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.phone_32detectedCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.phone_32detectedCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.phone_32detectedCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.phone_32detectedCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 50));
}
{ //Subevents
gdjs.phone_32detectedCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.phone_32detectedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.phone_32detectedCode.GDthingObjects1.length = 0;
gdjs.phone_32detectedCode.GDthingObjects2.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.phone_32detectedCode.GDbgObjects1.length = 0;
gdjs.phone_32detectedCode.GDbgObjects2.length = 0;
gdjs.phone_32detectedCode.GDmottoObjects1.length = 0;
gdjs.phone_32detectedCode.GDmottoObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarningdrawingObjects1.length = 0;
gdjs.phone_32detectedCode.GDwarningdrawingObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarningObjects1.length = 0;
gdjs.phone_32detectedCode.GDwarningObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarning2Objects1.length = 0;
gdjs.phone_32detectedCode.GDwarning2Objects2.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_958482Objects1.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_958482Objects2.length = 0;

gdjs.phone_32detectedCode.eventsList1(runtimeScene);
gdjs.phone_32detectedCode.GDthingObjects1.length = 0;
gdjs.phone_32detectedCode.GDthingObjects2.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.phone_32detectedCode.GDbgObjects1.length = 0;
gdjs.phone_32detectedCode.GDbgObjects2.length = 0;
gdjs.phone_32detectedCode.GDmottoObjects1.length = 0;
gdjs.phone_32detectedCode.GDmottoObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarningdrawingObjects1.length = 0;
gdjs.phone_32detectedCode.GDwarningdrawingObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarningObjects1.length = 0;
gdjs.phone_32detectedCode.GDwarningObjects2.length = 0;
gdjs.phone_32detectedCode.GDwarning2Objects1.length = 0;
gdjs.phone_32detectedCode.GDwarning2Objects2.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_958482Objects1.length = 0;
gdjs.phone_32detectedCode.GDJCJenson_958482Objects2.length = 0;


return;

}

gdjs['phone_32detectedCode'] = gdjs.phone_32detectedCode;
