const colours = {
	single: [],
	multipleArrays: []
};

colours.multipleArrays.push([
	['#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
	['#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F'],
	['#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C'],
	/**/['#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92'],
	['#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E'],
	['#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'],
	/**/['#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B'],
	['#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064'],
	['#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40'],
	['#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20'],
	/**/['#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E'],
	/**/['#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717'],
	/**/['#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17'],
	['#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'],
	['#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C'],
	['#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'],
	/**/['#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121'],
	['#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238']
]);



colours.single.push([].concat(...colours.multipleArrays[0]));

colours.single.push(["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#abdda4", "#66c2a5", "#3288bd", "#065A82", "#AC80A0", "#5e4fa2"]);

colours.single.push(["#335c67", "#fff3b0", "#e09f3e", "#9e2a2b", "#540b0e"]);

function getColourArray(singleOrMultiple = "single", n) {
	if (singleOrMultiple === "multiple") return colours.multipleArrays[n];
	else return colours.single[n];
}

const singleAmount = colours.single.length;
const multipleAmount = colours.multipleArrays.length;

export { getColourArray, singleAmount, multipleAmount };