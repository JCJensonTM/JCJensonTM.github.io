gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDJCJenson_9595logoObjects1= [];
gdjs.mainCode.GDJCJenson_9595logoObjects2= [];
gdjs.mainCode.GDthingObjects1= [];
gdjs.mainCode.GDthingObjects2= [];
gdjs.mainCode.GDbrandingObjects1= [];
gdjs.mainCode.GDbrandingObjects2= [];
gdjs.mainCode.GDWoker_9595DronesObjects1= [];
gdjs.mainCode.GDWoker_9595DronesObjects2= [];
gdjs.mainCode.GDwarningdrawingObjects1= [];
gdjs.mainCode.GDwarningdrawingObjects2= [];
gdjs.mainCode.GDwarningObjects1= [];
gdjs.mainCode.GDwarningObjects2= [];
gdjs.mainCode.GDNewTextObjects1= [];
gdjs.mainCode.GDNewTextObjects2= [];


gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.randomInRange(1, 50);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mainCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.mainCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "phone detected", false);
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
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.mainCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.mainCode.GDthingObjects1.length = 0;
gdjs.mainCode.GDthingObjects2.length = 0;
gdjs.mainCode.GDbrandingObjects1.length = 0;
gdjs.mainCode.GDbrandingObjects2.length = 0;
gdjs.mainCode.GDWoker_9595DronesObjects1.length = 0;
gdjs.mainCode.GDWoker_9595DronesObjects2.length = 0;
gdjs.mainCode.GDwarningdrawingObjects1.length = 0;
gdjs.mainCode.GDwarningdrawingObjects2.length = 0;
gdjs.mainCode.GDwarningObjects1.length = 0;
gdjs.mainCode.GDwarningObjects2.length = 0;
gdjs.mainCode.GDNewTextObjects1.length = 0;
gdjs.mainCode.GDNewTextObjects2.length = 0;

gdjs.mainCode.eventsList1(runtimeScene);
gdjs.mainCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.mainCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.mainCode.GDthingObjects1.length = 0;
gdjs.mainCode.GDthingObjects2.length = 0;
gdjs.mainCode.GDbrandingObjects1.length = 0;
gdjs.mainCode.GDbrandingObjects2.length = 0;
gdjs.mainCode.GDWoker_9595DronesObjects1.length = 0;
gdjs.mainCode.GDWoker_9595DronesObjects2.length = 0;
gdjs.mainCode.GDwarningdrawingObjects1.length = 0;
gdjs.mainCode.GDwarningdrawingObjects2.length = 0;
gdjs.mainCode.GDwarningObjects1.length = 0;
gdjs.mainCode.GDwarningObjects2.length = 0;
gdjs.mainCode.GDNewTextObjects1.length = 0;
gdjs.mainCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
