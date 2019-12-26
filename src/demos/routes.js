import Example from "./example";
import MultipleSelection from "./multiple-selection";
import RowSelection from "./row-selection";
import ArrayAsData from "./array-as-data";
import ObjectAsData from "./object-as-data";

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
	}
];
