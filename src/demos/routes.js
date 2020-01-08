import Example from "./example";
import MultipleSelection from "./multiple-selection";
import RowSelection from "./row-selection";
import ArrayAsData from "./array-as-data";
import ObjectAsData from "./object-as-data";
import FunctionAsData from "./function-as-data";
import DataFilter from "./data-filter";
import DataSort from "./data-sort";
import ContinuousScales from "./continuous-scales";
import TimeScale from "./time-scale";
import OrdinalScale from "./ordinal-scale";
import StringInterpolation from "./string-interpolation";
import ColorInterpolation from "./color-interpolation";
import CompoundInterpolation from "./compound-interpolation";

export default [
	{
		path: "/demos/example",
		title: "example",
		component: Example
	},
	{
		path: "/demos/multiple-selection",
		title: "multiple-selection",
		component: MultipleSelection
	},
	{
		path: "/demos/row-selection",
		title: "row-selection",
		component: RowSelection
	},
	{
		path: "/demos/array-as-data",
		title: "array-as-data",
		component: ArrayAsData
	},
	{
		path: "/demos/object-as-data",
		title: "object-as-data",
		component: ObjectAsData
	},
	{
		path: "/demos/function-as-data",
		title: "function-as-data",
		component: FunctionAsData
	},
	{
		path: "/demos/data-filter",
		title: "data-filter",
		component: DataFilter
	},
	{
		path: "/demos/data-sort",
		title: "data-sort",
		component: DataSort
	},
	{
		path: "/demos/continuous-scales",
		title: "continuous-scales",
		component: ContinuousScales
	},
	{
		path: "/demos/time-scale",
		title: "time-scale",
		component: TimeScale
	},
	{
		path: "/demos/ordinal-scale",
		title: "ordinal-scale",
		component: OrdinalScale
	},
	{
		path: "/demos/string-interpolation",
		title: "string-interpolation",
		component: StringInterpolation
	},
	{
		path: "/demos/color-interpolation",
		title: "color-interpolation",
		component: ColorInterpolation
	},
	{
		path: "/demos/compound-interpolation",
		title: "compound-interpolation",
		component: CompoundInterpolation
	}
];
