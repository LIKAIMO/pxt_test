//% weight=10 icon="\uf013" color=#2896ff
namespace blink {
	
    export enum Colors {
        //% blockId="Red" block="Red"
        Red = 0x01,
        //% blockId="Green" block="Green"
        Green = 0x02,
        //% blockId="Blue" block="Blue"
		Blue = 0x03,
    }
        
    export enum HandleButton {
        //% block="Touch key"
        TOUCHKEY = EventBusValue.MES_DPAD_BUTTON_1_DOWN,
        //% block="B1"
        B1 = EventBusValue.MES_DPAD_BUTTON_2_DOWN,
        //% block="B2"
        B2 = EventBusValue.MES_DPAD_BUTTON_3_DOWN,
        //% block="B3"
        B3 = EventBusValue.MES_DPAD_BUTTON_4_DOWN,
        //% block="B4"
        B4 = EventBusValue.MES_DPAD_BUTTON_A_DOWN,
        //% block="Left joystick"
        JOYSTICK1 = EventBusValue.MES_DPAD_BUTTON_B_DOWN,
        //% block="Right joystick"
        JOYSTICK2 = EventBusValue.MES_DPAD_BUTTON_C_DOWN
    }


    export enum HandleSensorValue {
        //% block="Sound"
        SOUND,
        //% block="Light"
        LIGHT, 
        //% block="Power"
        POWER,
        //% block="Left joystick X"
        JOYSTICK_X1,
        //% block="Left joystick Y"
        JOYSTICK_Y1,
        //% block="Right joystick X"
        JOYSTICK_X2,
        //% block="Right joystick Y"
        JOYSTICK_Y2,
        //% block="Ultrasonic"
        ULTRASONIC,
        //% block="konb"
        KNOB
    }
	
	//% block
	export function foo(){
	}
}