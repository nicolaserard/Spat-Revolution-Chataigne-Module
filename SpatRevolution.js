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

var ParameterFromString = {
    'gain': function(index)
    {
        return Sources[index].gain;
    },
    'lfe': function(index)
    {
        return Sources[index].lfe;
    },
    'lfe2': function(index)
    {
        return Sources[index].lfe2;
    },
    'lfe3': function(index)
    {
        return Sources[index].lfe3;
    },
    'lfe4': function(index)
    {
        return Sources[index].lfe4;
    },
    'solo': function(index)
    {
        return Sources[index].solo;
    },
    'mute': function(index)
    {
        return Sources[index].mute;
    },
    'azimuth': function(index)
    {
        return Sources[index].positionAED;
    },
    'elevation': function(index)
    {
        return Sources[index].positionAED;
    },
    'distance': function(index)
    {
        return Sources[index].positionAED;
    },
    'positionX': function(index)
    {
        return Sources[index].positionAED;
    },
    'positionY': function(index)
    {
        return Sources[index].positionAED;
    },
    'positionZ': function(index)
    {
        return Sources[index].positionAED;
    },
    'reverbEnable': function(index)
    {
        return Sources[index].reverbEnable;
    },
    'earlyEnable': function(index)
    {
        return Sources[index].earlyEnable;
    },
    'clusterEnable': function(index)
    {
        return Sources[index].clusterEnable;
    },
    'tailEnable': function(index)
    {
        return Sources[index].tailEnable;
    },
    'presence': function(index)
    {
        return Sources[index].presence;
    },
    'roomPresence': function(index)
    {
        return Sources[index].roomPresence;
    },
    'ruuningReverberance': function(index)
    {
        return Sources[index].ruuningReverberance;
    },
    'envelopment': function(index)
    {
        return Sources[index].envelopment;
    },
    'brilliance': function(index)
    {
        return Sources[index].brilliance;
    },
    'warmth': function(index)
    {
        return Sources[index].warmth;
    },
    'yaw': function(index)
    {
        return Sources[index].yaw;
    },
    'pitch': function(index)
    {
        return Sources[index].pitch;
    },
    'aperture': function(index)
    {
        return Sources[index].aperture;
    },
    'scale': function(index)
    {
        return Sources[index].scale;
    },
    'spread': function(index)
    {
        return Sources[index].spread;
    },
    'knn': function(index)
    {
        return Sources[index].knn;
    },
    'earlyWidth': function(index)
    {
        return Sources[index].earlyWidth;
    },
    'panRev': function(index)
    {
        return Sources[index].panRev;
    },
    'doppler': function(index)
    {
        return Sources[index].doppler;
    },
    'radius': function(index)
    {
        return Sources[index].radius;
    },
    'airAbsorption': function(index)
    {
        return Sources[index].airAbsorption;
    },
    'xyCoordinatesMode': function(index)
    {
        return Sources[index].xyCoordinatesMode;
    },
    'zCoordinatesMode': function(index)
    {
        return Sources[index].zCoordinatesMode;
    },
    'dropLog': function(index)
    {
        return Sources[index].dropLog;
    },
    'dropFactor': function(index)
    {
        return Sources[index].dropFactor;
    },
    'rotx': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'roty': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'rotz': function(index)
    {
        return Sources[index].rotationXYZ;
    },
    'omniGain': function(index)
    {
        return Sources[index].omniGain;
    },
    'roomGain1': function(index)
    {
        return Sources[index].roomGain1;
    },
    'roomGain2': function(index)
    {
        return Sources[index].roomGain2;
    },
    'roomGain3': function(index)
    {
        return Sources[index].roomGain3;
    },
    'roomGain4': function(index)
    {
        return Sources[index].roomGain4;
    },
    'roomGain5': function(index)
    {
        return Sources[index].roomGain5;
    },
    'roomGain6': function(index)
    {
        return Sources[index].roomGain6;
    },
    'roomGain7': function(index)
    {
        return Sources[index].roomGain7;
    },
    'roomGain8': function(index)
    {
        return Sources[index].roomGain8;
    },
    'roomGain9': function(index)
    {
        return Sources[index].roomGain9;
    },
    'roomGain10': function(index)
    {
        return Sources[index].roomGain10;
    }
};

var RangeForParameter = {
    'gain': [-144.5, 24.0],
    'lfe': [-144.5, 24.0],
    'lfe2': [-144.5, 24.0],
    'lfe3': [-144.5, 24.0],
    'lfe4': [-144.5, 24.0],
    'azimuth': [-180.0, 180.0],
    'elevation': [-90.0, 90.0],
    'distance': [0, 100.0],
    'positionX': [-100.0, 100.0],
    'positionY': [-100.0, 100.0],
    'positionZ': [-100.0, 100.0],
    'presence': [0, 120.0],
    'roomPresence': [0.0, 120.0],
    'runningReverberance': [0.0, 50.0],
    'envelopment': [0.0, 50.0],
    'brilliance': [0.0, 60.0],
    'warmth': [0, 60.0],
    'yaw': [-180, 180.0],
    'pitch': [-90, 90.0],
    'aperture': [10.0, 180.0],
    'scale': [0.1, 100.0],
    'spread': [0.0, 100.0],
    'knn': [1, 100.0],
    'earlyWidth': [1.0, 180.0],
    'panRev': [0, 1.0],
    'radius': [0.2, 100.0],
    'dropFactor': [-10.0, 30.0],
    'rotx': [-180, 180.0],
    'roty': [-180, 180.0],
    'rotz': [-180, 180.0],
    'omniGain': [-144.5, 24.0],
    'roomGain1': [-144.5, 24.0],
    'roomGain2': [-144.5, 24.0],
    'roomGain3': [-144.5, 24.0],
    'roomGain4': [-144.5, 24.0],
    'roomGain5': [-144.5, 24.0],
    'roomGain6': [-144.5, 24.0],
    'roomGain7': [-144.5, 24.0],
    'roomGain8': [-144.5, 24.0],
    'roomGain9': [-144.5, 24.0],
    'roomGain10': [-144.5, 24.0]
};

