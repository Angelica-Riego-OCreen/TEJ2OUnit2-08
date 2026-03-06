/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica
 * Created on: Mar 2026
 * This program Goes through RGB and secondary colours
*/

basic.clearScreen()


input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P13, 1)
  basic.showString("RED")
  pins.digitalWritePin(DigitalPin.P13, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString("BLUE")
  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("GREEN")
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("CYAN")
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P13, 1)
  basic.showString("MAGENTA")
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P13, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P13, 1)
  basic.showString("YELLOW")
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P13, 0)
  basic.pause(1000)
  basic.clearScreen()

  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString("WHITE")
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.pause(1000)
  basic.clearScreen()
  
  basic.showIcon(IconNames.Happy)
})
