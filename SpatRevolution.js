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
    'lfe': function (index, value) {
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
    'position': function (index, value) {
        if (Cartesian === true) {
            local.send("/source/" + index + "/aed", CartesianToPolar(value.get()));
        } else {
            local.send("/source/" + index + "/aed", value.get());

        }
    },
    'cartesian': function (index, value) {
        stopSendingOSC = true;
        Cartesian = value.get() === 1 && Cartesian === false;
        stopSendingOSC = true;
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
var roomReverbContainer = null;
var perceptualFactorRoomContainer = null;
var roomResponseRoomContainer = null;
var reverbOptionsRoomContainer = null;
var reverbCrossoverRoomContainer = null;
var Cartesian = false; // define the mode of position for all sources. Cartesian when true, Polar when false.
var stopSendingOSC = false;

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
    CartesianOrPolar = SetupContainer.addBoolParameter("Cartesian", "Polar or cartesian", false);

    createSourceContainer();
    createRoomContainer();
    local.send("/source/*/dump", 0);
    local.send("/room/1/dump", 0);
}

/**
 * This function is called automatically by Chataigne at updateRate period.
 * Used to parse OSC received messages to soundObject container values
 * @param {integer} updateRate
 */
function update(updateRate)
{

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
    if (name === 'cartesian')
    {
      stopSendingOSC = true;
      if (value.get() === 1 && Cartesian === false)
      {
        Cartesian = true;
        for (var i = 0; i < Sources.length; i++)
        {
          Sources[i]['container'].position.set(Sources[i]['positionXYZ']);
        }
      }
      else if (value.get() === 0 && Cartesian === true)
      {
        Cartesian = false;
        for (var i = 0; i < Sources.length; i++)
        {
          Sources[i]['container'].position.set(Sources[i]['positionAED']);
        }
      }
      stopSendingOSC = false;
    }
    else {
        if (!stopSendingOSC && OSCSourceMessage[name]) {
            var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
            if (index === 0) {
                index = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length));
            }
            OSCSourceMessage[name](index, value);
        } else if (!stopSendingOSC && OSCRoomMessage[name]) {
            var index = parseInt(value.getParent().name.substring(4, value.getParent().name.length));
            if (index === 0) {
                index = parseInt(value.getParent().getParent().name.substring(4, value.getParent().getParent().name.length));
                if (index === 0) {
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

    if (i +1 > Sources.length)
    {
        return false;
    }
    else
    {
        var source = Sources[i]['container'];
    }

    if (address[3]==='gain')

    {
        if (typeof(args[0]) == 'number')
        {
          source.gain.set(args[0]);
        }
    }
    else if (address[3]==='lfe')
    {
        if (typeof(args[0]) == 'number')
        {
          source.lfe.set(args[0]);
        }
    }
    else if (address[3] ==='mute')
    {
        if (typeof(args[0]) == 'number')
        {
          source.mute.set(args[0]);
        }
    }
    else if (address[3] ==='solo')
    {
        if (typeof(args[0]) == 'number')
        {
          source.solo.set(args[0]);
        }
    }
    else if (address[3]==='aed')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
          Sources[i]['positionAED'] = args;
          Sources[i]['positionXYZ'] = PolarToCartesian(args);
          stopSendingOSC = true;
          if (Cartesian === true)
          {
            source.position.set(Sources[i]['positionXYZ']);
          }
          else
          {
            source.position.set(Sources[i]['positionAED']);
          }
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
          if (Cartesian === true)
          {
            source.position.set(Sources[i]['positionXYZ']);
          }
          else
          {
            source.position.set(Sources[i]['positionAED']);

          }
          stopSendingOSC = false;
        }
    }
    else if (address[3]==='reverb' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").reverbEnable.set(args[0]);
      }
    }
    else if (address.length === 4 && address[3] === 'early')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyEnable.set(args[0]);
      }
    }
    else if (address[3] === 'cluster')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").clusterEnable.set(args[0]);
      }
    }
    else if (address[3] === 'tail')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").tailEnable.set(args[0]);
      }
    }
    else if (address[3] === 'name')
    {
      if (typeof(args[0]) == 'string')
      {
        source.sourceName.set(args[0]);
      }
    }
    else if (address[3]==='pres')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").presence.set(args[0]);
      }
    }
    else if (address[3]==='prer')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").roomPresence.set(args[0]);
      }
    }
    else if (address[3]==='revp')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").runningReverberance.set(args[0]);
      }
    }
    else if (address[3]==='env')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").envelopment.set(args[0]);
      }
    }
    else if (address[3]==='warmth')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").warmth.set(args[0]);
      }
    }
    else if (address[3]==='bril')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factors").brilliance.set(args[0]);
      }
    }
    else if (address[3]==='yaw')
    {
      if (typeof(args[0]) == 'number')
      {
        source.yaw.set(args[0]);
      }
    }
    else if (address[3]==='pitch')
    {
      if (typeof(args[0]) == 'number')
      {
        source.pitch.set(args[0]);
      }
    }
    else if (address[3]==='aperture')
    {
      if (typeof(args[0]) == 'number')
      {
        source.aperture.set(args[0]);
      }
    }
    else if (address[3]==='scale')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Barycentric").scale.set(args[0]);
      }
    }
    else if (address[3]==='spread')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").spread.set(args[0]);
      }
    }
    else if (address[3]==='nneig')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").knn.set(args[0]);
      }
    }
    else if (address[3]==='early' && address[4]==='width')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyWidth.set(args[0]);
      }
    }
    else if (address[3]==='prevf')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").panRev.set(args[0]);
      }
    }
    else if (address[3]==='doppler' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").doppler.set(args[0]);
      }
    }
    else if (address[3]==='radius')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").radius.set(args[0]);
      }
    }
    else if (address[3]==='air' && address[4]==='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").airAbsorption.set(args[0]);
      }
    }
    else if (address[3]==='cm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").xyCoordinatesMode.set(args[0]);
      }
    }
    else if (address[3]==='zcm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").zCoordinatesMode.set(args[0]);
      }
    }
    else if (address[3]==='drop')
    {
      if (address[4] ==='type')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropLog.set(args[0]);
        }
      }
      if (address[4] ==='value')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropFactor.set(args[0]);
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
      }
    }
    else if (address[3]==='roty')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
          value = [value[0], args[1], value[2]];
        source.getChild("Barycentric").rotationXYZ.set(value);
      }
    }
    else if (address[3]==='rotz')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value = [value[0], value[1], args[2]];
        source.getChild("Barycentric").rotationXYZ.set(value);
      }
    }
    else if (address[3]==='rg1')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain1.set(args[0]);
        }
    }
    else if (address[3]==='rg2')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain2.set(args[0]);
        }
    }
    else if (address[3]==='rg3')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain3.set(args[0]);
        }
    }
    else if (address[3]==='rg4')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain4.set(args[0]);
        }
    }
    else if (address[3]==='rg5')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain5.set(args[0]);
        }
    }
    else if (address[3]==='rg6')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain6.set(args[0]);
        }
    }
    else if (address[3]==='rg7')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain7.set(args[0]);
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
        }
    }
    else if (address[3]==='rg10')
    {
        if (typeof(args[0]) == 'number')
        {
            source.getChild("RoomGains").roomGain10.set(args[0]);
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

    var lfe = SourceContainer.addFloatParameter("LFE", "LFE level", -144.5, -144.5, 24);
    lfe.setAttribute("readonly", true);

    var position = SourceContainer.addPoint3DParameter("Position", "Position", [0.0, 0.0, 2.0]);
    position.setAttribute("readonly", true);

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
    var scale = barycentricSourceContainer.addFloatParameter("Scale", "Scale", 1, 0.01, 100.0);
    scale.setAttribute("readonly", true);

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

/**
 * Cartesian to Polar function
 * @param {float} value
 */

function CartesianToPolar(value)
{
    var positionAED = [0,0,0];
    if (value[0] !==0 || value[1] !== 0 || value[2] !==0 )
    {
        positionAED[1] = -180 * Math.acos(z/Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2))) / Math.PI + 90;
        positionAED[2] = Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2));
    }
    else
    {
        positionAED[1] = 0;
        positionAED[2] = 0;
    }

    if(value[0]===0 && value[1]===0)
    {
        positionAED[0] = 0;
    }
    else if (value[0] === 0 && value[1] > 0)
    {positionAED[0] = 0;}
    else if(value[0] === 0 && value[1] < 0)
    {positionAED[0] = -180;}
    else if(value[1] === 0 && value[0] > 0)
    {positionAED[0] = 90;}
    else if(value[1] === 0 && value[0] < 0)
    {positionAED[0] = -90;}
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
