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
gdjs.mainCode.GDtm_9595warningObjects1= [];
gdjs.mainCode.GDtm_9595warningObjects2= [];
gdjs.mainCode.GDinteractObjects1= [];
gdjs.mainCode.GDinteractObjects2= [];
gdjs.mainCode.GDInfoObjects1= [];
gdjs.mainCode.GDInfoObjects2= [];


gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.randomInRange(1, 25);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JCJenson_logo"), gdjs.mainCode.GDJCJenson_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mainCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.mainCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDJCJenson_9595logoObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDJCJenson_9595logoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.mainCode.asyncCallback9698468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "secret", false);
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.mainCode.asyncCallback9698468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList2 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mainCode.GDinteractObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 25));
}{for(var i = 0, len = gdjs.mainCode.GDinteractObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDinteractObjects1[i].activateBehavior("ButtonFSM", false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mainCode.GDwarningdrawingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDwarningdrawingObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDwarningdrawingObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDwarningdrawingObjects1[k] = gdjs.mainCode.GDwarningdrawingObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDwarningdrawingObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mainCode.GDinteractObjects1);
{for(var i = 0, len = gdjs.mainCode.GDinteractObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDinteractObjects1[i].activateBehavior("ButtonFSM", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mainCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDinteractObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDinteractObjects1[k] = gdjs.mainCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mainCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDinteractObjects1.length;i<l;++i) {
    if ( !(gdjs.mainCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDinteractObjects1[k] = gdjs.mainCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mainCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDinteractObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDinteractObjects1[k] = gdjs.mainCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JCJenson_logo"), gdjs.mainCode.GDJCJenson_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Woker_Drones"), gdjs.mainCode.GDWoker_9595DronesObjects1);
gdjs.copyArray(runtimeScene.getObjects("branding"), gdjs.mainCode.GDbrandingObjects1);
gdjs.copyArray(runtimeScene.getObjects("thing"), gdjs.mainCode.GDthingObjects1);
gdjs.copyArray(runtimeScene.getObjects("tm_warning"), gdjs.mainCode.GDtm_9595warningObjects1);
gdjs.copyArray(runtimeScene.getObjects("warning"), gdjs.mainCode.GDwarningObjects1);
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mainCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.mainCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.mainCode.GDJCJenson_9595logoObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDJCJenson_9595logoObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDthingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDthingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDbrandingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbrandingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDwarningdrawingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDWoker_9595DronesObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDWoker_9595DronesObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDwarningObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDwarningObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mainCode.GDtm_9595warningObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtm_9595warningObjects1[i].setLayer("bug");
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "none", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.mainCode.GDtm_9595warningObjects1.length = 0;
gdjs.mainCode.GDtm_9595warningObjects2.length = 0;
gdjs.mainCode.GDinteractObjects1.length = 0;
gdjs.mainCode.GDinteractObjects2.length = 0;
gdjs.mainCode.GDInfoObjects1.length = 0;
gdjs.mainCode.GDInfoObjects2.length = 0;

gdjs.mainCode.eventsList2(runtimeScene);
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
gdjs.mainCode.GDtm_9595warningObjects1.length = 0;
gdjs.mainCode.GDtm_9595warningObjects2.length = 0;
gdjs.mainCode.GDinteractObjects1.length = 0;
gdjs.mainCode.GDinteractObjects2.length = 0;
gdjs.mainCode.GDInfoObjects1.length = 0;
gdjs.mainCode.GDInfoObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
