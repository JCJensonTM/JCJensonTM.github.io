gdjs.loading_32_40client_41Code = {};
gdjs.loading_32_40client_41Code.localVariables = [];


gdjs.loading_32_40client_41Code.asyncCallback23951132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loading_32_40client_41Code.localVariables);
{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.loading_32_40client_41Code.localVariables.length = 0;
}
gdjs.loading_32_40client_41Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.loading_32_40client_41Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loading_32_40client_41Code.asyncCallback23951132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loading_32_40client_41Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.loading_32_40client_41Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.loading_32_40client_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.loading_32_40client_41Code.eventsList1(runtimeScene);


return;

}

gdjs['loading_32_40client_41Code'] = gdjs.loading_32_40client_41Code;
