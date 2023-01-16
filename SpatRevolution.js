/*
 ==============================================================================

  Chataigne Module for SPAT Revolution

  Copyright: Nicolas Erard, April 2022

  ==============================================================================
===============================================================================
This file is a Chataigne Custom Module to remote control SPAT Revolution.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
===============================================================================
*/

var RemoteRangeFromString = {
    'midi': [0, 127],
    'linear01': [0, 1],
    'linear-11': [-1, 1],
    'percent': [0, 100]
};

var ParameterFromString = {
    'sourcegain': function(index)
    {
        return Sources[index].gain;
    },
    'sourcelfe': function(index)
    {
        return Sources[index].lfe1;
    },
    'sourcelfe2': function(index)
    {
        return Sources[index].lfe2;
    },
    'sourcelfe3': function(index)
    {
        return Sources[index].lfe3;
    },
    'sourcelfe4': function(index)
    {
        return Sources[index].lfe4;
    },
    'sourcesolo': function(index)
    {
        return Sources[index].solo;
    },
    'sourceselected': function(index)
    {
        return Sources[index].selected;
    },
    'sourcemute': function(index)
    {
        return Sources[index].mute;
    },
    'sourceazimuth': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourceelevation': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourcedistance': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourcepositionX': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourcepositionY': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourcepositionZ': function(index)
    {
        return Sources[index].positionAED;
    },
    'sourcereverbEnable': function(index)
    {
        return Sources[index].reverbEnable;
    },
    'sourceearlyEnable': function(index)
    {
        return Sources[index].earlyEnable;
    },
    'sourceclusterEnable': function(index)
    {
        return Sources[index].clusterEnable;
    },
    'sourcetailEnable': function(index)
    {
        return Sources[index].tailEnable;
    },
    'sourcepresence': function(index)
    {
        return Sources[index].presence;
    },
    'sourceroomPresence': function(index)
    {
        return Sources[index].roomPresence;
    },
    'sourcerunningReverberance': function(index)
    {
        return Sources[index].runningReverberance;
    },
    'sourceenvelopment': function(index)
    {
        return Sources[index].envelopment;
    },
    'sourcebrilliance': function(index)
    {
        return Sources[index].brilliance;
    },
    'sourcewarmth': function(index)
    {
        return Sources[index].warmth;
    },
    'sourceyaw': function(index)
    {
        return Sources[index].yaw;
    },
    'sourcepitch': function(index)
    {
        return Sources[index].pitch;
    },
    'sourceaperture': function(index)
    {
        return Sources[index].aperture;
    },
    'sourcescale': function(index)
    {
        return Sources[index].scale;
    },
    'sourcespread': function(index)
    {
        return Sources[index].spread;
    },
    'sourceknn': function(index)
    {
        return Sources[index].knn;
    },
    'sourceearlyWidth': function(index)
    {
        return Sources[index].earlyWidth;
    },
    'sourcepanRev': function(index)
    {
        return Sources[index].panRev;
    },
    'sourcedoppler': function(index)
    {
        return Sources[index].doppler;
    },
    'sourceradius': function(index)
    {
        return Sources[index].radius;
    },
    'sourceairAbsorption': function(index)
    {
        return Sources[index].airAbsorption;
    },
    'sourcexyCoordinatesMode': function(index)
    {
        return Sources[index].xyCoordinatesMode;
    },
    'sourcezCoordinatesMode': function(index)
    {
        return Sources[index].zCoordinatesMode;
    },
    'sourcedropLog': function(index)
    {
        return Sources[index].dropLog;
    },
    'sourcedropFactor': function(index)
    {
        return Sources[index].dropFactor;
    },
    'sourcerotx': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'sourceroty': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'sourcerotz': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'sourceomniGain': function(index)
    {
        return Sources[index].omniGain;
    },
    'sourceroomGain1': function(index)
    {
        return Sources[index].roomGain1;
    },
    'sourceroomGain2': function(index)
    {
        return Sources[index].roomGain2;
    },
    'sourceroomGain3': function(index)
    {
        return Sources[index].roomGain3;
    },
    'sourceroomGain4': function(index)
    {
        return Sources[index].roomGain4;
    },
    'sourceroomGain5': function(index)
    {
        return Sources[index].roomGain5;
    },
    'sourceroomGain6': function(index)
    {
        return Sources[index].roomGain6;
    },
    'sourceroomGain7': function(index)
    {
        return Sources[index].roomGain7;
    },
    'sourceroomGain8': function(index)
    {
        return Sources[index].roomGain8;
    },
    'sourceroomGain9': function(index)
    {
        return Sources[index].roomGain9;
    },
    'sourceroomGain10': function(index)
    {
        return Sources[index].roomGain10;
    },
    'roomGain': function(index)
    {
        return Rooms[index].gainRoom;
    },
    'roomMute': function(index)
    {
        return Rooms[index].muteRoom;
    },
    'roomListenerX': function(index)
    {
        return Rooms[index].listenerPosition;
    },
    'roomListenerY': function(index)
    {
        return Rooms[index].listenerPosition;
    },
    'roomListenerZ': function(index)
    {
        return Rooms[index].listenerPosition;
    },
    'roomListenerYaw': function(index)
    {
        return Rooms[index].listenerOrientation;
    },
    'roomListenerPitch': function(index)
    {
        return Rooms[index].listenerOrientation;
    },
    'roomListenerRoll': function(index)
    {
        return Rooms[index].listenerOrientation;
    },
    'roomReverbDensity': function(index)
    {
        return Rooms[index].reverbDensity;
    },
    'roomReverbEnable': function(index)
    {
        return Rooms[index].reverbEnableRoom;
    },
    'roomReverbSize': function(index)
    {
        return Rooms[index].roomSize;
    },
    'roomReverbStart': function(index)
    {
        return Rooms[index].reverbStart;
    },
    'roomReverbGain': function(index)
    {
        return Rooms[index].reverbGain;
    },
    'roomReverbFactor': function(index)
    {
        return Rooms[index].reverbFactor;
    },
    'roomReverberance': function(index)
    {
        return Rooms[index].reverberance;
    },
    'roomHeaviness': function(index)
    {
        return Rooms[index].heaviness;
    },
    'roomLiveness': function(index)
    {
        return Rooms[index].liveness;
    },
    'roomEarlyMin': function(index)
    {
        return Rooms[index].earlyMin;
    },
    'roomEarlyMax': function(index)
    {
        return Rooms[index].earlyMax;
    },
    'roomEarlyDist': function(index)
    {
        return Rooms[index].earlyDist;
    },
    'roomEarlyShape': function(index)
    {
        return Rooms[index].earlyShape;
    },
    'roomClusterMin': function(index)
    {
        return Rooms[index].clusterMin;
    },
    'roomClusterMax': function(index)
    {
        return Rooms[index].clusterMax;
    },
    'roomClusterDist': function(index)
    {
        return Rooms[index].clusterDist;
    },
    'roomReverbInfinite': function(index)
    {
        return Rooms[index].reverbInfinite;
    },
    'roomAirEnable': function(index)
    {
        return Rooms[index].airEnable;
    },
    'roomAirFreq': function(index)
    {
        return Rooms[index].airFreq;
    },
    'roomModalDensity': function(index)
    {
        return Rooms[index].modalDensity;
    },
    'roomFrequencyLow': function(index)
    {
        return Rooms[index].frequencyLow;
    },
    'roomFrequencyHigh': function(index)
    {
        return Rooms[index].frequencyHigh;
    }
};

/**
 * Get maximum distance for remote
 */
function getMaxDistance()
{
    if (distanceMax)
    {
        var val = distanceMax.get();
        return val;
    }
    else
    {
        return 100.0;
    }
}

var RangeForParameter = {
    'sourceselected': [0, 1],
    'sourcemute': [0, 1],
    'sourcesolo': [0, 1],
    'sourcereverbEnable': [0, 1],
    'sourceearlyEnable': [0, 1],
    'sourceclusterEnable': [0, 1],
    'sourcetailEnable': [0, 1],
    'sourcedoppler': [0, 1],
    'sourceairAbsorption': [0, 1],
    'sourcexyCoordinatesMode': [0, 1],
    'sourcezCoordinatesMode': [0, 1],
    'sourcedropLog': [0, 1],
    'sourcegain': [-144.5, 24.0],
    'sourcelfe': [-144.5, 24.0],
    'sourcelfe2': [-144.5, 24.0],
    'sourcelfe3': [-144.5, 24.0],
    'sourcelfe4': [-144.5, 24.0],
    'sourceazimuth': [-180.0, 180.0],
    'sourceelevation': [-90.0, 90.0],
    'sourcedistance': [0, getMaxDistance()],
    'sourcepositionX': [- 1 * getMaxDistance(), getMaxDistance()],
    'sourcepositionY': [- 1 * getMaxDistance(), getMaxDistance()],
    'sourcepositionZ': [- 1 * getMaxDistance(), getMaxDistance()],
    'sourcepresence': [0, 120.0],
    'sourceroomPresence': [0.0, 120.0],
    'sourcerunningReverberance': [0.0, 50.0],
    'sourceenvelopment': [0.0, 50.0],
    'sourcebrilliance': [0.0, 60.0],
    'sourcewarmth': [0, 60.0],
    'sourceyaw': [-180, 180.0],
    'sourcepitch': [-90, 90.0],
    'sourceaperture': [10.0, 180.0],
    'sourcescale': [0.1, 100.0],
    'sourcespread': [0.0, 100.0],
    'sourceknn': [1, 100.0],
    'sourceearlyWidth': [1.0, 180.0],
    'sourcepanRev': [0, 1.0],
    'sourceradius': [0.2, 100.0],
    'sourcedropFactor': [-10.0, 30.0],
    'sourcerotx': [-180, 180.0],
    'sourceroty': [-180, 180.0],
    'sourcerotz': [-180, 180.0],
    'sourceomniGain': [-144.5, 24.0],
    'sourceroomGain1': [-144.5, 24.0],
    'sourceroomGain2': [-144.5, 24.0],
    'sourceroomGain3': [-144.5, 24.0],
    'sourceroomGain4': [-144.5, 24.0],
    'sourceroomGain5': [-144.5, 24.0],
    'sourceroomGain6': [-144.5, 24.0],
    'sourceroomGain7': [-144.5, 24.0],
    'sourceroomGain8': [-144.5, 24.0],
    'sourceroomGain9': [-144.5, 24.0],
    'sourceroomGain10': [-144.5, 24.0],
    'roomGain': [-144.5, 24.0],
    'roomMute': [0, 1],
    'roomListenerX': [-100.0, 100],
    'roomListenerY': [-100.0, 100.0],
    'roomListenerZ': [-100.0, 100.0],
    'roomListenerYaw': [-180.0, 180.0],
    'roomListenerPitch': [-90.0, 90.0],
    'roomListenerRoll': [-90.0, 90.0],
    'roomReverbDensity': [0, 1],
    'roomReverbEnable': [0, 1],
    'roomReverbSize': [10, 15000],
    'roomEarlyMin': [1, 120],
    'roomEarlyMax': [1, 120],
    'roomEarlyDist': [0.1, 0.9],
    'roomEarlyShape': [0.1, 0.9],
    'roomClusterMin': [1.0, 300.0],
    'roomClusterMax': [1.0, 300.0],
    'roomClusterDist': [0.1, 0.9],
    'roomReverbInfinite': [0, 1],
    'roomAirEnable': [0, 1],
    'roomAirFreq': [20, 20000],
    'roomModalDensity': [0.2, 2.0],
    'roomFrequencyLow': [20, 20000],
    'roomFrequencyHigh': [20, 20000],

};

