const defaultBookmarks = [
	{
		title: "Reddit",
		url: "https://www.reddit.com",
		description: "Mijn favoriete website!",
		id: 0,
		category: 4,
		added: 1525023000000,
		favorite: true
	},
	{
		title: "nu.nl",
		url: "https://www.nu.nl",
		description: "",
		id: 1,
		category: 3,
		added: 1525021200000,
		favorite: true
	},
	{
		title: "Agenda",
		url: "https://www.google.com/calendar",
		description: "",
		id: 3,
		category: 4,
		added: 1524952740000,
		favorite: true
	},
	{
		title: "Learn Vue 2: Basic Data Binding",
		url: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1",
		description: "Video tutorial over Vue, hoe reactive data werkt",
		id: 8,
		category: 5,
		added: 1524885000000,
		favorite: false
	},
	{
		title: "Plex",
		url: "https://app.plex.tv/web/app",
		description: "",
		id: 4,
		category: 1,
		added: 1524849000000,
		favorite: false
	},
	{
		title: "YouTube",
		url: "https://www.youtube.com",
		description: "",
		id: 2,
		category: 0,
		added: 1506532200000,
		favorite: false
	},
	{
		title: "Vigenère cipher - Wikipedia",
		url: "https://en.m.wikipedia.org/wiki/Vigenère_cipher",
		description: "Informatie over bepaalde cryptografische methode",
		id: 7,
		category: 2,
		added: 1520190667705,
		favorite: false
	},
	{
		title: "Whatsapp",
		url: "https://web.whatsapp.com",
		description: "",
		id: 6,
		category: 1,
		added: 1521690767705,
		favorite: false
	},
	{
		title: "Blackboard",
		url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp",
		description: "",
		id: 5,
		category: 0,
		added: 1522590867705,
		favorite: false
	},
	{
		title: "Alpha",
		url: "https://www.greekalpha.com",
		description: "",
		id: 9,
		category: 3,
		added: 1520090067706,
		favorite: false
	},
	{
		title: "Beta",
		url: "https://www.beta.nl",
		description: "",
		id: 10,
		category: 0,
		added: 1520890177705,
		favorite: false
	},
	{
		title: "Gamma",
		url: "https://www.gamma.com/bla-bla/blaaaa/gammaaaaaa",
		description: "",
		id: 11,
		category: 1,
		added: 1520390367705,
		favorite: false
	},
	{
		title: "Delta",
		url:
			"https://delta.com/super/awesome-bookmarks-2-visit-some-time/perfecttt/1",
		id: 12,
		category: 5,
		added: 1522190361105,
		favorite: false
	},
	{
		title: "Epsilon",
		url: "https://app.episolon.tv/",
		description: "",
		id: 13,
		category: 5,
		added: 1524831175551,
		favorite: false
	},
	{
		title: "Zeto",
		url: "https://www.zeta.com",
		description: "",
		id: 14,
		category: null,
		added: 1524821175551,
		favorite: false
	},
	{
		title: "Eta",
		url: "https://en.m.eta.org/",
		description: "",
		id: 15,
		category: null,
		added: 1524841175551,
		favorite: false
	},
	{
		title: "Theta",
		url: "https://web.Theta.com",
		description: "",
		id: 16,
		category: 1,
		added: 1524862305551,
		favorite: false
	},
	{
		title: "Iota",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		description: "Grggd gre  gwwfw ht ehthr.",
		id: 17,
		category: 2,
		added: 1524862374551,
		favorite: false
	},
	{
		title: "RegExp/Test\\Something   //\\\\\\//\\///\\^***%^&%@@^%^$#&!",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		description: "",
		id: 18,
		category: 2,
		added: 1524862375551,
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
		favorite: false
	},
	{
		title: "Gon",
		url: "http://avfi.kr/rubwaw",
		description: "Blurh hth  grger wrg th rtphroh jotrjp.",
		category: 0,
		id: 50,
		added: 1524190597705,
		favorite: false
	},
	{
		title: "Debfir kincudo",
		url: "http://hilig.bb/go",
		description: "",
		category: 1,
		id: 51,
		added: 1524190597706,
		favorite: false
	},
	{
		title: "Zuk ja Papwu",
		url: "http://vew.zm/ju",
		description: "",
		category: 0,
		id: 52,
		added: 1524190597707,
		favorite: true
	},
	{
		title: "Wej lerar Sazdatak",
		url: "http://peofbog.ro/lawjurbo",
		description: "",
		category: 3,
		id: 53,
		added: 1524190597708,
		favorite: false
	},
	{
		title: "Patbes gimuug kek ojgopo",
		url: "http://sajtuk.gu/kehpub",
		description: "gte hrthrt hrh tehjwqfefdefrg.",
		category: null,
		id: 54,
		added: 1524190597709,
		favorite: false
	},
	{
		title: "Nije detkodzob po azfu",
		url: "http://vu.zw/kupnum",
		description: "",
		category: 3,
		id: 55,
		added: 1524190597710,
		favorite: false
	},
	{
		title: "Ow tudfo cuktoni mivinpuv Dowo",
		url: "http://onuuwi.ae/hup",
		description: "",
		category: 2,
		id: 56,
		added: 1524190597711,
		favorite: false
	},
	{
		title: "Fiv ra favda",
		url: "http://vuznul.com/barkamak",
		description: "Vuzngr grs; eo fjsgrg r.",
		category: 1,
		id: 57,
		added: 1524190597712,
		favorite: false
	},
	{
		title: "Za ahwu usha",
		url: "http://rigutul.py/pundeh",
		description: "",
		category: 4,
		id: 58,
		added: 1524190597713,
		favorite: true
	},
	{
		title: "Rilejo govmag",
		url: "http://gemepok.py/riretmil",
		description: "",
		category: 1,
		id: 59,
		added: 1524190597714,
		favorite: false
	},
	{
		title: "Ovu tu Ejivoido",
		url: "http://wawwe.gt/fagju",
		description: "",
		category: 2,
		id: 60,
		added: 1524190597715,
		favorite: false
	},
	{
		title: "Cihkir Popdeupe",
		url: "http://cobi.ne/jut",
		description: "",
		category: 2,
		id: 61,
		added: 1524190597716,
		favorite: false
	},
	{
		title: "Noz bepri uh daspa",
		url: "http://me.gg/vacno",
		description: "GR grtd gtd gr rgw ewe gt htyhjtyjt.",
		category: 0,
		id: 62,
		added: 1524190597717,
		favorite: false
	},
	{
		title: "Pu refa oku vev",
		url: "http://ocsol.eu/sobsejiz",
		description: "",
		category: 4,
		id: 63,
		added: 1524190597718,
		favorite: false
	},
	{
		title: "Gu tokugwo Ju",
		url: "http://kazmihi.bd/biole",
		description: "",
		category: 4,
		id: 64,
		added: 1524190597719,
		favorite: true
	},
	{
		title: "Guk jezpoeri Ogpeg",
		url: "http://vien.gq/sukce",
		description: "",
		category: 5,
		id: 65,
		added: 1524190597720,
		favorite: true
	},
	{
		title: "Zeujuefu mevuhir Kojli",
		url: "http://do.mn/ubi",
		description: "",
		category: null,
		id: 66,
		added: 1524190597721,
		favorite: true
	},
	{
		title: "Hi Ce",
		url: "http://ga.cm/viel",
		description: "",
		category: 4,
		id: 67,
		added: 1524190597722,
		favorite: false
	},
	{
		title: "Ib rirazko gid",
		url: "http://martat.cr/finugewin",
		description: "",
		category: 2,
		id: 68,
		added: 1524190597723,
		favorite: false
	},
	{
		title: "Wot suw",
		url: "http://vogunhun.ir/ed",
		description: "",
		category: null,
		id: 69,
		added: 1524190597724,
		favorite: false
	},
	{
		title: "Watvo Mef",
		url: "http://pe.gu/mo",
		description: "",
		category: 2,
		id: 70,
		added: 1524190597725,
		favorite: false
	},
	{
		title: "If lep Zo",
		url: "http://maale.cd/pel",
		description: "",
		category: 4,
		id: 71,
		added: 1524190597726,
		favorite: false
	},
	{
		title: "Me vo vokhorbab Jo",
		url: "http://ug.ci/ici",
		description: "",
		category: 1,
		id: 72,
		added: 1524190597727,
		favorite: false
	},
	{
		title: "Salgi sab dil",
		url: "http://go.my/juj",
		description: "",
		category: 5,
		id: 73,
		added: 1524190597728,
		favorite: false
	},
	{
		title: "Maknono fuwtosi tu Siaso",
		url: "http://poso.ax/ga",
		description: "",
		category: 5,
		id: 74,
		added: 1524190597729,
		favorite: false
	},
	{
		title: "Wihidu zoh hoidsu",
		url: "http://zepok.sz/od",
		description: "",
		category: null,
		id: 75,
		added: 1524190597730,
		favorite: false
	},
	{
		title: "Buheb vitowaned wegacepu Rujugpi",
		url: "http://itwig.am/cupajgug",
		description: "",
		category: 1,
		id: 76,
		added: 1524190597731,
		favorite: false
	},
	{
		title: "Golnu kedvugah awoharaku",
		url: "http://usbihahe.cm/ihi",
		description: "",
		category: 3,
		id: 77,
		added: 1524190597732,
		favorite: false
	},
	{
		title: "Akuzamid kitu lusko hapuspig Vufe",
		url: "http://cembar.do/egilaab",
		description: "",
		category: 5,
		id: 78,
		added: 1524190597733,
		favorite: false
	},
	{
		title: "Veravun lem jojinib nepus",
		url: "http://ehe.cf/mesid",
		description: "",
		category: 3,
		id: 79,
		added: 1524190597734,
		favorite: true
	},
	{
		title: "Ib",
		url: "http://atmem.np/fiv",
		description: "",
		category: null,
		id: 80,
		added: 1524190597735,
		favorite: false
	},
	{
		title: "Go av",
		url: "http://nigjuce.bm/ra",
		description: "",
		category: 5,
		id: 81,
		added: 1524190597736,
		favorite: false
	},
	{
		title: "Ja Ji",
		url: "http://wiwke.re/ne",
		description: "",
		category: null,
		id: 82,
		added: 1524860057309,
		favorite: false
	},
	{
		title: "Vudhab nigugim jo",
		url: "http://ag.mm/og",
		description: "",
		category: 4,
		id: 83,
		added: 1524860057309,
		favorite: true
	},
	{
		title: "Mouci",
		url: "http://ula.ge/dib",
		description: "",
		category: 4,
		id: 84,
		added: 1524860057309,
		favorite: false
	},
	{
		title: "Uvipildul jib",
		url: "http://saw.tw/juhi",
		description: "",
		category: 4,
		id: 85,
		added: 1524860057309,
		favorite: true
	},
	{
		title: "Iz epu kedlon wu",
		url: "http://biera.fk/jir",
		description: "",
		category: 2,
		id: 86,
		added: 1524860057309,
		favorite: true
	},
	{
		title: "Ram ok geb",
		url: "http://ogjifun.ie/rukukwa",
		description: "",
		category: null,
		id: 87,
		added: 1524860157309,
		favorite: false
	},
	{
		title: "Icuhahe nup Ovdim",
		url: "http://neukagub.bj/inetodvu",
		description: "",
		category: 3,
		id: 88,
		added: 1524860257309,
		favorite: false
	},
	{
		title: "Tuece mev zo",
		url: "http://aticalec.co/duwhup",
		description: "",
		category: 5,
		id: 89,
		added: 1524860357309,
		favorite: false
	},
	{
		title: "Izgul va huwofti anaega",
		url: "http://nor.ms/bolcif",
		description: "",
		category: 2,
		id: 90,
		added: 1524860457309,
		favorite: true
	},
	{
		title: "Wudiluwi bicdade kedteg tuhfanu Nobe",
		url: "http://de.nz/gem",
		description: "",
		category: 5,
		id: 91,
		added: 1524860557309,
		favorite: false
	},
	{
		title: "Jewoer",
		url: "http://sohlew.ua/gukvoh",
		description: "",
		category: 5,
		id: 92,
		added: 1524860657309,
		favorite: false
	},
	{
		title: "Icufecub get diuzimap vu Repu",
		url: "http://vazri.bo/kuehe",
		description: "",
		category: 1,
		id: 93,
		added: 1524860757309,
		favorite: true
	},
	{
		title: "Migitfat sumwedam pafa lemiba",
		url: "http://ruuwgod.so/mi",
		description: "",
		category: 3,
		id: 94,
		added: 1524860857309,
		favorite: false
	},
	{
		title: "Ohcagiv mak Ibnifo",
		url: "http://kaneapa.id/sujvifto",
		description: "",
		category: 4,
		id: 95,
		added: 1524860957309,
		favorite: false
	},
	{
		title: "Pa ru wi huhgef",
		url: "http://zuej.gm/caco",
		description: "",
		category: 3,
		id: 96,
		added: 1524861057309,
		favorite: false
	},
	{
		title: "Wor Soce",
		url: "http://pegvavoj.ua/apoaddoh",
		description: "",
		category: null,
		id: 97,
		added: 1524861157309,
		favorite: false
	},
	{
		title: "Si iliuf la",
		url: "http://reon.ru/tisub",
		description: "",
		category: 4,
		id: 98,
		added: 1524861257309,
		favorite: false
	},
	{
		title: "Nub jiznu jipmuj Sunbilu",
		url: "http://zado.io/jug",
		description: "",
		category: 1,
		id: 99,
		added: 1524861357309,
		favorite: false
	},
	{
		title: "Ilu",
		url: "http://sisevla.np/hedzas",
		description: "",
		category: 1,
		id: 100,
		added: 1524861457309,
		favorite: false
	},
	{
		title: "Uzizo",
		url: "http://bislaz.vg/iwojubka",
		description: "",
		category: 4,
		id: 101,
		added: 1524861557309,
		favorite: false
	},
	{
		title: "Deidi ekaugekus Godlon",
		url: "http://bohubdi.ke/ze",
		description: "",
		category: 5,
		id: 102,
		added: 1524861667309,
		favorite: false
	},
	{
		title: "Tero zet",
		url: "http://haze.lb/jil",
		description: "",
		category: null,
		id: 103,
		added: 1524861767309,
		favorite: true
	},
	{
		title: "Cacpigube mudkazdok dobeco rarejev",
		url: "http://riw.ci/zalamum",
		description: "",
		category: null,
		id: 104,
		added: 1524862007309,
		favorite: true
	},
	{
		title: "Ozi ehkicba moz sokre Enrir",
		url: "http://murtu.il/zad",
		description: "",
		category: 4,
		id: 105,
		added: 1524862017309,
		favorite: false
	},
	{
		title: "Juzbudik Uniokeuc",
		url: "http://subuzip.ci/ilgu",
		description: "",
		category: 5,
		id: 106,
		added: 1524862027309,
		favorite: false
	},
	{
		title: "Bebigniz doboiw doodpo",
		url: "http://jo.is/sa",
		description: "",
		category: 3,
		id: 107,
		added: 1524190597762,
		favorite: true
	},
	{
		title: "Je",
		url: "http://tefu.bs/pi",
		description: "",
		category: 3,
		id: 108,
		added: 1524190597763,
		favorite: false
	},
	{
		title: "Hewimabu dojweku ze ma",
		url: "http://nul.tz/kiposfej",
		description: "",
		category: 4,
		id: 109,
		added: 1524190597764,
		favorite: true
	},
	{
		title: "Jamjihemo kaz ji ejaci",
		url: "http://gafgobuz.gg/reki",
		description: "",
		category: 0,
		id: 110,
		added: 1524190597765,
		favorite: false
	},
	{
		title: "Fomme rufni emcig",
		url: "http://dedra.hk/hij",
		description: "",
		category: 5,
		id: 111,
		added: 1524190597766,
		favorite: false
	},
	{
		title: "Da",
		url: "http://tok.mr/uvomok",
		description: "",
		category: 1,
		id: 112,
		added: 1524190597767,
		favorite: false
	},
	{
		title: "Guja Lacidmad",
		url: "http://ceca.td/puizju",
		description: "",
		category: 5,
		id: 113,
		added: 1524190597768,
		favorite: false
	},
	{
		title: "Zopfiuk colalih ac Burup",
		url: "http://efonu.ss/silzoc",
		description: "",
		category: 1,
		id: 114,
		added: 1524190597769,
		favorite: true
	},
	{
		title: "Nohewfok jefcivmi",
		url: "http://gitzukger.hr/wotwu",
		description: "",
		category: 2,
		id: 115,
		added: 1524190597770,
		favorite: false
	},
	{
		title: "Famduzmi hebomu hili ke",
		url: "http://aditup.gi/nostu",
		description: "",
		category: 2,
		id: 116,
		added: 1524861967309,
		favorite: true
	},
	{
		title: "Liifa ipefe Dukwa",
		url: "http://lodsatheb.cf/ravcorip",
		description: "",
		category: 2,
		id: 117,
		added: 1524862057309,
		favorite: false
	},
	{
		title: "Jafamiv ig wo velmuwsu",
		url: "http://dena.ni/zu",
		description: "",
		category: 3,
		id: 118,
		added: 1524862067309,
		favorite: false
	},
	{
		title: "Wubitwu",
		url: "http://onwoliv.bz/ci",
		description: "",
		category: 3,
		id: 119,
		added: 1524862077309,
		favorite: false
	},
	{
		title: "Voamvid loz vek itsokfo",
		url: "http://dodmu.lv/jocadpe",
		description: "",
		category: 2,
		id: 120,
		added: 1524862077309,
		favorite: false
	},
	{
		title: "Fis efejiwi mir Webo",
		url: "http://giliwe.er/rag",
		description: "",
		category: 5,
		id: 121,
		added: 1524862082309,
		favorite: false
	},
	{
		title: "Ida ozebiho Pu",
		url: "http://imroek.ee/bimwe",
		description: "",
		category: 2,
		id: 122,
		added: 1524862083309,
		favorite: false
	},
	{
		title: "Lazajzeb bablik",
		url: "http://jutha.ly/nakfifpin",
		description: "",
		category: 0,
		id: 123,
		added: 1524862084309,
		favorite: false
	},
	{
		title: "Ho jo olacero wooc",
		url: "http://wo.cl/ruhetlo",
		description: "",
		category: 3,
		id: 124,
		added: 1524862085309,
		favorite: true
	},
	{
		title: "Pedpe vafinavu behduki di",
		url: "http://ig.ga/fuhiro",
		description: "",
		category: 4,
		id: 125,
		added: 1524862086309,
		favorite: true
	},
	{
		title: "Mus okiogi kumum Jozes",
		url: "http://mew.fj/faogi",
		description: "",
		category: 1,
		id: 126,
		added: 1524862087109,
		favorite: false
	},
	{
		title: "Mohgumci hoz cif Juzdilobo",
		url: "http://dolda.mz/iruku",
		description: "",
		category: null,
		id: 127,
		added: 1524862087200,
		favorite: false
	},
	{
		title: "Lot ojdi",
		url: "http://lake.fk/ziote",
		description: "",
		category: 1,
		id: 128,
		added: 1524862087308,
		favorite: true
	},
	{
		title: "Hezama gilvav apegi mur Liwnonu",
		url: "http://pobgum.li/ofo",
		description: "",
		category: 4,
		id: 129,
		added: 1524862087309,
		favorite: false
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
	bookmarks: defaultBookmarks.splice(0,50),
	prefs: defaultUserPrefs
};
