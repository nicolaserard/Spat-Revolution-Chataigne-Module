# SPAT Revolution - Chataigne Module

This module has been developed to control SPAT Revolution with Chataigne, through OSC protocol.

To learn more about Chataigne and download it, please visit: http://benjamin.kuperberg.fr/chataigne/

To learn more about SPAT Revolution, please visit: https://spatrevolution.com
More documentation on SPAT Revolution and OSC on https://doc.flux.audio/#/en_US/spat_revolution_doc/Ecosystem_&_integration_OSC_Connections_Matrix

For global support on how to use Chataigne and its modules, please visit the forum:
http://benjamin.kuperberg.fr/chataigne/forum or join us on Discord: https://discord.com/invite/ngnJ5z .

## Configuration

On SPAT, the OSC connection should be the default input and output custom one.

## Module

This module contains four different containers:
- a **sources' container**, in which all the source parameters are declared and stocked;
- a **rooms' container**, in which all the source parameters are declared and stocked;
- a **snapshots' container**, in the global parameters of snapshots are listed, as well as current, previous and next snapshot;
- a **remotes' container**, to enable the control of the below parameters via other modules.

Command testers have been created for sources, rooms and snapshots parameters.

### The sources' container

64 sources are represented on the sources' container. For each source, all the parameters are listed, and can be edited through state machines.

### The rooms' container

10 rooms are represented on the sources' container. For each source, all the parameters are listed, and can be edited through state machines.

### The snapshots' container

The global parameters of the snapshots are represented on the snapshots' container. 

### The remotes' container

The remotes container enables to control the sources' and rooms' parameters through other modules, mapping them dynamically according to the index.

A remote is composed by several on/off buttons, and several encoders.

It allows to quickly create banks of parameters without creating state machines and mapping. This mapping is made dynamically with the index.

Parameters of a remote are the following:
- Index controls the index of the mapped parameters.
- Controls number determines the number of target by onOff and float.
- Remote range will determine the remap between the parameter and the remote. For example, working with MIDI parameter, selecting MIDI will automatically remap the gain (between -144.5 and 24.0) between 0 and 127.
- an "onOff" parameter is a boolean parameter.
- a "float" parameter is a parameter with multiple value.

In each onOff and float, you will select the parameter controlled over a list. Then the target selected will move according to the selected parameter, according to the index. For example, if controls number is set to 8 and parameter controlled to "source gain", target 1 will control the gain of the source 1 if Index is set to 1. If Index is set to 3, it will control the gain of the source 17. 

If you want to change the index for all the remote, you have a "master index" available on the "Values" container, which will change the index for all the remotes.

## Changelog

Version 1.0.4

- Add current snapshot remote number field

Version 1.0.3

- Fix command tester source and room mute

Version 1.0.2

- Fix command tester room and source solo

Version 1.0.1

- Fix range issue on Set Listener orientation