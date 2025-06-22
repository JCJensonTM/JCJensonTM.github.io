gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDNewSprite3DObjects1= [];
gdjs.introCode.GDNewSprite3DObjects2= [];
gdjs.introCode.GDNewSprite3DObjects3= [];
gdjs.introCode.GDNewSprite3DObjects4= [];
gdjs.introCode.GDIntro_9595dangle_9595startObjects1= [];
gdjs.introCode.GDIntro_9595dangle_9595startObjects2= [];
gdjs.introCode.GDIntro_9595dangle_9595startObjects3= [];
gdjs.introCode.GDIntro_9595dangle_9595startObjects4= [];
gdjs.introCode.GDNewTextObjects1= [];
gdjs.introCode.GDNewTextObjects2= [];
gdjs.introCode.GDNewTextObjects3= [];
gdjs.introCode.GDNewTextObjects4= [];
gdjs.introCode.GDCRT_9595maskObjects1= [];
gdjs.introCode.GDCRT_9595maskObjects2= [];
gdjs.introCode.GDCRT_9595maskObjects3= [];
gdjs.introCode.GDCRT_9595maskObjects4= [];
gdjs.introCode.GDblackObjects1= [];
gdjs.introCode.GDblackObjects2= [];
gdjs.introCode.GDblackObjects3= [];
gdjs.introCode.GDblackObjects4= [];


gdjs.introCode.asyncCallback23671660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.introCode.asyncCallback23671660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23670676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects3);

{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects3.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects3[i].getBehavior("Text").setText(gdjs.introCode.GDIntro_9595dangle_9595startObjects3[i].getBehavior("Text").getText() + (" cd TsT.Computing ./tststart.sh"));
}
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
for (const obj of gdjs.introCode.GDIntro_9595dangle_9595startObjects2) asyncObjectsList.addObject("Intro_dangle_start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback23670676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23670076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects2);

{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects2.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.introCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
for (const obj of gdjs.introCode.GDIntro_9595dangle_9595startObjects1) asyncObjectsList.addObject("Intro_dangle_start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.introCode.asyncCallback23670076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23673732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects2);
{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects2.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects2[i].getBehavior("Text").setText(gdjs.introCode.GDIntro_9595dangle_9595startObjects2[i].getBehavior("Text").getText() + (" ERR"));
}
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.introCode.asyncCallback23673732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23676108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.introCode.GDblackObjects3);
{for(var i = 0, len = gdjs.introCode.GDblackObjects3.length ;i < len;++i) {
    gdjs.introCode.GDblackObjects3[i].getBehavior("Tween").addObjectOpacityTween2("introtxtopa", 255, "linear", 2, false);
}
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.introCode.asyncCallback23676108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23678436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.introCode.asyncCallback23678436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback23677132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects2);

{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects2.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects2[i].getBehavior("Text").setText(gdjs.introCode.GDIntro_9595dangle_9595startObjects2[i].getBehavior("Text").getText() + ("Entering..."));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 3);
}
{ //Subevents
gdjs.introCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
for (const obj of gdjs.introCode.GDIntro_9595dangle_9595startObjects1) asyncObjectsList.addObject("Intro_dangle_start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.introCode.asyncCallback23677132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.introCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23676972);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.introCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.introCode.GDblackObjects1);
{for(var i = 0, len = gdjs.introCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.introCode.GDblackObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "bootup-63385.mp3", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects1.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects1[i].hide();
}
}
{ //Subevents
gdjs.introCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.introCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.introCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.introCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 150);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{ //Subevents
gdjs.introCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 150);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Intro_dangle_start"), gdjs.introCode.GDIntro_9595dangle_9595startObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.introCode.GDIntro_9595dangle_9595startObjects1.length ;i < len;++i) {
    gdjs.introCode.GDIntro_9595dangle_9595startObjects1[i].getBehavior("Text").setText("");
}
}
{ //Subevents
gdjs.introCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDNewSprite3DObjects1.length = 0;
gdjs.introCode.GDNewSprite3DObjects2.length = 0;
gdjs.introCode.GDNewSprite3DObjects3.length = 0;
gdjs.introCode.GDNewSprite3DObjects4.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects1.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects2.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects3.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects4.length = 0;
gdjs.introCode.GDNewTextObjects1.length = 0;
gdjs.introCode.GDNewTextObjects2.length = 0;
gdjs.introCode.GDNewTextObjects3.length = 0;
gdjs.introCode.GDNewTextObjects4.length = 0;
gdjs.introCode.GDCRT_9595maskObjects1.length = 0;
gdjs.introCode.GDCRT_9595maskObjects2.length = 0;
gdjs.introCode.GDCRT_9595maskObjects3.length = 0;
gdjs.introCode.GDCRT_9595maskObjects4.length = 0;
gdjs.introCode.GDblackObjects1.length = 0;
gdjs.introCode.GDblackObjects2.length = 0;
gdjs.introCode.GDblackObjects3.length = 0;
gdjs.introCode.GDblackObjects4.length = 0;

gdjs.introCode.eventsList8(runtimeScene);
gdjs.introCode.GDNewSprite3DObjects1.length = 0;
gdjs.introCode.GDNewSprite3DObjects2.length = 0;
gdjs.introCode.GDNewSprite3DObjects3.length = 0;
gdjs.introCode.GDNewSprite3DObjects4.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects1.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects2.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects3.length = 0;
gdjs.introCode.GDIntro_9595dangle_9595startObjects4.length = 0;
gdjs.introCode.GDNewTextObjects1.length = 0;
gdjs.introCode.GDNewTextObjects2.length = 0;
gdjs.introCode.GDNewTextObjects3.length = 0;
gdjs.introCode.GDNewTextObjects4.length = 0;
gdjs.introCode.GDCRT_9595maskObjects1.length = 0;
gdjs.introCode.GDCRT_9595maskObjects2.length = 0;
gdjs.introCode.GDCRT_9595maskObjects3.length = 0;
gdjs.introCode.GDCRT_9595maskObjects4.length = 0;
gdjs.introCode.GDblackObjects1.length = 0;
gdjs.introCode.GDblackObjects2.length = 0;
gdjs.introCode.GDblackObjects3.length = 0;
gdjs.introCode.GDblackObjects4.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
