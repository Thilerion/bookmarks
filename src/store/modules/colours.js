import { getColourArray, singleAmount, multipleAmount } from '@/helpers/colours.js';

const colourStore = {
	state: {
		colourPalette: getColourArray("single", 5),
		paletteType: "single",
		palettesSingle: singleAmount,
		palettesMultiple: multipleAmount
	},
	getters: {
		colourPalette: state => state.colourPalette,
		paletteType: state => state.paletteType,
		randomColour: state => {
			const rnd1 = Math.floor(Math.random() * state.colourPalette.length);
			if (state.paletteType === "single") {
				return state.colourPalette[rnd1];
			} else {
				const rndArray = state.colourPalette[rnd1];
				const rnd2 = Math.floor(Math.random() * rndArray.length);
				return rndArray[rnd2];
			}
		}
	},
	mutations: {
		changePaletteSingle: (state, n) => {
			if (n < 0 || n >= singleAmount) {
				console.warn("This palette does not exist.");
				return;
			} else {
				state.paletteType = "single";
				state.colourPalette = getColourArray("single", n);
			}			
		},
		changePaletteMultiple: (state, n) => {
			if (n < 0 || n >= multipleAmount) {
				console.warn("This palette does not exist.");
				return;
			} else {
				state.colourPalette = getColourArray("multiple", n);
				state.paletteType = "multiple";
			}			
		}
	},
	actions: {

	}
}

export default colourStore;