/* OSCSourcesMessage: array of all OSC Source Messages. Use to send OSC message when a value changed.*/
var OSCSourcesMessage = {
    'gain': function (index, value) {
        local.send("/source/" + index + "/gain", value.get());
    },
    'mute': function (index, value) {
        local.send("/source/" + index + "/mute", value.get());
    },
    'selected': function (index, value) {
        local.send("/source/" + index + "/select", value.get());
    },
    'solo': function (index, value) {
        local.send("/source/" + index + "/solo", value.get());
    },
    'lfe1': function (index, value) {
        local.send("/source/" + index + "/lfe", value.get());
    },
    'lfe2': function (index, value) {
        local.send("/source/" + index + "/lfe2", value.get());
    },
    'lfe3': function (index, value) {
        local.send("/source/" + index + "/lfe3", value.get());
    },
    'lfe4': function (index, value) {
        local.send("/source/" + index + "/lfe4", value.get());
    },
    'positionAED': function (index, value) {
        local.send("/source/" + index + "/aed", value.get());
    },
    // 'positionXYZ': function (index, value) {
    //     local.send("/source/" + index + "/aed", CartesianToPolar(value.get()));
    // },
    'reverbEnable': function (index, value) {
        local.send("/source/" + index + "/reverb/enable", value.get());
    },
    'earlyEnable': function (index, value) {
        local.send("/source/" + index + "/early", value.get());
    },
    'clusterEnable': function (index, value) {
        local.send("/source/" + index + "/cluster", value.get());
    },
    'tailEnable': function (index, value) {
        local.send("/source/" + index + "/tail", value.get());
    },
    'sourceName': function (index, value) {
        local.send("/source/" + index + "/name", value.get());
    },
    'presence': function (index, value) {
        local.send("/source/" + index + "/pres", value.get());
    },
    'roomPresence': function (index, value) {
        local.send("/source/" + index + "/prer", value.get());
    },
    'runningReverberance': function (index, value) {
        local.send("/source/" + index + "/revp", value.get());
    },
    'envelopment': function (index, value) {
        local.send("/source/" + index + "/env", value.get());
    },
    'brilliance': function (index, value) {
        local.send("/source/" + index + "/bril", value.get());
    },
    'warmth': function (index, value) {
        local.send("/source/" + index + "/warmth", value.get());
    },
    'yaw': function (index, value) {
        local.send("/source/" + index + "/yaw", value.get());
    },
    'pitch': function (index, value) {
        local.send("/source/" + index + "/pitch", value.get());
    },
    'aperture': function (index, value) {
        local.send("/source/" + index + "/aperture", value.get());
    },
    'scale': function (index, value) {
        local.send("/source/" + index + "/scale", value.get());
    },
    'spread': function (index, value) {
        local.send("/source/" + index + "/spread", value.get());
    },
    'KNN': function (index, value) {
        local.send("/source/" + index + "/nneig", value.get());
    },
    'earlyWidth': function (index, value) {
        local.send("/source/" + index + "/early/width", value.get());
    },
    'panRev': function (index, value) {
        local.send("/source/" + index + "/prevf", value.get());
    },
    'doppler': function (index, value) {
        local.send("/source/" + index + "/doppler/enable", value.get());
    },
    'radius': function (index, value) {
        local.send("/source/" + index + "/radius", value.get());
    },
    'airAbsorption': function (index, value) {
        local.send("/source/" + index + "/air/enable", value.get());
    },
    'xyCoordinatesMode': function (index, value) {
        local.send("/source/" + index + "/cm", value.get());
    },
    'zCoordinatesMode': function (index, value) {
        local.send("/source/" + index + "/zcm", value.get());
    },
    'dropLog': function (index, value) {
        local.send("/source/" + index + "/drop/type", value.get());
    },
    'dropFactor': function (index, value) {
        local.send("/source/" + index + "/drop/value", value.get());
    },
    'rotationXYZ': function (index, value) {
        local.send("/source/" + index + "/rotation", value.get());
    },
    'omniGain': function (index, value) {
        local.send("/source/" + index + "/omni/G0", value.get());
    },
    'roomGain1': function (index, value) {
        local.send("/source/" + index + "/rg1", value.get());
    },
    'roomGain2': function (index, value) {
        local.send("/source/" + index + "/rg2", value.get());
    },
    'roomGain3': function (index, value) {
        local.send("/source/" + index + "/rg3", value.get());
    },
    'roomGain4': function (index, value) {
        local.send("/source/" + index + "/rg4", value.get());
    },
    'roomGain5': function (index, value) {
        local.send("/source/" + index + "/rg5", value.get());
    },
    'roomGain6': function (index, value) {
        local.send("/source/" + index + "/rg6", value.get());
    },
    'roomGain7': function (index, value) {
        local.send("/source/" + index + "/rg7", value.get());
    },
    'roomGain8': function (index, value) {
        local.send("/source/" + index + "/rg8", value.get());
    },
    'roomGain9': function (index, value) {
        local.send("/source/" + index + "/rg9", value.get());
    },
    'roomGain10': function (index, value) {
        local.send("/source/" + index + "/rg10", value.get());
    }
};
//ROOM Parameter
var OSCRoomsMessage = {
    'roomName': function(index, value)
    {
        local.send("/room/" + index + "/name", value.get());
    }
    ,  'gainRoom': function(index, value)
    {
        local.send("/room/" + index + "/gain", value.get());
    },
    'muteRoom': function(index, value)
    {
        local.send("/room/" + index + "/mute", value.get());
    },
    'soloRoom': function(index, value)
    {
        local.send("/room/" + index + "/solo", value.get());
    },
    'reverbDensity': function(index, value)
    {
        local.send("/room/" + index + "/reverb/density", value.get());
    },
    'reverbEnableRoom': function(index, value)
    {
        local.send("/room/" + index + "/reverb/enable", value.get());
    },
    'roomSize': function(index, value)
    {
        local.send("/room/" + index + "/size", value.get());
    },
    'reverbStart': function(index, value)
    {
        local.send("/room/" + index + "/reverb/start", value.get());
    },
    'reverbGain': function(index, value)
    {
        local.send("/room/" + index + "/reverb/gain", value.get());
    },
    'reverbFactor': function(index, value)
    {
        local.send("/room/" + index + "/reverb/factor", value.get());
    },
    'reverberance': function(index, value)
    {
        local.send("/room/" + index + "/reverberance", value.get());
    },
    'heaviness': function(index, value)
    {
        local.send("/room/" + index + "/heaviness", value.get());
    },
    'liveness': function(index, value)
    {
        local.send("/room/" + index + "/liveness", value.get());
    },
    'earlyMin': function(index, value)
    {
        local.send("/room/" + index + "/early/min", value.get());
    },
    'earlyMax': function(index, value)
    {
        local.send("/room/" + index + "/early/max", value.get());
    },
    'earlyDist': function(index, value)
    {
        local.send("/room/" + index + "/early/dist", value.get());
    },
    'earlyShape': function(index, value)
    {
        local.send("/room/" + index + "/early/shape", value.get());
    },
    'clusterMin': function(index, value)
    {
        local.send("/room/" + index + "/cluster/min", value.get());
    },
    'clusterMax': function(index, value)
    {
        local.send("/room/" + index + "/cluster/max", value.get());
    },
    'clusterDist': function(index, value)
    {
        local.send("/room/" + index + "/cluster/dist", value.get());
    },
    'reverbInfinite': function(index, value)
    {
        local.send("/room/" + index + "/reverb/infinite", value.get());
    },
    'airEnable': function(index, value)
    {
        local.send("/room/" + index + "/air/enable", value.get());
    },
    'airFreq': function(index, value)
    {
        local.send("/room/" + index + "/air/freq", value.get());
    },
    'modalDensity': function(index, value)
    {
        local.send("/room/" + index + "/reverb/modal/density", value.get());
    },
    'frequencyLow': function(index, value)
    {
        local.send("/room/" + index + "/reverb/fl", value.get());
    },
    'frequencyHigh': function(index, value)
    {
        local.send("/room/" + index + "/reverb/fh", value.get());
    },
    'listenerPosition': function(index, value)
    {
        local.send("/room/" + index + "/xyz", value.get());
    },
    'listenerOrientation': function(index, value)
    {
        local.send("/room/" + index + "/ypr", value.get());
    }
};

//SNAPSHOTS Parameter
var OSCSnapshotsMessage = {
    'globalRecallSources': function (index, value)
    {
        local.send("/snapshot/options/recall/sources", value.get());
    },
    'globalRecallRooms': function (index, value)
    {
        local.send("/snapshot/options/recall/rooms", value.get());
    },
    'globalRecallMasters': function (index, value)
    {
        local.send("/snapshot/options/recall/masters", value.get());
    },
    'globalRecallTiming': function (index, value)
    {
        local.send("/snapshot/options/recall/timing", value.get());
    },
};

/**
 * Global variables
 */

var Sources = [];// array of all sources parameters.
var Rooms = []; // array of all rooms parameters
var Snapshots = []; // array of all snapshots parameters
var Remote = [];// array of all the remotes
var stopSendingOSC = false;
var stopUpdateForSource = -1;
var transformStereoToMono = false;
var stereo = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'true', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'true', 'false', 'true'];
var normalizedRange = [-10, 10, -10, 10, -10, 10];
var stopSendForSource = -1;
var isStarted = false;

/* 	===============================================================================
*	Chataigne common functions
*
*	See https://bkuperberg.gitbook.io/chataigne-docs/scripting/scripting-reference#common-functions
*	===============================================================================
*/

/**
 * This function is called automatically by Chataigne when you add the module in your Noisette.
 */
function init()
{
    local.values.removeContainer("Sources");

    // Add Setup container
    script.setUpdateRate(20);
    SetupContainer = local.parameters.addContainer("Setup", "Setup value");
    distanceMax = SetupContainer.addFloatParameter("Distance Max", "Distance maximum of the position XYZ and distance for AED, in meters", 100.0, 1.0, 100.0);
    numberOfRemotes = SetupContainer.addIntParameter("Number of  remotes", "number of remotes", 1, 0, 64);


    // script.log("Module initialization");
    // createSnapshotsContainer();
    createSourceContainer();
    createRoomContainer();
    createRemoteContainer();

    // var objectproperties = util.getObjectProperties(local.parameters.oscOutputs.oscOutput, true, false);
    // for (var i = 0; i < objectproperties.length; i++)
    // {
    //     script.log(objectproperties[i]);
    // }
    // local.parameters.oscInput.localPort.set(local.parameters.oscInput.localPort.get());
    // local.parameters.oscOutputs.oscOutput.remotePort.set(local.parameters.oscOutputs.oscOutput.remotePort.get());
    // local.parameters.oscOutputs.oscOutput.remoteHost.set(local.parameters.oscOutputs.oscOutput.remoteHost.get());
    // local.parameters.oscOutputs.oscOutput.local.set(local.parameters.oscOutputs.oscOutput.local.get());

    local.send("/source/*/dump", 0);
    local.send("/room/*/dump", 0);

    // script.log("End of the module initialization");
}

/**
 * This function is called automatically by Chataigne at updateRate period.
 * @param {integer} updateRate
 */
function update(updateRate)
{
    for (var remoteIndex = 0; remoteIndex < Remote.length; remoteIndex++)
    {
        var remoteRange = Remote[remoteIndex].remoteRange.get();
        for (var onOffIndex = 0; onOffIndex < Remote[remoteIndex].onOffNumber.get(); onOffIndex++)
        {
            var onOff = Remote[remoteIndex].onOff[onOffIndex];
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
            {
                if (onOff['values'][l]["target"]) {
                    var target = onOff['values'][l]["target"].getTarget();
                    var oldValue = onOff['values'][l]["value"].get();
                    if (target && ((remoteRange == 'midi' && parseInt(target.get()) != parseInt(oldValue * 127)) | (remoteRange != 'midi' && target.get() != oldValue))) {
                        var val = (target.get() - RemoteRangeFromString[remoteRange][0]) / (RemoteRangeFromString[remoteRange][1] - RemoteRangeFromString[remoteRange][0]);
                        // script.log("On update le onoff, remoteRange: "+ remoteRange + ", oldValue: " + parseInt(oldValue * 127) + ", newValue: "+ parseInt(target.get()));
                        // script.log("On update le onoff, newValue: "+ val);
                        onOff['values'][l]["value"].set(val);
                    }
                }
            }
        }
        //float
        for (var floatIndex = 0; floatIndex < Remote[remoteIndex].floatNumber.get(); floatIndex++)
        {
            var float = Remote[remoteIndex].float[floatIndex];
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
            {
                if (float['values'][l]["target"]) {
                    var target = float['values'][l]["target"].getTarget();
                    var oldValue = float['values'][l]["value"].get();
                    // script.log(target.name);
                    if (target && ((remoteRange == 'midi' && target.get() !=parseInt(oldValue * 127)) | (remoteRange != 'midi' && target.get() != oldValue))) {
                        var val = (target.get() - RemoteRangeFromString[remoteRange][0]) / (RemoteRangeFromString[remoteRange][1] - RemoteRangeFromString[remoteRange][0]);
                       float['values'][l]["value"].set(val);
                        script.log("On update le float, newValue: "+ val);

                    }
                }
            }
        }
    }


}

