gdjs.secretCode = {};
gdjs.secretCode.localVariables = [];
gdjs.secretCode.GDfilterObjects1= [];
gdjs.secretCode.GDfilterObjects2= [];
gdjs.secretCode.GDfilterObjects3= [];
gdjs.secretCode.GDfilterObjects4= [];
gdjs.secretCode.GDfilterObjects5= [];
gdjs.secretCode.GDfilterObjects6= [];
gdjs.secretCode.GDfilterObjects7= [];
gdjs.secretCode.GDfilterObjects8= [];
gdjs.secretCode.GDblackObjects1= [];
gdjs.secretCode.GDblackObjects2= [];
gdjs.secretCode.GDblackObjects3= [];
gdjs.secretCode.GDblackObjects4= [];
gdjs.secretCode.GDblackObjects5= [];
gdjs.secretCode.GDblackObjects6= [];
gdjs.secretCode.GDblackObjects7= [];
gdjs.secretCode.GDblackObjects8= [];
gdjs.secretCode.GDloginwarningObjects1= [];
gdjs.secretCode.GDloginwarningObjects2= [];
gdjs.secretCode.GDloginwarningObjects3= [];
gdjs.secretCode.GDloginwarningObjects4= [];
gdjs.secretCode.GDloginwarningObjects5= [];
gdjs.secretCode.GDloginwarningObjects6= [];
gdjs.secretCode.GDloginwarningObjects7= [];
gdjs.secretCode.GDloginwarningObjects8= [];
gdjs.secretCode.GDNameinputObjects1= [];
gdjs.secretCode.GDNameinputObjects2= [];
gdjs.secretCode.GDNameinputObjects3= [];
gdjs.secretCode.GDNameinputObjects4= [];
gdjs.secretCode.GDNameinputObjects5= [];
gdjs.secretCode.GDNameinputObjects6= [];
gdjs.secretCode.GDNameinputObjects7= [];
gdjs.secretCode.GDNameinputObjects8= [];
gdjs.secretCode.GDNameObjects1= [];
gdjs.secretCode.GDNameObjects2= [];
gdjs.secretCode.GDNameObjects3= [];
gdjs.secretCode.GDNameObjects4= [];
gdjs.secretCode.GDNameObjects5= [];
gdjs.secretCode.GDNameObjects6= [];
gdjs.secretCode.GDNameObjects7= [];
gdjs.secretCode.GDNameObjects8= [];
gdjs.secretCode.GDpasswordObjects1= [];
gdjs.secretCode.GDpasswordObjects2= [];
gdjs.secretCode.GDpasswordObjects3= [];
gdjs.secretCode.GDpasswordObjects4= [];
gdjs.secretCode.GDpasswordObjects5= [];
gdjs.secretCode.GDpasswordObjects6= [];
gdjs.secretCode.GDpasswordObjects7= [];
gdjs.secretCode.GDpasswordObjects8= [];
gdjs.secretCode.GDPasswordinputObjects1= [];
gdjs.secretCode.GDPasswordinputObjects2= [];
gdjs.secretCode.GDPasswordinputObjects3= [];
gdjs.secretCode.GDPasswordinputObjects4= [];
gdjs.secretCode.GDPasswordinputObjects5= [];
gdjs.secretCode.GDPasswordinputObjects6= [];
gdjs.secretCode.GDPasswordinputObjects7= [];
gdjs.secretCode.GDPasswordinputObjects8= [];
gdjs.secretCode.GDLog_9595inObjects1= [];
gdjs.secretCode.GDLog_9595inObjects2= [];
gdjs.secretCode.GDLog_9595inObjects3= [];
gdjs.secretCode.GDLog_9595inObjects4= [];
gdjs.secretCode.GDLog_9595inObjects5= [];
gdjs.secretCode.GDLog_9595inObjects6= [];
gdjs.secretCode.GDLog_9595inObjects7= [];
gdjs.secretCode.GDLog_9595inObjects8= [];
gdjs.secretCode.GDInvalidObjects1= [];
gdjs.secretCode.GDInvalidObjects2= [];
gdjs.secretCode.GDInvalidObjects3= [];
gdjs.secretCode.GDInvalidObjects4= [];
gdjs.secretCode.GDInvalidObjects5= [];
gdjs.secretCode.GDInvalidObjects6= [];
gdjs.secretCode.GDInvalidObjects7= [];
gdjs.secretCode.GDInvalidObjects8= [];
gdjs.secretCode.GDwaningObjects1= [];
gdjs.secretCode.GDwaningObjects2= [];
gdjs.secretCode.GDwaningObjects3= [];
gdjs.secretCode.GDwaningObjects4= [];
gdjs.secretCode.GDwaningObjects5= [];
gdjs.secretCode.GDwaningObjects6= [];
gdjs.secretCode.GDwaningObjects7= [];
gdjs.secretCode.GDwaningObjects8= [];


