/*
 ==============================================================================

  Chataigne Module for Spat Revolution

  Copyright: Nicolas Erard, December 2021

  ==============================================================================
===============================================================================
This file is a Chataigne Custom Module to remote control Flux SE Spat Revolution.

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

/* OSCSourceMessage: array of all OSC Source Messages. Use to send OSC message when an value changed.*/
var OSCSourceMessage = {
    'gain': function(index, value)
    {
        local.send("/source/" + index + "/gain", value.get());
    },
    'mute': function(index, value)
    {
        local.send("/source/" + index + "/mute", value.get());
    },
    'solo': function(index, value)
    {
        local.send("/source/" + index + "/solo", value.get());
    },
    'lfe': function(index, value)
    {
        local.send("/source/" + index + "/lfe", value.get());
    },
    'lfe2': function(index, value)
    {
        local.send("/source/" + index + "/lfe2", value.get());
    },
    'lfe3': function(index, value)
    {
        local.send("/source/" + index + "/lfe3", value.get());
    },
    'lfe4': function(index, value)
    {
        local.send("/source/" + index + "/lfe4", value.get());
    },
    'position': function(index, value)
    {
        if (Cartesian == true)
        {
            local.send("/source/" + index + "/aed", CartesianToPolar(value.get()));
        }
        else
        {
            local.send("/source/" + index + "/aed", value.get());

        }
    },
    'cartesian': function(index, value)
    {
        stopSendingOSC = true;
        if (value.get() == 1 && Cartesian == false)
        {
            Cartesian = true;
            //value.getParent().position.set(Sources[value.getParent().sourceIndex.get()['positionXYZ']]);
        }
        else
        {
            Cartesian = false;
            //value.getParent().position.set(Sources[value.getParent().sourceIndex.get()['positionAED']]);
        }
        stopSendingOSC = true;
    },
    'reverbEnable': function(index, value)
    {
      local.send("/source/" + index + "/reverb/enable", value.get());
    },
    'earlyEnable': function(index, value)
    {
      local.send("/source/" + index + "/early", value.get());
    },
    'clusterEnable': function(index, value)
    {
      local.send("/source/" + index + "/cluster", value.get());
    },
    'tailEnable': function(index, value)
    {
      local.send("/source/" + index + "/tail", value.get());
    },
    'sourceName': function(index, value)
    {
      local.send("/source/" + index + "/name", value.get());
    },
    'presence': function(index, value)
    {
      local.send("/source/" + index + "/pres", value.get());
    },
    'roomPresence': function(index, value)
    {
      local.send("/source/" + index + "/prer", value.get());
    },
    'runningReverberance': function(index, value)
    {
      local.send("/source/" + index + "/revp", value.get());
    },
    'envelopment': function(index, value)
    {
      local.send("/source/" + index + "/env", value.get());
    },
    'brilliance': function(index, value)
    {
      local.send("/source/" + index + "/bril", value.get());
    },
    'warmth': function(index, value)
    {
      local.send("/source/" + index + "/warmth", value.get());
    },
    'yaw': function(index, value)
    {
      local.send("/source/" + index + "/yaw", value.get());
    },
    'pitch': function(index, value)
    {
      local.send("/source/" + index + "/pitch", value.get());
    },
    'aperture': function(index, value)
    {
      local.send("/source/" + index + "/aperture", value.get());
    },
    'scale': function(index, value)
    {
      local.send("/source/" + index + "/scale", value.get());
    },
    'spread': function(index, value)
    {
      local.send("/source/" + index + "/spread", value.get());
    },
    'KNN': function(index, value)
    {
      local.send("/source/" + index + "/nneig", value.get());
    },
    'earlyWidth': function(index, value)
    {
      local.send("/source/" + index + "/early/width", value.get());
    },
    'panRev': function(index, value)
    {
      local.send("/source/" + index + "/prevf", value.get());
    },
    'doppler': function(index, value)
    {
      local.send("/source/" + index + "/doppler/enable", value.get());
    },
    'radius': function(index, value)
    {
      local.send("/source/" + index + "/radius", value.get());
    },
    'airAbsorption': function(index, value)
    {
      local.send("/source/" + index + "/air/enable", value.get());
    },
    'xyCoordinatesMode': function(index, value)
    {
      local.send("/source/" + index + "/cm", value.get());
    },
    'zCoordinatesMode': function(index, value)
    {
      local.send("/source/" + index + "/zcm", value.get());
    },
    'dropLog': function(index, value)
    {
      local.send("/source/" + index + "/drop/type", value.get());
    },
    'dropFactor': function(index, value)
    {
      local.send("/source/" + index + "/drop/value", value.get());
    },
    'rotationXYZ': function(index, value)
    {
      local.send("/source/" + index + "/rotation", value.get());
    },

    //ROOM Parameter
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

var numberSources = 0 ; // number of sources in Spat Revolution. Should be set automatically, but function not working in Spat Revolution now.
var Sources = [];// array of all sources parameters.
var SourceContainer = null;
var reverbSourceContainer = null;
var perceptualFactorSourceContainer = null;
var spreadingSourceContainer = null;
var optionsSourceContainer = null;
var barycentricSourceContainer = null;
var numberRooms = 0 ; // number of rooms in Spat Revolution. Should be set automatically, but function not working in Spat Revolution now.
var Rooms = []; // array of all rooms parameters
var roomContainer = null;
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
    //LenSources = SetupContainer.addTrigger("Ask Sources number", "Ask for the number of sources");
    //numberSourcesParameter = SetupContainer.addIntParameter("Sources number", "Define the number of sources in Chataigne (automatically update from Spat).", numberSources, 0, 256);

    //AskForDump = SetupContainer.addTrigger("Dump", "Ask for all parameter dump");
    CartesianOrPolar = SetupContainer.addBoolParameter("Cartesian", "Polar or cartesian", false);

    createSourceContainer();
    setSourcesNumber(128);
    local.send("source/*/dump", 0);
    createRoomContainer();
    setRoomsNumber(10);
    local.send("/room/1/dump", 0);
    roomContainer.roomIndex.set(1);
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
  if (param.name == 'remotePort')
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
    if (value.name == 'roomIndex')
    {
      if (value.get() > numberRooms)
      {
        value.set(value.get() - 1);
        return;
      }
      stopSendingOSC = true;
      room = Rooms[value.get() - 1];
      roomContainer.listenerPosition.set(room['position']);
      roomContainer.muteRoom.set(room['mute']);
      roomContainer.gainRoom.set(room['gain']);
      roomReverbContainer.reverbDensity.set(room['reverbDensity']);
      roomReverbContainer.reverbEnableRoom.set(room['reverbEnableRoom']);
      roomReverbContainer.roomSize.set(room['sizeRoom']);
      roomReverbContainer.reverbStart.set(room['reverbStart']);
      roomReverbContainer.reverbGain.set(room['reverbGain']);
      roomReverbContainer.reverbFactor.set(room['reverbFactor']);
      perceptualFactorRoomContainer.reverberance.set(room['reverberance']);
      perceptualFactorRoomContainer.heaviness.set(room['heaviness']);
      perceptualFactorRoomContainer.liveness.set(room['liveness']);
      roomResponseRoomContainer.earlyMin.set(room['earlyMin']);
      roomResponseRoomContainer.earlyMax.set(room['earlyMax']);
      roomResponseRoomContainer.earlyDist.set(room['earlyDist']);
      roomResponseRoomContainer.earlyShape.set(room['earlyShape']);
      roomResponseRoomContainer.clusterMin.set(room['clusterMin']);
      roomResponseRoomContainer.clusterMax.set(room['clusterMax']);
      roomResponseRoomContainer.clusterDist.set(room['clusterDist']);
      reverbOptionsRoomContainer.reverbInfinite.set(room['reverbInfinite']);
      reverbOptionsRoomContainer.airEnable.set(room['airEnable']);
      reverbOptionsRoomContainer.airFreq.set(room['airFreq']);
      reverbOptionsRoomContainer.modalDensity.set(room['reverbModalDensity']);
      reverbCrossoverRoomContainer.frequencyLow.set(room['frequencyLow']);
      reverbCrossoverRoomContainer.frequencyHigh.set(room['frequencyHigh']);

      stopSendingOSC = false;
    }
    else if (name == 'cartesian')
    {
      stopSendingOSC = true;
      if (value.get() == 1 && Cartesian == false)
      {
        Cartesian = true;
        for (var i = 0; i < Sources.length; i++)
        {
          Sources[i]['container'].position.set(Sources[i]['positionXYZ']);
        }
      }
      else if (value.get() == 0 && Cartesian == true)
      {
        Cartesian = false;
        for (var i = 0; i < Sources.length; i++)
        {
          Sources[i]['container'].position.set(Sources[i]['positionAED']);
        }
      }
      stopSendingOSC = false;
    }
    else
    {
      if (!stopSendingOSC && OSCSourceMessage[name])
      {
        local.send("/" + name, 0);
        var index = parseInt(value.getParent().name.substring(6, value.getParent().name.length));
        if (index == 0)
        {
          index = parseInt(value.getParent().getParent().name.substring(6, value.getParent().getParent().name.length));
        }
        OSCSourceMessage[name](index, value);
      }
    }
  }
  else
  {
    if (name == 'askSourcesNumber')
    {
      local.send("/global/project/source/count/get", 0);
    }
    if (name == 'dumpRoom')
    {
      //local.send("/room/" + SourceContainer.sourceIndex.get() + '/dump', 0);

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

    if (address[1] == 'global')
    {
        oscGlobalEvent(address, args);
    }
    else if (address[1]=='source')
    {
        oscSourceEvent(address, args);
    }
    else if (address[1]=='room')
    {
        oscRoomEvent(address, args);
    }
    else if (address[1]=='master')
    {
        oscMasterEvent(address, args);
    }
    else if (address[1] == 'snapshot')
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

    if (address[3]=='gain')

    {
        if (typeof(args[0]) == 'number')
        {
          source.gain.set(args[0]);
        }
    }
    if (address[3]=='lfe')
    {
        if (typeof(args[0]) == 'number')
        {
          source.lfe.set(args[0]);
        }
    }
    if (address[3] =='mute')
    {
        if (typeof(args[0]) == 'number')
        {
          source.mute.set(args[0]);
        }
    }
    if (address[3] =='solo')
    {
        if (typeof(args[0]) == 'number')
        {
          source.solo.set(args[0]);
        }
    }
    if (address[3]=='aed')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
          Sources[i]['positionAED'] = args;
          Sources[i]['positionXYZ'] = PolarToCartesian(args);
          stopSendingOSC = true;
          if (Cartesian == true)
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
    if (address[3]=='xyz')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
          Sources[i]['positionAED'] = CartesianToPolar(args);
          Sources[i]['positionXYZ'] = args;
          stopSendingOSC = true;
          if (Cartesian == true)
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
    if (address[3]=='reverb' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").reverbEnable.set(args[0]);
      }
    }
    if (address.length == 4 && address[3] == 'early')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyEnable.set(args[0]);
      }
    }
    if (address[3] == 'cluster')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").clusterEnable.set(args[0]);
      }
    }
    if (address[3] == 'tail')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").tailEnable.set(args[0]);
      }
    }
    if (address[3] == 'name')
    {
      if (typeof(args[0]) == 'string')
      {
        source.sourceName.set(args[0]);
      }
    }
    if (address[3]=='pres')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").presence.set(args[0]);
      }
    }
    if (address[3]=='prer')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").roomPresence.set(args[0]);
      }
    }
    if (address[3]=='revp')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").runningReverberance.set(args[0]);
      }
    }
    if (address[3]=='env')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").envelopment.set(args[0]);
      }
    }
    if (address[3]=='warmth')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").warmth.set(args[0]);
      }
    }
    if (address[3]=='bril')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Perceptual Factor").brilliance.set(args[0]);
      }
    }
    if (address[3]=='yaw')
    {
      if (typeof(args[0]) == 'number')
      {
        source.yaw.set(args[0]);
      }
    }
    if (address[3]=='pitch')
    {
      if (typeof(args[0]) == 'number')
      {
        source.pitch.set(args[0]);
      }
    }
    if (address[3]=='aperture')
    {
      if (typeof(args[0]) == 'number')
      {
        source.aperture.set(args[0]);
      }
    }
    if (address[3]=='scale')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Barycentric").scale.set(args[0]);
      }
    }
    if (address[3]=='spread')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").spread.set(args[0]);
      }
    }
    if (address[3]=='nneig')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Spreading").knn.set(args[0]);
      }
    }
    if (address[3]=='early' && address[4]=='width')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").earlyWidth.set(args[0]);
      }
    }
    if (address[3]=='prevf')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Reverb").panRev.set(args[0]);
      }
    }
    if (address[3]=='doppler' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").doppler.set(args[0]);
      }
    }
    if (address[3]=='radius')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").radius.set(args[0]);
      }
    }
    if (address[3]=='air' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").airAbsorption.set(args[0]);
      }
    }
    if (address[3]=='cm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").xyCoordinatesMode.set(args[0]);
      }
    }
    if (address[3]=='zcm')
    {
      if (typeof(args[0]) == 'number')
      {
        source.getChild("Options").zCoordinatesMode.set(args[0]);
      }
    }
    if (address[3]=='drop')
    {
      if (address[4] =='type')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropLog.set(args[0]);
        }
      }
      if (address[4] =='value')
      {
        if (typeof(args[0]) == 'number')
        {
          source.getChild("Options").dropFactor.set(args[0]);
        }
      }
    }
    if (address[3]=='rotx')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value[0] = args[0];
        source.getChild("Barycentric").rotationXYZ.set(value);
      }
    }
    if (address[3]=='roty')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value[1] = args[0];
        source.getChild("Barycentric").rotationXYZ.set(value);
      }
    }
    if (address[3]=='rotz')
    {
      if (typeof(args[0]) == 'number')
      {
        var value = source.getChild("Barycentric").rotationXYZ.get();
        value[2] = args[0];
        source.getChild("Barycentric").rotationXYZ.set(value);
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
    var room = Rooms[i];
  }

  if (address[3]=='name')
  {
    if (typeof(args[0]) == 'string')
    {
      room['name'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.roomName.set(room['name']);
      }
    }
  }  if (address[3]=='gain')
  {
    if (typeof(args[0]) == 'number')
    {
      room['gain'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.gainRoom.set(room['gain']);
      }
    }
  }
  if (address[3]=='mute')
  {
    if (typeof(args[0]) == 'number')
    {
      room['mute'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.muteRoom.set(room['mute']);
      }
    }
  }
  if (address[3]=='xyz')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerPosition'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerPosition.set(room['listenerPosition']);
      }
    }
  }
  if (address[3]=='x')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerPosition'][0] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerPosition.set(room['listenerPosition']);
      }
    }
  }
  if (address[3]=='y')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerPosition'][1] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerPosition.set(room['listenerPosition']);
      }
    }
  }
  if (address[3]=='z')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerPosition'][2] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerPosition.set(room['listenerPosition']);
      }
    }
  }
  if (address[3]=='yaw')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerOrientation'][0] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerOrientation.set(room['listenerOrientation']);
      }
    }
  }
  if (address[3]=='pitch')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerOrientation'][1] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerOrientation.set(room['listenerOrientation']);
      }
    }
  }
  if (address[3]=='roll')
  {
    if (typeof(args[0]) == 'number')
    {
      room['listenerOrientation'][2] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomContainer.listenerOrientation.set(room['listenerOrientation']);
      }
    }
  }
  if (address[3]=='size')
  {
    if (typeof(args[0]) == 'number')
    {
      room['size'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        roomReverbContainer.roomSize.set(room['size']);
      }
    }
  }
  if (address[3]=='reverberance')
  {
    if (typeof(args[0]) == 'number')
    {
      room['reverberance'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        perceptualFactorRoomContainer.reverberance.set(room['reverberance']);
      }
    }
  }
  if (address[3]=='heaviness')
  {
    if (typeof(args[0]) == 'number')
    {
      room['heaviness'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        perceptualFactorRoomContainer.heaviness.set(room['heaviness']);
      }
    }
  }
  if (address[3]=='liveness')
  {
    if (typeof(args[0]) == 'number')
    {
      room['liveness'] = args[0];
      if (roomContainer.roomIndex.get() == i+1)
      {
        perceptualFactorRoomContainer.liveness.set(room['liveness']);
      }
    }
  }
  if (address[3]=='reverb')
  {
    if (address[4] == 'density')
    {
      if (typeof (args[0]) == 'number')
      {
        room['density'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomReverbContainer.reverbDensity.set(room['density']);
        }
      }
    }
    if (address[4] == 'enable')
    {
      if (typeof (args[0]) == 'number')
      {
        room['reverbEnableRoom'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomReverbContainer.reverbEnableRoom.set(room['reverbEnableRoom']);
        }
      }
    }
    if (address[4] == 'start')
    {
      if (typeof (args[0]) == 'number')
      {
        room['reverbStart'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomReverbContainer.reverbStart.set(room['reverbStart']);
        }
      }
    }
    if (address[4] == 'gain')
    {
      if (typeof (args[0]) == 'number')
      {
        room['reverbGain'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomReverbContainer.reverbGain.set(room['reverbGain']);
        }
      }
    }
    if (address[4] == 'factor')
    {
      if (typeof (args[0]) == 'number')
      {
        room['reverbFactor'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomReverbContainer.reverbFactor.set(room['reverbFactor']);
        }
      }
    }
    if (address[4] == 'infinite')
    {
      if (typeof (args[0]) == 'number')
      {
        room['reverbInfinite'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbOptionsRoomContainer.reverbInfinite.set(room['reverbInfinite']);
        }
      }
    }
    if (address[4] == 'modal' && address[5] == 'density')
    {
      if (typeof (args[0]) == 'number')
      {
        room['modalDensity'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbOptionsRoomContainer.modalDensity.set(room['modalDensity']);
        }
      }
    }
    if (address[4] == 'fl')
    {
      if (typeof (args[0]) == 'number')
      {
        room['frequencyLow'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbCrossoverRoomContainer.frequencyLow.set(room['frequencyLow']);
        }
      }
    }
    if (address[4] == 'fh')
    {
      if (typeof (args[0]) == 'number')
      {
        room['frequencyHigh'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbCrossoverRoomContainer.frequencyHigh.set(room['frequencyHigh']);
        }
      }
    }
  }
  if (address[3]=='early')
  {
    if (address[4] == 'min')
    {
      if (typeof (args[0]) == 'number')
      {
        room['earlyMin'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.earlyMin.set(room['earlyMin']);
        }
      }
    }
    if (address[4] == 'max')
    {
      if (typeof (args[0]) == 'number')
      {
        room['earlyMax'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.earlyMax.set(room['earlyMax']);
        }
      }
    }
    if (address[4] == 'dist')
    {
      if (typeof (args[0]) == 'number')
      {
        room['earlyDist'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.earlyDist.set(room['earlyDist']);
        }
      }
    }
    if (address[4] == 'shape')
    {
      if (typeof (args[0]) == 'number')
      {
        room['earlyShape'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.earlyShape.set(room['earlyShape']);
        }
      }
    }
  }
  if (address[3]=='cluster')
  {
    if (address[4] == 'min')
    {
      if (typeof (args[0]) == 'number')
      {
        room['clusterMin'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.clusterMin.set(room['clusterMin']);
        }
      }
    }
    if (address[4] == 'max')
    {
      if (typeof (args[0]) == 'number')
      {
        room['clusterMax'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.clusterMax.set(room['clusterMax']);
        }
      }
    }
    if (address[4] == 'dist')
    {
      if (typeof (args[0]) == 'number')
      {
        room['clusterDist'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          roomResponseRoomContainer.clusterDist.set(room['clusterDist']);
        }
      }
    }
  }if (address[3]=='air')
  {
    if (address[4] == 'enable')
    {
      if (typeof (args[0]) == 'number')
      {
        room['airEnable'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbOptionsRoomContainer.airEnable.set(room['airEnable']);
        }
      }
    }
    if (address[4] == 'freq')
    {
      if (typeof (args[0]) == 'number')
      {
        room['airFreq'] = args[0];
        if (roomContainer.roomIndex.get() == i + 1)
        {
          reverbOptionsRoomContainer.airFreq.set(room['airFreq']);
        }
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
function createSourceContainer() {
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

    var gain = SourceContainer.addFloatParameter("Gain", "Matrix input level", 0, -144.5, 24);
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

    perceptualFactorSourceContainer = SourceContainer.addContainer("Perceptual Factor");
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

    reverbSourceContainer.setCollapsed(true);
    perceptualFactorSourceContainer.setCollapsed(true);
    spreadingSourceContainer.setCollapsed(true);
    optionsSourceContainer.setCollapsed(true);
    barycentricSourceContainer.setCollapsed(true);
    local.scripts.setCollapsed(true);
  }
}


function createRoomContainer()
{
  // Add the Room container
  roomContainer = local.values.addContainer("Room container");

  var roomIndex = roomContainer.addIntParameter("Room Index", "room index", 1, 1, 256);

  var dumpRoom = roomContainer.addTrigger("Dump Room", "Dump all room parameters");

  var roomName = roomContainer.addStringParameter("Room Name", "Room name", "Room name");
  //roomName.setAttribute("readonly", true);

  var gainRoom = roomContainer.addFloatParameter("Gain Room", "Matrix input level", 0, -144.5, 24);
  //gainRoom.setAttribute("readonly", true);

  var muteRoom = roomContainer.addBoolParameter("Mute Room", "Mute", 0);
  //muteRoom.setAttribute("readonly", true);

  var listenerPosition = roomContainer.addPoint3DParameter("Listener Position", "Listener Position", [0.0, 0.0, 0.0]);
  //listenerPosition.setAttribute("readonly", true);

  var listenerOrientation = roomContainer.addPoint3DParameter("Listener Orientation", "Listener Orientation", [0.0, 0.0, 0.0]);
  //listenerOrientation.setAttribute("readonly", true);

  roomReverbContainer = roomContainer.addContainer("Reverb");
  var reverbDensity = roomReverbContainer.addBoolParameter("Reverb Density", "Reverb Density", 1);
  //reverbDensity.setAttribute("readonly", true);

  var reverbEnableRoom = roomReverbContainer.addBoolParameter("Reverb Enable Room", "Reverb Enable", 1);
  //reverbEnableRoom.setAttribute("readonly", true);

  var roomSize = roomReverbContainer.addFloatParameter("Room size", "Room size", 2500, 10, 15000);
  //sizeRoom.setAttribute("readonly", true);

  var reverbStart = roomReverbContainer.addFloatParameter("Reverb Start", "Reverb Start", 80.0, 8.0, 500.0);
  //reverbStart.setAttribute("readonly", true);

  var reverbGain = roomReverbContainer.addFloatParameter("Reverb Gain", "Reverb Gain", 0, -24.0, 24.0);
  //reverbGain.setAttribute("readonly", true);

  var reverbFactor = roomReverbContainer.addFloatParameter("Reverb Factor", "Reverb Factor", 1.0, 0.10, 2.0);
  //reverbFactor.setAttribute("readonly", true);

  perceptualFactorRoomContainer = roomReverbContainer.addContainer("Perceptual Factor");
  var reverberance = perceptualFactorRoomContainer.addFloatParameter("Reverberance", "Reverberance", 65.0, 5.0, 100.0);
  //reverberance.setAttribute("readonly", true);

  var heaviness = perceptualFactorRoomContainer.addFloatParameter("Heaviness", "Heaviness", 25.0, 5.0, 50.0);
  //heaviness.setAttribute("readonly", true);

  var liveness = perceptualFactorRoomContainer.addFloatParameter("Liveness", "Liveness", 35.0, 5.0, 50.0);
  //liveness.setAttribute("readonly", true);

  roomResponseRoomContainer = roomReverbContainer.addContainer("Room Response");
  var earlyMin = roomResponseRoomContainer.addFloatParameter("Early Min", "Early Min", 24.2, 1.0, 120.0);
  //earlyMin.setAttribute("readonly", true);

  var earlyMax = roomResponseRoomContainer.addFloatParameter("Early Max", "Early Max", 40.0, 1.0, 120.0);
  //earlyMax.setAttribute("readonly", true);

  var earlyDist = roomResponseRoomContainer.addFloatParameter("Early Dist", "Early Dist", 0.5, 0.1, 0.9);
  //earlyDist.setAttribute("readonly", true);

  var earlyShape = roomResponseRoomContainer.addFloatParameter("Early Shape", "Early Shape", 0.5, 0.1, 0.9);
  //arlyShape.setAttribute("readonly", true);

  var clusterMin = roomResponseRoomContainer.addFloatParameter("Cluster Min", "Cluster Min", 36.0, 1.0, 300.0);
  //clusterMin.setAttribute("readonly", true);

  var clusterMax = roomResponseRoomContainer.addFloatParameter("Cluster Max", "Cluster Max", 90.0, 1.0, 300.0);
  //clusterMax.setAttribute("readonly", true);

  var clusterDist = roomResponseRoomContainer.addFloatParameter("Cluster Dist", "Cluster Dist", 0.5, 0.1, 0.9);
  //clusterDist.setAttribute("readonly", true);

  reverbOptionsRoomContainer = roomReverbContainer.addContainer("Options");
  var reverbInfinite = reverbOptionsRoomContainer.addBoolParameter("Reverb Infinite", "Reverb Infinite", 0);
  //reverbInfinite.setAttribute("readonly", true);

  var airEnable = reverbOptionsRoomContainer.addBoolParameter("Air Enable", "Air Enable", 1);
  //airEnable.setAttribute("readonly", true);

  var airFreq = reverbOptionsRoomContainer.addFloatParameter("Air Freq", "Air absorption Frequency", 10000, 20, 20000);
  //airFreq.setAttribute("readonly", true);

  var modalDensity = reverbOptionsRoomContainer.addFloatParameter("Modal Density", "Modal Density", 1.0, 0.2, 2.0);
  //reverbModalDensity.setAttribute("readonly", true);

  reverbCrossoverRoomContainer = roomReverbContainer.addContainer("Crossover");
  var frequencyLow = reverbCrossoverRoomContainer.addFloatParameter("Frequency Low", "Frequency Low", 177.0, 20.0, 20000.0);
  //frequencyLow.setAttribute("readonly", true);

  var frequencyHigh = reverbCrossoverRoomContainer.addFloatParameter("Frequency High", "Frequency High", 5657.0, 20.0, 20000.0);
  //frequencyHigh.setAttribute("readonly", true);

  roomReverbContainer.setCollapsed(true);
  perceptualFactorRoomContainer.setCollapsed(true);
  roomResponseRoomContainer.setCollapsed(true);
  reverbOptionsRoomContainer.setCollapsed(true);
  reverbCrossoverRoomContainer.setCollapsed(true);
  local.scripts.setCollapsed(true);

}

function createSource()
{
    newsource = {"positionAED":[0.0,0.0,2.0], "positionXYZ":[0.0, 2.0, 0.0], "gain":0.0, "solo":false, "mute":false, "lfe":-144.5, "reverbEnable":true, "earlyEnable":true, "clusterEnable":true, "tailEnable":true, "name":"Source 1", "yaw":0.0, "pitch":0.0, "aperture":10.0, "scale":1.0, "spread":0.0, "knn":0.0, "earlyWidth":10.0, "panRev":0.0, "doppler":false, "radius":2.0, "airAbsorption":true, "coordinatesMode":false, "rotationXYZ":[0.0, 0.0, 0.0], "dropLog":true, "dropFactor":6};
    return newsource;
}

function createRoom()
{
  newRoom = {"name": "Room Name", 'mute': false, 'listenerPosition':[0.0, 0.0, 0.0],'listenerOrientation':[0.0, 0.0, 0.0], 'gain':0.0, 'reverbDensity':false, 'reverbEnableRoom':true, 'sizeRoom':2500, 'reverbStart':81.0, 'reverbFactor':1.0, 'reverberance':65.0, 'heaviness':25.0, 'liveness':35.0, 'earlyMin':24.2, 'earlyMax':40.0, 'earlyShape':0.5, 'earlyDist':0.5, 'clusterMin':24.2, 'clusterMax':40.0, 'clusterDist':0.5, 'reverbInfinite':false, 'airEnable':true, 'airFreq':10000.0, 'reverbModalDensity':0.5, 'frequencyLow':177.0, 'frequencyHigh':5657.0};
  return newRoom;
}

/**
 * Called when deleting a source
 * @param {integer} index
 */
function delSource(index)
{
    local.scripts.setCollapsed(true);

    Sources.splice(index, 1);
}

/**
 * Called when deleting a room
 * @param {integer} index
 */
function delRoom(index)
{
    script.log('Remove room index: ' + index+1 + ', name: ' + Rooms[index].name);
    local.scripts.setCollapsed(true);
    if (roomContainer.roomIndex.get() == index)
    {
      roomContainer.roomIndex.set(index-1);
    }

    Rooms.splice(index, 1);
}

/**
 * Called when the source number count changed
 * Determined if need to add or delete sources
 * @param {integer} number
 */
function setSourcesNumber(number)
{
    /*if (numberSources < number)
    {
        while (numberSources < number)
        {
            numberSources += 1;
            Sources.push(createSource()); // add the source to the Sources array
            local.send("/source/"+numberSources+"/dump", 0); // ask Spat Revolution for the source properties
            local.send("/source/"+numberSources+"/name/get", 0);
        }
    }
    else if (numberSources > number)
    {
        while (numberSources > number)
        {
            numberSources -= 1;
            delSource(numberSources);
        }
    }*/
}

/**
 * Called when the room number count changed
 * Determined if need to add or delete room
 * @param {integer} number
 */
function setRoomsNumber(number)
{
    if (numberRooms < number)
    {
        while (numberRooms < number)
        {
            numberRooms += 1;
            Rooms.push(createRoom()); // add the source to the Rooms array
            local.send("/source/" + numberRooms + "/dump", 0); // ask Spat Revolution for the room properties
            local.send("/source/" + numberRooms + "/name/get", 0);
        }
    }
    else if (numberRooms > number)
    {
        while (numberRooms > number)
        {
            numberRooms -= 1;
            delRoom(numberRooms);
        }
    }
}

/**
 * Cartesian to Polar function
 * @param {float} value
 */

function CartesianToPolar(value)
{
    var positionAED = [0,0,0];
    if (value[0] !=0 || value[1] != 0 || value[2] !=0 )
    {
        positionAED[1] = -180 * Math.acos(z/Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2))) / Math.PI + 90;
        positionAED[2] = Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2) + Math.pow(value[2],2));
    }
    else
    {
        positionAED[1] = 0;
        positionAED[2] = 0;
    }

    if(value[0]==0 && value[1]==0)
    {
        positionAED[0] = 0;
    }
    else if (value[0] == 0 && value[1] > 0)
    {positionAED[0] = 0;}
    else if(value[0] == 0 && value[1] < 0)
    {positionAED[0] = -180;}
    else if(value[1] == 0 && value[0] > 0)
    {positionAED[0] = 90;}
    else if(value[1] == 0 && value[0] < 0)
    {positionAED[0] = -90;}
    else if (value[0] > 0 && value[1] != 0)
    {positionAED[0] = (-180 * Math.atan(value[1]/value[0]) / Math.PI) + 90;}
    else if(value[0] < 0 && value[1] != 0)
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