/**
 * This function is called automatically by Chataigne when a module parameter changes in GUI
 * @param {Parameters} param
 */
function moduleParameterChanged(param)
{
    if (param.name === 'remotePort' || param.name === 'local' || param.name === 'remoteHost')
    {
        local.send("/source/*/dump", 0);
        local.send("/room/*/dump", 0);
    }
    else if (param.name === 'distanceMax')
    {
        var val = param.get();
        RangeForParameter['sourcepositionX'] = [-1 * val, val];
        RangeForParameter['sourcepositionY'] = [-1 * val, val];
        RangeForParameter['sourcepositionZ'] = [-1 * val, val];
        RangeForParameter['sourcedistance'] = [-1 * val, val];
    }
    else if (param.name === 'numberOfRemotes')
    {
        var val = param.get();
        if (val > Remote.length)
        {
            addRemote(val);
        }
        else if (val < Remote.length)
        {
            deleteRemote(val + 1);
        }
    }
}

/**
 * This function is called automatically by Chataigne when a module value changes
 * @param {value} value
 */
function moduleValueChanged(value)
{
    var name = value.name;
    if (!isStarted)
    {
        local.send("/source/*/dump", 0);
        local.send("/room/*/dump", 0);
        isStarted = true;
    }
    if (value.isParameter())
    {
        if (name === 'masterIndex')
        {

            for (var i = 0; i < Remote.length; i++)
            {
                Remote[i].indexNumber.set(value.get());
            }
        }
        else if (name === 'index')
        {
            var remoteIndex = parseInt(value.getParent().name.substring(6, value.getParent().name.length)) - 1;
            var localRemoteRange = RemoteRangeFromString[Remote[remoteIndex].remoteRange.get()];


            // onOff
            for (var onOffIndex = 0; onOffIndex < Remote[remoteIndex].onOffNumber.get(); onOffIndex++)
            {
                var localOnOff = Remote[remoteIndex].onOff[onOffIndex];
                var localRangeForParameter = RangeForParameter[localParameterControlled];
                var localParameterControlled = localOnOff.parameterControlled.get();
                if (localParameterControlled === 'none')
                {
                    return;
                }
                for (var l = 0; l < Remote[remoteIndex].controlsNumber.get() ; l++)
                {
                    var val = ParameterFromString[localParameterControlled](value.get()*Remote[remoteIndex].controlsNumber.get() + l).get();
                    val = (val - localRangeForParameter[0]) / (localRangeForParameter[1] - localRangeForParameter[0]);
                    var target = localOnOff["values"][l]["target"].getTarget();
                    if (target)
                    {
                        target.set(val * (localRemoteRange[1] - localRemoteRange[0]) + localRemoteRange[0]);
                    }
                    localOnOff["values"][l]["value"].set(val);

                }
            }

            //float
            for (var floatIndex = 0; floatIndex < Remote[remoteIndex].floatNumber.get(); floatIndex++)
            {
                var localFloat = Remote[remoteIndex].float[floatIndex];
                var localParameterControlled = localFloat.parameterControlled.get();
                var localRangeForParameter =  RangeForParameter[localParameterControlled];

                if (localParameterControlled === 'none')
                {
                    return;
                }
                for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
                {
                    var val = ParameterFromString[localParameterControlled](value.get() * Remote[remoteIndex].controlsNumber.get() + l).get();
                    if (localParameterControlled === "sourceazimuth")
                    {
                        val = val[0];
                    }
                    else if (localParameterControlled === "sourceelevation")
                    {
                        val = val[1];
                    }
                    else if (localParameterControlled === 'sourcedistance')
                    {
                        val = val[2];
                    }
                    else if (localParameterControlled === 'sourcepositionX')
                    {
                        val = PolarToCartesian(val)[0];
                    }
                    else if (localParameterControlled === 'sourcepositionY')
                    {
                        val = PolarToCartesian(val)[1];
                    }
                    else if (localParameterControlled === 'sourcepositionZ')
                    {
                        val = PolarToCartesian(val)[2];
                    }

                    var target = localFloat["values"][l]["target"].getTarget();
                    val = (val - localRangeForParameter[0]) / (localRangeForParameter[1] - localRangeForParameter[0]);
                    if (target)
                    {
                        target.set(val * (localRemoteRange[1] - localRemoteRange[0]) + localRemoteRange[0]);

                    }
                    localFloat["values"][l]["value"].set(val);
                }
            }

        }
        else if (name === 'parameterControlled')
        {
            if (value.get === 'none')
            {
                return;
            }
            var remoteIndex = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length)) - 1;
            // Remote[remoteIndex]['parameterControlled'] = value.get();
            var localRemoteRange = RemoteRangeFromString[Remote[remoteIndex].remoteRange.get()];
            var container = value.getParent();
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get() ; l++)
            {
                var ind = (Remote[remoteIndex].indexNumber.get() - 1) * Remote[remoteIndex].controlsNumber.get() + l;
                // script.log("Parameter value: " + value.get() + "index: " + ind);
                var val = ParameterFromString[value.get()](ind).get();

                if (value.get() === 'sourcerotx' | value.get() === 'sourceazimuth' | value.get() === 'sourcepositionX')
                {
                    val = val[0];
                }
                else if (value.get() === 'sourceroty' | value.get() === 'sourceelevation' | value.get() === 'sourcepositionY')
                {
                    val = val[1];
                }
                else if (value.get() === 'sourcerotz' | value.get() === 'sourcedistance' | value.get() === 'sourcepositionZ')
                {
                    val = val[2];
                }

                var localRangeForParameter = RangeForParameter[value.get()];
                val = (val - localRangeForParameter[0]) / (localRangeForParameter[1] - localRangeForParameter[0]);
                var target = container.getChild("Target" + parseInt(l+1)).getTarget();
                if (target)
                {
                    target.set(val * (localRemoteRange[1] - localRemoteRange[0]) - localRemoteRange[0]);
                }
                container.getChild("Values").getChild("value" + parseInt(l+1)).set(val);
            }

        }
        else if (name === 'controlsNumber')
        {
            var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length)) - 1;
            if (value.get() > Remote[index]['numberOfControls'])
            {
                while (Remote[index]['numberOfControls'] < value.get())
                {
                    var i = Remote[index]['numberOfControls'] + 1;
                    // onOff
                    for (var onOffIndex = 0; onOffIndex < Remote[index].onOffNumber.get(); onOffIndex++)
                    {
                        Remote[index].onOff[onOffIndex]['values'].push(
                            {"value": Remote[index].onOff[onOffIndex]['container'].getChild("Values").addBoolParameter("Value" + i, "Value" + i, false),
                                "target": Remote[index].onOff[onOffIndex]['container'].addTargetParameter("Target" + i, "Target for control number " + i)
                            });
                    }
                    // float
                    for (var floatIndex = 1; floatIndex < Remote[index].floatNumber.get() + 1; floatIndex++)
                    {
                        Remote[index].float[floatIndex-1]['values'].push(
                            {"value": Remote[index].float[floatIndex-1]['container'].getChild("Values").addFloatParameter("Value" + i, "Value" + i, 0.0, 0.0, 1.0),
                                "target": Remote[index].float[floatIndex-1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
                    }
                    Remote[index]['numberOfControls'] +=1;
                }

            }
            else if (value.get() < Remote[index]['numberOfControls'])
            {
                while (Remote[index]['numberOfControls'] > value.get())
                {
                    //onOff
                    for (var onOffIndex = 1; onOffIndex < Remote[index].onOffNumber.get() + 1; onOffIndex++)
                    {
                        var onOffCont = Remote[index].onOff[onOffIndex-1]['container'];
                        onOffCont.removeParameter("Target"+parseInt(Remote[index]['numberOfControls']));
                        onOffCont.getChild("Values").removeParameter("Value" + parseInt(Remote[index]['numberOfControls']));
                    }
                    //float
                    for (var floatIndex = 1; floatIndex < Remote[index].floatNumber.get() + 1; floatIndex++)
                    {
                        var floatCont = Remote[index].float[floatIndex-1]['container'];
                        floatCont.removeParameter("Target"+parseInt(Remote[index]['numberOfControls']));
                        floatCont.getChild("Values").removeParameter("Value" + parseInt(Remote[index]['numberOfControls']));
                    }
                    Remote[index]['numberOfControls'] -=1;
                }
            }

        }
        else if (name === 'onOffNumber')
        {
            var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
            if (Remote[index-1].onOff) {
                if (value.get() > Remote[index - 1]["numberOfButtonControllable"]) {
                    addButtonControllable(index - 1, value.get());
                } else if (value.get() < Remote[index - 1]["numberOfButtonControllable"]) {
                    i = value.get() + 1;
                    value.getParent().removeContainer("onOff" + i);
                }
                Remote[index - 1]["numberOfButtonControllable"] = value.get();
            }
        }
        else if (name === 'floatNumber')
        {
            var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
            if (Remote[index-1].float) {
                if (value.get() > Remote[index - 1]["numberOfFloatControllable"]) {
                    addFloatControllable(index - 1, value.get());
                } else if (value.get() < Remote[index - 1]["numberOfFloatControllable"]) {
                    i = value.get() + 1;
                    value.getParent().removeContainer("float" + i);
                }
                Remote[index - 1]["numberOfFloatControllable"] = value.get();
            }
        }

        else if (name.startsWith("target"))
        {
            script.log("Update target");
            var remoteIndex = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length)) - 1;
            var localParameterControlled = false;
            var sourceIndex = -1;
            if (Remote[remoteIndex].onOffNumber) {
                for (var i = 0; i < Remote[remoteIndex].onOffNumber.get(); i++) {
                    // script.log("Container: " + Remote[remoteIndex].onOff[i].container.name + ", valueParent: " + value.getParent().name);
                    if (Remote[remoteIndex].onOff[i].container.name == value.getParent().name) {
                        localParameterControlled = Remote[remoteIndex].onOff[i].parameterControlled.get();
                        if (localParameterControlled === 'none') {
                            return;
                        }
                        // script.log("parameterControlled: " + localParameterControlled);
                        for (var j = 0; j < Remote[remoteIndex].onOff[i]['values'].length; j++) {
                            if (Remote[remoteIndex].onOff[i]['values'][j]["target"].name == value.name) ;
                            {
                                sourceIndex = (Remote[remoteIndex].indexNumber.get() - 1) * Remote[remoteIndex].controlsNumber.get() + j;
                                // script.log("We find it! sourceIndex: " + sourceIndex + ", localParameterControlled: " + localParameterControlled);
                                break
                            }
                        }
                        break;
                    }
                }
            }
            if (Remote[remoteIndex].floatNumber) {
                for (var i = 0; i < Remote[remoteIndex].floatNumber.get(); i++)
            {
                // script.log("Container: " + Remote[remoteIndex].float[i].container + ", valueParent: " + value.getParent());
                if (Remote[remoteIndex].float[i].container.name == value.getParent().name)
                {
                    localParameterControlled = Remote[remoteIndex].float[i].parameterControlled.get();
                    if (localParameterControlled === 'none')
                    {
                        return;
                    }
                    // script.log("parameterControlled: " + localParameterControlled);
                    for (var j = 0; j < Remote[remoteIndex].float[i]['values'].length; j++)
                    {
                        script.log("Target: " + Remote[remoteIndex].float[i]['values'][j]["target"] + ", value: " + value.name);
                        if (Remote[remoteIndex].float[i]['values'][j]["target"].name == value.name)
                        {
                            sourceIndex = (Remote[remoteIndex].indexNumber.get() - 1) * Remote[remoteIndex].controlsNumber.get() + j;
                            script.log("We find it! sourceIndex: " + sourceIndex + ", localParameterControlled: " + localParameterControlled);
                            break
                        }
                    }
                    break;
                }
            }
            }
            stopUpdateForSource = sourceIndex;
            if (sourceIndex != -1) {
                var param = ParameterFromString[localParameterControlled](sourceIndex - 1);
                script.log("param: "+ param);
                if (param) {
                    updateRemote(localParameterControlled, param.get(), sourceIndex);
                }
            }
            stopUpdateForSource = -1;
        }

        else if (name.startsWith("value"))
        {
            var valueIndex = parseInt(value.name.substring(5, value.getParent().name.length));
            var index = valueIndex + (value.getParent().getParent().getParent().getChild("Index").get() - 1) * value.getParent().getParent().getParent().getChild("controlsNumber").get();
            // script.log("index: " + index + " stopUpdateForSource: " + stopUpdateForSource);
            if (index == stopUpdateForSource)
            {
                return;
            }
            var localParameterControlled = value.getParent().getParent().parameterControlled.get();
            script.log("LocalParameterControlled: " + localParameterControlled);
            if (value.getParent().getParent().parameterControlled) {
                if (localParameterControlled === 'none')
                {
                    return;
                }
                var localRangeForParameter = RangeForParameter[localParameterControlled];
                var param = ParameterFromString[localParameterControlled](index - 1);
                var val = value.get() * (localRangeForParameter[1] - localRangeForParameter[0]) + localRangeForParameter[0];
                if (localParameterControlled === "sourceazimuth" | localParameterControlled === "sourcerotx") {
                    param.set(val, param.get()[1], param.get()[2]);
                } else if (localParameterControlled === "sourceelevation" | localParameterControlled === "sourceroty") {
                    param.set(param.get()[0], val, param.get()[2]);
                } else if (localParameterControlled === "sourcedistance" | localParameterControlled === "sourcerotz") {
                    param.set(param.get()[0], param.get()[1], val);
                } else if (localParameterControlled === "sourcepositionX") {
                    var cartesian = PolarToCartesian(param.get());
                    param.set(CartesianToPolar([val, cartesian[1], cartesian[2]]));

                } else if (localParameterControlled === "sourcepositionY") {
                    var cartesian = PolarToCartesian(param.get());
                    param.set(CartesianToPolar([cartesian[0], val, cartesian[2]]));
                } else if (localParameterControlled === "sourcepositionZ") {
                    var cartesian = PolarToCartesian(param.get());
                    param.set(CartesianToPolar([cartesian[0], cartesian[1], val]));
                } else {
                    param.set(val);
                }

                stopSendingOSC = true;
                stopUpdateForSource = index;
                if (localParameterControlled === "sourceazimuth" | localParameterControlled === "sourceelevation" | localParameterControlled === "sourcedistance") {
                    updateRemote("azimuth", param.getParent().getChild("positionAED").get(), index);
                } else if (localParameterControlled === "sourcepositionX" | localParameterControlled === "sourcepositionY" | localParameterControlled === "sourcepositionZ") {
                    updateRemote("positionX", param.getParent().getChild("positionAED").get(), index);
                }
                stopSendingOSC = false;
                stopUpdateForSource = -1;
            }
        }

        else {
            if (!stopSendingOSC && OSCSourcesMessage[name])
            {
                var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
                if (index === 0)
                {
                    index = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length));
                }
                if (index != stopSendForSource + 1)
                {
                    OSCSourcesMessage[name](index, value);
                }
            }
            else if (!stopSendingOSC && OSCRoomsMessage[name])
            {
                var index = parseInt(value.getParent().name.substring(4, value.getParent().name.length));
                if (index === 0)
                {
                    index = parseInt(value.getParent().getParent().name.substring(4, value.getParent().getParent().name.length));
                    if (index === 0)
                    {
                        index = parseInt(value.getParent().getParent().getParent().name.substring(4, value.getParent().getParent().name.length));
                    }
                }
                OSCRoomsMessage[name](index, value);
            }
            else if (!stopSendingOSC && OSCSnapshotsMessage[name])
            {
                // var index = parseInt(value.getParent().name.substring(4, value.getParent().name.length));
                // if (index === 0)
                // {
                //     index = parseInt(value.getParent().getParent().name.substring(4, value.getParent().getParent().name.length));
                //     if (index === 0)
                //     {
                //         index = parseInt(value.getParent().getParent().getParent().name.substring(4, value.getParent().getParent().name.length));
                //     }
                // }
                OSCSnapshotsMessage[name](index, value);
            }
        }
    }
}