gdjs.secretCode.asyncCallback11327684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects6);

gdjs.copyArray(asyncObjectsList.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects6);

gdjs.copyArray(asyncObjectsList.getObjects("Passwordinput"), gdjs.secretCode.GDPasswordinputObjects6);

{for(var i = 0, len = gdjs.secretCode.GDLog_9595inObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDLog_9595inObjects6[i].hide(false);
}
}{for(var i = 0, len = gdjs.secretCode.GDNameinputObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDNameinputObjects6[i].focus();
}
}{for(var i = 0, len = gdjs.secretCode.GDNameinputObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDNameinputObjects6[i].setReadOnly(false);
}
}{for(var i = 0, len = gdjs.secretCode.GDPasswordinputObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDPasswordinputObjects6[i].setReadOnly(false);
}
}gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
/* Don't save Log_in as it will be provided by the parent asyncObjectsList. */
/* Don't save Nameinput as it will be provided by the parent asyncObjectsList. */
/* Don't save Passwordinput as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.secretCode.asyncCallback11327684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10663772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("password"), gdjs.secretCode.GDpasswordObjects5);

{for(var i = 0, len = gdjs.secretCode.GDpasswordObjects5.length ;i < len;++i) {
    gdjs.secretCode.GDpasswordObjects5[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
/* Don't save Log_in as it will be provided by the parent asyncObjectsList. */
/* Don't save Nameinput as it will be provided by the parent asyncObjectsList. */
/* Don't save Passwordinput as it will be provided by the parent asyncObjectsList. */
/* Don't save password as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.secretCode.asyncCallback10663772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10711276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Name"), gdjs.secretCode.GDNameObjects4);

{for(var i = 0, len = gdjs.secretCode.GDNameObjects4.length ;i < len;++i) {
    gdjs.secretCode.GDNameObjects4[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
/* Don't save Log_in as it will be provided by the parent asyncObjectsList. */
/* Don't save Name as it will be provided by the parent asyncObjectsList. */
/* Don't save Nameinput as it will be provided by the parent asyncObjectsList. */
/* Don't save Passwordinput as it will be provided by the parent asyncObjectsList. */
/* Don't save password as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.secretCode.asyncCallback10711276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10297644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("loginwarning"), gdjs.secretCode.GDloginwarningObjects3);

gdjs.copyArray(runtimeScene.getObjects("waning"), gdjs.secretCode.GDwaningObjects3);
{for(var i = 0, len = gdjs.secretCode.GDloginwarningObjects3.length ;i < len;++i) {
    gdjs.secretCode.GDloginwarningObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.secretCode.GDwaningObjects3.length ;i < len;++i) {
    gdjs.secretCode.GDwaningObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.secretCode.GDloginwarningObjects3.length ;i < len;++i) {
    gdjs.secretCode.GDloginwarningObjects3[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.secretCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
/* Don't save Log_in as it will be provided by the parent asyncObjectsList. */
/* Don't save Name as it will be provided by the parent asyncObjectsList. */
/* Don't save Nameinput as it will be provided by the parent asyncObjectsList. */
/* Don't save Passwordinput as it will be provided by the parent asyncObjectsList. */
/* Don't save loginwarning as it will be provided by the parent asyncObjectsList. */
/* Don't save password as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.secretCode.asyncCallback10297644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8637156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("black"), gdjs.secretCode.GDblackObjects2);

{for(var i = 0, len = gdjs.secretCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.secretCode.GDblackObjects2[i].getBehavior("Tween").addObjectOpacityTween2("black", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.secretCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDLog_9595inObjects1) asyncObjectsList.addObject("Log_in", obj);
for (const obj of gdjs.secretCode.GDNameObjects1) asyncObjectsList.addObject("Name", obj);
for (const obj of gdjs.secretCode.GDNameinputObjects1) asyncObjectsList.addObject("Nameinput", obj);
for (const obj of gdjs.secretCode.GDPasswordinputObjects1) asyncObjectsList.addObject("Passwordinput", obj);
for (const obj of gdjs.secretCode.GDblackObjects1) asyncObjectsList.addObject("black", obj);
for (const obj of gdjs.secretCode.GDloginwarningObjects1) asyncObjectsList.addObject("loginwarning", obj);
for (const obj of gdjs.secretCode.GDpasswordObjects1) asyncObjectsList.addObject("password", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.secretCode.asyncCallback8637156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.mapOfGDgdjs_9546secretCode_9546GDNameinputObjects1Objects = Hashtable.newFrom({"Nameinput": gdjs.secretCode.GDNameinputObjects1});
gdjs.secretCode.mapOfGDgdjs_9546secretCode_9546GDPasswordinputObjects1Objects = Hashtable.newFrom({"Passwordinput": gdjs.secretCode.GDPasswordinputObjects1});
gdjs.secretCode.asyncCallback10550988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback10550988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8281868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects7);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects7.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects7[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects6) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8281868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10496132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects6);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects6[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects5) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback10496132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8281940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects5);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects5.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects5[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects4) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8281940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10308276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects4);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects4.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects4[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects3) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback10308276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10218460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects3);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects3.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects3[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects2) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback10218460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback10975556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback10975556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8275564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects7);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects7.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects7[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects6) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8275564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8636140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects6);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects6.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects6[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects5) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8636140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8635972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects5);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects5.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects5[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects4) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8635972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8275420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects4);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects4.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects4[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects3) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8275420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.asyncCallback8285932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.secretCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects3);

{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects3.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects3[i].hide();
}
}
{ //Subevents
gdjs.secretCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.secretCode.localVariables.length = 0;
}
gdjs.secretCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.secretCode.localVariables);
for (const obj of gdjs.secretCode.GDInvalidObjects2) asyncObjectsList.addObject("Invalid", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.secretCode.asyncCallback8285932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.secretCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(7)) == "";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects2);
{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects2.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(8)) == "";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects2);
{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects2.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.secretCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(1).getAsString();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(8)) == runtimeScene.getScene().getVariables().getFromIndex(2).getAsString();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(8)) == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString();
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(5).getAsString();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(8)) == runtimeScene.getScene().getVariables().getFromIndex(6).getAsString();
}
if (isConditionTrue_0) {
}

}


};gdjs.secretCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Invalid"), gdjs.secretCode.GDInvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.secretCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Passwordinput"), gdjs.secretCode.GDPasswordinputObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.secretCode.GDblackObjects1);
gdjs.copyArray(runtimeScene.getObjects("loginwarning"), gdjs.secretCode.GDloginwarningObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.secretCode.GDpasswordObjects1);
{for(var i = 0, len = gdjs.secretCode.GDInvalidObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDInvalidObjects1[i].hide();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.secretCode.GDloginwarningObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDloginwarningObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.secretCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDNameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.secretCode.GDpasswordObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDpasswordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.secretCode.GDLog_9595inObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDLog_9595inObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.secretCode.GDNameinputObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDNameinputObjects1[i].setReadOnly(true);
}
}{for(var i = 0, len = gdjs.secretCode.GDPasswordinputObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDPasswordinputObjects1[i].setReadOnly(true);
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "none", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.secretCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDblackObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.secretCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.secretCode.mapOfGDgdjs_9546secretCode_9546GDNameinputObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "none", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Passwordinput"), gdjs.secretCode.GDPasswordinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.secretCode.mapOfGDgdjs_9546secretCode_9546GDPasswordinputObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "none", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects1);
gdjs.copyArray(runtimeScene.getObjects("filter"), gdjs.secretCode.GDfilterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDfilterObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDfilterObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDfilterObjects1[k] = gdjs.secretCode.GDfilterObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDfilterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDLog_9595inObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDLog_9595inObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDLog_9595inObjects1[k] = gdjs.secretCode.GDLog_9595inObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDLog_9595inObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Passwordinput"), gdjs.secretCode.GDPasswordinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDLog_9595inObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDLog_9595inObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDLog_9595inObjects1[k] = gdjs.secretCode.GDLog_9595inObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDLog_9595inObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDNameinputObjects1.length;i<l;++i) {
    if ( !(gdjs.secretCode.GDNameinputObjects1[i].isFocused()) ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDNameinputObjects1[k] = gdjs.secretCode.GDNameinputObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDNameinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDPasswordinputObjects1.length;i<l;++i) {
    if ( !(gdjs.secretCode.GDPasswordinputObjects1[i].isFocused()) ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDPasswordinputObjects1[k] = gdjs.secretCode.GDPasswordinputObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDPasswordinputObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.secretCode.GDLog_9595inObjects1 */
{for(var i = 0, len = gdjs.secretCode.GDLog_9595inObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDLog_9595inObjects1[i].setBold(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDNameinputObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDNameinputObjects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDNameinputObjects1[k] = gdjs.secretCode.GDNameinputObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDNameinputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDLog_9595inObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDLog_9595inObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDLog_9595inObjects1[k] = gdjs.secretCode.GDLog_9595inObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDLog_9595inObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.secretCode.GDLog_9595inObjects1 */
{for(var i = 0, len = gdjs.secretCode.GDLog_9595inObjects1.length ;i < len;++i) {
    gdjs.secretCode.GDLog_9595inObjects1[i].setBold(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Log_in"), gdjs.secretCode.GDLog_9595inObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Insert");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.secretCode.GDLog_9595inObjects1.length;i<l;++i) {
    if ( gdjs.secretCode.GDLog_9595inObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.secretCode.GDLog_9595inObjects1[k] = gdjs.secretCode.GDLog_9595inObjects1[i];
        ++k;
    }
}
gdjs.secretCode.GDLog_9595inObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nameinput"), gdjs.secretCode.GDNameinputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Passwordinput"), gdjs.secretCode.GDPasswordinputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(7).setString((( gdjs.secretCode.GDNameinputObjects1.length === 0 ) ? "" :gdjs.secretCode.GDNameinputObjects1[0].getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(8).setString((( gdjs.secretCode.GDPasswordinputObjects1.length === 0 ) ? "" :gdjs.secretCode.GDPasswordinputObjects1[0].getText()));
}
{ //Subevents
gdjs.secretCode.eventsList17(runtimeScene);} //End of subevents
}

}


};

gdjs.secretCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.secretCode.GDfilterObjects1.length = 0;
gdjs.secretCode.GDfilterObjects2.length = 0;
gdjs.secretCode.GDfilterObjects3.length = 0;
gdjs.secretCode.GDfilterObjects4.length = 0;
gdjs.secretCode.GDfilterObjects5.length = 0;
gdjs.secretCode.GDfilterObjects6.length = 0;
gdjs.secretCode.GDfilterObjects7.length = 0;
gdjs.secretCode.GDfilterObjects8.length = 0;
gdjs.secretCode.GDblackObjects1.length = 0;
gdjs.secretCode.GDblackObjects2.length = 0;
gdjs.secretCode.GDblackObjects3.length = 0;
gdjs.secretCode.GDblackObjects4.length = 0;
gdjs.secretCode.GDblackObjects5.length = 0;
gdjs.secretCode.GDblackObjects6.length = 0;
gdjs.secretCode.GDblackObjects7.length = 0;
gdjs.secretCode.GDblackObjects8.length = 0;
gdjs.secretCode.GDloginwarningObjects1.length = 0;
gdjs.secretCode.GDloginwarningObjects2.length = 0;
gdjs.secretCode.GDloginwarningObjects3.length = 0;
gdjs.secretCode.GDloginwarningObjects4.length = 0;
gdjs.secretCode.GDloginwarningObjects5.length = 0;
gdjs.secretCode.GDloginwarningObjects6.length = 0;
gdjs.secretCode.GDloginwarningObjects7.length = 0;
gdjs.secretCode.GDloginwarningObjects8.length = 0;
gdjs.secretCode.GDNameinputObjects1.length = 0;
gdjs.secretCode.GDNameinputObjects2.length = 0;
gdjs.secretCode.GDNameinputObjects3.length = 0;
gdjs.secretCode.GDNameinputObjects4.length = 0;
gdjs.secretCode.GDNameinputObjects5.length = 0;
gdjs.secretCode.GDNameinputObjects6.length = 0;
gdjs.secretCode.GDNameinputObjects7.length = 0;
gdjs.secretCode.GDNameinputObjects8.length = 0;
gdjs.secretCode.GDNameObjects1.length = 0;
gdjs.secretCode.GDNameObjects2.length = 0;
gdjs.secretCode.GDNameObjects3.length = 0;
gdjs.secretCode.GDNameObjects4.length = 0;
gdjs.secretCode.GDNameObjects5.length = 0;
gdjs.secretCode.GDNameObjects6.length = 0;
gdjs.secretCode.GDNameObjects7.length = 0;
gdjs.secretCode.GDNameObjects8.length = 0;
gdjs.secretCode.GDpasswordObjects1.length = 0;
gdjs.secretCode.GDpasswordObjects2.length = 0;
gdjs.secretCode.GDpasswordObjects3.length = 0;
gdjs.secretCode.GDpasswordObjects4.length = 0;
gdjs.secretCode.GDpasswordObjects5.length = 0;
gdjs.secretCode.GDpasswordObjects6.length = 0;
gdjs.secretCode.GDpasswordObjects7.length = 0;
gdjs.secretCode.GDpasswordObjects8.length = 0;
gdjs.secretCode.GDPasswordinputObjects1.length = 0;
gdjs.secretCode.GDPasswordinputObjects2.length = 0;
gdjs.secretCode.GDPasswordinputObjects3.length = 0;
gdjs.secretCode.GDPasswordinputObjects4.length = 0;
gdjs.secretCode.GDPasswordinputObjects5.length = 0;
gdjs.secretCode.GDPasswordinputObjects6.length = 0;
gdjs.secretCode.GDPasswordinputObjects7.length = 0;
gdjs.secretCode.GDPasswordinputObjects8.length = 0;
gdjs.secretCode.GDLog_9595inObjects1.length = 0;
gdjs.secretCode.GDLog_9595inObjects2.length = 0;
gdjs.secretCode.GDLog_9595inObjects3.length = 0;
gdjs.secretCode.GDLog_9595inObjects4.length = 0;
gdjs.secretCode.GDLog_9595inObjects5.length = 0;
gdjs.secretCode.GDLog_9595inObjects6.length = 0;
gdjs.secretCode.GDLog_9595inObjects7.length = 0;
gdjs.secretCode.GDLog_9595inObjects8.length = 0;
gdjs.secretCode.GDInvalidObjects1.length = 0;
gdjs.secretCode.GDInvalidObjects2.length = 0;
gdjs.secretCode.GDInvalidObjects3.length = 0;
gdjs.secretCode.GDInvalidObjects4.length = 0;
gdjs.secretCode.GDInvalidObjects5.length = 0;
gdjs.secretCode.GDInvalidObjects6.length = 0;
gdjs.secretCode.GDInvalidObjects7.length = 0;
gdjs.secretCode.GDInvalidObjects8.length = 0;
gdjs.secretCode.GDwaningObjects1.length = 0;
gdjs.secretCode.GDwaningObjects2.length = 0;
gdjs.secretCode.GDwaningObjects3.length = 0;
gdjs.secretCode.GDwaningObjects4.length = 0;
gdjs.secretCode.GDwaningObjects5.length = 0;
gdjs.secretCode.GDwaningObjects6.length = 0;
gdjs.secretCode.GDwaningObjects7.length = 0;
gdjs.secretCode.GDwaningObjects8.length = 0;

gdjs.secretCode.eventsList18(runtimeScene);
gdjs.secretCode.GDfilterObjects1.length = 0;
gdjs.secretCode.GDfilterObjects2.length = 0;
gdjs.secretCode.GDfilterObjects3.length = 0;
gdjs.secretCode.GDfilterObjects4.length = 0;
gdjs.secretCode.GDfilterObjects5.length = 0;
gdjs.secretCode.GDfilterObjects6.length = 0;
gdjs.secretCode.GDfilterObjects7.length = 0;
gdjs.secretCode.GDfilterObjects8.length = 0;
gdjs.secretCode.GDblackObjects1.length = 0;
gdjs.secretCode.GDblackObjects2.length = 0;
gdjs.secretCode.GDblackObjects3.length = 0;
gdjs.secretCode.GDblackObjects4.length = 0;
gdjs.secretCode.GDblackObjects5.length = 0;
gdjs.secretCode.GDblackObjects6.length = 0;
gdjs.secretCode.GDblackObjects7.length = 0;
gdjs.secretCode.GDblackObjects8.length = 0;
gdjs.secretCode.GDloginwarningObjects1.length = 0;
gdjs.secretCode.GDloginwarningObjects2.length = 0;
gdjs.secretCode.GDloginwarningObjects3.length = 0;
gdjs.secretCode.GDloginwarningObjects4.length = 0;
gdjs.secretCode.GDloginwarningObjects5.length = 0;
gdjs.secretCode.GDloginwarningObjects6.length = 0;
gdjs.secretCode.GDloginwarningObjects7.length = 0;
gdjs.secretCode.GDloginwarningObjects8.length = 0;
gdjs.secretCode.GDNameinputObjects1.length = 0;
gdjs.secretCode.GDNameinputObjects2.length = 0;
gdjs.secretCode.GDNameinputObjects3.length = 0;
gdjs.secretCode.GDNameinputObjects4.length = 0;
gdjs.secretCode.GDNameinputObjects5.length = 0;
gdjs.secretCode.GDNameinputObjects6.length = 0;
gdjs.secretCode.GDNameinputObjects7.length = 0;
gdjs.secretCode.GDNameinputObjects8.length = 0;
gdjs.secretCode.GDNameObjects1.length = 0;
gdjs.secretCode.GDNameObjects2.length = 0;
gdjs.secretCode.GDNameObjects3.length = 0;
gdjs.secretCode.GDNameObjects4.length = 0;
gdjs.secretCode.GDNameObjects5.length = 0;
gdjs.secretCode.GDNameObjects6.length = 0;
gdjs.secretCode.GDNameObjects7.length = 0;
gdjs.secretCode.GDNameObjects8.length = 0;
gdjs.secretCode.GDpasswordObjects1.length = 0;
gdjs.secretCode.GDpasswordObjects2.length = 0;
gdjs.secretCode.GDpasswordObjects3.length = 0;
gdjs.secretCode.GDpasswordObjects4.length = 0;
gdjs.secretCode.GDpasswordObjects5.length = 0;
gdjs.secretCode.GDpasswordObjects6.length = 0;
gdjs.secretCode.GDpasswordObjects7.length = 0;
gdjs.secretCode.GDpasswordObjects8.length = 0;
gdjs.secretCode.GDPasswordinputObjects1.length = 0;
gdjs.secretCode.GDPasswordinputObjects2.length = 0;
gdjs.secretCode.GDPasswordinputObjects3.length = 0;
gdjs.secretCode.GDPasswordinputObjects4.length = 0;
gdjs.secretCode.GDPasswordinputObjects5.length = 0;
gdjs.secretCode.GDPasswordinputObjects6.length = 0;
gdjs.secretCode.GDPasswordinputObjects7.length = 0;
gdjs.secretCode.GDPasswordinputObjects8.length = 0;
gdjs.secretCode.GDLog_9595inObjects1.length = 0;
gdjs.secretCode.GDLog_9595inObjects2.length = 0;
gdjs.secretCode.GDLog_9595inObjects3.length = 0;
gdjs.secretCode.GDLog_9595inObjects4.length = 0;
gdjs.secretCode.GDLog_9595inObjects5.length = 0;
gdjs.secretCode.GDLog_9595inObjects6.length = 0;
gdjs.secretCode.GDLog_9595inObjects7.length = 0;
gdjs.secretCode.GDLog_9595inObjects8.length = 0;
gdjs.secretCode.GDInvalidObjects1.length = 0;
gdjs.secretCode.GDInvalidObjects2.length = 0;
gdjs.secretCode.GDInvalidObjects3.length = 0;
gdjs.secretCode.GDInvalidObjects4.length = 0;
gdjs.secretCode.GDInvalidObjects5.length = 0;
gdjs.secretCode.GDInvalidObjects6.length = 0;
gdjs.secretCode.GDInvalidObjects7.length = 0;
gdjs.secretCode.GDInvalidObjects8.length = 0;
gdjs.secretCode.GDwaningObjects1.length = 0;
gdjs.secretCode.GDwaningObjects2.length = 0;
gdjs.secretCode.GDwaningObjects3.length = 0;
gdjs.secretCode.GDwaningObjects4.length = 0;
gdjs.secretCode.GDwaningObjects5.length = 0;
gdjs.secretCode.GDwaningObjects6.length = 0;
gdjs.secretCode.GDwaningObjects7.length = 0;
gdjs.secretCode.GDwaningObjects8.length = 0;


return;

}

gdjs['secretCode'] = gdjs.secretCode;