/* OSCSourceMessage: array of all OSC Source Messages. Use to send OSC message when a value changed.*/
var OSCSourceMessage = {
    'gain': function (index, value) {
        local.send("/source/" + index + "/gain", value.get());
    },
    'mute': function (index, value) {
        local.send("/source/" + index + "/mute", value.get());
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
var OSCRoomMessage = {
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

/**
 * Global variables
 */

var Sources = [];// array of all sources parameters.
var Rooms = []; // array of all rooms parameters
var Remote = [];
var stopSendingOSC = false;
var stopUpdateForSource = -1;
var stereo = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'true', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'true', 'false', 'true'];
var transformStereoToMono = false;
var normalizedRange = [-10, 10, -10, 10, -10, 10];
var stopSendForSource = -1;

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

    SetupContainer = local.values.addContainer("Setup", "Setup value");
    distanceMax = SetupContainer.addFloatParameter("Distance Max", "Distance maximum of the position XYZ and distance for AED, in meters", 100.0, 1.0, 100.0);

    createSourceContainer();
    createRoomContainer();
    createRemoteContainer();
    local.send("/source/*/dump", 0);
    local.send("/room/1/dump", 0);
}

/**
 * This function is called automatically by Chataigne at updateRate period.
 * @param {integer} updateRate
 */
function update(updateRate)
{
    for (var remoteIndex = 0; remoteIndex < Remote.length; remoteIndex++)
    {
        for (var j = 0; j < Remote[remoteIndex].onOffNumber.get(); j++)
        {
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
            {
                if (Remote[remoteIndex].onOff[j]['values'][l]["target"]) {
                    var target = Remote[remoteIndex].onOff[j]['values'][l]["target"].getTarget();
                    if (target && target.get() * 127 !=parseInt(Remote[remoteIndex].float[j]['values'][l]["value"].get() * 127)) {
                        Remote[remoteIndex].onOff[j]['values'][l]["value"].set(target.get() / 127);
                    }
                }
            }
        }
        //float
        for (var j = 0; j < Remote[remoteIndex].floatNumber.get(); j++)
        {
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
            {
                if (Remote[remoteIndex].float[j]['values'][l]["target"]) {
                    var target = Remote[remoteIndex].float[j]['values'][l]["target"].getTarget();
                    // script.log(target.name);
                    if (target && target.get() != parseInt(Remote[remoteIndex].float[j]['values'][l]["value"].get() * 127)) {
                        Remote[remoteIndex].float[j]['values'][l]["value"].set(target.get() / 127);
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
}

/**
 * This function is called automatically by Chataigne when a module value changes
 * @param {value} value
 */
function moduleValueChanged(value)
{
    var name = value.name;
    if (value.isParameter())
    {
        if (name === 'numberOfRemotes')
        {
            if (value.get() > Remote.length)
            {
                addRemote(value.get());
            }
            else if (value.get() < Remote.length)
            {
                deleteRemote(value.get() + 1);
            }
        }

        else if (name === 'masterIndex')
        {

            for (var i = 0; i < Remote.length; i++)
            {
                Remote[i].indexNumber.set(value.get());
            }
        }
        else if (name === 'distanceMax')
        {
            var val = value.get();
            RangeForParameter['positionX'] = [-1 * val, val];
            RangeForParameter['positionY'] = [-1 * val, val];
            RangeForParameter['positionZ'] = [-1 * val, val];
            RangeForParameter['distance'] = [-1 * val, val];
        }
        else if (name === 'index')
        {
            var remoteIndex = parseInt(value.getParent().name.substring(6, value.getParent().name.length)) - 1;

            // onOff
            for (var j = 0; j < Remote[remoteIndex].onOffNumber.get(); j++)
            {
                for (var l = 0; l < Remote[remoteIndex].controlsNumber.get() ; l++)
                {
                    var val = ParameterFromString[Remote[remoteIndex].onOff[j].parameterControlled.get()](value.get()*Remote[remoteIndex].controlsNumber.get() + l).get();
                    var target = Remote[remoteIndex].onOff[j]["values"][l]["target"].getTarget();
                    if (target)
                    {
                        target.set(val*127);
                    }
                    Remote[remoteIndex].onOff[j]["values"][l]["value"].set(val);

                }
            }

            //float
            for (var j = 0; j < Remote[remoteIndex].floatNumber.get(); j++)
            {
                for (var l = 0; l < Remote[remoteIndex].controlsNumber.get(); l++)
                {
                    var val = ParameterFromString[Remote[remoteIndex].float[j].parameterControlled.get()](value.get() * Remote[remoteIndex].controlsNumber.get() + l).get();
                    if (Remote[remoteIndex].float[j].parameterControlled.get() === "azimuth")
                    {
                        val = val[0];
                    }
                    else if (Remote[remoteIndex].float[j].parameterControlled.get() === "elevation")
                    {
                        val = val[1];
                    }
                    else if (Remote[remoteIndex].float[j].parameterControlled.get() === 'distance')
                    {
                        val = val[2];
                    }
                    else if (Remote[remoteIndex].float[j].parameterControlled.get() === 'positionX')
                    {
                        val = PolarToCartesian(val)[0];
                    }
                    else if (Remote[remoteIndex].float[j].parameterControlled.get() === 'positionY')
                    {
                        val = PolarToCartesian(val)[1];
                    }
                    else if (Remote[remoteIndex].float[j].parameterControlled.get() === 'positionZ')
                    {
                        val = PolarToCartesian(val)[2];
                    }

                    var target = Remote[remoteIndex].float[j]["values"][l]["target"].getTarget();
                    if (target)
                    {
                        target.set((val - RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][0]) / (RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][1] - RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][0]) * 127);
                    }
                    Remote[remoteIndex].float[j]["values"][l]["value"].set((val - RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][0]) / (RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][1] - RangeForParameter[Remote[remoteIndex].float[j].parameterControlled.get()][0]));
                }
            }

        }
        else if (name === 'parameterControlled')
        {
            var remoteIndex = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length)) - 1;
            Remote[remoteIndex].parameterControlled = value.get();
            var cont = value.getParent();
            for (var l = 0; l < Remote[remoteIndex].controlsNumber.get() ; l++)
            {
                var ind = Remote[remoteIndex].indexNumber.get() * Remote[remoteIndex].controlsNumber.get() + l;
                var val = ParameterFromString[value.get()](ind).get();
                if (value.get() === 'rotx' | value.get() === 'azimuth' | value.get() === 'positionX')
                {
                    val = val[0];
                }
                else if (value.get() === 'roty' | value.get() === 'elevation' | value.get() === 'positionY')
                {
                    val = val[1];
                }
                else if (value.get() === 'rotz' | value.get() === 'distance' | value.get() === 'positionZ')
                {
                    val = val[2];
                }
                val = (val - RangeForParameter[value.get()][0]) / (RangeForParameter[value.get()][1] - RangeForParameter[value.get()][0]);
                var target = cont.getChild("Target" + parseInt(l+1)).getTarget();
                if (target)
                {
                    target.set(val * 127);
                }
                cont.getChild("Values").getChild("value" + parseInt(l+1)).set(val);
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
                    for (var j = 0; j < Remote[index].onOffNumber.get(); j++)
                    {
                        Remote[index].onOff[j]['values'].push(
                            {"value": Remote[index].onOff[j]['container'].getChild("Values").addBoolParameter("Value" + i, "Value" + i, false),
                                "target": Remote[index].onOff[j]['container'].addTargetParameter("Target" + i, "Target for control number " + i)
                            });
                    }
                    // float
                    for (var j = 1; j < Remote[index].floatNumber.get() + 1; j++)
                    {
                        Remote[index].float[j-1]['values'].push(
                            {"value": Remote[index].float[j-1]['container'].getChild("Values").addFloatParameter("Value" + i, "Value" + i, 0.0, 0.0, 1.0),
                                "target": Remote[index].float[j-1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
                    }
                    Remote[index]['numberOfControls'] +=1;
                }

            }
            else if (value.get() < Remote[index]['numberOfControls'])
            {
                while (Remote[index]['numberOfControls'] > value.get())
                {
                    //onOff
                    for (var j = 1; j < Remote[index].onOffNumber.get() + 1; j++)
                    {
                        var onOffCont = Remote[index].onOff[j-1]['container'];
                        onOffCont.removeParameter("Target"+parseInt(Remote[index]['numberOfControls']));
                        onOffCont.getChild("Values").removeParameter("Value" + parseInt(Remote[index]['numberOfControls']));
                    }
                    //float
                    for (var j = 1; j < Remote[index].floatNumber.get() + 1; j++)
                    {
                        var floatCont = Remote[index].float[j-1]['container'];
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
            if (value.get() > Remote[index - 1]["numberOfButtonControllable"])
            {
                addButtonControllable(index - 1, value.get());
            }
            else if (value.get() < Remote[index - 1]["numberOfButtonControllable"])
            {
                i = value.get() + 1;
                value.getParent().removeContainer("OnOff" + i);
            }
            Remote[index-1]["numberOfButtonControllable"] = value.get();
        }
        else if (name === 'floatNumber')
        {
            var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
            if (value.get() > Remote[index - 1]["numberOfFloatControllable"])
            {
                addFloatControllable(index - 1, value.get());
            }
            else if (value.get() < Remote[index - 1]["numberOfFloatControllable"])
            {
                i = value.get() + 1;
                value.getParent().removeContainer("Float" + i);
            }
            Remote[index-1]["numberOfFloatControllable"] = value.get();
        }

        else if (name.startsWith("value"))
        {
            var valueIndex = parseInt(value.name.substring(5, value.getParent().name.length));
            var index = valueIndex + value.getParent().getParent().getParent().getChild("Index").get() * value.getParent().getParent().getParent().getChild("controlsNumber").get();
            if (index == stopUpdateForSource)
            {
                return;
            }
            var param = ParameterFromString[value.getParent().getParent().parameterControlled.get()](index - 1);
            var val = value.get() * (RangeForParameter[value.getParent().getParent().parameterControlled.get()][1] - RangeForParameter[value.getParent().getParent().parameterControlled.get()][0]) + RangeForParameter[value.getParent().getParent().parameterControlled.get()][0];
            if (value.getParent().getParent().parameterControlled.get() === "azimuth" | value.getParent().getParent().parameterControlled.get() === "rotx")
            {
                param.set(val, param.get()[1], param.get()[2]);
            }
            else if (value.getParent().getParent().parameterControlled.get() === "elevation" | value.getParent().getParent().parameterControlled.get() === "roty")
            {
                param.set(param.get()[0], val, param.get()[2]);
            }
            else if (value.getParent().getParent().parameterControlled.get() === "distance" | value.getParent().getParent().parameterControlled.get() === "rotz")
            {
                param.set(param.get()[0], param.get()[1], val);
            }
            else if (value.getParent().getParent().parameterControlled.get() === "positionX")
            {
                var cartesian = PolarToCartesian(param.get());
                param.set(CartesianToPolar([val, cartesian[1], cartesian[2]]));

            }
            else if (value.getParent().getParent().parameterControlled.get() === "positionY")
            {
                var cartesian = PolarToCartesian(param.get());
                param.set(CartesianToPolar([cartesian[0], val, cartesian[2]]));
            }
            else if (value.getParent().getParent().parameterControlled.get() === "positionZ")
            {
                var cartesian = PolarToCartesian(param.get());
                param.set(CartesianToPolar([cartesian[0], cartesian[1], val]));
            }
            else
            {
                param.set(val);
            }

            stopSendingOSC = true;
            stopUpdateForSource = index;
            if (value.getParent().getParent().parameterControlled.get() === "azimuth" | value.getParent().getParent().parameterControlled.get() === "elevation" | value.getParent().getParent().parameterControlled.get() === "distance")
            {
                updateRemote("azimuth" , param.getParent().getChild("positionAED").get(), index);
            }
            else if (value.getParent().getParent().parameterControlled.get() === "positionX" | value.getParent().getParent().parameterControlled.get() === "positionY" | value.getParent().getParent().parameterControlled.get() === "positionZ")
            {
                updateRemote("positionX", param.getParent().getChild("positionAED").get(), index);
            }
            stopSendingOSC = false;
            stopUpdateForSource = -1;
        }

        else {
            if (!stopSendingOSC && OSCSourceMessage[name])
            {
                var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
                if (index === 0)
                {
                    index = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length));
                }
                if (index != stopSendForSource + 1)
                {
                    OSCSourceMessage[name](index, value);
                }
            }
            else if (!stopSendingOSC && OSCRoomMessage[name])
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
                OSCRoomMessage[name](index, value);
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
            controlName = 'gain';
        }
    }
    else if (address[3]==='lfe')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe1.set(args[0]);
            controlName = 'lfe';
        }
    }
    else if (address[3]==='lfe2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe2.set(args[0]);
            controlName = 'lfe2';
        }
    }
    else if (address[3]==='lfe3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe3.set(args[0]);
            controlName = 'lfe3';
        }
    }
    else if (address[3]==='lfe4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.lfe4.set(args[0]);
            controlName = 'lfe4';
        }
    }
    else if (address[3] ==='mute')
    {
        if (typeof(args[0]) == 'number')
        {
            source.mute.set(args[0]);
            controlName = 'mute';
        }
    }
    else if (address[3] ==='solo')
    {
        if (typeof(args[0]) == 'number')
        {
            source.solo.set(args[0]);
            controlName = 'solo';
        }
    }
    else if (address[3]==='aed')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            controlName = 'position';

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
            controlName = 'position';
            source.positionAED.set(CartesianToPolar(args));
            stopSendingOSC = false;
        }
    }
    else if (address[3]==='reverb' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.reverbEnable.set(args[0]);
            controlName = 'reverbEnable';
        }
    }
    else if (address[3] === 'early')
    {
        if (typeof(args[0]) == 'number')
        {
            source.earlyEnable.set(args[0]);
            controlName = 'earlyEnable';
        }
    }
    else if (address[3] === 'cluster')
    {
        if (typeof(args[0]) == 'number')
        {
            source.clusterEnable.set(args[0]);
            controlName = 'clusterEnable';
        }
    }
    else if (address[3] === 'tail')
    {
        if (typeof(args[0]) == 'number')
        {
            source.tailEnable.set(args[0]);
            controlName = 'tailEnable';
        }
    }
    else if (address[3] === 'name')
    {
        if (typeof(args[0]) == 'string')
        {
            source.sourceName.set(args[0]);
            controlName = 'name';
        }
    }
    else if (address[3]==='pres')
    {
        if (typeof(args[0]) == 'number')
        {
            source.presence.set(args[0]);
            controlName = 'presence';
        }
    }
    else if (address[3]==='prer')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomPresence.set(args[0]);
            controlName = 'roomPresence';
        }
    }
    else if (address[3]==='revp')
    {
        if (typeof(args[0]) == 'number')
        {
            source.runningReverberance.set(args[0]);
            controlName = 'runningReverberance';
        }
    }
    else if (address[3]==='env')
    {
        if (typeof(args[0]) == 'number')
        {
            source.envelopment.set(args[0]);
            controlName = 'envelopment';
        }
    }
    else if (address[3]==='warmth')
    {
        if (typeof(args[0]) == 'number')
        {
            source.warmth.set(args[0]);
            controlName = 'warmth';
        }
    }
    else if (address[3]==='bril')
    {
        if (typeof(args[0]) == 'number')
        {
            source.brilliance.set(args[0]);
            controlName = 'brilliance';
        }
    }
    else if (address[3]==='yaw')
    {
        if (typeof(args[0]) == 'number')
        {
            source.yaw.set(args[0]);
            controlName = 'yaw';
        }
    }
    else if (address[3]==='pitch')
    {
        if (typeof(args[0]) == 'number')
        {
            source.pitch.set(args[0]);
            controlName = 'pitch';
        }
    }
    else if (address[3]==='aperture')
    {
        if (typeof(args[0]) == 'number')
        {
            source.aperture.set(args[0]);
            controlName = 'aperture';
        }
    }
    else if (address[3]==='scale')
    {
        if (typeof(args[0]) == 'number')
        {
            source.scale.set(args[0]);
            controlName = 'scale';
        }
    }
    else if (address[3]==='spread')
    {
        if (typeof(args[0]) == 'number')
        {
            source.spread.set(args[0]);
            controlName = 'spread';
        }
    }
    else if (address[3]==='nneig')
    {
        if (typeof(args[0]) == 'number')
        {
            source.knn.set(args[0]);
            controlName = 'knn';
        }
    }
    else if (address[3]==='early' && address[4]==='width')
    {
        if (typeof(args[0]) == 'number')
        {
            source.earlyWidth.set(args[0]);
            controlName = 'earlyWidth';
        }
    }
    else if (address[3]==='prevf')
    {
        if (typeof(args[0]) == 'number')
        {
            source.panRev.set(args[0]);
            controlName = 'panRev';
        }
    }
    else if (address[3]==='doppler' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.doppler.set(args[0]);
            controlName = 'options';
        }
    }
    else if (address[3]==='radius')
    {
        if (typeof(args[0]) == 'number')
        {
            source.radius.set(args[0]);
            controlName = 'radius';
        }
    }
    else if (address[3]==='air' && address[4]==='enable')
    {
        if (typeof(args[0]) == 'number')
        {
            source.airAbsorption.set(args[0]);
            controlName = 'airAbsorption';
        }
    }
    else if (address[3]==='cm')
    {
        if (typeof(args[0]) == 'number')
        {
            source.xyCoordinatesMode.set(args[0]);
            controlName = 'xyCoordinatesMode';
        }
    }
    else if (address[3]==='zcm')
    {
        if (typeof(args[0]) == 'number')
        {
            source.zCoordinatesMode.set(args[0]);
            controlName = 'zCoordinatesMode';
        }
    }
    else if (address[3]==='drop')
    {
        if (address[4] ==='type')
        {
            if (typeof(args[0]) == 'number')
            {
                source.dropLog.set(args[0]);
                controlName = 'dropLog';
            }
        }
        if (address[4] ==='value')
        {
            if (typeof(args[0]) == 'number')
            {
                source.dropFactor.set(args[0]);
                controlName = 'dropFactor';
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
            controlName = 'rotx';
        }
    }
    else if (address[3]==='roty')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = source.rotationXYZ.get();
            value = [value[0], args[1], value[2]];
            source.rotationXYZ.set(value);
            controlName = 'roty';
        }
    }
    else if (address[3]==='rotz')
    {
        if (typeof(args[0]) == 'number')
        {
            var value = source.rotationXYZ.get();
            value = [value[0], value[1], args[2]];
            source.rotationXYZ.set(value);
            controlName = 'rotz';
        }
    }
    else if (address[3]==='rg1')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain1.set(args[0]);
            controlName = 'roomGain1';
        }
    }
    else if (address[3]==='omni')
    {
        if (address[4] ==='G0')
        {
            if (typeof(args[0]) == 'number')
            {
                source.omniGain.set(args[0]);
                controlName = 'omniGain';
            }
        }
    }
    else if (address[3]==='rg2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain2.set(args[0]);
            controlName = 'roomGain2';
        }
    }
    else if (address[3]==='rg3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain3.set(args[0]);
            controlName = 'roomGain3';
        }
    }
    else if (address[3]==='rg4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain4.set(args[0]);
            controlName = 'roomGain4';
        }
    }
    else if (address[3]==='rg5')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain5.set(args[0]);
            controlName = 'roomGain5';
        }
    }
    else if (address[3]==='rg6')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain6.set(args[0]);
            controlName = 'roomGain6';
        }
    }
    else if (address[3]==='rg7')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain7.set(args[0]);
            controlName = 'roomGain7';
        }
    }
    else if (address[3]==='rg8')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain8.set(args[0]);
        }
    }
    else if (address[3]==='rg9')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain9.set(args[0]);
            controlName = 'roomGain9';
        }
    }
    else if (address[3]==='rg10')
    {
        if (typeof(args[0]) == 'number')
        {
            source.roomGain10.set(args[0]);
            controlName = 'roomGain10';
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
        var room = Rooms[i]['container'];
    }

    return;

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
            room.listenerPosition.set(value);    }
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
        Sources[i].sourceName.setAttribute("readonly", true);

        Sources[i].gain = Sources[i].SourceContainer.addFloatParameter("Gain", "Gain", 0, -144.5, 24);
        Sources[i].gain.setAttribute("readonly", true);

        Sources[i].mute = Sources[i].SourceContainer.addBoolParameter("Mute", "Mute", 0);
        Sources[i].mute.setAttribute("readonly", true);

        Sources[i].solo = Sources[i].SourceContainer.addBoolParameter("Solo", "Solo", 0);
        Sources[i].solo.setAttribute("readonly", true);

        Sources[i].lfe1 = Sources[i].SourceContainer.addFloatParameter("LFE 1", "LFE level", -144.5, -144.5, 24);
        Sources[i].lfe1.setAttribute("readonly", true);

        Sources[i].lfe2 = Sources[i].SourceContainer.addFloatParameter("LFE 2", "LFE level", -144.5, -144.5, 24);
        Sources[i].lfe2.setAttribute("readonly", true);

        Sources[i].lfe3 = Sources[i].SourceContainer.addFloatParameter("LFE 3", "LFE level", -144.5, -144.5, 24);
        Sources[i].lfe3.setAttribute("readonly", true);

        Sources[i].lfe4 = Sources[i].SourceContainer.addFloatParameter("LFE 4", "LFE level", -144.5, -144.5, 24);
        Sources[i].lfe4.setAttribute("readonly", true);

        Sources[i].positionAED = Sources[i].SourceContainer.addPoint3DParameter("Position AED", "PositionAED", [0.0, 0.0, 2.0]);
        Sources[i].positionAED.setAttribute("readonly", true);

        Sources[i].reverbSourceContainer = Sources[i].SourceContainer.addContainer("Reverb");
        Sources[i].reverbEnable = Sources[i].reverbSourceContainer.addBoolParameter("Reverb Enable", "Reverb Enable", 1);
        Sources[i].reverbEnable.setAttribute("readonly", true);

        Sources[i].earlyEnable = Sources[i].reverbSourceContainer.addBoolParameter("Early Enable", "Early Enable", 1);
        Sources[i].earlyEnable.setAttribute("readonly", true);

        Sources[i].clusterEnable = Sources[i].reverbSourceContainer.addBoolParameter("Cluster Enable", "Cluster Enable", 1);
        Sources[i].clusterEnable.setAttribute("readonly", true);

        Sources[i].tailEnable = Sources[i].reverbSourceContainer.addBoolParameter("Tail Enable", "Tail Enable", 1);
        Sources[i].tailEnable.setAttribute("readonly", true);

        Sources[i].perceptualFactorSourceContainer = Sources[i].SourceContainer.addContainer("Perceptual Factors");
        Sources[i].presence = Sources[i].perceptualFactorSourceContainer.addIntParameter("Presence", "Source Presence", 80, 0, 120);
        Sources[i].presence.setAttribute("readonly", true);

        Sources[i].roomPresence = Sources[i].perceptualFactorSourceContainer.addIntParameter("Room presence", "Room Presence", 48, 0, 120);
        Sources[i].roomPresence.setAttribute("readonly", true);

        Sources[i].runningReverberance = Sources[i].perceptualFactorSourceContainer.addIntParameter("Running Reverberance", "Running Reverberance", 34, 0, 50);
        Sources[i].runningReverberance.setAttribute("readonly", true);

        Sources[i].envelopment = Sources[i].perceptualFactorSourceContainer.addIntParameter("Envelopment", "Envelopment", 25, 0, 50);
        Sources[i].envelopment.setAttribute("readonly", true);

        Sources[i].warmth = Sources[i].perceptualFactorSourceContainer.addIntParameter("Warmth", "Warmth", 30, 0, 60);
        Sources[i].warmth.setAttribute("readonly", true);

        Sources[i].brilliance = Sources[i].perceptualFactorSourceContainer.addIntParameter("Brilliance", "Brilliance", 30, 0, 60);
        Sources[i].brilliance.setAttribute("readonly", true);

        Sources[i].yaw = Sources[i].SourceContainer.addFloatParameter("Yaw", "Yaw", -180, 0, 180);
        Sources[i].yaw.setAttribute("readonly", true);

        Sources[i].pitch = Sources[i].SourceContainer.addFloatParameter("Pitch", "Pitch", -90, 0, 90);
        Sources[i].pitch.setAttribute("readonly", true);

        Sources[i].aperture = Sources[i].SourceContainer.addFloatParameter("Aperture", "Aperture", 10, 0, 180);
        Sources[i].aperture.setAttribute("readonly", true);

        Sources[i].barycentricSourceContainer = Sources[i].SourceContainer.addContainer("Barycentric");
        Sources[i].scale = Sources[i].barycentricSourceContainer.addFloatParameter("Scale", "Scale", 1.0, 0.01, 100.0);
        Sources[i].scale.setAttribute("readonly", true);
        Sources[i].scale.set(1.0);

        Sources[i].rotationXYZ = Sources[i].barycentricSourceContainer.addPoint3DParameter("Rotation XYZ", "Rotation XYZ", [0.0, 0.0, 0.0]);
        Sources[i].rotationXYZ.setAttribute("readonly", true);

        Sources[i].spreadingSourceContainer = Sources[i].SourceContainer.addContainer("Spreading");
        Sources[i].spread = Sources[i].spreadingSourceContainer.addFloatParameter("Spread", "Spread", 0, 0, 100);
        Sources[i].spread.setAttribute("readonly", true);

        Sources[i].knn = Sources[i].spreadingSourceContainer.addIntParameter("Knn", "Knn", 0, 0, 100);
        Sources[i].knn.setAttribute("readonly", true);

        Sources[i].earlyWidth = Sources[i].reverbSourceContainer.addFloatParameter("Early Width", "Early Width", 10, 0, 100);
        Sources[i].earlyWidth.setAttribute("readonly", true);

        Sources[i].panRev = Sources[i].reverbSourceContainer.addFloatParameter("PanRev", "Pan Rev", 0, 0, 100);
        Sources[i].panRev.setAttribute("readonly", true);

        Sources[i].optionsSourceContainer = Sources[i].SourceContainer.addContainer("Options");
        Sources[i].doppler = Sources[i].optionsSourceContainer.addBoolParameter("Doppler", "Doppler", 0);
        Sources[i].doppler.setAttribute("readonly", true);

        Sources[i].airAbsorption = Sources[i].optionsSourceContainer.addBoolParameter("Air Absorption", "Air Absorption", 1);
        Sources[i].airAbsorption.setAttribute("readonly", true);

        Sources[i].xyCoordinatesMode = Sources[i].optionsSourceContainer.addBoolParameter("XY Coordinates Mode", "Coordinates Mode", 0);
        Sources[i].xyCoordinatesMode.setAttribute("readonly", true);

        Sources[i].zCoordinatesMode = Sources[i].optionsSourceContainer.addBoolParameter("Z Coordinates Mode", "Coordinates Mode", 0);
        Sources[i].zCoordinatesMode.setAttribute("readonly", true);

        Sources[i].dropLog = Sources[i].optionsSourceContainer.addBoolParameter("Drop Log", "Drop Log", 0);
        Sources[i].dropLog.setAttribute("readonly", true);

        Sources[i].dropFactor = Sources[i].optionsSourceContainer.addFloatParameter("Drop Factor", "Drop Factor", 6.0, -10.0, 30.0);
        Sources[i].dropFactor.setAttribute("readonly", true);

        Sources[i].radius = Sources[i].optionsSourceContainer.addFloatParameter("Radius", "Radius", 1.0, 0.001, 100.0);
        Sources[i].radius.setAttribute("readonly", true);

        Sources[i].OmniSourceContainer = Sources[i].SourceContainer.addContainer("Omni");
        Sources[i].omniGain = Sources[i].OmniSourceContainer.addFloatParameter("Omni Gain", "Omni Gain", 0, -144.5, 24);
        Sources[i].omniGain.setAttribute("readonly", true);

        Sources[i].roomGainsSourceContainer = Sources[i].SourceContainer.addContainer("Room Gains");
        Sources[i].roomGain1 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 1", "Room Gain 1", 0, -144.5, 24);
        Sources[i].roomGain1.setAttribute("readonly", true);

        Sources[i].roomGain2 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 2", "Room Gain 2", 0, -144.5, 24);
        Sources[i].roomGain2.setAttribute("readonly", true);

        Sources[i].roomGain3 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 3", "Room Gain 3", 0, -144.5, 24);
        Sources[i].roomGain3.setAttribute("readonly", true);

        Sources[i].roomGain4 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 4", "Room Gain 4", 0, -144.5, 24);
        Sources[i].roomGain4.setAttribute("readonly", true);

        Sources[i].roomGain5 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 5", "Room Gain 5", 0, -144.5, 24);
        Sources[i].roomGain5.setAttribute("readonly", true);

        Sources[i].roomGain6 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 6", "Room Gain 6", 0, -144.5, 24);
        Sources[i].roomGain6.setAttribute("readonly", true);

        Sources[i].roomGain7 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 7", "Room Gain 7", 0, -144.5, 24);
        Sources[i].roomGain7.setAttribute("readonly", true);

        Sources[i].roomGain8 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 8", "Room Gain 8", 0, -144.5, 24);
        Sources[i].roomGain8.setAttribute("readonly", true);

        Sources[i].roomGain9 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 9", "Room Gain 9", 0, -144.5, 24);
        Sources[i].roomGain9.setAttribute("readonly", true);

        Sources[i].roomGain10 = Sources[i].roomGainsSourceContainer.addFloatParameter("Room Gain 10", "Room Gain 10", 0, -144.5, 24);
        Sources[i].roomGain10.setAttribute("readonly", true);

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

        Rooms[i].RoomContainer = RoomsContainer.addContainer("Room " + i);

        Rooms[i].roomName = Rooms[i].RoomContainer.addStringParameter("Room Name", "Room name", "Room name");
        Rooms[i].roomName.setAttribute("readonly", true);

        Rooms[i].gainRoom = Rooms[i].RoomContainer.addFloatParameter("Gain Room", "Matrix input level", 0, -144.5, 24);
        Rooms[i].gainRoom.setAttribute("readonly", true);

        Rooms[i].muteRoom = Rooms[i].RoomContainer.addBoolParameter("Mute Room", "Mute", 0);
        Rooms[i].muteRoom.setAttribute("readonly", true);

        Rooms[i].listenerPosition = Rooms[i].RoomContainer.addPoint3DParameter("Listener Position", "Listener Position", [0.0, 0.0, 0.0]);
        Rooms[i].listenerPosition.setAttribute("readonly", true);

        Rooms[i].listenerOrientation = Rooms[i].RoomContainer.addPoint3DParameter("Listener Orientation", "Listener Orientation", [0.0, 0.0, 0.0]);
        Rooms[i].listenerOrientation.setAttribute("readonly", true);

        Rooms[i].roomReverbContainer = Rooms[i].RoomContainer.addContainer("Reverb");
        Rooms[i].reverbDensity = Rooms[i].roomReverbContainer.addBoolParameter("Reverb Density", "Reverb Density", 1);
        Rooms[i].reverbDensity.setAttribute("readonly", true);

        Rooms[i].reverbEnableRoom = Rooms[i].roomReverbContainer.addBoolParameter("Reverb Enable Room", "Reverb Enable", 1);
        Rooms[i].reverbEnableRoom.setAttribute("readonly", true);

        Rooms[i].roomSize = Rooms[i].roomReverbContainer.addFloatParameter("Room Size", "Room Size", 2500, 10, 15000);
        Rooms[i].roomSize.setAttribute("readonly", true);

        Rooms[i].reverbStart = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Start", "Reverb Start", 80.0, 8.0, 500.0);
        Rooms[i].reverbStart.setAttribute("readonly", true);

        Rooms[i].reverbGain = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Gain", "Reverb Gain", 0, -24.0, 24.0);
        Rooms[i].reverbGain.setAttribute("readonly", true);

        Rooms[i].reverbFactor = Rooms[i].roomReverbContainer.addFloatParameter("Reverb Factor", "Reverb Factor", 1.0, 0.10, 2.0);
        Rooms[i].reverbFactor.setAttribute("readonly", true);

        Rooms[i].perceptualFactorRoomContainer = Rooms[i].roomReverbContainer.addContainer("Perceptual Factors");
        Rooms[i].reverberance = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Reverberance", "Reverberance", 65.0, 5.0, 100.0);
        Rooms[i].reverberance.setAttribute("readonly", true);

        Rooms[i].heaviness = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Heaviness", "Heaviness", 25.0, 5.0, 50.0);
        Rooms[i].heaviness.setAttribute("readonly", true);

        Rooms[i].liveness = Rooms[i].perceptualFactorRoomContainer.addFloatParameter("Liveness", "Liveness", 35.0, 5.0, 50.0);
        Rooms[i].liveness.setAttribute("readonly", true);

        Rooms[i].roomResponseRoomContainer = Rooms[i].roomReverbContainer.addContainer("Room Response");
        Rooms[i].earlyMin = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Min", "Early Min", 24.2, 1.0, 120.0);
        Rooms[i].earlyMin.setAttribute("readonly", true);

        Rooms[i].earlyMax = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Max", "Early Max", 40.0, 1.0, 120.0);
        Rooms[i].earlyMax.setAttribute("readonly", true);

        Rooms[i].earlyDist = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Dist", "Early Dist", 0.5, 0.1, 0.9);
        Rooms[i].earlyDist.setAttribute("readonly", true);

        Rooms[i].earlyShape = Rooms[i].roomResponseRoomContainer.addFloatParameter("Early Shape", "Early Shape", 0.5, 0.1, 0.9);
        Rooms[i].earlyShape.setAttribute("readonly", true);

        Rooms[i].clusterMin = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Min", "Cluster Min", 36.0, 1.0, 300.0);
        Rooms[i].clusterMin.setAttribute("readonly", true);

        Rooms[i].clusterMax = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Max", "Cluster Max", 90.0, 1.0, 300.0);
        Rooms[i].clusterMax.setAttribute("readonly", true);

        Rooms[i].clusterDist = Rooms[i].roomResponseRoomContainer.addFloatParameter("Cluster Dist", "Cluster Dist", 0.5, 0.1, 0.9);
        Rooms[i].clusterDist.setAttribute("readonly", true);

        Rooms[i].reverbOptionsRoomContainer = Rooms[i].roomReverbContainer.addContainer("Options");
        Rooms[i].reverbInfinite = Rooms[i].reverbOptionsRoomContainer.addBoolParameter("Reverb Infinite", "Reverb Infinite", 0);
        Rooms[i].reverbInfinite.setAttribute("readonly", true);

        Rooms[i].airEnable = Rooms[i].reverbOptionsRoomContainer.addBoolParameter("Air Enable", "Air Enable", 1);
        Rooms[i].airEnable.setAttribute("readonly", true);

        Rooms[i].airFreq = Rooms[i].reverbOptionsRoomContainer.addFloatParameter("Air Freq", "Air absorption Frequency", 10000, 20, 20000);
        Rooms[i].airFreq.setAttribute("readonly", true);

        Rooms[i].modalDensity = Rooms[i].reverbOptionsRoomContainer.addFloatParameter("Modal Density", "Modal Density", 1.0, 0.2, 2.0);
        Rooms[i].modalDensity.setAttribute("readonly", true);

        Rooms[i].reverbCrossoverRoomContainer = Rooms[i].roomReverbContainer.addContainer("Crossover");
        Rooms[i].frequencyLow = Rooms[i].reverbCrossoverRoomContainer.addFloatParameter("Frequency Low", "Frequency Low", 177.0, 20.0, 20000.0);
        Rooms[i].frequencyLow.setAttribute("readonly", true);

        Rooms[i].frequencyHigh = Rooms[i].reverbCrossoverRoomContainer.addFloatParameter("Frequency High", "Frequency High", 5657.0, 20.0, 20000.0);
        Rooms[i].frequencyHigh.setAttribute("readonly", true);

        Rooms[i].roomReverbContainer.setCollapsed(true);
        Rooms[i].perceptualFactorRoomContainer.setCollapsed(true);
        Rooms[i].roomResponseRoomContainer.setCollapsed(true);
        Rooms[i].reverbOptionsRoomContainer.setCollapsed(true);
        Rooms[i].reverbCrossoverRoomContainer.setCollapsed(true);
        Rooms[i].RoomContainer.setCollapsed(true);
    }
    local.scripts.setCollapsed(true);
}