/**
 * Called when an OSC message is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */
function oscEvent(address, args)
{
    var address = address.split("/");

    if (address[1] === 'global')
    {
        oscGlobalEvent(address, args);
    }
    else if (address[1]==='source')
    {
        oscSourceEvent(address, args);
    }
    else if (address[1]==='room')
    {
        oscRoomEvent(address, args);
    }
    else if (address[1]==='master')
    {
        oscMasterEvent(address, args);
    }
    else if (address[1] === 'snapshot')
    {
        oscSnapshotEvent(address, args);
    }

}

/**
 * Called when an OSC message related to a global parameter is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscGlobalEvent(address, args)
{
    // to be completed later
}

/**
 * Called when an OSC message related to a source is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscSourceEvent(address, args)
{
    var i = parseInt(address[2]) - 1;
    var controlName = 'None';

    
    // Validate the source index
    if (i +1 > Sources.length)
    {
        return false;
    }
    else
    {
        var source = Sources[i];
    }

    stopSendForSource = i;
    if (address[3]==='gain')

    {
        if (typeof(args[0]) == 'number')
        {
            source.gain.set(args[0]);
            controlName = 'sourcegain';
        }
    }
    else if (address[3]==='lfe')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe1.set(args[0]);
            controlName = 'sourcelfe';
        }
    }
    else if (address[3]==='lfe2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe2.set(args[0]);
            controlName = 'sourcelfe2';
        }
    }
    else if (address[3]==='lfe3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe3.set(args[0]);
            controlName = 'sourcelfe3';
        }
    }
    else if (address[3]==='lfe4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe4.set(args[0]);
            controlName = 'sourcelfe4';
        }
    }
    else if (address[3] ==='mute')
    {
        if (typeof(args[0]) == 'number')
        {
            source.mute.set(args[0]);
            controlName = 'sourcemute';
        }
    }
    else if (address[3] ==='solo')
    {
        if (typeof(args[0]) == 'number')
        {
            source.solo.set(args[0]);
            controlName = 'sourcesolo';
        }
    }
    else if (address[3]==='aed')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            controlName = 'sourceposition';

            // special function to remap stereo object as mono ones.
            if(transformStereoToMono)
            {
                var index = 1;
                // script.log("Index:" + i);
                var a = 0;
                if (stereo.length > parseInt(i))
                {
                    for (var j = 0; j < i; j++){
                        if (stereo[j])
                        {
                            index += 2 ;
                        }
                        else
                        {
                            index += 1;
                        }

                    }

                    var x = 0;
                    var y = 0;
                    var z = 0;
                    var normalizedValue = [0.5, 0.5, 0.5];
                    var azim = DegToRad(args[0]);
                    var elev = DegToRad(args[1]);
                    var distance = args[2];

                    if (stereo[i] === 'true')
                    {
                        var scale = source.getChild("Barycentric").scale.get();

                        x = distance * Math.cos(azim) * Math.sin(elev) - scale * Math.sin(azim);
                        y = distance * Math.sin(azim) * Math.sin(elev) + scale * Math.cos(azim);
                        z = distance * Math.cos(elev);

                        normalizedValue = [Math.max(Math.min(x, normalizedRange[1]), normalizedRange[0]) / (normalizedRange[1] - normalizedRange[0]),
                            Math.max(Math.min(y, normalizedRange[3]), normalizedRange[2]) / (normalizedRange[3] - normalizedRange[2]),
                            Math.max(Math.min(z, normalizedRange[5]), normalizedRange[4]) / (normalizedRange[5] - normalizedRange[4])];

                        local.send("/adm/obj/" + index + "/xyz", normalizedValue);

                        index += 1;
                        x = distance * Math.cos(azim) * Math.sin(elev) + scale * Math.sin(azim);
                        y = distance * Math.sin(azim) * Math.sin(elev) - scale * Math.cos(azim);
                        z = distance * Math.cos(elev);

                        normalizedValue = [Math.max(Math.min(x, normalizedRange[1]), normalizedRange[0]) / (normalizedRange[1] - normalizedRange[0]),
                            Math.max(Math.min(y, normalizedRange[3]), normalizedRange[2]) / (normalizedRange[3] - normalizedRange[2]),
                            Math.max(Math.min(z, normalizedRange[5]), normalizedRange[4]) / (normalizedRange[5] - normalizedRange[4])];

                        local.send("/adm/obj/" + index + "/xyz", normalizedValue);
                    }
                    else
                    {
                        x = distance * Math.cos(azim) * Math.sin(elev);
                        y = distance * Math.sin(azim) * Math.sin(elev);
                        z = distance * Math.cos(elev);

                        normalizedValue = [Math.max(Math.min(x, normalizedRange[1]), normalizedRange[0]) / (normalizedRange[1] - normalizedRange[0]),
                            Math.max(Math.min(y, normalizedRange[3]), normalizedRange[2]) / (normalizedRange[3] - normalizedRange[2]),
                            Math.max(Math.min(z, normalizedRange[5]), normalizedRange[4]) / (normalizedRange[5] - normalizedRange[4])];

                        local.send("/adm/obj/" + index + "/xyz", normalizedValue);
                    }
                }
            }
            stopSendingOSC = true; // to avoid return to SPAT. TODO: Check if useful.
            source.positionAED.set(args);
            stopSendingOSC = false;
        }
    }
    else if (address[3]==='xyz')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            stopSendingOSC = true; // to avoid return to SPAT. TODO: Check if useful.
            controlName = 'sourceposition';
            source.positionAED.set(CartesianToPolar(args));
            stopSendingOSC = false;
        }
    }
    else if (address[3]==='reverb' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.reverbEnable.set(args[0]);
            controlName = 'sourcereverbEnable';
        }
    }
    else if (address[3] === 'early')
    {
        if (typeof(args[0]) == 'number')
        {
            source.earlyEnable.set(args[0]);
            controlName = 'sourceearlyEnable';
        }
    }
    else if (address[3] === 'cluster')
    {
        if (typeof(args[0]) == 'number')
        {
            source.clusterEnable.set(args[0]);
            controlName = 'sourceclusterEnable';
        }
    }
    else if (address[3] === 'tail')
    {
        if (typeof(args[0]) == 'number')
        {
            source.tailEnable.set(args[0]);
            controlName = 'sourcetailEnable';
        }
    }
    else if (address[3] === 'name')
    {
        if (typeof(args[0]) == 'string')
        {
            source.sourceName.set(args[0]);
            controlName = 'sourcename';
        }
    }
    else if (address[3]==='pres')
    {
        if (typeof(args[0]) == 'number')
        {
            source.presence.set(args[0]);
            controlName = 'sourcepresence';
        }
    }
    else if (address[3]==='prer')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomPresence.set(args[0]);
            controlName = 'sourceroomPresence';
        }
    }
    else if (address[3]==='revp')
    {
        if (typeof(args[0]) == 'number')
        {
            source.runningReverberance.set(args[0]);
            controlName = 'sourcerunningReverberance';
        }
    }
    else if (address[3]==='env')
    {
        if (typeof(args[0]) == 'number')
        {
            source.envelopment.set(args[0]);
            controlName = 'sourceenvelopment';
        }
    }
    else if (address[3]==='warmth')
    {
        if (typeof(args[0]) == 'number')
        {
            source.warmth.set(args[0]);
            controlName = 'sourcewarmth';
        }
    }
    else if (address[3]==='bril')
    {
        if (typeof(args[0]) == 'number')
        {
            source.brilliance.set(args[0]);
            controlName = 'sourcebrilliance';
        }
    }
    else if (address[3]==='yaw')
    {
        if (typeof(args[0]) == 'number')
        {
            source.yaw.set(args[0]);
            controlName = 'sourceyaw';
        }
    }
    else if (address[3]==='pitch')
    {
        if (typeof(args[0]) == 'number')
        {
            source.pitch.set(args[0]);
            controlName = 'sourcepitch';
        }
    }
    else if (address[3]==='aperture')
    {
        if (typeof(args[0]) == 'number')
        {
            source.aperture.set(args[0]);
            controlName = 'sourceaperture';
        }
    }
    else if (address[3]==='scale')
    {
        if (typeof(args[0]) == 'number')
        {
            source.scale.set(args[0]);
            controlName = 'sourcescale';
        }
    }
    else if (address[3]==='spread')
    {
        if (typeof(args[0]) == 'number')
        {
            source.spread.set(args[0]);
            controlName = 'sourcespread';
        }
    }
    else if (address[3]==='nneig')
    {
        if (typeof(args[0]) == 'number')
        {
            source.knn.set(args[0]);
            controlName = 'sourceknn';
        }
    }
    else if (address[3]==='early' && address[4]==='width')
    {
        if (typeof(args[0]) == 'number')
        {
            source.earlyWidth.set(args[0]);
            controlName = 'sourceearlyWidth';
        }
    }
    else if (address[3]==='prevf')
    {
        if (typeof(args[0]) == 'number')
        {
            source.panRev.set(args[0]);
            controlName = 'sourcepanRev';
        }
    }
    else if (address[3]==='doppler' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.doppler.set(args[0]);
            controlName = 'sourceoptions';
        }
    }
    else if (address[3]==='radius')
    {
        if (typeof(args[0]) == 'number')
        {
            source.radius.set(args[0]);
            controlName = 'sourceradius';
        }
    }
    else if (address[3]==='air' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.airAbsorption.set(args[0]);
            controlName = 'sourceairAbsorption';
        }
    }
    else if (address[3]==='cm')
    {
        if (typeof(args[0]) == 'number')
        {
            source.xyCoordinatesMode.set(args[0]);
            controlName = 'sourcexyCoordinatesMode';
        }
    }
    else if (address[3]==='zcm')
    {
        if (typeof(args[0]) == 'number')
        {
            source.zCoordinatesMode.set(args[0]);
            controlName = 'sourcezCoordinatesMode';
        }
    }
    else if (address[3]==='drop')
    {
        if (address[4] ==='type')
        {
            if (typeof(args[0]) == 'number')
            {
                source.dropLog.set(args[0]);
                controlName = 'sourcedropLog';
            }
        }
        if (address[4] ==='value')
        {
            if (typeof(args[0]) == 'number')
            {
                source.dropFactor.set(args[0]);
                controlName = 'sourcedropFactor';
            }
        }
    }
    else if (address[3]==='rotx')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = source.rotationXYZ.get();
            value = [args[0], value[1], value[2]];
            source.rotationXYZ.set(value);
            controlName = 'sourcerotx';
        }
    }
    else if (address[3]==='roty')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = source.rotationXYZ.get();
            value = [value[0], args[1], value[2]];
            source.rotationXYZ.set(value);
            controlName = 'sourceroty';
        }
    }
    else if (address[3]==='rotz')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = source.rotationXYZ.get();
            value = [value[0], value[1], args[2]];
            source.rotationXYZ.set(value);
            controlName = 'sourcerotz';
        }
    }
    else if (address[3]==='rg1')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain1.set(args[0]);
            controlName = 'sourceroomGain1';
        }
    }
    else if (address[3]==='omni')
    {
        if (address[4] ==='G0')
        {
            if (typeof(args[0]) == 'number')
            {
                source.omniGain.set(args[0]);
                controlName = 'sourceomniGain';
            }
        }
    }
    else if (address[3]==='rg2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain2.set(args[0]);
            controlName = 'sourceroomGain2';
        }
    }
    else if (address[3]==='rg3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain3.set(args[0]);
            controlName = 'sourceroomGain3';
        }
    }
    else if (address[3]==='rg4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain4.set(args[0]);
            controlName = 'sourceroomGain4';
        }
    }
    else if (address[3]==='rg5')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain5.set(args[0]);
            controlName = 'sourceroomGain5';
        }
    }
    else if (address[3]==='rg6')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain6.set(args[0]);
            controlName = 'sourceroomGain6';
        }
    }
    else if (address[3]==='rg7')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain7.set(args[0]);
            controlName = 'sourceroomGain7';
        }
    }
    else if (address[3]==='rg8')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain8.set(args[0]);
            controlName = 'sourceroomGain8';
        }
    }
    else if (address[3]==='rg9')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain9.set(args[0]);
            controlName = 'sourceroomGain9';
        }
    }
    else if (address[3]==='rg10')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain10.set(args[0]);
            controlName = 'sourceroomGain10';
        }
    }

    stopSendForSource = -1;

    // update the different remote for the updated parameter
    updateRemote(controlName, args, i);

}

/**
 * Called when an OSC message related to room is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscRoomEvent(address, args)
{
    var i = parseInt(address[2]) - 1;

    if (i +1 > Rooms.length)
    {
        return false;
    }
    else
    {
        var room = Rooms[i];
    }

    if (address[3]==='name')
    {
        if (typeof(args[0]) == 'string')
        {
            room.roomName.set(args[0]);
        }
    }
    if (address[3]==='gain')
    {
        if (typeof(args[0]) == 'number')
        {
            room.gainRoom.set(args[0]);
        }
    }
    if (address[3]==='mute')
    {
        if (typeof(args[0]) == 'number')
        {
            room.muteRoom.set(args[0]);
        }
    }
    if (address[3]==='xyz')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            room.listenerPosition.set(args);
        }
    }
    if (address[3]==='x')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = room.listenerPosition.get();
            value = [args[0], value[1], value[2]];
            room.listenerPosition.set(value);
        }
    }
    if (address[3]==='y')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = room.listenerPosition.get();
            value = [value[0], args[0], value[2]];
            room.listenerPosition.set(value);
        }
    }
    if (address[3]==='z')
    {
        if (typeof(args[0]) == 'number')
        {
            var values = room.listenerPosition.get();
            values = [values[0], values[1], args[0]];
            room.listenerPosition.set(values);
        }
    }
    if (address[3]==='yaw')
    {
        if (typeof(args[0]) == 'number')
        {
            var values = room.listenerOrientation.get();
            values = [args[0], values[1], values[2]];
            room.listenerOrientation.set(values);
        }
    }
    if (address[3]==='pitch')
    {
        if (typeof(args[0]) == 'number')
        {
            var values = room.listenerOrientation.get();
            values = [values[0], args[0], values[2]];
            room.listenerOrientation.set(values);
        }
    }
    if (address[3]==='roll')
    {
        if (typeof(args[0]) == 'number')
        {
            var values = room.listenerOrientation.get();
            values = [values[0], values[1], args[0]];
            room.listenerOrientation.set(values);
        }
    }
    if (address[3]==='size')
    {
        if (typeof(args[0]) == 'number')
        {
            room.roomSize.set(args[0]);
        }
    }
    if (address[3]==='reverberance')
    {
        if (typeof(args[0]) == 'number')
        {
            room.reverberance.set(args[0]);
        }
    }
    if (address[3]==='heaviness')
    {
        if (typeof(args[0]) == 'number')
        {
            room.heaviness.set(args[0]);

        }
    }
    if (address[3]==='liveness')
    {
        if (typeof(args[0]) == 'number')
        {
            room.liveness.set(args[0]);
        }
    }
    if (address[3]==='reverb')
    {
        if (address[4] === 'density')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbDensity.set(args[0]);
            }
        }
        if (address[4] === 'enable')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbEnableRoom.set(args[0]);
            }
        }
        if (address[4] === 'start')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbStart.set(args[0]);
            }
        }
        if (address[4] === 'gain')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbGain.set(args[0]);

            }
        }
        if (address[4] === 'factor')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbFactor.set(args[0]);
            }
        }
        if (address[4] === 'infinite')
        {
            if (typeof (args[0]) == 'number')
            {
                room.reverbInfinite.set(args[0]);

            }
        }
        if (address[4] === 'modal' && address[5] === 'density')
        {
            if (typeof (args[0]) == 'number')
            {
                room.modalDensity.set(args[0]);

            }
        }
        if (address[4] === 'fl')
        {
            if (typeof (args[0]) == 'number')
            {
                room.frequencyLow.set(args[0]);

            }
        }
        if (address[4] === 'fh')
        {
            if (typeof (args[0]) == 'number')
            {
                room.frequencyHigh.set(args[0]);

            }
        }
    }
    if (address[3]==='early')
    {
        if (address[4] === 'min')
        {
            if (typeof (args[0]) == 'number')
            {
                room.earlyMin.set(args[0]);
            }
        }
        if (address[4] === 'max')
        {
            if (typeof (args[0]) == 'number')
            {
                room.earlyMax.set(args[0]);
            }
        }
        if (address[4] === 'dist')
        {
            if (typeof (args[0]) == 'number')
            {
                room.earlyDist.set(args[0]);
            }
        }
        if (address[4] === 'shape')
        {
            if (typeof (args[0]) == 'number')
            {
                room.earlyShape.set(args[0]);
            }
        }
    }
    if (address[3]==='cluster') {
        if (address[4] === 'min') {
            if (typeof (args[0]) == 'number') {
                room.clusterMin.set(args[0]);
            }
        }
        if (address[4] === 'max') {
            if (typeof (args[0]) == 'number') {
                room.clusterMax.set(args[0]);
            }
        }
        if (address[4] === 'dist') {
            if (typeof (args[0]) == 'number') {
                room.clusterDist.set(args[0]);
            }
        }
    }
    if (address[3]==='air')
    {
        if (address[4] === 'enable')
        {
            if (typeof (args[0]) == 'number')
            {
                room.airEnable.set(args[0]);
            }
        }
        if (address[4] === 'freq')
        {
            if (typeof (args[0]) == 'number')
            {
                room.airFreq.set(args[0]);
            }
        }
    }
}

/**
 * Called when an OSC message related to master is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscMasterEvent(address, args)
{
    // to be completed later
}

/**
 * Called when an OSC message related to Snapshot is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscSnapshotEvent(address, args)
{
    // to be completed later
}


/**
 * Called when creating a source
 */
