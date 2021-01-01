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

/** 
 * Constants
 * Juce Javascript don't allow const so they are defined as global variable instead, see https://docs.juce.com/master/index.html
 */


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
        var positionTemp = value.getParent().position.get();
        script.log(positionTemp[0]);
        if (value.get() == 1 && Cartesian == false)
        {
            Cartesian = true;
            value.getParent().position.set(PolarToCartesian(positionTemp));
        }
        else
        {
            Cartesian = false;
            value.getParent().position.set(CartesianToPolar(value.getParent().position.get()));
        }
    }
};

/** 
 * Global variables
 */

var numberSources = 0 ;
var Sources = [];
var Cartesian = false;
//var Edit = false;

/* 	===============================================================================
*	Chataigne common functions
*	
*	See https://bkuperberg.gitbook.io/chataigne-docs/scripting/scripting-reference#common-functions
*	===============================================================================
*/

/**
 * This function is called automatically by Chataigne when you add the module in your Noisette.
 * Used for GUI initialisation, global OSC Rx management with callbacks and soundObjects container construction.
 */
function init() 
{
    local.values.removeContainer("Sources");
    SetupContainer = local.values.addContainer("Setup", "Setup value");
    
    LenSources = SetupContainer.addTrigger("Ask Sources number", "Ask for the number of sources");
    numberSourcesParameter = SetupContainer.addIntParameter("Sources number", "Define the number of sources in Chataigne (automatically update from Spat).", numberSources, 0, 256);

    var CartesianOrPolar = SetupContainer.addBoolParameter("Cartesian", "Polar or cartesian", false);


    local.send("/global/project/source/count", 0);
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

    name = value.name;
    container = value.getParent();
    if (value.isParameter())
    {
        if (value.name == 'sourcesNumber')
        {
            setSourcesNumber(value.get());
        }
        else if (value.name == 'cartesian')
        {
            if (value.get() == 1 &&  Cartesian == false)
            {
                Cartesian = true;
                for (var i=0; i<=Sources.length;i++)
                {
                    Sources[i].position.set(PolarToCartesian(Sources[i].position.get()));
                }
            }
            else
            {
                Cartesian = false;
                for (var i=0; i<=Sources.length;i++)
                {
                    Sources[i].position.set(CartesianToPolar(Sources[i].position.get()));
                }


            }
        }
        else
        {
            OSCMessage[name](container.index.get(), value);
        }
    }
    else
    {
        if (value.name == 'askSourcesNumber')
        {
            local.send("/global/project/source/count", 0);
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
    else if (address[1]=='rooom')
    {
        ocsRoomEvent(address, args);
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

function oscGlobalEvent(address, args)
{
    if (address[2] == 'project')
    {
        if (address[3] == 'source')
        {
            if (address[4] == 'count')
            {
                setSourcesNumber(args[0]);
            }
        }
    }
}

function oscSourceEvent(address, args)
{
    var i = parseInt(address[2])-1;
    var source = Sources[i];
    if (address[3]=='gain')

    {
        if (typeof(args[0]) == 'number')
        {
            script.log('c\'est le gain');

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
            if (Cartesian == true)
            {
                source.position.set(PolarToCartesian(args));
            }
            else
            {
                source.position.set(args);
            }
        }
    }
}

function createSource(index)
{
    var source = local.values.addContainer("Source " + index);

    var SourceIndex = source.addIntParameter("Index", "source index", index, 1, 256);
    // this value is an GUI editable parameter

    //var channelName = source.addStringParameter("Source Name", "Source Name", "Source Name");
    //channelName.setAttribute("readonly", true);

    var gain = source.addFloatParameter("Gain", "Matrix input level", 0, -144.5, 24);
    gain.setAttribute("readonly", true);

    var mute = source.addBoolParameter("Mute", "Mute", 0);
    mute.setAttribute("readonly", true);

    var solo = source.addBoolParameter("Solo", "Solo", 0);
    solo.setAttribute("readonly", true);

    var lfe = source.addFloatParameter("LFE", "LFE level", -144.5, -144.5, 24);
    lfe.setAttribute("readonly", true);

    var position = source.addPoint3DParameter("Position", "Position", [0.0,0.0,2.0]);

    //var edit = source.addBoolParameter("Edit", "Edit", 0);

    local.scripts.setCollapsed(true);

    return source
    //script.log(Sources.length);
}

function delSource(index)
{
    script.log('Remove source index: ' + index+1 + ', name: ' + Sources[index].name);
    local.values.removeContainer(Sources[index].name);
    local.scripts.setCollapsed(true);

    Sources.splice(index, 1);
}

function setSourcesNumber(number)
{
    if (numberSources < number)
    {
        while (numberSources < number)
        {
            numberSources += 1;
            Sources.push(createSource(numberSources));
            local.send("/source/"+numberSources+"/dump", 0);

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

function PolarToCartesian(value)
{
    var positionXYZ = [0.0,0.0,0.0];
    script.log('value: ' + value[2] + ', type: ' + typeof(value[2]));
    script.log(typeof(Math.cos(DegToRad(value[0]))));
    positionXYZ[0] = value[2] * Math.cos(DegToRad(value[0])) * Math.sin(DegToRad(value[1]));
    positionXYZ[1] = value[2] * Math.sin(DegToRad(value[0])) * Math.sin(DegToRad(value[1]));
    positionXYZ[2] = value[2] * Math.cos(DegToRad(value[1]));

    return positionXYZ;
}

function DegToRad(value)
{
    return -1 * Math.PI * (value-90) / 180;
}