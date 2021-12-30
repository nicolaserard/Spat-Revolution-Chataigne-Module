/*
 ==============================================================================

  Chataigne Module for Spat Revolution

  Copyright: Nicolas Erard, January 2021

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

/* OSC Message: array of all OSCMessage. Use to send OSC message when an value changed.*/

var OSCMessage = {
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
            value.getParent().position.set(Sources[value.getParent().index.get()['positionXYZ']]);
        }
        else
        {
            Cartesian = false;
            value.getParent().position.set(Sources[value.getParent().index.get()['positionAED']]);
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
    'brillance': function(index, value)
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
    'coordinatesMode': function(index, value)
    {
      local.send("/source/" + index + "/cm", value.get());
    },
    'rotationXYZ': function(index, value)
    {
      local.send("/source/" + index + "/rotation", value.get());
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
    setSourcesNumber(10);
    local.send("/source/1/dump", 0);
    SourceContainer.index.set(1);
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
        if (value.name == 'index')
        {
            if (value.get() > numberSources)
            {
              value.set(value.get() - 1);
              return;
            }
            stopSendingOSC = true;
            source = Sources[value.get() - 1];
            if (Cartesian == true)
            {
              SourceContainer.position.set(source['positionXYZ']);
            }
            else
            {
              SourceContainer.position.set(source['positionAED']);
            }
            SourceContainer.mute.set(source['mute']);
            SourceContainer.solo.set(source['solo']);
            SourceContainer.gain.set(source['gain']);
            reverbSourceContainer.reverbEnable.set(source['reverbEnable']);
            reverbSourceContainer.earlyEnable.set(source['earlyEnable']);
            reverbSourceContainer.clusterEnable.set(source['clusterEnable']);
            reverbSourceContainer.tailEnable.set(source['tailEnable']);
            SourceContainer.sourceName.set(source['name']);
            perceptualFactorSourceContainer.presence.set(source['presence']);
            perceptualFactorSourceContainer.roomPresence.set(source['roomPresence']);
            perceptualFactorSourceContainer.runningReverberance.set(source['runningReverberance']);
            perceptualFactorSourceContainer.envelopment.set(source['envelopment']);
            perceptualFactorSourceContainer.brillance.set(source['brillance']);
            perceptualFactorSourceContainer.warmth.set(source['warmth']);
            SourceContainer.yaw.set(source['yaw']);
            SourceContainer.pitch.set(source['pitch']);
            SourceContainer.aperture.set(source['aperture']);
            barycentricSourceContainer.scale.set(source['scale']);
            spreadingSourceContainer.spread.set(source['spread']);
            spreadingSourceContainer.knn.set(source['knn']);
            reverbSourceContainer.earlyWidth.set(source['earlyWidth']);
            reverbSourceContainer.panRev.set(source['panRev']);
            optionsSourceContainer.doppler.set(source['doppler']);
            optionsSourceContainer.radius.set(source['radius']);
            optionsSourceContainer.airAbsorption.set(source['airAbsorption']);
            optionsSourceContainer.coordinatesMode.set(source['coordinatesMode']);
            barycentricSourceContainer.rotationXYZ.set(source['rotationXYZ']);
            stopSendingOSC = false;

        }
        if (name == 'sourcesNumber')
        {
            setSourcesNumber(value.get());
        }
        else if (name == 'cartesian')
        {
          stopSendingOSC = true;
          if (value.get() == 1 && Cartesian == false)
          {
            Cartesian = true;
            source = Sources[SourceContainer.index.get() - 1];
            SourceContainer.position.set(source['positionXYZ']);
          }
          else if (value.get() == 0 && Cartesian == true)
          {
            Cartesian = false;
            source = Sources[SourceContainer.index.get() - 1];
            SourceContainer.position.set(source['positionAED']);
          }
          stopSendingOSC = false;
        }
        else
        {
            if (!stopSendingOSC && OSCMessage[name])
            {
                OSCMessage[name](SourceContainer.index.get(), value);
            }
        }
    }
    else
    {
        if (name == 'askSourcesNumber')
        {
            local.send("/global/project/source/count/get", 0);
        }
        if (name == 'dump')
        {
          local.send("/source/" + SourceContainer.index.get() + '/dump', 0);

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
        var source = Sources[i];
    }

    if (address[3]=='gain')

    {
        if (typeof(args[0]) == 'number')
        {
            source['gain']= args[0];
            if (SourceContainer.index.get() == i+1)
            {
                SourceContainer.gain.set(args[0]);
            }
        }
    }
    if (address[3]=='lfe')
    {
        if (typeof(args[0]) == 'number')
        {
            source['lfe'] = args[0];
            if (SourceContainer.index.get() == i+1)
            {
                SourceContainer.lfe.set(args[0]);
            }
        }
    }
    if (address[3] =='mute')
    {
        if (typeof(args[0]) == 'number')
        {
            source['mute'] = args[0];
            if (SourceContainer.index.get() == i+1)
            {
                SourceContainer.mute.set(args[0]);
            }
        }
    }
    if (address[3] =='solo')
    {
        if (typeof(args[0]) == 'number')
        {
            source['solo'] = args[0];
            if (SourceContainer.index.get() == i+1)
            {
                SourceContainer.solo.set(args[0]);
            }
        }
    }
    if (address[3]=='aed')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            source['positionAED'] = args;
            source['positionXYZ'] =  PolarToCartesian(args);

            if (SourceContainer.index.get() == i+1)
            {
                stopSendingOSC = true;
                if (Cartesian == true)
                {
                  SourceContainer.position.set(source['positionXYZ']);
                }
                else
                {
                  SourceContainer.position.set(source['positionAED']);

                }
                stopSendingOSC = false;
            }
        }
    }
    if (address[3]=='xyz')
    {
        if (typeof(args[0]) == 'number' && typeof(args[1]) == 'number' && typeof(args[2]) == 'number')
        {
            source['positionAED'] = CartesianToPolar(args);
            source['positionXYZ'] = args;

            if (SourceContainer.index.get() == i+1)
            {
                stopSendingOSC = true;
                if (Cartesian == true)
                {
                  SourceContainer.position.set(source['positionXYZ']);
                }
                else
                {
                  SourceContainer.position.set(source['positionAED']);

                }
                stopSendingOSC = false;
            }
        }
    }
    if (address[3]=='reverb' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source['reverbEnable'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.reverbEnable.set(args[0]);
        }
      }
    }
    if (address[3] == 'early')
    {
      if (typeof(args[0]) == 'number')
      {
        source['earlyEnable'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.earlyEnable.set(args[0]);
        }
      }
    }
    if (address[3] == 'cluster')
    {
      if (typeof(args[0]) == 'number')
      {
        source['clusterEnable'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.clusterEnable.set(args[0]);
        }
      }
    }
    if (address[3] == 'tail')
    {
      if (typeof(args[0]) == 'number')
      {
        source['tailEnable'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.tailEnable.set(args[0]);
        }
      }
    }
    if (address[3] == 'name')
    {
      if (typeof(args[0]) == 'string')
      {
        source['name'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          SourceContainer.sourceName.set(args[0]);
        }
      }
    }
    if (address[3]=='pres')
    {
      if (typeof(args[0]) == 'number')
      {
        source['presence'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.presence.set(args[0]);
        }
      }
    }
    if (address[3]=='prer')
    {
      if (typeof(args[0]) == 'number')
      {
        source['roomPresence'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.roomPresence.set(args[0]);
        }
      }
    }
    if (address[3]=='revp')
    {
      if (typeof(args[0]) == 'number')
      {
        source['runningReverberance'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.runningReverberance.set(args[0]);
        }
      }
    }
    if (address[3]=='env')
    {
      if (typeof(args[0]) == 'number')
      {
        source['envelopment'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.envelopment.set(args[0]);
        }
      }
    }
    if (address[3]=='warmth')
    {
      if (typeof(args[0]) == 'number')
      {
        source['warmth'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.warmth.set(args[0]);
        }
      }
    }
    if (address[3]=='bril')
    {
      if (typeof(args[0]) == 'number')
      {
        source['brillance'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          perceptualFactorSourceContainer.brillance.set(args[0]);
        }
      }
    }
    if (address[3]=='yaw')
    {
      if (typeof(args[0]) == 'number')
      {
        source['yaw'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          SourceContainer.yaw.set(args[0]);
        }
      }
    }
    if (address[3]=='pitch')
    {
      if (typeof(args[0]) == 'number')
      {
        source['pitch'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          SourceContainer.pitch.set(args[0]);
        }
      }
    }
    if (address[3]=='aperture')
    {
      if (typeof(args[0]) == 'number')
      {
        source['aperture'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          SourceContainer.aperture.set(args[0]);
        }
      }
    }
    if (address[3]=='scale')
    {
      if (typeof(args[0]) == 'number')
      {
        source['scale'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          barycentricSourceContainer.scale.set(args[0]);
        }
      }
    }
    if (address[3]=='spread')
    {
      if (typeof(args[0]) == 'number')
      {
        source['spread'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          spreadingSourceContainer.spread.set(args[0]);
        }
      }
    }
    if (address[3]=='nneig')
    {
      if (typeof(args[0]) == 'number')
      {
        source['knn'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          spreadingSourceContainer.knn.set(args[0]);
        }
      }
    }
    if (address[3]=='early' && address[4]=='width')
    {
      if (typeof(args[0]) == 'number')
      {
        source['earlyWidth'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.earlyWidth.set(args[0]);
        }
      }
    }
    if (address[3]=='prevf')
    {
      if (typeof(args[0]) == 'number')
      {
        source['panRev'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          reverbSourceContainer.panRev.set(args[0]);
        }
      }
    }
    if (address[3]=='doppler' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source['doppler'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          optionsSourceContainer.doppler.set(args[0]);
        }
      }
    }
    if (address[3]=='radius')
    {
      if (typeof(args[0]) == 'number')
      {
        source['radius'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          optionsSourceContainer.radius.set(args[0]);
        }
      }
    }
    if (address[3]=='air' && address[4]=='enable')
    {
      if (typeof(args[0]) == 'number')
      {
        source['airAbsorption'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          optionsSourceContainer.airAbsorption.set(args[0]);
        }
      }
    }
    if (address[3]=='cm')
    {
      if (typeof(args[0]) == 'number')
      {
        source['coordinatesMode'] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          optionsSourceContainer.coordinatesMode.set(args[0]);
        }
      }
    }
    if (address[3]=='rotx')
    {
      if (typeof(args[0]) == 'number')
      {
        source['rotationXYZ'][0] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          barycentricSourceContainer.rotationXYZ.set(source['rotationXYZ']);
        }
      }
    }if (address[3]=='roty')
    {
      if (typeof(args[0]) == 'number')
      {
        source['rotationXYZ'][1] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          barycentricSourceContainer.rotationXYZ.set(source['rotationXYZ']);
        }
      }
    }if (address[3]=='rotz')
    {
      if (typeof(args[0]) == 'number')
      {
        source['rotationXYZ'][2] = args[0];
        if (SourceContainer.index.get() == i+1)
        {
          barycentricSourceContainer.rotationXYZ.set(source['rotationXYZ']);
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
    // to be completed later
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
 * @param {integer} index
 */
function createSourceContainer(index)
{
    // Add the Source container
    SourceContainer = local.values.addContainer("Source container");

    var SourceIndex = SourceContainer.addIntParameter("Index", "source index", index, 1, 256);

    var dump = SourceContainer.addTrigger("Dump", "Dump all source parameters");

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

    var position = SourceContainer.addPoint3DParameter("Position", "Position", [0.0,0.0,2.0]);
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

    var brillance = perceptualFactorSourceContainer.addIntParameter("Brillance", "Brillance", 30, 0, 60);
    brillance.setAttribute("readonly", true);

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

    var coordinatesMode = optionsSourceContainer.addBoolParameter("Coordinates Mode", "Coordinates Mode", 0);
    coordinatesMode.setAttribute("readonly", true);

    var radius = optionsSourceContainer.addFloatParameter("Radius", "Radius", 1.0, 0.001, 100.0);
    radius.setAttribute("readonly", true);

    reverbSourceContainer.setCollapsed(true);
    perceptualFactorSourceContainer.setCollapsed(true);
    spreadingSourceContainer.setCollapsed(true);
    optionsSourceContainer.setCollapsed(true);
    barycentricSourceContainer.setCollapsed(true);
    local.scripts.setCollapsed(true);

}

function createSource()
{
    newsource = {"positionAED":[0.0,0.0,2.0], "positionXYZ":[0.0, 2.0, 0.0], "gain":0.0, "solo":false, "mute":false, "lfe":-144.5, "reverbEnable":true, "earlyEnable":true, "clusterEnable":true, "tailEnable":true, "name":"Source 1", "yaw":0.0, "pitch":0.0, "aperture":10.0, "scale":1.0, "spread":0.0, "knn":0.0, "earlyWidth":10.0, "panRev":0.0, "doppler":false, "radius":2.0, "airAbsorption":true, "coordinatesMode":false, "rotationXYZ":[0.0, 0.0, 0.0]};
    return newsource;
}


/**
 * Called when deleting a source
 * @param {integer} index
 */
function delSource(index)
{
    script.log('Remove source index: ' + index+1 + ', name: ' + Sources[index].name);
    local.scripts.setCollapsed(true);
    if (SourceContainer.index.get() == index)
    {
        SourceContainer.index.set(index-1);
    }

    Sources.splice(index, 1);
}

/**
 * Called when the source number count changed
 * Determined if need to add or delete sources
 * @param {integer} number
 */
function setSourcesNumber(number)
{
    if (numberSources < number)
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