function createSourceContainer()
{
    // Add the Source container
    SourcesContainer = local.values.addContainer("Sources container");

    for (var i = 0; i < 64; i++)
    {
        var index = i+1;
        Sources.push({
            "index": index
        });
        Sources[i].SourceContainer = SourcesContainer.addContainer("Source " + index);

        Sources[i].sourceName = Sources[i].SourceContainer.addStringParameter("Source Name", "Source name", "Source name");
        // Sources[i].sourceName.setAttribute("readonly", true);

        Sources[i].gain = Sources[i].SourceContainer.addFloatParameter("Gain", "Gain", 0, -144.5, 24);
        // Sources[i].gain.setAttribute("readonly", true);

        Sources[i].selected = Sources[i].SourceContainer.addBoolParameter("Selected", "Selected", 0);
        // Sources[i].mute.setAttribute("readonly", true);

        Sources[i].mute = Sources[i].SourceContainer.addBoolParameter("Mute", "Mute", 0);
        // Sources[i].mute.setAttribute("readonly", true);

        Sources[i].solo = Sources[i].SourceContainer.addBoolParameter("Solo", "Solo", 0);
        // Sources[i].solo.setAttribute("readonly", true);

        Sources[i].lfe1 = Sources[i].SourceContainer.addFloatParameter("LFE 1", "LFE level", -144.5, -144.5, 24);
        // Sources[i].lfe1.setAttribute("readonly", true);

        Sources[i].lfe2 = Sources[i].SourceContainer.addFloatParameter("LFE 2", "LFE level", -144.5, -144.5, 24);
        // Sources[i].lfe2.setAttribute("readonly", true);

        Sources[i].lfe3 = Sources[i].SourceContainer.addFloatParameter("LFE 3", "LFE level", -144.5, -144.5, 24);
        // Sources[i].lfe3.setAttribute("readonly", true);

        Sources[i].lfe4 = Sources[i].SourceContainer.addFloatParameter("LFE 4", "LFE level", -144.5, -144.5, 24);
        // Sources[i].lfe4.setAttribute("readonly", true);

        Sources[i].positionAED = Sources[i].SourceContainer.addPoint3DParameter("Position AED", "PositionAED", [0.0, 0.0, 2.0]);
        // Sources[i].positionAED.setAttribute("readonly", true);

        Sources[i].reverbSourceContainer = Sources[i].SourceContainer.addContainer("Reverb");
        Sources[i].reverbEnable = Sources[i].reverbSourceContainer.addBoolParameter("Reverb Enable", "Reverb Enable", 1);
        // Sources[i].reverbEnable.setAttribute("readonly", true);

        Sources[i].earlyEnable = Sources[i].reverbSourceContainer.addBoolParameter("Early Enable", "Early Enable", 1);
        // Sources[i].earlyEnable.setAttribute("readonly", true);

        Sources[i].clusterEnable = Sources[i].reverbSourceContainer.addBoolParameter("Cluster Enable", "Cluster Enable", 1);
        // Sources[i].clusterEnable.setAttribute("readonly", true);

        Sources[i].tailEnable = Sources[i].reverbSourceContainer.addBoolParameter("Tail Enable", "Tail Enable", 1);
        // Sources[i].tailEnable.setAttribute("readonly", true);

        Sources[i].perceptualFactorSourceContainer = Sources[i].SourceContainer.addContainer("Perceptual Factors");
        Sources[i].presence = Sources[i].perceptualFactorSourceContainer.addIntParameter("Presence", "Source Presence", 80, 0, 120);
        // Sources[i].presence.setAttribute("readonly", true);

        Sources[i].roomPresence = Sources[i].perceptualFactorSourceContainer.addIntParameter("Room presence", "Room Presence", 48, 0, 120);
        // Sources[i].roomPresence.setAttribute("readonly", true);

        Sources[i].runningReverberance = Sources[i].perceptualFactorSourceContainer.addIntParameter("Running Reverberance", "Running Reverberance", 34, 0, 50);
        // Sources[i].runningReverberance.setAttribute("readonly", true);

        Sources[i].envelopment = Sources[i].perceptualFactorSourceContainer.addIntParameter("Envelopment", "Envelopment", 25, 0, 50);
        // Sources[i].envelopment.setAttribute("readonly", true);

        Sources[i].warmth = Sources[i].perceptualFactorSourceContainer.addIntParameter("Warmth", "Warmth", 30, 0, 60);
        // Sources[i].warmth.setAttribute("readonly", true);

        Sources[i].brilliance = Sources[i].perceptualFactorSourceContainer.addIntParameter("Brilliance", "Brilliance", 30, 0, 60);
        // Sources[i].brilliance.setAttribute("readonly", true);

        Sources[i].yaw = Sources[i].SourceContainer.addFloatParameter("Yaw", "Yaw", -180, 0, 180);
        // Sources[i].yaw.setAttribute("readonly", true);

        Sources[i].pitch = Sources[i].SourceContainer.addFloatParameter("Pitch", "Pitch", -90, 0, 90);
        // Sources[i].pitch.setAttribute("readonly", true);

        Sources[i].aperture = Sources[i].SourceContainer.addFloatParameter("Aperture", "Aperture", 10, 0, 180);
        // Sources[i].aperture.setAttribute("readonly", true);

        Sources[i].barycentricSourceContainer = Sources[i].SourceContainer.addContainer("Barycentric");
        Sources[i].scale = Sources[i].barycentricSourceContainer.addFloatParameter("Scale", "Scale", 1.0, 0.01, 100.0);
        // Sources[i].scale.setAttribute("readonly", true);
        Sources[i].scale.set(1.0);

        Sources[i].rotationXYZ = Sources[i].barycentricSourceContainer.addPoint3DParameter("Rotation XYZ", "Rotation XYZ", [0.0, 0.0, 0.0]);
        // Sources[i].rotationXYZ.setAttribute("readonly", true);

        Sources[i].spreadingSourceContainer = Sources[i].SourceContainer.addContainer("Spreading");
        Sources[i].spread = Sources[i].spreadingSourceContainer.addFloatParameter("Spread", "Spread", 0, 0, 100);
        // Sources[i].spread.setAttribute("readonly", true);

        Sources[i].knn = Sources[i].spreadingSourceContainer.addIntParameter("Knn", "Knn", 0, 0, 100);
        // Sources[i].knn.setAttribute("readonly", true);

        Sources[i].earlyWidth = Sources[i].reverbSourceContainer.addFloatParameter("Early Width", "Early Width", 10, 0, 100);
        // Sources[i].earlyWidth.setAttribute("readonly", true);

        Sources[i].panRev = Sources[i].reverbSourceContainer.addFloatParameter("PanRev", "Pan Rev", 0, 0, 100);
        // Sources[i].panRev.setAttribute("readonly", true);

        Sources[i].optionsSourceContainer = Sources[i].SourceContainer.addContainer("Options");
        Sources[i].doppler = Sources[i].optionsSourceContainer.addBoolParameter("Doppler", "Doppler", 0);
        // Sources[i].doppler.setAttribute("readonly", true);

        Sources[i].airAbsorption = Sources[i].optionsSourceContainer.addBoolParameter("Air Absorption", "Air Absorption", 1);
        // Sources[i].airAbsorption.setAttribute("readonly", true);

        Sources[i].xyCoordinatesMode = Sources[i].optionsSourceContainer.addBoolParameter("XY Coordinates Mode", "Coordinates Mode", 0);
        // Sources[i].xyCoordinatesMode.setAttribute("readonly", true);

        Sources[i].zCoordinatesMode = Sources[i].optionsSourceContainer.addBoolParameter("Z Coordinates Mode", "Coordinates Mode", 0);
        // Sources[i].zCoordinatesMode.setAttribute("readonly", true);

        Sources[i].dropLog = Sources[i].optionsSourceContainer.addBoolParameter("Drop Log", "Drop Log", 0);
        // Sources[i].dropLog.setAttribute("readonly", true);

        Sources[i].dropFactor = Sources[i].optionsSourceContainer.addFloatParameter("Drop Factor", "Drop Factor", 6.0, -10.0, 30.0);
        // Sources[i].dropFactor.setAttribute("readonly", true);

        Sources[i].radius = Sources[i].optionsSourceContainer.addFloatParameter("Radius", "Radius", 1.0, 0.001, 100.0);
        // Sources[i].radius.setAttribute("readonly", true);

        Sources[i].OmniSourceContainer = Sources[i].SourceContainer.addContainer("Omni");
        Sources[i].omniGain = Sources[i].OmniSourceContainer.addFloatParameter("Omni Gain", "Omni Gain", 0, -144.5, 24);
        // Sources[i].omniGain.setAttribute("readonly", true);

        Sources[i].roomGainsSourceContainer = Sources[i].SourceContainer.addContainer("Room Gains");
        Sources[i].roomGain1 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 1", "Room Gain 1", 0, -144.5, 24);
        // Sources[i].roomGain1.setAttribute("readonly", true);

        Sources[i].roomGain2 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 2", "Room Gain 2", 0, -144.5, 24);
        // Sources[i].roomGain2.setAttribute("readonly", true);

        Sources[i].roomGain3 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 3", "Room Gain 3", 0, -144.5, 24);
        // Sources[i].roomGain3.setAttribute("readonly", true);

        Sources[i].roomGain4 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 4", "Room Gain 4", 0, -144.5, 24);
        // Sources[i].roomGain4.setAttribute("readonly", true);

        Sources[i].roomGain5 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 5", "Room Gain 5", 0, -144.5, 24);
        // Sources[i].roomGain5.setAttribute("readonly", true);

        Sources[i].roomGain6 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 6", "Room Gain 6", 0, -144.5, 24);
        // Sources[i].roomGain6.setAttribute("readonly", true);

        Sources[i].roomGain7 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 7", "Room Gain 7", 0, -144.5, 24);
        // Sources[i].roomGain7.setAttribute("readonly", true);

        Sources[i].roomGain8 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 8", "Room Gain 8", 0, -144.5, 24);
        // Sources[i].roomGain8.setAttribute("readonly", true);

        Sources[i].roomGain9 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 9", "Room Gain 9", 0, -144.5, 24);
        // Sources[i].roomGain9.setAttribute("readonly", true);

        Sources[i].roomGain10 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 10", "Room Gain 10", 0, -144.5, 24);
        // Sources[i].roomGain10.setAttribute("readonly", true);

        Sources[i].reverbSourceContainer.setCollapsed(true);
        Sources[i].perceptualFactorSourceContainer.setCollapsed(true);
        Sources[i].spreadingSourceContainer.setCollapsed(true);
        Sources[i].optionsSourceContainer.setCollapsed(true);
        Sources[i].barycentricSourceContainer.setCollapsed(true);
        Sources[i].SourceContainer.setCollapsed(true);
        local.scripts.setCollapsed(true);
    }
}


