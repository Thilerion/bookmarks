const defaultBookmarks = [
	{
		title: "Reddit",
		url: "https://www.reddit.com",
		id: 0,
		category: 4,
		added: 1520090067705,
		favorite: true
	},
	{
		title: "nu.nl",
		url: "https://www.nu.nl",
		id: 1,
		category: 3,
		added: 1520890167705,
		favorite: true
	},
	{
		title: "Agenda",
		url: "https://www.google.com/calendar",
		id: 3,
		category: 4,
		added: 1520390267705,
		favorite: true
	},
	{
		title: "Learn Vue 2: Basic Data Binding",
		url: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1",
		id: 8,
		category: 5,
		added: 1522190367705,
		favorite: false
	},
	{
		title: "Plex",
		url: "https://app.plex.tv/web/app",
		id: 4,
		category: 1,
		added: 1521690467705,
		favorite: false
	},
	{
		title: "YouTube",
		url: "https://www.youtube.com",
		id: 2,
		category: 0,
		added: 1527190567705,
		favorite: false
	},
	{
		title: "Vigenère cipher - Wikipedia",
		url: "https://en.m.wikipedia.org/wiki/Vigenère_cipher",
		id: 7,
		category: 2,
		added: 1520190667705,
		favorite: false
	},
	{
		title: "Whatsapp",
		url: "https://web.whatsapp.com",
		id: 6,
		category: 1,
		added: 1521690767705,
		favorite: false
	},
	{
		title: "Blackboard",
		url: "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp",
		id: 5,
		category: 0,
		added: 1522590867705,
		favorite: false
	},
	{
		title: "Alpha",
		url: "https://www.greekalpha.com",
		id: 9,
		category: 3,
		added: 1520090067706,
		favorite: false
	},
	{
		title: "Beta",
		url: "https://www.beta.nl",
		id: 10,
		category: 0,
		added: 1520890177705,
		favorite: false
	},
	{
		title: "Gamma",
		url: "https://www.gamma.com/bla-bla/blaaaa/gammaaaaaa",
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
		id: 13,
		category: 5,
		added: 1521690467205,
		favorite: false
	},
	{
		title: "Zeto",
		url: "https://www.zeta.com",
		id: 14,
		category: null,
		added: 1527190537705,
		favorite: false
	},
	{
		title: "Eta",
		url: "https://en.m.eta.org/",
		id: 15,
		category: null,
		added: 1520190867705,
		favorite: false
	},
	{
		title: "Theta",
		url: "https://web.Theta.com",
		id: 16,
		category: 1,
		added: 1521690717705,
		favorite: false
	},
	{
		title: "Iota",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		id: 17,
		category: 2,
		added: 1522590267705,
		favorite: false
	},
	{
		title: "RegExp/Test\\Something   //\\\\\\//\\///\\^***%^&%@@^%^$#&!",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		id: 18,
		category: 2,
		added: 1522590267706,
		favorite: false
	},
	{
		title:
			"RegExp%2FTest%5CSomething%20%20%20%2F%2F%5C%5C%5C%2F%2F%5C%2F%2F%2F%5C%5E***%25%5E%26%25%40%40%5E%25%5E%24%23%26!",
		url: "http://iota.kappa.nl/lambda/nu/nu-xi-omikron.jsp",
		id: 19,
		category: 2,
		added: 1522590267707,
		favorite: false
	},
	{
		title: "Gon",
		url: "http://avfi.kr/rubwaw",
		category: 0,
		id: 50,
		added: 1527190597705,
		favorite: false
	},
	{
		title: "Debfir kincudo",
		url: "http://hilig.bb/go",
		category: 1,
		id: 51,
		added: 1527190597706,
		favorite: false
	},
	{
		title: "Zuk ja Papwu",
		url: "http://vew.zm/ju",
		category: 0,
		id: 52,
		added: 1527190597707,
		favorite: true
	},
	{
		title: "Wej lerar Sazdatak",
		url: "http://peofbog.ro/lawjurbo",
		category: 3,
		id: 53,
		added: 1527190597708,
		favorite: false
	},
	{
		title: "Patbes gimuug kek ojgopo",
		url: "http://sajtuk.gu/kehpub",
		category: null,
		id: 54,
		added: 1527190597709,
		favorite: false
	},
	{
		title: "Nije detkodzob po azfu",
		url: "http://vu.zw/kupnum",
		category: 3,
		id: 55,
		added: 1527190597710,
		favorite: false
	},
	{
		title: "Ow tudfo cuktoni mivinpuv Dowo",
		url: "http://onuuwi.ae/hup",
		category: 2,
		id: 56,
		added: 1527190597711,
		favorite: false
	},
	{
		title: "Fiv ra favda",
		url: "http://vuznul.com/barkamak",
		category: 1,
		id: 57,
		added: 1527190597712,
		favorite: false
	},
	{
		title: "Za ahwu usha",
		url: "http://rigutul.py/pundeh",
		category: 4,
		id: 58,
		added: 1527190597713,
		favorite: true
	},
	{
		title: "Rilejo govmag",
		url: "http://gemepok.py/riretmil",
		category: 1,
		id: 59,
		added: 1527190597714,
		favorite: false
	},
	{
		title: "Ovu tu Ejivoido",
		url: "http://wawwe.gt/fagju",
		category: 2,
		id: 60,
		added: 1527190597715,
		favorite: false
	},
	{
		title: "Cihkir Popdeupe",
		url: "http://cobi.ne/jut",
		category: 2,
		id: 61,
		added: 1527190597716,
		favorite: false
	},
	{
		title: "Noz bepri uh daspa",
		url: "http://me.gg/vacno",
		category: 0,
		id: 62,
		added: 1527190597717,
		favorite: false
	},
	{
		title: "Pu refa oku vev",
		url: "http://ocsol.eu/sobsejiz",
		category: 4,
		id: 63,
		added: 1527190597718,
		favorite: false
	},
	{
		title: "Gu tokugwo Ju",
		url: "http://kazmihi.bd/biole",
		category: 4,
		id: 64,
		added: 1527190597719,
		favorite: true
	},
	{
		title: "Guk jezpoeri Ogpeg",
		url: "http://vien.gq/sukce",
		category: 5,
		id: 65,
		added: 1527190597720,
		favorite: true
	},
	{
		title: "Zeujuefu mevuhir Kojli",
		url: "http://do.mn/ubi",
		category: null,
		id: 66,
		added: 1527190597721,
		favorite: true
	},
	{
		title: "Hi Ce",
		url: "http://ga.cm/viel",
		category: 4,
		id: 67,
		added: 1527190597722,
		favorite: false
	},
	{
		title: "Ib rirazko gid",
		url: "http://martat.cr/finugewin",
		category: 2,
		id: 68,
		added: 1527190597723,
		favorite: false
	},
	{
		title: "Wot suw",
		url: "http://vogunhun.ir/ed",
		category: null,
		id: 69,
		added: 1527190597724,
		favorite: false
	},
	{
		title: "Watvo Mef",
		url: "http://pe.gu/mo",
		category: 2,
		id: 70,
		added: 1527190597725,
		favorite: false
	},
	{
		title: "If lep Zo",
		url: "http://maale.cd/pel",
		category: 4,
		id: 71,
		added: 1527190597726,
		favorite: false
	},
	{
		title: "Me vo vokhorbab Jo",
		url: "http://ug.ci/ici",
		category: 1,
		id: 72,
		added: 1527190597727,
		favorite: false
	},
	{
		title: "Salgi sab dil",
		url: "http://go.my/juj",
		category: 5,
		id: 73,
		added: 1527190597728,
		favorite: false
	},
	{
		title: "Maknono fuwtosi tu Siaso",
		url: "http://poso.ax/ga",
		category: 5,
		id: 74,
		added: 1527190597729,
		favorite: false
	},
	{
		title: "Wihidu zoh hoidsu",
		url: "http://zepok.sz/od",
		category: null,
		id: 75,
		added: 1527190597730,
		favorite: false
	},
	{
		title: "Buheb vitowaned wegacepu Rujugpi",
		url: "http://itwig.am/cupajgug",
		category: 1,
		id: 76,
		added: 1527190597731,
		favorite: false
	},
	{
		title: "Golnu kedvugah awoharaku",
		url: "http://usbihahe.cm/ihi",
		category: 3,
		id: 77,
		added: 1527190597732,
		favorite: false
	},
	{
		title: "Akuzamid kitu lusko hapuspig Vufe",
		url: "http://cembar.do/egilaab",
		category: 5,
		id: 78,
		added: 1527190597733,
		favorite: false
	},
	{
		title: "Veravun lem jojinib nepus",
		url: "http://ehe.cf/mesid",
		category: 3,
		id: 79,
		added: 1527190597734,
		favorite: true
	},
	{
		title: "Ib",
		url: "http://atmem.np/fiv",
		category: null,
		id: 80,
		added: 1527190597735,
		favorite: false
	},
	{
		title: "Go av",
		url: "http://nigjuce.bm/ra",
		category: 5,
		id: 81,
		added: 1527190597736,
		favorite: false
	},
	{
		title: "Ja Ji",
		url: "http://wiwke.re/ne",
		category: null,
		id: 82,
		added: 1527190597737,
		favorite: false
	},
	{
		title: "Vudhab nigugim jo",
		url: "http://ag.mm/og",
		category: 4,
		id: 83,
		added: 1527190597738,
		favorite: true
	},
	{
		title: "Mouci",
		url: "http://ula.ge/dib",
		category: 4,
		id: 84,
		added: 1527190597739,
		favorite: false
	},
	{
		title: "Uvipildul jib",
		url: "http://saw.tw/juhi",
		category: 4,
		id: 85,
		added: 1527190597740,
		favorite: true
	},
	{
		title: "Iz epu kedlon wu",
		url: "http://biera.fk/jir",
		category: 2,
		id: 86,
		added: 1527190597741,
		favorite: true
	},
	{
		title: "Ram ok geb",
		url: "http://ogjifun.ie/rukukwa",
		category: null,
		id: 87,
		added: 1527190597742,
		favorite: false
	},
	{
		title: "Icuhahe nup Ovdim",
		url: "http://neukagub.bj/inetodvu",
		category: 3,
		id: 88,
		added: 1527190597743,
		favorite: false
	},
	{
		title: "Tuece mev zo",
		url: "http://aticalec.co/duwhup",
		category: 5,
		id: 89,
		added: 1527190597744,
		favorite: false
	},
	{
		title: "Izgul va huwofti anaega",
		url: "http://nor.ms/bolcif",
		category: 2,
		id: 90,
		added: 1527190597745,
		favorite: true
	},
	{
		title: "Wudiluwi bicdade kedteg tuhfanu Nobe",
		url: "http://de.nz/gem",
		category: 5,
		id: 91,
		added: 1527190597746,
		favorite: false
	},
	{
		title: "Jewoer",
		url: "http://sohlew.ua/gukvoh",
		category: 5,
		id: 92,
		added: 1527190597747,
		favorite: false
	},
	{
		title: "Icufecub get diuzimap vu Repu",
		url: "http://vazri.bo/kuehe",
		category: 1,
		id: 93,
		added: 1527190597748,
		favorite: true
	},
	{
		title: "Migitfat sumwedam pafa lemiba",
		url: "http://ruuwgod.so/mi",
		category: 3,
		id: 94,
		added: 1527190597749,
		favorite: false
	},
	{
		title: "Ohcagiv mak Ibnifo",
		url: "http://kaneapa.id/sujvifto",
		category: 4,
		id: 95,
		added: 1527190597750,
		favorite: false
	},
	{
		title: "Pa ru wi huhgef",
		url: "http://zuej.gm/caco",
		category: 3,
		id: 96,
		added: 1527190597751,
		favorite: false
	},
	{
		title: "Wor Soce",
		url: "http://pegvavoj.ua/apoaddoh",
		category: null,
		id: 97,
		added: 1527190597752,
		favorite: false
	},
	{
		title: "Si iliuf la",
		url: "http://reon.ru/tisub",
		category: 4,
		id: 98,
		added: 1527190597753,
		favorite: false
	},
	{
		title: "Nub jiznu jipmuj Sunbilu",
		url: "http://zado.io/jug",
		category: 1,
		id: 99,
		added: 1527190597754,
		favorite: false
	},
	{
		title: "Ilu",
		url: "http://sisevla.np/hedzas",
		category: 1,
		id: 100,
		added: 1527190597755,
		favorite: false
	},
	{
		title: "Uzizo",
		url: "http://bislaz.vg/iwojubka",
		category: 4,
		id: 101,
		added: 1527190597756,
		favorite: false
	},
	{
		title: "Deidi ekaugekus Godlon",
		url: "http://bohubdi.ke/ze",
		category: 5,
		id: 102,
		added: 1527190597757,
		favorite: false
	},
	{
		title: "Tero zet",
		url: "http://haze.lb/jil",
		category: null,
		id: 103,
		added: 1527190597758,
		favorite: true
	},
	{
		title: "Cacpigube mudkazdok dobeco rarejev",
		url: "http://riw.ci/zalamum",
		category: null,
		id: 104,
		added: 1527190597759,
		favorite: true
	},
	{
		title: "Ozi ehkicba moz sokre Enrir",
		url: "http://murtu.il/zad",
		category: 4,
		id: 105,
		added: 1527190597760,
		favorite: false
	},
	{
		title: "Juzbudik Uniokeuc",
		url: "http://subuzip.ci/ilgu",
		category: 5,
		id: 106,
		added: 1527190597761,
		favorite: false
	},
	{
		title: "Bebigniz doboiw doodpo",
		url: "http://jo.is/sa",
		category: 3,
		id: 107,
		added: 1527190597762,
		favorite: true
	},
	{
		title: "Je",
		url: "http://tefu.bs/pi",
		category: 3,
		id: 108,
		added: 1527190597763,
		favorite: false
	},
	{
		title: "Hewimabu dojweku ze ma",
		url: "http://nul.tz/kiposfej",
		category: 4,
		id: 109,
		added: 1527190597764,
		favorite: true
	},
	{
		title: "Jamjihemo kaz ji ejaci",
		url: "http://gafgobuz.gg/reki",
		category: 0,
		id: 110,
		added: 1527190597765,
		favorite: false
	},
	{
		title: "Fomme rufni emcig",
		url: "http://dedra.hk/hij",
		category: 5,
		id: 111,
		added: 1527190597766,
		favorite: false
	},
	{
		title: "Da",
		url: "http://tok.mr/uvomok",
		category: 1,
		id: 112,
		added: 1527190597767,
		favorite: false
	},
	{
		title: "Guja Lacidmad",
		url: "http://ceca.td/puizju",
		category: 5,
		id: 113,
		added: 1527190597768,
		favorite: false
	},
	{
		title: "Zopfiuk colalih ac Burup",
		url: "http://efonu.ss/silzoc",
		category: 1,
		id: 114,
		added: 1527190597769,
		favorite: true
	},
	{
		title: "Nohewfok jefcivmi",
		url: "http://gitzukger.hr/wotwu",
		category: 2,
		id: 115,
		added: 1527190597770,
		favorite: false
	},
	{
		title: "Famduzmi hebomu hili ke",
		url: "http://aditup.gi/nostu",
		category: 2,
		id: 116,
		added: 1527190597771,
		favorite: true
	},
	{
		title: "Liifa ipefe Dukwa",
		url: "http://lodsatheb.cf/ravcorip",
		category: 2,
		id: 117,
		added: 1527190597772,
		favorite: false
	},
	{
		title: "Jafamiv ig wo velmuwsu",
		url: "http://dena.ni/zu",
		category: 3,
		id: 118,
		added: 1527190597773,
		favorite: false
	},
	{
		title: "Wubitwu",
		url: "http://onwoliv.bz/ci",
		category: 3,
		id: 119,
		added: 1527190597774,
		favorite: false
	},
	{
		title: "Voamvid loz vek itsokfo",
		url: "http://dodmu.lv/jocadpe",
		category: 2,
		id: 120,
		added: 1527190597775,
		favorite: false
	},
	{
		title: "Fis efejiwi mir Webo",
		url: "http://giliwe.er/rag",
		category: 5,
		id: 121,
		added: 1527190597776,
		favorite: false
	},
	{
		title: "Ida ozebiho Pu",
		url: "http://imroek.ee/bimwe",
		category: 2,
		id: 122,
		added: 1527190597777,
		favorite: false
	},
	{
		title: "Lazajzeb bablik",
		url: "http://jutha.ly/nakfifpin",
		category: 0,
		id: 123,
		added: 1527190597778,
		favorite: false
	},
	{
		title: "Ho jo olacero wooc",
		url: "http://wo.cl/ruhetlo",
		category: 3,
		id: 124,
		added: 1527190597779,
		favorite: true
	},
	{
		title: "Pedpe vafinavu behduki di",
		url: "http://ig.ga/fuhiro",
		category: 4,
		id: 125,
		added: 1527190597780,
		favorite: true
	},
	{
		title: "Mus okiogi kumum Jozes",
		url: "http://mew.fj/faogi",
		category: 1,
		id: 126,
		added: 1527190597781,
		favorite: false
	},
	{
		title: "Mohgumci hoz cif Juzdilobo",
		url: "http://dolda.mz/iruku",
		category: null,
		id: 127,
		added: 1527190597782,
		favorite: false
	},
	{
		title: "Lot ojdi",
		url: "http://lake.fk/ziote",
		category: 1,
		id: 128,
		added: 1527190597783,
		favorite: true
	},
	{
		title: "Hezama gilvav apegi mur Liwnonu",
		url: "http://pobgum.li/ofo",
		category: 4,
		id: 129,
		added: 1527190597784,
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