/**
 * Add a on/off button controllable on the remote number remoteIndex.
 * @param {int} remoteIndex: remote Number
 * @param {int} index: index of the button for the remote
 */
function addButtonControllable(remoteIndex, index)
{
    Remote[remoteIndex].onOff[index - 1] = {'values': []};
    Remote[remoteIndex].onOff[index - 1]['container'] = Remote[remoteIndex].RemoteContainer.addContainer("OnOff" + index);
    Remote[remoteIndex].onOff[index - 1]['parameterControlled'] = Remote[remoteIndex].onOff[index - 1]['container'].addEnumParameter("Parameter", "parameter", "Mute", "mute", "Solo", "solo", "Reverb on", "reverbEnable", "Early On", "earlyEnable", "Cluster On", "clusterEnable", "Doppler", "doppler", "Air Absorption", "airAbsorption", "XY Coordinates mode", "xyCoordinatesMode", "Z Coordinates mode", "zCoordinatesMode", "Drop log", "dropLog");
    var valContainer = Remote[remoteIndex].onOff[index - 1]['container'].addContainer("Values");
    for (var i = 1; i < Remote[remoteIndex].controlsNumber.get() + 1; i++)
    {
        Remote[remoteIndex].onOff[index-1]['values'].push({"value": valContainer.addBoolParameter("Value" + i, "Value" + i, false),
            "target": Remote[remoteIndex].onOff[index - 1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
    }

}

/**
 * Add a float controllable on the remote number remoteIndex.
 * @param {int} remoteIndex: remote Number
 * @param {int} index: index of the float for the remote
 */
function addFloatControllable(remoteIndex, index)
{
    Remote[remoteIndex].float[index - 1] = {'values': []};
    Remote[remoteIndex].float[index - 1]['container'] = Remote[remoteIndex].RemoteContainer.addContainer("Float" + index);
    Remote[remoteIndex].float[index - 1]['parameterControlled'] = Remote[remoteIndex].float[index - 1]['container'].addEnumParameter("Parameter controlled", "parameterControlled", "Azimuth", "azimuth", "Elevation", "elevation", "Distance", "distance", "Position X", "positionX", "Position Y", "positionY", "Position Z", "positionZ", "Gain", "gain", "Lfe", "lfe", "Lfe2", "lfe2", "Lfe3", "lfe3", "Lfe4", "lfe4", "Presence", "presence", "Room presence", "roomPresence", "Running Reverberance", "runningReverberance", "Envelopment", "envelopment", "Brilliance", "brilliance", "Warmth", "warmth", "Yaw", "yaw", "Pitch", "pitch", "Aperture", "aperture", "Scale", "scale", "Spread", "spread", "Knn", "knn", "Early width", "earlyWidth", "Pan Rev", "panRev", "Drop factor", "dropFactor", "Rotation X", "rotX", "Rotation Y", "rotY", "Rotation Z", "rotZ", "Omni Gain", "omniGain", "RoomGain 1", "roomGain1", "RoomGain 2", "roomGain2", "RoomGain 3", "roomGain3", "RoomGain 4", "roomGain4", "RoomGain 5", "roomGain5", "RoomGain 6", "roomGain6", "RoomGain 7", "roomGain7", "RoomGain 8", "roomGain8", "RoomGain 9", "roomGain9", "RoomGain 10", "roomGain10");
    var valContainer = Remote[remoteIndex].float[index - 1]['container'].addContainer("Values");
    for (var i = 1; i < Remote[remoteIndex].controlsNumber.get() + 1; i++)
    {
        Remote[remoteIndex].float[index-1]['values'].push({"value": valContainer.addFloatParameter("Value" + i, "Value" + i, 0.0, 0.0, 1.0),
            "target": Remote[remoteIndex].float[index - 1]['container'].addTargetParameter("Target" + i, "Target for control number " + i)});
    }
}

/**
 * Add a remote.
 * @param {int} index: remote index
 */
function addRemote(index)
{   var i = index - 1;
    // TODO: check if reload is ok if numberOfControls and numberOfButtonControllable and Float are not similar to saved one
    Remote.push({"index": 0, 'numberOfControls': 4, "numberOfButtonControllable":0, "numberOfFloatControllable":2});//, "container": RemoteContainer, 'controlsNumber': 8, 'onOffNumber': 8, 'floatNumber':8});
    Remote[i].RemoteContainer = RemotesContainer.addContainer("Remote" + index);
    Remote[i].indexNumber = Remote[i].RemoteContainer.addIntParameter("Index", "index", 0, 0, 64);
    Remote[i].controlsNumber = Remote[i].RemoteContainer.addIntParameter("Controls number", "controls number", 1 ,1, 50);
    Remote[i].onOffNumber = Remote[i].RemoteContainer.addIntParameter("On Off Number", "on off number", 0, 0, 50);
    Remote[i].onOff = [];

    // addButtonControllable(i, 1);
    Remote[i].floatNumber = Remote[i].RemoteContainer.addIntParameter("Float Number", "float number", 8, 0, 50);
    Remote[i].float = [];
    addFloatControllable(i, 1);
    addFloatControllable(i, 2);
    addFloatControllable(i, 3);
    addFloatControllable(i, 4);
    addFloatControllable(i, 5);
    addFloatControllable(i, 6);
    addFloatControllable(i, 7);
    addFloatControllable(i, 8);
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

    var numberOfRemotes = RemotesContainer.addIntParameter("number of  remotes", "number of remotes", 1, 0, 64);
    var masterIndex = RemotesContainer.addIntParameter("Master index", "master index", 0, 0, 128);
    for (var i = 1; i < numberOfRemotes.get() + 1; i++)
    {
        addRemote(i);
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
    for (var k = 0; k < Remote.length; k++) {
        if (Math.floor(sourceIndex / Remote[k].controlsNumber.get()) == Remote[k].indexNumber.get()) {
            // script.log("updateRemote index: " + sourceIndex);
            for (var j = 0; j < Remote[k].onOffNumber.get(); j++) {
                if (Remote[k].onOff[j].parameterControlled.get() === controlName)
                {
                    var target = Remote[k].onOff[j]['values'][sourceIndex % Remote[k].controlsNumber.get()]['target'].getTarget();
                    if (target) {
                        target.set(args[0] * 127);
                    }
                    Remote[k].onOff[j]['values'][sourceIndex % Remote[k].controlsNumber.get()]['value'].set(args[0]);
                }
            }
            for (var j = 0; j < Remote[k].floatNumber.get(); j++) {
                // script.log(Remote[k].float[j]['parameterControlled'].get());
                if (Remote[k].float[j].parameterControlled.get() === controlName | ((Remote[k].float[j].parameterControlled.get() === 'azimuth' | Remote[k].float[j].parameterControlled.get() === 'elevation' | Remote[k].float[j].parameterControlled.get() === 'distance') && controlName === 'position') | ((Remote[k].float[j].parameterControlled.get() === 'positionX' | Remote[k].float[j].parameterControlled.get() === 'positionY' | Remote[k].float[j].parameterControlled.get() === 'positionZ') && controlName === 'position') | ((controlName === 'azimuth' | controlName ===  'elevation' | controlName === 'distance')  && (Remote[k].float[j].parameterControlled.get() === 'positionX' | Remote[k].float[j].parameterControlled.get() === 'positionY' | Remote[k].float[j].parameterControlled.get() === 'positionZ')) | ((controlName === 'positionX' | controlName === 'positionY' | controlName === 'positionZ')  && (Remote[k].float[j].parameterControlled.get() === 'azimuth' | Remote[k].float[j].parameterControlled.get() === 'elevation' | Remote[k].float[j].parameterControlled.get() === 'distance'))) {
                    var arg = args[0];
                    if (Remote[k].float[j].parameterControlled.get() === "positionX") {
                        // script.log("position AED; "+ Sources[sourceIndex - 1].positionAED.get()[0] +Sources[sourceIndex - 1].positionAED.get()[1] +Sources[sourceIndex - 1].positionAED.get()[2]  + "position XYZ: " + PolarToCartesian(Sources[sourceIndex - 1].positionAED.get())[0]+ PolarToCartesian(Sources[sourceIndex - 1].positionAED.get())[1]+ PolarToCartesian(Sources[sourceIndex - 1].positionAED.get()[2]));
                        arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[0];
                    } else if (Remote[k].float[j].parameterControlled.get() === "positionY") {
                        arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[1];
                    } else if (Remote[k].float[j].parameterControlled.get() === "positionZ") {
                        arg = PolarToCartesian(Sources[sourceIndex].positionAED.get())[2];
                    } else if (Remote[k].float[j].parameterControlled.get() === "elevation") {
                        arg = Sources[sourceIndex].positionAED.get()[1];
                    } else if (Remote[k].float[j].parameterControlled.get() === "distance") {
                        arg = Sources[sourceIndex].positionAED.get()[2];
                    }

                    var val = (arg - RangeForParameter[Remote[k].float[j].parameterControlled.get()][0]) / (RangeForParameter[Remote[k].float[j].parameterControlled.get()][1] - RangeForParameter[Remote[k].float[j].parameterControlled.get()][0]);
                    if (Remote[k].float[j]['values'][sourceIndex % Remote[k].controlsNumber.get()]["target"])
                    {
                        var target = Remote[k].float[j]['values'][sourceIndex % Remote[k].controlsNumber.get()]['target'].getTarget();
                        if (target) {
                            target.set(val * 127);
                        }
                        Remote[k].float[j]['values'][sourceIndex % Remote[k].controlsNumber.get()]['value'].set(val);
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
    script.log("CartesianToPolar, value: X=" + value[0], ", Y=" + value[1]);
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

    script.log("CartesianToPolar, value: A:" + positionAED[0], ", D=" + positionAED[2]);

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
