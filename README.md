# SPAT Revolution - Chataigne Module

This module has been developed to control SPAT Revolution with Chataigne, through OSC protocol.

To learn more about Chataigne and download it, please visit: http://benjamin.kuperberg.fr/chataigne/

To learn more about SPAT Revolution, please visit: spatrevolution.com
More documentation on SPAT Revolution and OSC on https://doc.flux.audio/#/en_US/spat_revolution_doc/Ecosystem_&_integration_OSC_Connections_Matrix

For global support on how to use Chataigne and its modules, please visit the forum:
http://benjamin.kuperberg.fr/chataigne/forum or join us on Discord: https://discord.com/invite/ngnJ5z .


## Module

This module contains four different containers:
- a **sources' container**, in which all the source parameters are declared and stocked ;
- a **rooms' container**, in which all the source parameters are declared and stocked ;
- a **snapshot' container**, in which all the snapshots are listed ; **(not implemented yet)**
- a **remotes' container**, to enable the control of the below parameters via other modules.

### The sources' container

64 sources are represented on the sources' container. For each source, all the parameters are listed, and can be edited through state machines. 

### The rooms' container

10 rooms are represented on the sources' container. For each source, all the parameters are listed, and can be edited through state machines.

### The snapshots' container (TO BE IMPLEMENTED)

To be implemented

### The remotes' container

The remotes container enables to control the sources' and rooms' parameters through other modules, mapping them dynamically.

A remote is composed by several on/off buttons, and several encoders.