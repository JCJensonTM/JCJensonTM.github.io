gdjs.mantinenceCode = {};
gdjs.mantinenceCode.localVariables = [];
gdjs.mantinenceCode.GDJCJenson_9595logoObjects1= [];
gdjs.mantinenceCode.GDJCJenson_9595logoObjects2= [];
gdjs.mantinenceCode.GDthingObjects1= [];
gdjs.mantinenceCode.GDthingObjects2= [];
gdjs.mantinenceCode.GDbrandingObjects1= [];
gdjs.mantinenceCode.GDbrandingObjects2= [];
gdjs.mantinenceCode.GDWoker_9595DronesObjects1= [];
gdjs.mantinenceCode.GDWoker_9595DronesObjects2= [];
gdjs.mantinenceCode.GDwarningdrawingObjects1= [];
gdjs.mantinenceCode.GDwarningdrawingObjects2= [];
gdjs.mantinenceCode.GDwarningObjects1= [];
gdjs.mantinenceCode.GDwarningObjects2= [];
gdjs.mantinenceCode.GDtm_9595warningObjects1= [];
gdjs.mantinenceCode.GDtm_9595warningObjects2= [];
gdjs.mantinenceCode.GDinteractObjects1= [];
gdjs.mantinenceCode.GDinteractObjects2= [];
gdjs.mantinenceCode.GDInfoObjects1= [];
gdjs.mantinenceCode.GDInfoObjects2= [];
gdjs.mantinenceCode.GDfullscreenObjects1= [];
gdjs.mantinenceCode.GDfullscreenObjects2= [];
gdjs.mantinenceCode.GDinfoplusObjects1= [];
gdjs.mantinenceCode.GDinfoplusObjects2= [];


gdjs.mantinenceCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.randomInRange(1, 25);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JCJenson_logo"), gdjs.mantinenceCode.GDJCJenson_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mantinenceCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.mantinenceCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDJCJenson_9595logoObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDJCJenson_9595logoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.mantinenceCode.asyncCallback10906732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mantinenceCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "secret", false);
}gdjs.mantinenceCode.localVariables.length = 0;
}
gdjs.mantinenceCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mantinenceCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.mantinenceCode.asyncCallback10906732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mantinenceCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "phone detected", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fullscreen"), gdjs.mantinenceCode.GDfullscreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDfullscreenObjects1.length;i<l;++i) {
    if ( gdjs.mantinenceCode.GDfullscreenObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDfullscreenObjects1[k] = gdjs.mantinenceCode.GDfullscreenObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDfullscreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("infoplus"), gdjs.mantinenceCode.GDinfoplusObjects1);
gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mantinenceCode.GDinteractObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 25));
}{for(var i = 0, len = gdjs.mantinenceCode.GDinteractObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDinteractObjects1[i].activateBehavior("ButtonFSM", false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.mantinenceCode.GDinfoplusObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDinfoplusObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.mantinenceCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mantinenceCode.GDwarningdrawingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDwarningdrawingObjects1.length;i<l;++i) {
    if ( gdjs.mantinenceCode.GDwarningdrawingObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDwarningdrawingObjects1[k] = gdjs.mantinenceCode.GDwarningdrawingObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDwarningdrawingObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mantinenceCode.GDinteractObjects1);
{for(var i = 0, len = gdjs.mantinenceCode.GDinteractObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDinteractObjects1[i].activateBehavior("ButtonFSM", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mantinenceCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDinteractObjects1.length;i<l;++i) {
    if ( gdjs.mantinenceCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDinteractObjects1[k] = gdjs.mantinenceCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mantinenceCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDinteractObjects1.length;i<l;++i) {
    if ( !(gdjs.mantinenceCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDinteractObjects1[k] = gdjs.mantinenceCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("interact"), gdjs.mantinenceCode.GDinteractObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDinteractObjects1.length;i<l;++i) {
    if ( gdjs.mantinenceCode.GDinteractObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDinteractObjects1[k] = gdjs.mantinenceCode.GDinteractObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDinteractObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JCJenson_logo"), gdjs.mantinenceCode.GDJCJenson_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Woker_Drones"), gdjs.mantinenceCode.GDWoker_9595DronesObjects1);
gdjs.copyArray(runtimeScene.getObjects("branding"), gdjs.mantinenceCode.GDbrandingObjects1);
gdjs.copyArray(runtimeScene.getObjects("thing"), gdjs.mantinenceCode.GDthingObjects1);
gdjs.copyArray(runtimeScene.getObjects("tm_warning"), gdjs.mantinenceCode.GDtm_9595warningObjects1);
gdjs.copyArray(runtimeScene.getObjects("warning"), gdjs.mantinenceCode.GDwarningObjects1);
gdjs.copyArray(runtimeScene.getObjects("warningdrawing"), gdjs.mantinenceCode.GDwarningdrawingObjects1);
{for(var i = 0, len = gdjs.mantinenceCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDwarningdrawingObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDJCJenson_9595logoObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDJCJenson_9595logoObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDthingObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDthingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDbrandingObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDbrandingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDwarningdrawingObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDwarningdrawingObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDWoker_9595DronesObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDWoker_9595DronesObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDwarningObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDwarningObjects1[i].setLayer("bug");
}
}{for(var i = 0, len = gdjs.mantinenceCode.GDtm_9595warningObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDtm_9595warningObjects1[i].setLayer("bug");
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "none", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
{ //Subevents
gdjs.mantinenceCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.mantinenceCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDInfoObjects1.length;i<l;++i) {
    if ( gdjs.mantinenceCode.GDInfoObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDInfoObjects1[k] = gdjs.mantinenceCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDInfoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("infoplus"), gdjs.mantinenceCode.GDinfoplusObjects1);
{for(var i = 0, len = gdjs.mantinenceCode.GDinfoplusObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDinfoplusObjects1[i].getBehavior("Tween").addObjectOpacityTween2("info", 127, "linear", 0.07, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.mantinenceCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mantinenceCode.GDInfoObjects1.length;i<l;++i) {
    if ( !(gdjs.mantinenceCode.GDInfoObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.mantinenceCode.GDInfoObjects1[k] = gdjs.mantinenceCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.mantinenceCode.GDInfoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("infoplus"), gdjs.mantinenceCode.GDinfoplusObjects1);
{for(var i = 0, len = gdjs.mantinenceCode.GDinfoplusObjects1.length ;i < len;++i) {
    gdjs.mantinenceCode.GDinfoplusObjects1[i].getBehavior("Tween").addObjectOpacityTween2("info", 0, "linear", 0.07, false);
}
}}

}


};

gdjs.mantinenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mantinenceCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.mantinenceCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.mantinenceCode.GDthingObjects1.length = 0;
gdjs.mantinenceCode.GDthingObjects2.length = 0;
gdjs.mantinenceCode.GDbrandingObjects1.length = 0;
gdjs.mantinenceCode.GDbrandingObjects2.length = 0;
gdjs.mantinenceCode.GDWoker_9595DronesObjects1.length = 0;
gdjs.mantinenceCode.GDWoker_9595DronesObjects2.length = 0;
gdjs.mantinenceCode.GDwarningdrawingObjects1.length = 0;
gdjs.mantinenceCode.GDwarningdrawingObjects2.length = 0;
gdjs.mantinenceCode.GDwarningObjects1.length = 0;
gdjs.mantinenceCode.GDwarningObjects2.length = 0;
gdjs.mantinenceCode.GDtm_9595warningObjects1.length = 0;
gdjs.mantinenceCode.GDtm_9595warningObjects2.length = 0;
gdjs.mantinenceCode.GDinteractObjects1.length = 0;
gdjs.mantinenceCode.GDinteractObjects2.length = 0;
gdjs.mantinenceCode.GDInfoObjects1.length = 0;
gdjs.mantinenceCode.GDInfoObjects2.length = 0;
gdjs.mantinenceCode.GDfullscreenObjects1.length = 0;
gdjs.mantinenceCode.GDfullscreenObjects2.length = 0;
gdjs.mantinenceCode.GDinfoplusObjects1.length = 0;
gdjs.mantinenceCode.GDinfoplusObjects2.length = 0;

gdjs.mantinenceCode.eventsList2(runtimeScene);
gdjs.mantinenceCode.GDJCJenson_9595logoObjects1.length = 0;
gdjs.mantinenceCode.GDJCJenson_9595logoObjects2.length = 0;
gdjs.mantinenceCode.GDthingObjects1.length = 0;
gdjs.mantinenceCode.GDthingObjects2.length = 0;
gdjs.mantinenceCode.GDbrandingObjects1.length = 0;
gdjs.mantinenceCode.GDbrandingObjects2.length = 0;
gdjs.mantinenceCode.GDWoker_9595DronesObjects1.length = 0;
gdjs.mantinenceCode.GDWoker_9595DronesObjects2.length = 0;
gdjs.mantinenceCode.GDwarningdrawingObjects1.length = 0;
gdjs.mantinenceCode.GDwarningdrawingObjects2.length = 0;
gdjs.mantinenceCode.GDwarningObjects1.length = 0;
gdjs.mantinenceCode.GDwarningObjects2.length = 0;
gdjs.mantinenceCode.GDtm_9595warningObjects1.length = 0;
gdjs.mantinenceCode.GDtm_9595warningObjects2.length = 0;
gdjs.mantinenceCode.GDinteractObjects1.length = 0;
gdjs.mantinenceCode.GDinteractObjects2.length = 0;
gdjs.mantinenceCode.GDInfoObjects1.length = 0;
gdjs.mantinenceCode.GDInfoObjects2.length = 0;
gdjs.mantinenceCode.GDfullscreenObjects1.length = 0;
gdjs.mantinenceCode.GDfullscreenObjects2.length = 0;
gdjs.mantinenceCode.GDinfoplusObjects1.length = 0;
gdjs.mantinenceCode.GDinfoplusObjects2.length = 0;


return;

}

gdjs['mantinenceCode'] = gdjs.mantinenceCode;
