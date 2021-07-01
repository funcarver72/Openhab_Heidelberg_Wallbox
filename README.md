# Openhab_Heidelberg_Wallbox

Project: 
------------
Control of a Wallbox, Type Heidelberg Energy Control, 11kW,
using Modbus Interface and  OpenHAB 3.x
User Interface to control the charging process with several options


Motivation:
------------
Enable PV-Controlled charging of an EV
Have a nice User Interface to control several charging options


Required Hardware:
-------------------
- Wallbox :-)
- Modbus-Gateway  RS485 to TCP, in my case USR-DR302
- Running OH3 Setup


The projects implements the modbus access to the wallbox.
As an OpenHAB user with some years of legacy, I used config files.
The rules are made for OH3. This makes a difference when using a milli-seconds timer.

In folder docu, you can find pictures of my hardware setup,
how to wire the modbus and which settings I did on the wallbox PCB.
Also, there is a screenshot of settings I made for the Modbus-TCP-Gateway.

In my environment, the communicaton is stable (even using powerline to my garage).  
In case of Wallbox standby the modbus stops working and the pollers 
go to an Error state and report frequently errors to the log-file.

This can be turned OFF by following command sequence on the OpenHAB Karaf Console:
openhab> log:set OFF org.openhab.core.io.transport.modbus

The user interface detects the error state and blocks the start of Charging.

The User-Interface is based on a Sitemap scheme and supported
by several rules to have a nice display of the values and options.

The user can configure:
Charging Power:   Maximum  (here 11kW)
                  Limit     User-defined power limit
				          PV-Optimized  (use PV production to charge. If there is no over-production left, 
				                 then the minimum current of 6A per phase is set.  
								 I decided for me, NOT to stop charging.
								 
Energy:  full charging
         Set energy limit
		 
Timers:  Start now or set a Start-Time
		     Define End time
		 
Combination of options is possible, First occurring event stops the charging.

The rules detect whether the wallbox is used in 1-phase or 3-phase supply mode.


Testing and qualification status:
---------------------------------

Modbus communication runs stable in my setup
User Interface, displayed values etc.  are tested.

Interaction with Car  NOT YET tested  (no car avail.).


Disclaimer:
------------
Please read the manual of the Wallbox and follow all instructions, especially safety instructions.
I just share the status of my project - I am not responsible for any misuse or damages.


