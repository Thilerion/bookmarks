/*import generateBookmarks from "../../helpers/random-bookmarks";
let bms = generateBookmarks(30);
console.log(bms);*/

const defaultBookmarks = [
	{
		title: "Reddit",
		url: "https://www.reddit.com",
		description: "Mijn favoriete website!",
		id: 0,
		category: 4,
		added: 1525023000000,
		tags: ["awesome", "alpha", "beta"],
		favorite: true
	},
	{
		title: "nu.nl",
		url: "https://www.nu.nl",
		description: "",
		id: 1,
		category: 3,
		added: 1525021200000,
		tags: ['beta', "gamma", "delta", "epsilon"],
		favorite: true
	},
	{
		title: "Agenda",
		url: "https://www.google.com/calendar",
		description: "",
		id: 3,
		category: 4,
		added: 1524952740000,
		tags: ["awesome", "epsilon"],
		favorite: true
	},
	{
		title: "Learn Vue 2: Basic Data Binding",
		url: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1",
		description: "Video tutorial over Vue, hoe reactive data werkt",
		id: 8,
		category: 5,
		added: 1524885000000,
		tags: ["something", "something-else"],
		favorite: false
	},
	{
		title: "Plex",
		url: "https://app.plex.tv/web/app",
		description: "",
		id: 4,
		category: 1,
		added: 1524849000000,
		tags: ["awesome", "something-else", "delta"],
		favorite: false
	},
	{
		title: "YouTube",
		url: "https://www.youtube.com",
		description: "",
		id: 2,
		category: 0,
		added: 1506532200000,
		tags: [],
		favorite: false
	},
	{
		title: "Vigenère cipher - Wikipedia",
		url: "https://en.m.wikipedia.org/wiki/Vigenère_cipher",
		description: "Informatie over bepaalde cryptografische methode",
		id: 7,
		category: 2,
		added: 1520190667705,
		tags: ["delta", "epsilon", "gooood"],
		favorite: false
	},
	{
		title: "Whatsapp",
		url: "https://web.whatsapp.com",
		description: "",
		id: 6,
		category: 1,
		added: 1521690767705,
		tags: ["alpha", "beta"],
		favorite: false
	},
	{
		title: "Blackboard",
		url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp",
		description: "",
		id: 5,
		category: 0,
		added: 1522590867705,
		tags: ["alpha", "gamma"],
		favorite: false
	},
	{
		title: "Alpha",
		url: "https://www.greekalpha.com",
		description: "",
		id: 9,
		category: 3,
		added: 1520090067706,
		tags: ["alpha", "beta", "gamma", "delta"],
		favorite: false
	},
	{
		title: "Beta",
		url: "https://www.beta.nl",
		description: "",
		id: 10,
		category: 0,
		added: 1520890177705,
		tags: ["gooood"],
		favorite: false
	},
	{
		title: "Gamma",
		url: "https://www.gamma.com/bla-bla/blaaaa/gammaaaaaa",
		description: "",
		id: 11,
		category: 1,
		added: 1520390367705,
		tags: ["how", "you", "doing"],
		favorite: false
	},
	{
		title: "Delta",
		url:
			"https://delta.com/super/awesome-bookmarks-2-visit-some-time/perfecttt/1",
		id: 12,
		category: 5,
		added: 1522190361105,
		tags: ["im", "great", "thanks"],
		favorite: false
	},
	{
		title: "Epsilon",
		url: "https://app.episolon.tv/",
		description: "",
		id: 13,
		category: 5,
		added: 1524831175551,
		tags: ["alpha"],
		favorite: false
	},
	{
		title: "Zeto",
		url: "https://www.zeta.com",
		description: "",
		id: 14,
		category: null,
		added: 1524821175551,
		tags: ["gamma", "theta", "awesome"],
		favorite: false
	},
	{
		title: "Eta",
		url: "https://en.m.eta.org/",
		description: "",
		id: 15,
		category: null,
		added: 1524841175551,
		tags: ["hey"],
		favorite: false
	},
	{
		title: "Theta",
		url: "https://web.Theta.com",
		description: "",
		id: 16,
		category: 1,
		added: 1524862305551,
		tags: [],
		favorite: false
	},
	{
		title: "Iota",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		description: "Grggd gre  gwwfw ht ehthr.",
		id: 17,
		category: 2,
		added: 1524862374551,
		tags: [],
		favorite: false
	},
	{
		title: "RegExp/Test\\Something   //\\\\\\//\\///\\^***%^&%@@^%^$#&!",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		description: "",
		id: 18,
		category: 2,
		added: 1524862375551,
		tags: [],
		favorite: false
	},
	{
		title:
			"RegExp%2FTest%5CSomething%20%20%20%2F%2F%5C%5C%5C%2F%2F%5C%2F%2F%2F%5C%5E***%25%5E%26%25%40%40%5E%25%5E%24%23%26!",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		description: "",
		id: 19,
		category: 2,
		added: 1522590267707,
		tags: ["good", "goood", "gooood", "great", "terrific"],
		favorite: false
	},
	{
		title: "Aviiwemeb",
		url: "http://ufu.vu/asisozad",
		category: 1,
		id: 20,
		added: 1525163723052,
		tags: ["avii", "meweb", "wemeb", "awesome", "gamma"],
		favorite: false,
		description: ""
	},
	{
		title: "Nitu ofepogab Dud",
		url: "http://idebueba.sn/bompohor",
		category: 0,
		id: 21,
		added: 1525160123052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Ad vada Kijir",
		url: "http://guk.lv/nekesacan",
		category: 0,
		id: 22,
		added: 1525156523052,
		tags: ["how", "where", "when"],
		favorite: false,
		description: ""
	},
	{
		title: "Wehit Hiapo",
		url: "http://cuz.et/tijwel",
		category: 1,
		id: 23,
		added: 1525152923052,
		tags: ["when", "why", "alpha"],
		favorite: true,
		description: ""
	},
	{
		title: "Cuv osulu moawoped avokihac",
		url: "http://kev.zw/luinhon",
		category: null,
		id: 24,
		added: 1525149323052,
		tags: ["sure"],
		favorite: false,
		description: ""
	},
	{
		title: "Kaabooj loz ma binjarev Wirihba",
		url: "http://aba.pn/vecar",
		category: 5,
		id: 25,
		added: 1525145723052,
		tags: ["ok", "okay", "loz", "ma", "alpha"],
		favorite: false,
		description: "Acjo suroshe heivimin kac kasues fut gub leoji adiki. Vi wufif po nimsuzpif Juboguluf. Sig rarotlu seg kengebag Amabien!"
	},
	{
		title: "Ze juv atkaoto Awaaf",
		url: "http://nulbab.lr/miwunbu",
		category: 3,
		id: 26,
		added: 1525142123052,
		tags: ["beta", "gamma", "theta", "ok"],
		favorite: false,
		description: ""
	},
	{
		title: "Vi wufif po nimsuzpif Juboguluf",
		url: "http://eltej.ml/meafivit",
		category: null,
		id: 27,
		added: 1525138523052,
		tags: ["ok", "theta"],
		favorite: false,
		description: ""
	},
	{
		title: "Duabweb suvci",
		url: "http://ces.vg/nouhoci",
		category: 1,
		id: 28,
		added: 1525134923052,
		tags: ["where", "good", "ok"],
		favorite: false,
		description: ""
	},
	{
		title: "Sig rarotlu seg kengebag Amabien",
		url: "http://jego.at/aruk",
		category: 2,
		id: 29,
		added: 1525131323052,
		tags: ["some", "ok", "okay", "blurry"],
		favorite: false,
		description: ""
	},
	{
		title: "Bubewa Fezalvi",
		url: "http://lanbij.cn/neeze",
		category: 0,
		id: 30,
		added: 1525127723052,
		tags: ["inspiration", "webdesign", "webapps", "javascript"],
		favorite: true,
		description: "Pev hevulah top mojo zujhav sogujif."
	},
	{
		title: "Ikzavaz meseso refgawi Piszu",
		url: "http://poleewu.cd/ivuf",
		category: 1,
		id: 31,
		added: 1525124123052,
		tags: ["inspiration", "webdesign", "css"],
		favorite: true,
		description: "Ce zenacejiw apoih nebo fivinwa."
	},
	{
		title: "Erfetsad gekzab nit fukez",
		url: "http://gecsen.mo/pupvoc",
		category: 2,
		id: 32,
		added: 1525120523052,
		tags: ["inspiration", "css", "webdesign"],
		favorite: false,
		description: ""
	},
	{
		title: "Kalzi Medvuno",
		url: "http://bofirok.am/cifebe",
		category: 0,
		id: 33,
		added: 1525116923052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Likbuhtos satowa",
		url: "http://hozfojma.sl/kik",
		category: 2,
		id: 34,
		added: 1525113323052,
		tags: ["webapps", "inspiration", "awesome", "gooood"],
		favorite: false,
		description: ""
	},
	{
		title: "Jo bul Higowe",
		url: "http://mokumsim.vn/zawicizuz",
		category: 5,
		id: 35,
		added: 1525109723052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Iwi rihlir we",
		url: "http://wi.bm/mo",
		category: 3,
		id: 36,
		added: 1525106123052,
		tags: ["nice", "tutorials"],
		favorite: false,
		description: ""
	},
	{
		title: "Vefif da bogtam Pimade",
		url: "http://hubmitper.bg/cetabpu",
		category: 2,
		id: 37,
		added: 1525102523052,
		tags: ["tutorials", "webdesign", "inspiration"],
		favorite: false,
		description: ""
	},
	{
		title: "Nasaliidi",
		url: "http://new.ls/fa",
		category: 0,
		id: 38,
		added: 1525098923052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Vacaj migpe za age",
		url: "http://destiz.lt/ecpo",
		category: 1,
		id: 39,
		added: 1525095323052,
		tags: ["where", "and", "when"],
		favorite: false,
		description: ""
	},
	{
		title: "Ifoef laruan",
		url: "http://feh.vc/uw",
		category: 0,
		id: 40,
		added: 1525091723052,
		tags: ["alpha", "gamma", "gooood", "ok"],
		favorite: true,
		description: ""
	},
	{
		title: "Gapla ves biwilgu Uh",
		url: "http://se.ss/afefu",
		category: 0,
		id: 41,
		added: 1525088123052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Ugecon poprefe laghebneb Laocodim",
		url: "http://gaavowi.gov/geerafa",
		category: null,
		id: 42,
		added: 1525084523052,
		tags: [],
		favorite: false,
		description: ""
	},
	{
		title: "Wam cuwig Wiw",
		url: "http://upeap.sx/ipo",
		category: 1,
		id: 43,
		added: 1525080923052,
		tags: [],
		favorite: false,
		description: "La refgeg."
	},
	{
		title: "Borag sok ro pi",
		url: "http://mu.np/nukuh",
		category: 4,
		id: 44,
		added: 1525077323052,
		tags: [],
		favorite: true,
		description: ""
	},
	{
		title: "Jivuwive izevinug nedju",
		url: "http://bitil.cz/isa",
		category: null,
		id: 45,
		added: 1525073723052,
		tags: ["gamma"],
		favorite: false,
		description: "Dipgawtan upe iwisat otu itaahutop."
	},
	{
		title: "Laazzur ve sercohap Ruv",
		url: "http://ku.ki/mubipwuc",
		category: 2,
		id: 46,
		added: 1525070123052,
		tags: [],
		favorite: true,
		description: ""
	},
	{
		title: "Depbecguk Fop",
		url: "http://posoh.lv/caroj",
		category: 0,
		id: 47,
		added: 1525066523052,
		tags: ["gamma", "beta", "epsilon", "delta"],
		favorite: false,
		description: ""
	},
	{
		title: "Ovmurwo",
		url: "http://remawid.ye/kuklaucu",
		category: null,
		id: 48,
		added: 1525062923052,
		tags: ["gamma", "epsilon", "beta"],
		favorite: true,
		description: ""
	},
	{
		title: "Faepi Inesaja",
		url: "http://arto.my/meb",
		category: 1,
		id: 49,
		added: 1525059323052,
		tags: ["epsilon"],
		favorite: true,
		description:
			"Obigahok kivdaki ripiviza kew woko jawa ge gujpotpil binerrus."
	}
];

const defaultCategories = [
	{ name: "Algemeen", colour: "#e96f69", _id: 0, icon: null },
	{ name: "Video", colour: "#be7fa5", _id: 1, icon: null },
	{ name: "Studeren", colour: "#938eba", _id: 2, icon: null },
	{ name: "Nieuws", colour: "#79ccd4", _id: 3, icon: null },
	{
		name: "EvenEenHeleLangeNaamTestennnnnnnnnnn",
		colour: "#afcd9c",
		_id: 4,
		icon: null
	},
	{ name: "Sociaal", colour: "#f8b056", _id: 5, icon: null }
];

const defaultCategoryOrder = [0, 1, 2, 5, 4, 3];

const defaultUserPrefs = {
	sortMode: 2,
	listViewMode: 1,
	defaultOpenCategory: "all"
};

export default {
	categories: {
		all: defaultCategories,
		categoryOrder: defaultCategoryOrder
	},
	bookmarks: defaultBookmarks.splice(0, 50),
	prefs: defaultUserPrefs
};