function createRoomContainer()
{
    // Add the Room container
    RoomsContainer = local.values.addContainer("Rooms container");

    for (var i = 0; i < 10; i++) {
        var index = i+1;
        Rooms.push({
            "index": index
        });

        Rooms[i].RoomContainer = RoomsContainer.addContainer("Room " + index);

        Rooms[i].roomName = Rooms[i].RoomContainer.addStringParameter("Room Name", "Room name", "Room name");
        // Rooms[i].roomName.setAttribute("readonly", true);

        Rooms[i].gainRoom = Rooms[i].RoomContainer.addFloatParameter("Gain Room", "Matrix input level", 0, -144.5, 24);
        // Rooms[i].gainRoom.setAttribute("readonly", true);

        Rooms[i].muteRoom = Rooms[i].RoomContainer.addBoolParameter("Mute Room", "Mute", 0);
        // Rooms[i].muteRoom.setAttribute("readonly", true);

        Rooms[i].listenerPosition = Rooms[i].RoomContainer.addPoint3DParameter("Listener Position", "Listener Position", [0.0, 0.0, 0.0]);
        // Rooms[i].listenerPosition.setAttribute("readonly", true);

        Rooms[i].listenerOrientation = Rooms[i].RoomContainer.addPoint3DParameter("Listener Orientation", "Listener Orientation", [0.0, 0.0, 0.0]);
        // Rooms[i].listenerOrientation.setAttribute("readonly", true);

        Rooms[i].roomReverbContainer = Rooms[i].RoomContainer.addContainer("Reverb");
        Rooms[i].reverbDensity = Rooms[i].roomReverbContainer.addBoolParameter("Reverb Density", "Reverb Density", 1);
        // Rooms[i].reverbDensity.setAttribute("readonly", true);

        Rooms[i].reverbEnableRoom = Rooms[i].roomReverbContainer.addBoolParameter("Reverb Enable Room", "Reverb Enable", 1);
        // Rooms[i].reverbEnableRoom.setAttribute("readonly", true);

        Rooms[i].roomSize = Rooms[i].roomReverbContainer.addFloatParameter("Room Size", "Room Size", 2500, 10, 15000);
        // Rooms[i].roomSize.setAttribute("readonly", true);

        Rooms[i].reverbStart = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Start", "Reverb Start", 80.0, 8.0, 500.0);
        // Rooms[i].reverbStart.setAttribute("readonly", true);

        Rooms[i].reverbGain = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Gain", "Reverb Gain", 0, -24.0, 24.0);
        // Rooms[i].reverbGain.setAttribute("readonly", true);

        Rooms[i].reverbFactor = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Factor", "Reverb Factor", 1.0, 0.10, 2.0);
        // Rooms[i].reverbFactor.setAttribute("readonly", true);

        Rooms[i].perceptualFactorRoomContainer = Rooms[i].roomReverbContainer.addContainer("Perceptual Factors");
        Rooms[i].reverberance = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Reverberance", "Reverberance", 65.0, 5.0, 100.0);
        // Rooms[i].reverberance.setAttribute("readonly", true);

        Rooms[i].heaviness = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Heaviness", "Heaviness", 25.0, 5.0, 50.0);
        // Rooms[i].heaviness.setAttribute("readonly", true);

        Rooms[i].liveness = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Liveness", "Liveness", 35.0, 5.0, 50.0);
        // Rooms[i].liveness.setAttribute("readonly", true);

        Rooms[i].roomResponseRoomContainer = Rooms[i].roomReverbContainer.addContainer("Room Response");
        Rooms[i].earlyMin = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Min", "Early Min", 24.2, 1.0, 120.0);
        // Rooms[i].earlyMin.setAttribute("readonly", true);

        Rooms[i].earlyMax = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Max", "Early Max", 40.0, 1.0, 120.0);
        // Rooms[i].earlyMax.setAttribute("readonly", true);

        Rooms[i].earlyDist = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Dist", "Early Dist", 0.5, 0.1, 0.9);
        // Rooms[i].earlyDist.setAttribute("readonly", true);

        Rooms[i].earlyShape = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Shape", "Early Shape", 0.5, 0.1, 0.9);
        // Rooms[i].earlyShape.setAttribute("readonly", true);

        Rooms[i].clusterMin = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Min", "Cluster Min", 36.0, 1.0, 300.0);
        // Rooms[i].clusterMin.setAttribute("readonly", true);

        Rooms[i].clusterMax = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Max", "Cluster Max", 90.0, 1.0, 300.0);
        // Rooms[i].clusterMax.setAttribute("readonly", true);

        Rooms[i].clusterDist = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Dist", "Cluster Dist", 0.5, 0.1, 0.9);
        // Rooms[i].clusterDist.setAttribute("readonly", true);

        Rooms[i].reverbOptionsRoomContainer = Rooms[i].roomReverbContainer.addContainer("Options");
        Rooms[i].reverbInfinite = Rooms[i].reverbOptionsRoomContainer.addBoolParameter("Reverb Infinite", "Reverb Infinite", 0);
        // Rooms[i].reverbInfinite.setAttribute("readonly", true);

        Rooms[i].airEnable = Rooms[i].reverbOptionsRoomContainer.addBoolParameter("Air Enable", "Air Enable", 1);
        // Rooms[i].airEnable.setAttribute("readonly", true);

        Rooms[i].airFreq = Rooms[i].reverbOptionsRoomContainer.addFloatParameter("Air Freq", "Air absorption Frequency", 10000, 20, 20000);
        // Rooms[i].airFreq.setAttribute("readonly", true);

        Rooms[i].modalDensity = Rooms[i].reverbOptionsRoomContainer.addFloatParameter("Modal Density", "Modal Density", 1.0, 0.2, 2.0);
        // Rooms[i].modalDensity.setAttribute("readonly", true);

        Rooms[i].reverbCrossoverRoomContainer = Rooms[i].roomReverbContainer.addContainer("Crossover");
        Rooms[i].frequencyLow = Rooms[i].reverbCrossoverRoomContainer.addFloatParameter("Frequency Low", "Frequency Low", 177.0, 20.0, 20000.0);
        // Rooms[i].frequencyLow.setAttribute("readonly", true);

        Rooms[i].frequencyHigh = Rooms[i].reverbCrossoverRoomContainer.addFloatParameter("Frequency High", "Frequency High", 5657.0, 20.0, 20000.0);
        // Rooms[i].frequencyHigh.setAttribute("readonly", true);

        Rooms[i].roomReverbContainer.setCollapsed(true);
        Rooms[i].perceptualFactorRoomContainer.setCollapsed(true);
        Rooms[i].roomResponseRoomContainer.setCollapsed(true);
        Rooms[i].reverbOptionsRoomContainer.setCollapsed(true);
        Rooms[i].reverbCrossoverRoomContainer.setCollapsed(true);
        Rooms[i].RoomContainer.setCollapsed(true);
    }

}

