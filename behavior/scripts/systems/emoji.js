import { world } from "@minecraft/server";
class Commands {
    static run(cmd, dimension = world.getDimension("overworld")) {
        return dimension.runCommand(cmd)
    }
}
world.beforeEvents.chatSend.subscribe(data => {
try {
    const emoji = { // Add list of emojis here
	// Built in emojis
	':Armor:':'',
	':Food:':'',
	':Minecoin:':'',
	':Token:':'',
	':Agent:':'',
	':ImmersiveReader:':'',
	':CraftToggleOn:':'',
	':CraftToggleOff:':'',
	':Touch_Jump:':'',
	':Touch_Couch:':'',
	':Touch_FlyUp:':'',
	':Touch_FlyDown:':'',
	':Touch_LeftArrow:':'',
	':Touch_RightArrow:':'',
	':Touch_UpArrow:':'',
	':Touch_DownArrow:':'',
	':Mouse_LeftClick:':'',
	':Mouse_RightClick:':'',
	':Mouse_MiddleClick:':'',
	':Mouse_NoClick:':'',
	':Mouse_LeftClick_Light:':'',
	':Mouse_RightClick_Light:':'',
	':Mouse_MiddleClick_Light:':'',
	':Mouse_NoClick_Light:':'',
	':Xbox_Y:':'',
	':Xbox_B:':'',
	':Xbox_A:':'',
	':Xbox_X:':'',
	':Xbox_Y_Light:':'',
	':Xbox_B_Light:':'',
	':Xbox_A_Light:':'',
	':Xbox_X_Light:':'',
	':Xbox_Back:':'',
	':Xbox_Start:':'',
	':Xbox_LB:':'',
	':Xbox_RB:':'',
	':Xbox_LT:':'',
	':Xbox_RT:':'',
	':Xbox_LS:':'',
	':Xbox_RS:':'',
	':Xbox_DpadUp:':'',
	':Xbox_DpadRight:':'',
	':Xbox_DpadDown:':'',
	':Xbox_DpadLeft:':'',
	':Nintendo_X:':'',
	':Nintendo_A:':'',
	':Nintendo_B:':'',
	':Nintendo_Y:':'',
	':Nintendo_+:':'',
	':Nintendo_-:':'',
	':Nintendo_L:':'',
	':Nintendo_R:':'',
	':Nintendo_ZL:':'',
	':Nintendo_RL:':'',
	':Nintendo_LS:':'',
	':Nintendo_RS:':'',
	':Nintendo_DpadUp:':'',
	':Nintendo_DpadRight:':'',
	':Nintendo_DpadDown:':'',
	':Nintendo_DpadLeft:':'',
	':Playstation_Triangle:':'',
	':Playstation_Circle:':'',
	':Playstation_Cross:':'',
	':Playstation_Square:':'',
	':Playstation_Options:':'',
	':Playstation_TouchPad:':'',
	':Playstation_L1:':'',
	':Playstation_R1:':'',
	':Playstation_L2:':'',
	':Playstation_R2:':'',
	':Playstation_L3:':'',
	':Playstation_R3:':'',
	':Playstation_DpadUp:':'',
	':Playstation_DpadRight:':'',
	':Playstation_DpadDown:':'',
	':Playstation_DpadLeft:':'',
	':Oculus_0:':'',
	':Oculus_B:':'',
	':Oculus_A:':'',
	':Oculus_Y:':'',
	':Oculus_X:':'',
	':Oculus_LG:':'',
	':Oculus_RG:':'',
	':Oculus_LT:':'',
	':Oculus_RT:':'',
	':Oculus_LS:':'',
	':Oculus_RS:':'',
	':WindowsMR_Menu:':'',
	':WindowsMR_Windows:':'',
	':WindowsMR_LeftTouchpad:':'',
	':WindowsMR_LeftHorizontalTouchpad:':'',
	':WindowsMR_LeftVerticalTouchpad:':'',
	':WindowsMR_RightTouchpad:':'',
	':WindowsMR_RightHorizontalTouchpad:':'',
	':WindowsMR_RightVerticalTouchpad:':'',
	':WindowsMR_LT:':'',
	':WindowsMR_RT:':'',
	':WindowsMR_LG:':'',
	':WindowsMR_RG:':'',
	':WindowsMR_LS:':'',
	':WindowsMR_RS:':'',
	':Star_Empty:':'',
	':Star_Full:':''

    };
    data.message = Object.keys(emoji).forEach(key => data.message = data.message.replaceAll(`${key}`, emoji[key]))
} catch (error) {
    return (data.cancel = false)
    //, console.warn(`${error}, ${error.stack}`) //i know this is just supressing the error, but it still works so what gives?
  ;
  }
})