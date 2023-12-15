import { Widget } from "../../imports.js";
const { Window, Box, CenterBox } = Widget;

// Widgets
import { CardsIcon } from "./icon.js";
import { Workspaces } from "./workspaces.js";
import { Tray } from "./tray.js";
import { BatteryWidget } from "./battery.js";
import { Clock } from "./clock.js";

const Left = () =>
	Box({
		className: "barLeft",
		hpack: "start",
		children: [CardsIcon()],
	});

const Center = () =>
	Box({
		children: [Workspaces()],
	});

const Right = () =>
	Box({
		className: "barRight",
		hpack: "end",
		children: [
			Tray(),
			Box({
				className: "systemInfo",
				children: [
					Widget.Label({
						className: "wifiIcon",
						label: "󰤨",
					}),
					BatteryWidget(),
				],
			}),
			Clock(),
		],
	});

export const Bar = ({ monitor } = {}) =>
	Window({
		//className: 'bar',
		name: "bar",
		anchor: ["right", "bottom", "left"],
		exclusivity: "exclusive",
		layer: "bottom",
		margins: [0, 12, 12, 12],
		monitor,
		child: CenterBox({
			className: "bar",
			startWidget: Left(),
			centerWidget: Center(),
			endWidget: Right(),
		}),
	});