function createSnapshotsContainer() {
    // Add the snapshot container
    SnapshotsContainer = local.values.addContainer("Snapshots container");
    SnapshotsGlobalRecallTiming = SnapshotsContainer.addFloatParameter("Global recall timing", "global recall timing", 1.0, 0.0, 600.0);
    SnapshotsGlobalRecallSources = SnapshotsContainer.addBoolParameter("Global recall sources", "global recall sources", 1);
    SnapshotsGlobalRecallRooms = SnapshotsContainer.addBoolParameter("Global recall rooms", "global recall rooms", 0);
    SnapshotsGlobalRecallMasters = SnapshotsContainer.addBoolParameter("Global recall masters", "global recall masters", 0);

    for (var i = 0; i < 24; i++) {
        var index = i + 1;
        Snapshots.push({
            "index": index
        });
    }

    SnapshotsContainer.setCollapsed(true);
}

/**
 * Add a on/off button controllable on the remote number remoteIndex.
 * @param {int} remoteIndex: remote Number
 * @param {int} index: index of the button for the remote
 */
function addButtonControllable(remoteIndex, index)
{
    Remote[remoteIndex].onOff[index - 1] = {'values': []};
    Remote[remoteIndex].onOff[index - 1]['container'] = Remote[remoteIndex].RemoteContainer.addContainer("onOff" + index);
    Remote[remoteIndex].onOff[index - 1].parameterControlled = Remote[remoteIndex].onOff[index - 1]['container'].addEnumParameter("Parameter controlled", "parameterControlled", "None", "none", "Source: Selected", "sourceselected", "Source: Mute", "sourcemute", "Source: Solo", "sourcesolo", "Source: Reverb on", "sourcereverbEnable", "Source: Early On", "sourceearlyEnable", "Source: Cluster On", "sourceclusterEnable","Source: Tail On", "sourcetailEnable", "Source: Doppler", "sourcedoppler", "Source: Air Absorption", "sourceairAbsorption", "Source: XY Coordinates mode", "sourcexyCoordinatesMode", "Source: Z Coordinates mode", "sourcezCoordinatesMode", "Source: Drop log", "sourcedropLog", "Room: Mute", "roomMute", "Room: Reverb density", "roomReverbDensity", "Room: Reverb enable", "roomReverbEnable", "Room: Reverb infinite", "roomReverbInfinite", "Room: Air enable", "roomAirEnable");
    var valContainer = Remote[remoteIndex].onOff[index - 1]['container'].addContainer("Values");
    for (var i = 1; i < Remote[remoteIndex].controlsNumber.get() + 1; i++)
    {
        Remote[remoteIndex].onOff[index-1]['values'].push({"value": valContainer.addBoolParameter("Value" + i, "Value" + i, false),
            "target": Remote[remoteIndex].onOff[index - 1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
    }
    valContainer.setCollapsed(true);

}

/**
 * Add a float controllable on the remote number remoteIndex.
 * @param {int} remoteIndex: remote Number
 * @param {int} index: index of the float for the remote
 */
function addFloatControllable(remoteIndex, index)
{
    Remote[remoteIndex].float[index - 1] = {'values': []};
    Remote[remoteIndex].float[index - 1]['container'] = Remote[remoteIndex].RemoteContainer.addContainer("float" + index);
    Remote[remoteIndex].float[index - 1].parameterControlled = Remote[remoteIndex].float[index - 1]['container'].addEnumParameter("Parameter controlled", "parameterControlled", "None", "none", "Source: Azimuth", "sourceazimuth", "Source: Elevation", "sourceelevation", "Source: Distance", "sourcedistance", "Source: Position X", "sourcepositionX", "Source: Position Y", "sourcepositionY", "Source: Position Z", "sourcepositionZ", "Source: Gain", "sourcegain", "Source: Lfe", "sourcelfe", "Source: Lfe2", "sourcelfe2", "Source: Lfe3", "sourcelfe3", "Source: Lfe4", "sourcelfe4", "Source: Presence", "sourcepresence", "Source: Room presence", "sourceroomPresence", "Source: Running Reverberance", "sourcerunningReverberance", "Source: Envelopment", "sourceenvelopment", "Source: Brilliance", "sourcebrilliance", "Source: Warmth", "sourcewarmth", "Source: Yaw", "sourceyaw", "Source: Pitch", "sourcepitch", "Source: Aperture", "sourceaperture", "Source: Scale", "sourcescale", "Source: Spread", "sourcespread", "Source: Knn", "sourceknn", "Source: Early width", "sourceearlyWidth", "Source: Pan Rev", "sourcepanRev", "Source: Drop factor", "sourcedropFactor", "Source: Rotation X", "sourcerotX", "Source: Rotation Y", "sourcerotY", "Source: Rotation Z", "sourcerotZ", "Source: Omni Gain", "sourceomniGain", "Source: RoomGain 1", "sourceroomGain1", "Source: RoomGain 2", "sourceroomGain2", "Source: RoomGain 3", "sourceroomGain3", "Source: RoomGain 4", "sourceroomGain4", "Source: RoomGain 5", "sourceroomGain5", "Source: RoomGain 6", "sourceroomGain6", "Source: RoomGain 7", "sourceroomGain7", "Source: RoomGain 8", "sourceroomGain8", "Source: RoomGain 9", "sourceroomGain9", "Source: RoomGain 10", "sourceroomGain10", "Room: Gain", "roomGain", "Room: Listener X", "roomListenerX", "Room: Listener Y", "roomListenerY", "Room: Listener Z", "roomListenerZ", "Room: Listener yaw", "roomListenerYaw", "Room: Listener pitch", "roomListenerPitch", "Room: Listener Roll", "roomListenerRoll", "Room: Reverb size", "roomReverbSize", "Room: Reverb start", "roomReverbStart", "Room: Reverb gain", "roomReverbGain", "Room: Reverb factor", "roomReverbFactor", "Room: Reverberance", "roomReverberance", "Room: Heaviness", "roomHeaviness", "Room: Liveness", "roomLiveness", "Room: Early min", "roomEarlyMin", "Room: Early max", "roomEarlyMax", "Room: Early dist", "roomEarlyDist", "Room: Early Shape", "roomEarlyShape", "Room: Cluster Min", "roomClusterMin", "Room: Cluster Max", "roomClusterMax", "Room: Cluster dist", "roomClusterDist", "Room: Air Freq", "roomAirFreq", "Room: Modal density", "roomModalDensity", "Room: Frequency low crossover", "roomFrequencyLow", "Room: Frequency high crossover", "roomFrequencyHigh");
    var valContainer = Remote[remoteIndex].float[index - 1]['container'].addContainer("Values");
    for (var i = 1; i < Remote[remoteIndex].controlsNumber.get() + 1; i++)
    {
        Remote[remoteIndex].float[index-1]['values'].push({"value": valContainer.addFloatParameter("Value" + i, "Value" + i, 0.0, 0.0, 1.0),
            "target": Remote[remoteIndex].float[index - 1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
    }
    valContainer.setCollapsed(true);
}

/**
 * Add a remote.
 * @param {int} index: remote index
 */
function addRemote(index)
{   var i = index - 1;
    // TODO: check if reload is ok if numberOfControls and numberOfButtonControllable and Float are not similar to saved one
    // script.log("Adding Remote");
    Remote.push({});
    Remote[i].RemoteContainer = RemotesContainer.addContainer("Remote" + index);
    Remote[i].RemoteContainer.setCollapsed(true);
    Remote[i].indexNumber = Remote[i].RemoteContainer.addIntParameter("Index", "index", 1, 1, 64);
    Remote[i].controlsNumber = Remote[i].RemoteContainer.addIntParameter("Controls Number", "controls number", 8 ,1, 50);
    // Remote[i].controlsNumber.setAttribute("readonly", true);
    Remote[i].onOffNumber = Remote[i].RemoteContainer.addIntParameter("On Off Number", "on off number", 0, 0, 50);
    // Remote[i].onOffNumber.setAttribute("readonly", true);
    Remote[i].remoteRange = Remote[i].RemoteContainer.addEnumParameter("Remote range", "Range of values of the remote parameter", "MIDI", "midi", "0 / 1", "linear01", "-1 / 1", "linear-11", "Percent", "percent");
    Remote[i].onOff = [];

    for (var j = 1; j < Remote[i].onOffNumber.get() + 1; j++)
    {
        addButtonControllable(i, j);
    }

    Remote[i].floatNumber = Remote[i].RemoteContainer.addIntParameter("Float Number", "float number", 0, 0, 50);
    // Remote[i].floatNumber.setAttribute("readonly", true);
    Remote[i].float = [];
    for (var j = 1; j < Remote[i].floatNumber.get() + 1; j++)
    {
        addFloatControllable(i, j);
    }
    Remote[i]["index"] = Remote[i].indexNumber.get();
    Remote[i]['numberOfControls'] = Remote[i].controlsNumber.get();
    Remote[i]["numberOfButtonControllable"] = Remote[i].onOffNumber.get();
    Remote[i]["numberOfFloatControllable"] =Remote[i].floatNumber.get();//, "container": RemoteContainer, 'controlsNumber': 8, 'onOffNumber': 8, 'floatNumber':8});
}

/**
 * Delete the remote according to his index.
 * @param {int} index: remote index to delete
 */
function deleteRemote(index)
{
    // script.log("Removing remote: " + index);
    RemotesContainer.removeContainer("Remote" + index);
    Remote.splice(-1);
}

/**
 * Create the remote container
 */
function createRemoteContainer()
{
    // Add the Remote container
    RemotesContainer = local.values.addContainer("Remotes");

    // var numberOfRemotes = RemotesContainer.addIntParameter("number of remotes", "number of remotes", 1, 0, 64);
    // numberOfRemotes.setAttribute("readonly", true);
    var masterIndex = RemotesContainer.addIntParameter("Master index", "master index", 1, 1, 64);
    for (var i = 1; i < SetupContainer.getChild("numberOfRemotes").get() + 1; i++)
    {
        addRemote(i);
    }

    // if (SetupContainer.getChild("numberOfRemotes").get() < 8)
    // {
    //     for (var i = 8; i > SetupContainer.getChild("numberOfRemotes").get(); i--)
    //     {deleteRemote(i);}
    // }

    for (var i = 0; i < SetupContainer.getChild("numberOfRemotes").get(); i++)
    {
        if (Remote[i].numberOfFloatControllable < 8)
        {
            for (var j=8; j > Remote[i].numberOfFloatControllable + 1; j--)
            {
                RemotesContainer.getChild("Remote" + parseInt(i+1)).removeContainer("float" + j);
            }
            if (Remote[i].controlsNumber.get() < 8)
            {
                for (var j = 1; j < Remote[i].floatNumber.get() + 1; j++)
                {
                    for (var k = 8; k > Remote[i].controlsNumber.get();k--) {
                        RemotesContainer.getChild("Remote" + parseInt(i + 1)).getChild("float" + j).removeParameter("Target" + k);
                        RemotesContainer.getChild("Remote" + parseInt(i + 1)).getChild("float" + j).getChild("Values").removeParameter("Value" + k);
                    }
                }
            }
        }
        if (Remote[i].numberOfButtonControllable < 8)
        {
            for (var j=8; j > Remote[i].numberOfButtonControllable + 1; j--)
            {
                RemotesContainer.getChild("Remote" + parseInt(i+1)).removeContainer("onOff" + j);
            }
            if (Remote[i].controlsNumber.get() < 8)
            {
                for (var j = 1; j < Remote[i].onOffNumber.get() + 1; j++)
                {
                    for (var k = 8; k > Remote[i].controlsNumber.get();k--) {
                        RemotesContainer.getChild("Remote" + parseInt(i + 1)).getChild("onOff" + j).removeParameter("Target" + k);

                        ;
                        RemotesContainer.getChild("Remote" + parseInt(i + 1)).getChild("onOff" + j).getChild("Values").removeParameter("Value" + k);
                    }
                }
            }
        }
    }
}

/**
 * Update the remotes for the given parameter
 * @param {string} controlName
 * @param {object} args
 * @param {int} sourceIndex
 */

function updateRemote(controlName, args, sourceIndex)
{
    script.log("Trigger update Remote");
    script.log("ControlName: " + controlName + ", args: " + args + ", sourceIndex: " + sourceIndex);
    var arg = 0.0;
    for (var remoteIndex = 0; remoteIndex < Remote.length; remoteIndex++) {
        if (Math.floor(sourceIndex / Remote[remoteIndex].controlsNumber.get()) == (Remote[remoteIndex].indexNumber.get() - 1)) {
            // script.log("updateRemote index: " + sourceIndex);

            for (var onOffIndex = 0; onOffIndex < Remote[remoteIndex].onOffNumber.get(); onOffIndex++) {
                if (typeof(args) === 'number')
                {
                    arg = args;
                }
                else
                {
                    arg = args[0];
                }
                if (Remote[remoteIndex].onOff[onOffIndex].parameterControlled && Remote[remoteIndex].onOff[onOffIndex].parameterControlled.get() === controlName)
                {
                    var remoteRange = RemoteRangeFromString[Remote[remoteIndex].remoteRange.get()];
                    var target = Remote[remoteIndex].onOff[onOffIndex]['values'][sourceIndex % Remote[remoteIndex].controlsNumber.get()]['target'].getTarget();
                    if (target) {
                        target.set(arg * (remoteRange[1] - remoteRange[0]) + remoteRange[0]);
                    }
                    Remote[remoteIndex].onOff[onOffIndex]['values'][sourceIndex % Remote[remoteIndex].controlsNumber.get()]['value'].set(arg);
                }
            }
            for (var floatIndex = 0; floatIndex < Remote[remoteIndex].floatNumber.get(); floatIndex++) {
                // script.log(Remote[remoteIndex].float[floatIndex]['parameterControlled'].get() + ", val: " + args);
                if (Remote[remoteIndex].float[floatIndex].parameterControlled) {
                    var parameterControlled = Remote[remoteIndex].float[floatIndex].parameterControlled.get();
                    if (parameterControlled === controlName | (parameterControlled === 'sourceazimuth' | parameterControlled === 'sourceelevation' | parameterControlled === 'sourcedistance' | (parameterControlled === 'sourcepositionX' | parameterControlled === 'sourcepositionY' | parameterControlled === 'sourcepositionZ') && controlName === 'sourceposition') | ((controlName === 'sourceazimuth' | controlName === 'sourceelevation' | controlName === 'sourcedistance') && (parameterControlled === 'sourcepositionX' | parameterControlled === 'sourcepositionY' | parameterControlled === 'sourcepositionZ')) | ((controlName === 'sourcepositionX' | controlName === 'sourcepositionY' | controlName === 'sourcepositionZ') && (parameterControlled === 'sourceazimuth' | parameterControlled === 'sourceelevation' | parameterControlled === 'sourcedistance'))) {
                        if (typeof(args) === 'number')
                        {
                            arg = args;
                        }
                        else
                        {
                            arg = args[0];
                        }
                        if (parameterControlled === "sourcepositionX") {
                            // script.log("position AED; "+ Sources[sourceIndex - 1].positionAED.get()[0] +Sources[sourceIndex - 1].positionAED.get()[1] +Sources[sourceIndex - 1].positionAED.get()[2]  + "position XYZ: " + PolarToCartesian(Sources[sourceIndex - 1].positionAED.get())[0]+ PolarToCartesian(Sources[sourceIndex - 1].positionAED.get())[1]+ PolarToCartesian(Sources[sourceIndex - 1].positionAED.get()[2]));
                            arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[0];
                        } else if (parameterControlled === "sourcepositionY") {
                            arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[1];
                        } else if (parameterControlled === "sourcepositionZ") {
                            arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[2];
                        } else if (parameterControlled === "sourceelevation") {
                            arg = Sources[sourceIndex].positionAED.get()[1];
                        } else if (parameterControlled === "sourcedistance") {
                            arg = Sources[sourceIndex].positionAED.get()[2];
                        }
                        var localRangeForParameter = RangeForParameter[parameterControlled];
                        var val = (arg - localRangeForParameter[0]) / (localRangeForParameter[1] - localRangeForParameter[0]);
                        var target = Remote[remoteIndex].float[floatIndex]['values'][sourceIndex % Remote[remoteIndex].controlsNumber.get()]["target"];
                        if (target) {
                            var remoteRange = RemoteRangeFromString[Remote[remoteIndex].remoteRange.get()];
                            var target = target.getTarget();
                            script.log("Update float target, target: " + val);
                            if (target) {
                                // target.set(val * 127);
                                target.set(val * (remoteRange[1] - remoteRange[0]) + remoteRange[0]);
                            }
                            if (stopUpdateForSource != sourceIndex) {
                                Remote[remoteIndex].float[floatIndex]['values'][sourceIndex % Remote[remoteIndex].controlsNumber.get()]['value'].set(val);
                            }
                        }
                    }
                }
            }
        }
    }
}


/**
 * Cartesian to Polar function
 * @param {float} value
 */
function CartesianToPolar(value)
{
    // script.log("CartesianToPolar, value: X=" + value[0], ", Y=" + value[1]);
    var positionAED = [0.0, 0.0, 0.0];
    if (value[0] != 0.0 || value[1] != 0.0 || value[2] != 0.0)
    {
        positionAED[2] = Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2));
        positionAED[1] = - 180 * Math.acos(value[2]/positionAED[2]) / Math.PI + 90;
    }
    else
    {
        positionAED[1] = 0.0;
        positionAED[2] = 0.0;
    }

    if(value[0]===0.0 && value[1]===0.0)
    {
        positionAED[0] = 0.0;
    }
    else if (value[0] === 0.0 && value[1] > 0.0)
    {positionAED[0] = 0.0;}
    else if(value[0] === 0.0 && value[1] < 0.0)
    {positionAED[0] = -180.0;}
    else if(value[1] === 0.0 && value[0] > 0.0)
    {positionAED[0] = 90.0;}
    else if(value[1] === 0 && value[0] < 0.0)
    {positionAED[0] = -90.0;}
    else if (value[0] > 0.0 && value[1] !== 0.0)
    {positionAED[0] = (-180 * Math.atan(value[1]/value[0]) / Math.PI) + 90;}
    else if(value[0] < 0.0 && value[1] !== 0.0)
    {positionAED[0] = (-180 * Math.atan(value[1]/value[0]) / Math.PI) - 90;}

    // script.log("CartesianToPolar, value: A:" + positionAED[0], ", D=" + positionAED[2]);

    return positionAED;
}

/**
 * Polar to cartesian function
 * @param {float} value
 */
function PolarToCartesian(value)
{
    var positionXYZ = [0.0,0.0,2.0];
    positionXYZ[0] = value[2] * Math.cos(DegToRad(value[0])) * Math.sin(DegToRad(value[1]));
    positionXYZ[1] = value[2] * Math.sin(DegToRad(value[0])) * Math.sin(DegToRad(value[1]));
    positionXYZ[2] = value[2] * Math.cos(DegToRad(value[1]));

    return positionXYZ;
}

/**
 * Degrees to Radian function
 * @param {float} value
 */

function DegToRad(value)
{
    return -1 * Math.PI * (value - 90) / 180;
}
