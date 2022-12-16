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
        return Sources[index]['container'].getChild('gain');
    },
    'lfe': function(index)
    {
        return Sources[index]['container'].getChild('lfe');
    },
    'lfe2': function(index)
    {
        return Sources[index]['container'].getChild('lfe2');
    },
    'lfe3': function(index)
    {
        return Sources[index]['container'].getChild('lfe3');
    },
    'lfe4': function(index)
    {
        return Sources[index]['container'].getChild('lfe4');
    },
    'solo': function(index)
    {
        return Sources[index]['container'].getChild('solo');
    },
    'mute': function(index)
    {
        return Sources[index]['container'].getChild('mute');
    },
    'azimuth': function(index)
    {
        return Sources[index]['container'].getChild('positionAED');
    },
    'elevation': function(index)
    {
        return Sources[index]['container'].getChild('positionAED');
    },
    'distance': function(index)
    {
        return Sources[index]['container'].getChild('positionAED');
    },
    'positionX': function(index)
    {
        return Sources[index]['container'].getChild('positionXYZ');
    },
    'positionY': function(index)
    {
        return Sources[index]['container'].getChild('positionXYZ');
    },
    'positionZ': function(index)
    {
        return Sources[index]['container'].getChild('positionXYZ');
    },
    'reverbEnable': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('reverbEnable');
    },
    'earlyEnable': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('earlyEnable');
    },
    'clusterEnable': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('clusterEnable');
    },
    'tailEnable': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('tailEnable');
    },
    'presence': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('presence');
    },
    'roomPresence': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('roomPresence');
    },
    'ruuningReverberance': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('ruuningReverberance');
    },
    'envelopment': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('envelopment');
    },
    'brilliance': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('brilliance');
    },
    'warmth': function(index)
    {
        return Sources[index]['container'].getChild("perceptualFactors").getChild('warmth');
    },
    'yaw': function(index)
    {
        return Sources[index]['container'].getChild('yaw');
    },
    'pitch': function(index)
    {
        return Sources[index]['container'].getChild('pitch');
    },
    'aperture': function(index)
    {
        return Sources[index]['container'].getChild('aperture');
    },
    'scale': function(index)
    {
        return Sources[index]['container'].getChild("barycentric").getChild('scale');
    },
    'spread': function(index)
    {
        return Sources[index]['container'].getChild("spreading").getChild('spread');
    },
    'knn': function(index)
    {
        return Sources[index]['container'].getChild("spreading").getChild('knn');
    },
    'earlyWidth': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('earlyWidth');
    },
    'panRev': function(index)
    {
        return Sources[index]['container'].getChild("reverb").getChild('panRev');
    },
    'doppler': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('doppler');
    },
    'radius': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('radius');
    },
    'airAbsorption': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('airAbsorption');
    },
    'xyCoordinatesMode': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('xyCoordinatesMode');
    },
    'zCoordinatesMode': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('zCoordinatesMode');
    },
    'dropLog': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('dropLog');
    },
    'dropFactor': function(index)
    {
        return Sources[index]['container'].getChild("options").getChild('dropFactor');
    },
    'rotx': function(index)
    {
        return Sources[index]['container'].getChild("barycentric").getChild('rotationXYZ');
    },
    'roty': function(index)
    {
        return Sources[index]['container'].getChild("barycentric").getChild('rotationXYZ');
    },
    'rotz': function(index)
    {
        return Sources[index]['container'].getChild("barycentric").getChild('rotationXYZ');
    },
    'roomGain1': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain1');
    },
    'roomGain2': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain2');
    },
    'roomGain3': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain3');
    },
    'roomGain4': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain4');
    },
    'roomGain5': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain5');
    },
    'roomGain6': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain6');
    },
    'roomGain7': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain7');
    },
    'roomGain8': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain8');
    },
    'roomGain9': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain9');
    },
    'roomGain10': function(index)
    {
        return Sources[index]['container'].getChild("roomGains").getChild('roomGain10');
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
    'roomPresence': [0.0, 50.0],
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
    'positionXYZ': function (index, value) {
            local.send("/source/" + index + "/aed", CartesianToPolar(value.get()));
    },
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
var reverbSourceContainer = null;
var perceptualFactorSourceContainer = null;
var spreadingSourceContainer = null;
var optionsSourceContainer = null;
var barycentricSourceContainer = null; // number of rooms in Spat Revolution. Should be set automatically, but function not working in Spat Revolution now.
var Rooms = []; // array of all rooms parameters
var Remote = [];
var roomReverbContainer = null;
var perceptualFactorRoomContainer = null;
var roomResponseRoomContainer = null;
var reverbOptionsRoomContainer = null;
var reverbCrossoverRoomContainer = null;
var stopSendingOSC = false;
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

    for (var remoteIndex = 0; remoteIndex <= Remote.length; remoteIndex ++)
    {
        for (var j = 1; j < Remote[remoteIndex - 1]['onOffNumber'] + 1; j++)
        {
            var onOffCont = Remote[remoteIndex - 1]['container'].getChild("OnOff" + j);
            for (var l = 1; l < Remote[remoteIndex - 1]["controlsNumber"] + 1; l++)
            {
                var target = onOffCont.getChild("Target" + l).getTarget();
                if (target && target.get()*127 != onOffCont.getChild("Values").getChild("Value" + l).get())
                {
                    onOffCont.getChild("Values").getChild("Value" + l).set(target.get()/127);
                }
            }
        }
        //float
        for (var j = 1; j < Remote[remoteIndex - 1]['floatNumber'] + 1; j++)
        {
            var floatCont = Remote[remoteIndex - 1]['container'].getChild("float" + j);
            for (var l = 1; l < Remote[remoteIndex - 1]["controlsNumber"] + 1; l++)
            {
                var target = floatCont.getChild("Target" + l).getTarget();

                if (target && target.get() != parseInt(floatCont.getChild("Values").getChild("Value" + l).get()*127))
                {
                    floatCont.getChild("Values").getChild("Value" + l).set(target.get()/127);
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
            // Remote[i]['index'] = parseInt(value.get());
            Remote[i]['container'].getChild("Index").set(value.get());
        }
    }
    else if (name === 'distanceMax')
    {
        var val = value.get();
        RangeForParameter['positionX'] = [- val, val];
        RangeForParameter['positionY'] = [- val, val];
        RangeForParameter['positionZ'] = [- val, val];
        RangeForParameter['distance'] = [- val, val];
    }
    else if (name === 'index')
    {
        var remoteIndex = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
        Remote[remoteIndex - 1]['index'] = parseInt(value.get());

        // onOff
        for (var j = 1; j < Remote[remoteIndex - 1]['onOffNumber'] + 1; j++)
        {
            var onOffCont = Remote[remoteIndex - 1]['container'].getChild("OnOff" + j);
            for (var l = 1; l < Remote[remoteIndex - 1]["controlsNumber"] + 1; l++)
            {
                var val = ParameterFromString[onOffCont.getChild("parameter").get()](value.get()*Remote[remoteIndex - 1]['controlsNumber'] + l - 1).get();
                var target = onOffCont.getChild("Target" + l).getTarget();
                if (target)
                {
                    target.set(val*127);
                }
                onOffCont.getChild("Values").getChild("Value" + l).set(val);
            }
        }

        //float
        for (var j = 1; j < Remote[remoteIndex - 1]['floatNumber'] + 1; j++)
        {
            var floatCont = Remote[remoteIndex - 1]['container'].getChild("float" + j);
            for (var l = 1; l < Remote[remoteIndex - 1]["controlsNumber"] + 1; l++)
            {
                var val = ParameterFromString[floatCont.getChild("parameter").get()](value.get()*Remote[remoteIndex - 1]['controlsNumber'] + l - 1).get();
                if (floatCont.getChild("parameter").get() === "azimuth")
                {
                    val = val[0];
                }
                else if (floatCont.getChild("parameter").get() === "elevation")
                {
                    val = val[1];
                }
                else if (floatCont.getChild("parameter").get() === 'distance')
                {
                    val = val[2];
                }

                var target = floatCont.getChild("Target" + l).getTarget();
                if (target)
                {
                    target.set((val - RangeForParameter[floatCont.getChild("parameter").get()][0]) / (RangeForParameter[floatCont.getChild("parameter").get()][1] - RangeForParameter[floatCont.getChild("parameter").get()][0]) * 127);
                }
                floatCont.getChild("Values").getChild("Value" + l).set((val - RangeForParameter[floatCont.getChild("parameter").get()][0]) / (RangeForParameter[floatCont.getChild("parameter").get()][1] - RangeForParameter[floatCont.getChild("parameter").get()][0]));
            }
        }

    }
    else if (name === 'parameter')
    {
        var remoteIndex = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length));
        Remote[remoteIndex - 1]['parameter'] = value.get();
        var cont = value.getParent();
        for (var l = 1; l < Remote[remoteIndex - 1]["controlsNumber"] + 1; l++)
        {
            var ind = Remote[remoteIndex-  1]["index"] * Remote[remoteIndex - 1]['controlsNumber'] + l - 1;
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
            var target = cont.getChild("Target" + l).getTarget();
            val = (val - RangeForParameter[value.get()][0]) / (RangeForParameter[value.get()][1] - RangeForParameter[value.get()][0]);
            if (target)
            {
                target.set(val * 127);
            }
            cont.getChild("Values").getChild("value" + l).set(val);
        }

    }
    else if (name === 'controlsNumber')
    {
        var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
        if (value.get() > Remote[index - 1]['controlsNumber'])
        {
            while (Remote[index -1]['controlsNumber'] < value.get())
            {
                // onOff
                for (var j = 1; j < Remote[index - 1]['onOffNumber'] + 1; j++)
                {
                    var onOffCont = Remote[index - 1]['container'].getChild("OnOff" + j);
                    onOffCont.addTargetParameter("Target" + parseInt(Remote[index-1]['controlsNumber']+1), "Target" + parseInt(Remote[index-1]['controlsNumber']+1));
                    onOffCont.getChild("Values").addBoolParameter("Value" + parseInt(Remote[index-1]['controlsNumber'] + 1), "Value" + parseInt(Remote[index-1]['controlsNumber'] + 1), false);
                }
                // float
                for (var j = 1; j < Remote[index - 1]['floatNumber'] + 1; j++)
                {
                    var floatCont = Remote[index - 1]['container'].getChild("Float" + j);
                    floatCont.addTargetParameter("Target" + parseInt(Remote[index-1]['controlsNumber']+1), "Target" + parseInt(Remote[index-1]['controlsNumber']+1));
                    floatCont.getChild("Values").addFloatParameter("Value" + parseInt(Remote[index-1]['controlsNumber'] + 1), "Value" + parseInt(Remote[index-1]['controlsNumber'] + 1), 0.0, 0.0, 1.0);
                }
                Remote[index-1]['controlsNumber'] +=1;
            }

        }
        else if (value.get() < Remote[index - 1]['controlsNumber'])
        {
            // onOff
            while (Remote[index -1]['controlsNumber'] > value.get())
            {
                //onOff
                for (var j = 1; j < Remote[index - 1]['onOffNumber'] + 1; j++)
                {
                    var onOffCont = Remote[index - 1]['container'].getChild("OnOff" + j);
                    onOffCont.removeParameter("Target"+parseInt(Remote[index-1]['controlsNumber']));
                    onOffCont.getChild("Values").removeParameter("Value" + parseInt(Remote[index-1]['controlsNumber']));
                }
                //float
                for (var j = 1; j < Remote[index - 1]['floatNumber'] + 1; j++)
                {
                    var floatCont = Remote[index - 1]['container'].getChild("Float" + j);
                    floatCont.removeParameter("Target"+parseInt(Remote[index-1]['controlsNumber']));
                    floatCont.getChild("Values").removeParameter("Value" + parseInt(Remote[index-1]['controlsNumber']));
                }
                Remote[index-1]['controlsNumber'] -=1;
            }
        }
        Remote[index - 1]['controlsNumber'] = parseInt(value.get());

    }
    else if (name === 'onOffNumber')
    {
        var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
        if (value.get() > Remote[index - 1]["onOffNumber"])
        {
            var onOff = value.getParent().addContainer("OnOff" + value.get());
            onOff.addEnumParameter("Parameter", "parameter", "Mute", "mute", "Solo", "solo", "Reverb on", "reverbEnable", "Early On", "earlyEnable", "Cluster On", "clusterEnable", "Doppler", "doppler", "Air Absorption", "airAbsorption", "XY Coordinates mode", "xyCoordinatesMode", "Z Coordinates mode", "zCoordinatesMode", "Drop log", "dropLog", );
            var valContainer = onOff.addContainer("Values");
            for (var i = 1; i < value.getParent().controlsNumber.get() + 1; i++)
            {
                valContainer.addBoolParameter("Value" + i, "Value" + i, false);
                onOff.addTargetParameter("Target" + i, "Target for control number " + i);
            }
        }
        else if (value.get() < Remote[index - 1]["onOffNumber"])
        {
            i = value.get() + 1;
            value.getParent().removeContainer("OnOff" + i);
        }
        Remote[index - 1]["onOffNumber"] = value.get();
    }
    else if (name === 'floatNumber')
    {
        var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
        if (value.get() > Remote[index - 1]["floatNumber"])
        {
            var float = value.getParent().addContainer("Float" + value.get());
            float.addEnumParameter("Parameter", "Parameter controlled", "Azimuth", "azimuth", "Elevation", "elevation", "Distance", "distance", "Position X", "positionX", "Position Y", "positionY", "Position Z", "positionZ", "Gain", "gain", "Lfe", "lfe", "Lfe2", "lfe2", "Lfe3", "lfe3", "Lfe4", "lfe4", "Presence", "presence", "Room presence", "roomPresence", "Running Reverberance", "runningReverberance", "Envelopment", "envelopment", "Brilliance", "brilliance", "Warmth", "warmth", "Yaw", "yaw", "Pitch", "pitch", "Aperture", "aperture", "Scale", "scale", "Spread", "spread", "Knn", "knn", "Early width", "earlyWidth", "Pan Rev", "panRev", "Drop factor", "dropFactor", "Rotation X", "rotX", "Rotation Y", "rotY", "Rotation Z", "rotZ", "RoomGain 1", "roomGain1", "RoomGain 2", "roomGain2", "RoomGain 3", "roomGain3", "RoomGain 4", "roomGain4", "RoomGain 5", "roomGain5", "RoomGain 6", "roomGain6", "RoomGain 7", "roomGain7", "RoomGain 8", "roomGain8", "RoomGain 9", "roomGain9", "RoomGain 10", "roomGain10");
            var valContainer = float.addContainer("Values");
            for (var i = 1; i < value.getParent().controlsNumber.get() + 1; i++)
            {
                valContainer.addFloatParameter("Value" + i, "Value for control number " + i, 0.0, 0.0, 1.0);
                float.addTargetParameter("Target" + i, "Target for control number " + i);
            }
        }
        else if (value.get() < Remote[index - 1]["floatNumber"])
        {
            i = value.get() + 1;
            value.getParent().removeContainer("Float" + i);
        }
        Remote[index - 1]["floatNumber"] = value.get();
    }

    else if (name.startsWith("value"))
        {
            var valueIndex = parseInt(value.name.substring(5, value.getParent().name.length));
            var index = valueIndex + value.getParent().getParent().getParent().getChild("Index").get() * value.getParent().getParent().getParent().getChild("controlsNumber").get();
            var param = ParameterFromString[value.getParent().getParent().getChild("parameter").get()](index - 1);
            var val = value.get() * (RangeForParameter[value.getParent().getParent().getChild("parameter").get()][1] - RangeForParameter[value.getParent().getParent().getChild("parameter").get()][0]) + RangeForParameter[value.getParent().getParent().getChild("parameter").get()][0];
            if (value.getParent().getParent().getChild("parameter").get() === "azimuth" | value.getParent().getParent().getChild("parameter").get() === "positionX" | value.getParent().getParent().getChild("parameter").get() === "rotx")
            {
                param.set(val, param.get()[1], param.get()[2]);
            }
            else if (value.getParent().getParent().getChild("parameter").get() === "elevation" | value.getParent().getParent().getChild("parameter").get() === "positionY" | value.getParent().getParent().getChild("parameter").get() === "roty")
            {
                param.set(param.get()[0], val, param.get()[2]);
            }
            else if (value.getParent().getParent().getChild("parameter").get() === "distance" | value.getParent().getParent().getChild("parameter").get() === "positionZ" | value.getParent().getParent().getChild("parameter").get() === "rotz")
            {
                param.set(param.get()[0], param.get()[1], val);
            }
            else
            {
                param.set(val);
            }

            stopSendingOSC = true;
            if (value.getParent().getParent().getChild("parameter").get() === "azimuth" | value.getParent().getParent().getChild("parameter").get() === "elevation" | value.getParent().getParent().getChild("parameter").get() === "distance")
            {

                param.getParent().getChild("positionXYZ").set(CartesianToPolar(param.get()));
            }
            else if (value.getParent().getParent().getChild("parameter").get() === "positionX" | value.getParent().getParent().getChild("parameter").get() === "positionY" | value.getParent().getParent().getChild("parameter").get() === "positionZ")
            {
                param.getParent().getChild("positionAED").set(PolarToCartesian(param.get()));
            }
            stopSendingOSC = false;
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
 * Called when an OSC message related to global is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscGlobalEvent(address, args)
{

}

/**
 * Called when an OSC message related to source is received
 * Parse received values
 * @param {string} address
 * @param {array} args
 */

function oscSourceEvent(address, args)
{
    var i = parseInt(address[2]) - 1;
    var controlName = 'None';

    if (i +1 > Sources.length)
    {
        return false;
    }
    else
    {
        var source = Sources[i]['container'];
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
            script.log("Update AED");
          Sources[i]['positionAED'] = args;
          Sources[i]['positionXYZ'] = PolarToCartesian(args);
          controlName = 'position';

          if(transformStereoToMono)
          {
              var index = 1;
              script.log("Index:" + i);
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
          stopSendingOSC = true;
          source.positionXYZ.set(Sources[i]['positionXYZ']);
          source.positionAED.set(Sources[i]['positionAED']);
          stopSendingOSC = false;

        }
    }
    else if (address[3]==='xyz')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
          Sources[i]['positionAED'] = CartesianToPolar(args);
          Sources[i]['positionXYZ'] = args;
          stopSendingOSC = true;
          controlName = 'position';
          source.positionXYZ.set(Sources[i]['positionXYZ']);
          source.positionAED.set(Sources[i]['positionAED']);

          stopSendingOSC = false;
        }
    }
    else if (address[3]==='reverb' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").reverbEnable.set(args[0]);
        controlName = 'reverbEnable';
      }
    }
    else if (address[3] === 'early')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyEnable.set(args[0]);
        controlName = 'earlyEnable';
      }
    }
    else if (address[3] === 'cluster')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").clusterEnable.set(args[0]);
        controlName = 'clusterEnable';
      }
    }
    else if (address[3] === 'tail')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").tailEnable.set(args[0]);
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
        source.getChild("Perceptual Factors").presence.set(args[0]);
          controlName = 'presence';
      }
    }
    else if (address[3]==='prer')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").roomPresence.set(args[0]);
          controlName = 'roomPresence';
      }
    }
    else if (address[3]==='revp')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").runningReverberance.set(args[0]);
          controlName = 'runningReverberance';
      }
    }
    else if (address[3]==='env')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").envelopment.set(args[0]);
          controlName = 'envelopment';
      }
    }
    else if (address[3]==='warmth')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").warmth.set(args[0]);
          controlName = 'warmth';
      }
    }
    else if (address[3]==='bril')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").brilliance.set(args[0]);
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
        source.getChild("Barycentric").scale.set(args[0]);
        controlName = 'scale';
      }
    }
    else if (address[3]==='spread')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").spread.set(args[0]);
        controlName = 'spread';
      }
    }
    else if (address[3]==='nneig')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").knn.set(args[0]);
        controlName = 'knn';
      }
    }
    else if (address[3]==='early' && address[4]==='width')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyWidth.set(args[0]);
        controlName = 'earlyWidth';
      }
    }
    else if (address[3]==='prevf')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").panRev.set(args[0]);
        controlName = 'panRev';
      }
    }
    else if (address[3]==='doppler' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").doppler.set(args[0]);
        controlName = 'options';
      }
    }
    else if (address[3]==='radius')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").radius.set(args[0]);
        controlName = 'radius';
      }
    }
    else if (address[3]==='air' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").airAbsorption.set(args[0]);
        controlName = 'airAbsorption';
      }
    }
    else if (address[3]==='cm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").xyCoordinatesMode.set(args[0]);
        controlName = 'xyCoordinatesMode';
      }
    }
    else if (address[3]==='zcm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").zCoordinatesMode.set(args[0]);
        controlName = 'zCoordinatesMode';
      }
    }
    else if (address[3]==='drop')
    {
      if (address[4] ==='type')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropLog.set(args[0]);
          controlName = 'dropLog';
        }
      }
      if (address[4] ==='value')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropFactor.set(args[0]);
          controlName = 'dropFactor';
        }
      }
    }
    else if (address[3]==='rotx')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value = [args[0], value[1], value[2]];
        source.getChild("Barycentric").rotationXYZ.set(value);
        controlName = 'rotx';
      }
    }
    else if (address[3]==='roty')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
          value = [value[0], args[1], value[2]];
        source.getChild("Barycentric").rotationXYZ.set(value);
        controlName = 'roty';
      }
    }
    else if (address[3]==='rotz')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value = [value[0], value[1], args[2]];
        source.getChild("Barycentric").rotationXYZ.set(value);
          controlName = 'rotz';
      }
    }
    else if (address[3]==='rg1')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain1.set(args[0]);
            controlName = 'roomGain1';
        }
    }
    else if (address[3]==='rg2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain2.set(args[0]);
            controlName = 'roomGain2';
        }
    }
    else if (address[3]==='rg3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain3.set(args[0]);
            controlName = 'roomGain3';
        }
    }
    else if (address[3]==='rg4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain4.set(args[0]);
            controlName = 'roomGain4';
        }
    }
    else if (address[3]==='rg5')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain5.set(args[0]);
            controlName = 'roomGain5';
        }
    }
    else if (address[3]==='rg6')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain6.set(args[0]);
            controlName = 'roomGain6';
        }
    }
    else if (address[3]==='rg7')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain7.set(args[0]);
            controlName = 'roomGain7';
        }
    }
    else if (address[3]==='rg8')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain8.set(args[0]);
        }
    }
    else if (address[3]==='rg9')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain9.set(args[0]);
            controlName = 'roomGain9';
        }
    }
    else if (address[3]==='rg10')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain10.set(args[0]);
            controlName = 'roomGain10';
        }
    }

    stopSendForSource = -1;

    for (var k = 1; k < Remote.length + 1; k++)
    {
        if (Math.floor(i/ Remote[k-1]["controlsNumber"]) == Remote[k-1]["index"])
        {
            for (var j = 1; j < Remote[k - 1]['onOffNumber'] + 1; j++)
            {
                var cont = Remote[k - 1]['container'].getChild("OnOff" + j);
                if (cont.getChild("Parameter").get() === controlName)// | (cont.getChild("Parameter").get() === 'azimuth' | cont.getChild("Parameter").get() === 'elevation' | cont.getChild("Parameter").get() === 'elevation') && controlName === 'position')
                {
                    var target = cont.getChild("Target" + (i % Remote[k-1]["controlsNumber"] + 1)).getTarget();
                    if (target)
                    {
                        target.set(args[0] * 127);
                    }
                    cont.getChild("Values").getChild("Value" + (i % Remote[k-1]["controlsNumber"] + 1)).set(args[0]);
                }
            }
            for (var j = 1; j < Remote[k - 1]['floatNumber'] + 1; j++)
            {
                var cont = Remote[k - 1]['container'].getChild("float" + j);
                if (cont.getChild("Parameter").get() === controlName | ((cont.getChild("Parameter").get() === 'azimuth' | cont.getChild("Parameter").get() === 'elevation' | cont.getChild("Parameter").get() === 'distance') && controlName === 'position')| ((cont.getChild("Parameter").get() === 'positionX' | cont.getChild("Parameter").get() === 'positionY' | cont.getChild("Parameter").get() === 'positionZ') && controlName === 'position'))
                {
                    var arg = args[0];
                    if (cont.getChild("Parameter").get() === "positionY")
                    {
                        arg = source.getChild("positionXYZ").get()[1];
                    }
                    else if (cont.getChild("Parameter").get() === "positionZ")
                    {
                        arg = source.getChild("positionXYZ").get()[2];
                    }
                    if (cont.getChild("Parameter").get() === "elevation")
                    {
                        arg = source.getChild("positionAED").get()[1];
                    }
                    else if (cont.getChild("Parameter").get() === "distance")
                    {
                        arg = source.getChild("positionAED").get()[2];
                    }

                    var val = (arg - RangeForParameter[cont.getChild("Parameter").get()][0])/ (RangeForParameter[cont.getChild("Parameter").get()][1] - RangeForParameter[cont.getChild("Parameter").get()][0]);
                    var target = cont.getChild("Target" + (i % Remote[k-1]["controlsNumber"] + 1)).getTarget();
                    if (target)
                    {
                        target.set(val * 127);
                    }
                    cont.getChild("Values").getChild("Value" + (i % Remote[k-1]["controlsNumber"] + 1)).set(val);
                }
            }
        }

    }

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
        room.getChild("Reverb").roomSize.set(args[0]);
    }
  }
  if (address[3]==='reverberance')
  {
    if (typeof(args[0]) == 'number')
    {
        room.getChild("Reverb").getChild("PerceptualFactors").reverberance.set(args[0]);
    }
  }
  if (address[3]==='heaviness')
  {
    if (typeof(args[0]) == 'number')
    {
        room.getChild("Reverb").getChild("PerceptualFactors").heaviness.set(args[0]);

    }
  }
  if (address[3]==='liveness')
  {
    if (typeof(args[0]) == 'number')
    {
        room.getChild("Reverb").getChild("PerceptualFactors").liveness.set(args[0]);
    }
  }
  if (address[3]==='reverb')
  {
    if (address[4] === 'density')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").reverbDensity.set(args[0]);
      }
    }
    if (address[4] === 'enable')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").reverbEnableRoom.set(args[0]);
      }
    }
    if (address[4] === 'start')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").reverbStart.set(args[0]);
      }
    }
    if (address[4] === 'gain')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").reverbGain.set(args[0]);

      }
    }
    if (address[4] === 'factor')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").reverbFactor.set(args[0]);
      }
    }
    if (address[4] === 'infinite')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Options").reverbInfinite.set(args[0]);

      }
    }
    if (address[4] === 'modal' && address[5] === 'density')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Options").modalDensity.set(args[0]);

      }
    }
    if (address[4] === 'fl')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Crossover").frequencyLow.set(args[0]);

      }
    }
    if (address[4] === 'fh')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Crossover").frequencyHigh.set(args[0]);

      }
    }
  }
  if (address[3]==='early')
  {
    if (address[4] === 'min')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("RoomResponse").earlyMin.set(args[0]);
      }
    }
    if (address[4] === 'max')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("RoomResponse").earlyMax.set(args[0]);
      }
    }
    if (address[4] === 'dist')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("RoomResponse").earlyDist.set(args[0]);
      }
    }
    if (address[4] === 'shape')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("RoomResponse").earlyShape.set(args[0]);
      }
    }
  }
  if (address[3]==='cluster') {
      if (address[4] === 'min') {
          if (typeof (args[0]) == 'number') {
              room.getChild("Reverb").getChild("RoomResponse").clusterMin.set(args[0]);
          }
      }
      if (address[4] === 'max') {
          if (typeof (args[0]) == 'number') {
              room.getChild("Reverb").getChild("RoomResponse").clusterMax.set(args[0]);
          }
      }
      if (address[4] === 'dist') {
          if (typeof (args[0]) == 'number') {
              room.getChild("Reverb").getChild("RoomResponse").clusterDist.set(args[0]);
          }
      }
  }
  if (address[3]==='air')
  {
    if (address[4] === 'enable')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Options").airEnable.set(args[0]);
      }
    }
    if (address[4] === 'freq')
    {
      if (typeof (args[0]) == 'number')
      {
          room.getChild("Reverb").getChild("Options").airFreq.set(args[0]);
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

  for (var i = 1; i < 65; i++) {
    SourceContainer = SourcesContainer.addContainer("Source " + i);
    Sources.push({
      "index": i,
      "container": SourceContainer,
      "positionAED": [0.0, 0.0, 2.0],
      "positionXYZ": [0.0, 2.0, 0.0]
    });

    var sourceName = SourceContainer.addStringParameter("Source Name", "Source name", "Source name");
    sourceName.setAttribute("readonly", true);

    var gain = SourceContainer.addFloatParameter("Gain", "Gain", 0, -144.5, 24);
    gain.setAttribute("readonly", true);

    var mute = SourceContainer.addBoolParameter("Mute", "Mute", 0);
    mute.setAttribute("readonly", true);

    var solo = SourceContainer.addBoolParameter("Solo", "Solo", 0);
    solo.setAttribute("readonly", true);

    var lfe1 = SourceContainer.addFloatParameter("LFE 1", "LFE level", -144.5, -144.5, 24);
    lfe1.setAttribute("readonly", true);

    var lfe2 = SourceContainer.addFloatParameter("LFE 2", "LFE level", -144.5, -144.5, 24);
    lfe2.setAttribute("readonly", true);

    var lfe3 = SourceContainer.addFloatParameter("LFE 3", "LFE level", -144.5, -144.5, 24);
    lfe3.setAttribute("readonly", true);

    var lfe4 = SourceContainer.addFloatParameter("LFE 4", "LFE level", -144.5, -144.5, 24);
    lfe4.setAttribute("readonly", true);

    var positionAED = SourceContainer.addPoint3DParameter("Position AED", "PositionAED", [0.0, 0.0, 2.0]);
    positionAED.setAttribute("readonly", true);

    var positionXYZ = SourceContainer.addPoint3DParameter("Position XYZ", "Position XYZ", [0.0, 2.0, 0.0]);
    positionXYZ.setAttribute("readonly", true);

    reverbSourceContainer = SourceContainer.addContainer("Reverb");
    var reverbEnable = reverbSourceContainer.addBoolParameter("Reverb Enable", "Reverb Enable", 1);
    reverbEnable.setAttribute("readonly", true);

    var earlyEnable = reverbSourceContainer.addBoolParameter("Early Enable", "Early Enable", 1);
    earlyEnable.setAttribute("readonly", true);

    var clusterEnable = reverbSourceContainer.addBoolParameter("Cluster Enable", "Cluster Enable", 1);
    clusterEnable.setAttribute("readonly", true);

    var tailEnable = reverbSourceContainer.addBoolParameter("Tail Enable", "Tail Enable", 1);
    tailEnable.setAttribute("readonly", true);

    perceptualFactorSourceContainer = SourceContainer.addContainer("Perceptual Factors");
    var presence = perceptualFactorSourceContainer.addIntParameter("Presence", "Source Presence", 80, 0, 120);
    presence.setAttribute("readonly", true);

    var roomPresence = perceptualFactorSourceContainer.addIntParameter("Room presence", "Room Presence", 48, 0, 120);
    roomPresence.setAttribute("readonly", true);

    var runningReverberance = perceptualFactorSourceContainer.addIntParameter("Running Reverberance", "Running Reverberance", 34, 0, 50);
    runningReverberance.setAttribute("readonly", true);

    var envelopment = perceptualFactorSourceContainer.addIntParameter("Envelopment", "Envelopment", 25, 0, 50);
    envelopment.setAttribute("readonly", true);

    var warmth = perceptualFactorSourceContainer.addIntParameter("Warmth", "Warmth", 30, 0, 60);
    warmth.setAttribute("readonly", true);

    var brilliance = perceptualFactorSourceContainer.addIntParameter("Brilliance", "Brilliance", 30, 0, 60);
    brilliance.setAttribute("readonly", true);

    var yaw = SourceContainer.addFloatParameter("Yaw", "Yaw", -180, 0, 180);
    yaw.setAttribute("readonly", true);

    var pitch = SourceContainer.addFloatParameter("Pitch", "Pitch", -90, 0, 90);
    pitch.setAttribute("readonly", true);

    var aperture = SourceContainer.addFloatParameter("Aperture", "Aperture", 10, 0, 180);
    aperture.setAttribute("readonly", true);

    barycentricSourceContainer = SourceContainer.addContainer("Barycentric");
    var scale = barycentricSourceContainer.addFloatParameter("Scale", "Scale", 1.0, 0.01, 100.0);
    scale.setAttribute("readonly", true);
    scale.set(1.0);

    var rotationXYZ = barycentricSourceContainer.addPoint3DParameter("Rotation XYZ", "Rotation XYZ", [0.0, 0.0, 0.0]);
    rotationXYZ.setAttribute("readonly", true);

    spreadingSourceContainer = SourceContainer.addContainer("Spreading");
    var spread = spreadingSourceContainer.addFloatParameter("Spread", "Spread", 0, 0, 100);
    spread.setAttribute("readonly", true);

    var knn = spreadingSourceContainer.addIntParameter("Knn", "Knn", 0, 0, 100);
    knn.setAttribute("readonly", true);

    var earlyWidth = reverbSourceContainer.addFloatParameter("Early Width", "Early Width", 10, 0, 100);
    earlyWidth.setAttribute("readonly", true);

    var panRev = reverbSourceContainer.addFloatParameter("PanRev", "Pan Rev", 0, 0, 100);
    panRev.setAttribute("readonly", true);

    optionsSourceContainer = SourceContainer.addContainer("Options");
    var doppler = optionsSourceContainer.addBoolParameter("Doppler", "Doppler", 0);
    doppler.setAttribute("readonly", true);

    var airAbsorption = optionsSourceContainer.addBoolParameter("Air Absorption", "Air Absorption", 1);
    airAbsorption.setAttribute("readonly", true);

    var xycoordinatesMode = optionsSourceContainer.addBoolParameter("XY Coordinates Mode", "Coordinates Mode", 0);
    xycoordinatesMode.setAttribute("readonly", true);

    var zcoordinatesMode = optionsSourceContainer.addBoolParameter("Z Coordinates Mode", "Coordinates Mode", 0);
    zcoordinatesMode.setAttribute("readonly", true);

    var dropLog = optionsSourceContainer.addBoolParameter("Drop Log", "Drop Log", 0);
    dropLog.setAttribute("readonly", true);

    var dropFactor = optionsSourceContainer.addFloatParameter("Drop Factor", "Drop Factor", 6.0, -10.0, 30.0);
    dropFactor.setAttribute("readonly", true);

    var radius = optionsSourceContainer.addFloatParameter("Radius", "Radius", 1.0, 0.001, 100.0);
    radius.setAttribute("readonly", true);

    roomGainsSourceContainer = SourceContainer.addContainer("Room Gains");
    var roomGain1 = roomGainsSourceContainer.addFloatParameter("Room Gain 1", "Room Gain 1", 0, -144.5, 24);
    roomGain1.setAttribute("readonly", true);

    var roomGain2 = roomGainsSourceContainer.addFloatParameter("Room Gain 2", "Room Gain 2", 0, -144.5, 24);
    roomGain2.setAttribute("readonly", true);

    var roomGain3 = roomGainsSourceContainer.addFloatParameter("Room Gain 3", "Room Gain 3", 0, -144.5, 24);
    roomGain3.setAttribute("readonly", true);

    var roomGain4 = roomGainsSourceContainer.addFloatParameter("Room Gain 4", "Room Gain 4", 0, -144.5, 24);
    roomGain4.setAttribute("readonly", true);

    var roomGain5 = roomGainsSourceContainer.addFloatParameter("Room Gain 5", "Room Gain 5", 0, -144.5, 24);
    roomGain5.setAttribute("readonly", true);

    var roomGain6 = roomGainsSourceContainer.addFloatParameter("Room Gain 6", "Room Gain 6", 0, -144.5, 24);
    roomGain6.setAttribute("readonly", true);

    var roomGain7 = roomGainsSourceContainer.addFloatParameter("Room Gain 7", "Room Gain 7", 0, -144.5, 24);
    roomGain7.setAttribute("readonly", true);

    var roomGain8 = roomGainsSourceContainer.addFloatParameter("Room Gain 8", "Room Gain 8", 0, -144.5, 24);
    roomGain8.setAttribute("readonly", true);

    var roomGain9 = roomGainsSourceContainer.addFloatParameter("Room Gain 9", "Room Gain 9", 0, -144.5, 24);
    roomGain9.setAttribute("readonly", true);

    var roomGain10 = roomGainsSourceContainer.addFloatParameter("Room Gain 10", "Room Gain 10", 0, -144.5, 24);
    roomGain10.setAttribute("readonly", true);

    reverbSourceContainer.setCollapsed(true);
    perceptualFactorSourceContainer.setCollapsed(true);
    spreadingSourceContainer.setCollapsed(true);
    optionsSourceContainer.setCollapsed(true);
    barycentricSourceContainer.setCollapsed(true);
    SourceContainer.setCollapsed(true);
    local.scripts.setCollapsed(true);
  }
}


function createRoomContainer()
{
  // Add the Room container
  RoomsContainer = local.values.addContainer("Rooms container");

  for (var i = 1; i < 11; i++) {
      RoomContainer = RoomsContainer.addContainer("Room " + i);
      Rooms.push({
          "index": i,
          "container": RoomContainer
      });

      var roomName = RoomContainer.addStringParameter("Room Name", "Room name", "Room name");
      roomName.setAttribute("readonly", true);

      var gainRoom = RoomContainer.addFloatParameter("Gain Room", "Matrix input level", 0, -144.5, 24);
      gainRoom.setAttribute("readonly", true);

      var muteRoom = RoomContainer.addBoolParameter("Mute Room", "Mute", 0);
      muteRoom.setAttribute("readonly", true);

      var listenerPosition = RoomContainer.addPoint3DParameter("Listener Position", "Listener Position", [0.0, 0.0, 0.0]);
      listenerPosition.setAttribute("readonly", true);

      var listenerOrientation = RoomContainer.addPoint3DParameter("Listener Orientation", "Listener Orientation", [0.0, 0.0, 0.0]);
      listenerOrientation.setAttribute("readonly", true);

      roomReverbContainer = RoomContainer.addContainer("Reverb");
      var reverbDensity = roomReverbContainer.addBoolParameter("Reverb Density", "Reverb Density", 1);
      reverbDensity.setAttribute("readonly", true);

      var reverbEnableRoom = roomReverbContainer.addBoolParameter("Reverb Enable Room", "Reverb Enable", 1);
      reverbEnableRoom.setAttribute("readonly", true);

      var roomSize = roomReverbContainer.addFloatParameter("Room Size", "Room Size", 2500, 10, 15000);
      roomSize.setAttribute("readonly", true);

      var reverbStart = roomReverbContainer.addFloatParameter("Reverb Start", "Reverb Start", 80.0, 8.0, 500.0);
      reverbStart.setAttribute("readonly", true);

      var reverbGain = roomReverbContainer.addFloatParameter("Reverb Gain", "Reverb Gain", 0, -24.0, 24.0);
      reverbGain.setAttribute("readonly", true);

      var reverbFactor = roomReverbContainer.addFloatParameter("Reverb Factor", "Reverb Factor", 1.0, 0.10, 2.0);
      reverbFactor.setAttribute("readonly", true);

      perceptualFactorRoomContainer = roomReverbContainer.addContainer("Perceptual Factors");
      var reverberance = perceptualFactorRoomContainer.addFloatParameter("Reverberance", "Reverberance", 65.0, 5.0, 100.0);
      reverberance.setAttribute("readonly", true);

      var heaviness = perceptualFactorRoomContainer.addFloatParameter("Heaviness", "Heaviness", 25.0, 5.0, 50.0);
      heaviness.setAttribute("readonly", true);

      var liveness = perceptualFactorRoomContainer.addFloatParameter("Liveness", "Liveness", 35.0, 5.0, 50.0);
      liveness.setAttribute("readonly", true);

      roomResponseRoomContainer = roomReverbContainer.addContainer("Room Response");
      var earlyMin = roomResponseRoomContainer.addFloatParameter("Early Min", "Early Min", 24.2, 1.0, 120.0);
      earlyMin.setAttribute("readonly", true);

      var earlyMax = roomResponseRoomContainer.addFloatParameter("Early Max", "Early Max", 40.0, 1.0, 120.0);
      earlyMax.setAttribute("readonly", true);

      var earlyDist = roomResponseRoomContainer.addFloatParameter("Early Dist", "Early Dist", 0.5, 0.1, 0.9);
      earlyDist.setAttribute("readonly", true);

      var earlyShape = roomResponseRoomContainer.addFloatParameter("Early Shape", "Early Shape", 0.5, 0.1, 0.9);
      earlyShape.setAttribute("readonly", true);

      var clusterMin = roomResponseRoomContainer.addFloatParameter("Cluster Min", "Cluster Min", 36.0, 1.0, 300.0);
      clusterMin.setAttribute("readonly", true);

      var clusterMax = roomResponseRoomContainer.addFloatParameter("Cluster Max", "Cluster Max", 90.0, 1.0, 300.0);
      clusterMax.setAttribute("readonly", true);

      var clusterDist = roomResponseRoomContainer.addFloatParameter("Cluster Dist", "Cluster Dist", 0.5, 0.1, 0.9);
      clusterDist.setAttribute("readonly", true);

      reverbOptionsRoomContainer = roomReverbContainer.addContainer("Options");
      var reverbInfinite = reverbOptionsRoomContainer.addBoolParameter("Reverb Infinite", "Reverb Infinite", 0);
      reverbInfinite.setAttribute("readonly", true);

      var airEnable = reverbOptionsRoomContainer.addBoolParameter("Air Enable", "Air Enable", 1);
      airEnable.setAttribute("readonly", true);

      var airFreq = reverbOptionsRoomContainer.addFloatParameter("Air Freq", "Air absorption Frequency", 10000, 20, 20000);
      airFreq.setAttribute("readonly", true);

      var modalDensity = reverbOptionsRoomContainer.addFloatParameter("Modal Density", "Modal Density", 1.0, 0.2, 2.0);
      modalDensity.setAttribute("readonly", true);

      reverbCrossoverRoomContainer = roomReverbContainer.addContainer("Crossover");
      var frequencyLow = reverbCrossoverRoomContainer.addFloatParameter("Frequency Low", "Frequency Low", 177.0, 20.0, 20000.0);
      frequencyLow.setAttribute("readonly", true);

      var frequencyHigh = reverbCrossoverRoomContainer.addFloatParameter("Frequency High", "Frequency High", 5657.0, 20.0, 20000.0);
      frequencyHigh.setAttribute("readonly", true);

      roomReverbContainer.setCollapsed(true);
      perceptualFactorRoomContainer.setCollapsed(true);
      roomResponseRoomContainer.setCollapsed(true);
      reverbOptionsRoomContainer.setCollapsed(true);
      reverbCrossoverRoomContainer.setCollapsed(true);
      RoomContainer.setCollapsed(true);
  }
  local.scripts.setCollapsed(true);
}

function addRemote(index)
{
    // script.log("Add remote: " + index);
    RemoteContainer = RemotesContainer.addContainer("Remote" + index);
    Remote.push({"index": 0, "container": RemoteContainer, 'controlsNumber': 8, 'onOffNumber': 0, 'floatNumber':0});
    indexNumber = RemoteContainer.addIntParameter("Index", "index", 0, 0, 64);
    controlsNumber = RemoteContainer.addIntParameter("Controls number", "controls number", 8 ,1, 50);
    onOffNumber = RemoteContainer.addIntParameter("On Off Number", "on off number", 0, 0, 50);
    floatNumber = RemoteContainer.addIntParameter("Float Number", "float number", 0, 0, 50);
}

function deleteRemote(index)
{
    // script.log("Removing remote: " + index);
    RemotesContainer.removeContainer("Remote" + index);
    Remote.splice(-1);
}

function createRemoteContainer()
{
    // Add the Remote container
    RemotesContainer = local.values.addContainer("Remotes");

    var numberOfRemotes = RemotesContainer.addIntParameter("number of  remotes", "number of remotes", 1, 1, 10);
    var masterIndex = RemotesContainer.addIntParameter("Master index", "master index", 0, 0, 128);
    for (var i = 1; i < numberOfRemotes.get() + 1; i++)
    {
        addRemote(i);
    }
}

/**
 * Cartesian to Polar function
 * @param {float} value
 */

function CartesianToPolar(value)
{
    var positionAED = [0.0, 0.0, 0.0];
    if (value[0] != 0.0|| value[1] != 0.0 || value[2] != 0.0)
    {
        positionAED[2] = Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2));
        positionAED[1] = - 180 * Math.acos(value[2]/positionAED[2]) / Math.PI + 90;
    }
    else
    {
        positionAED[1] = 0.0;
        positionAED[2] = 0.0;
    }

    if(value[0]===0 && value[1]===0)
    {
        positionAED[0] = 0.0;
    }
    else if (value[0] === 0 && value[1] > 0)
    {positionAED[0] = 0.0;}
    else if(value[0] === 0 && value[1] < 0)
    {positionAED[0] = -180.0;}
    else if(value[1] === 0 && value[0] > 0)
    {positionAED[0] = 90.0;}
    else if(value[1] === 0 && value[0] < 0)
    {positionAED[0] = -90.0;}
    else if (value[0] > 0 && value[1] !== 0)
    {positionAED[0] = (-180 * Math.atan(value[1]/value[0]) / Math.PI) + 90;}
    else if(value[0] < 0 && value[1] !== 0)
    {positionAED[0] = (-180 * Math.atan(value[1]/value[0]) / Math.PI) - 90;}

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
