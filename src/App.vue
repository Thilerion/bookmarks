<template>
<div id="app">	
	<!--<div class="col col-left">
		<header>
			<svg version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px" y="0px"
				viewBox="0 0 54 54" xml:space="preserve"
				class="bookmark-logo"
			>
				<path style="fill:rgba(200,50,50,1);" d="M8.589,0C5.779,0,3.5,2.279,3.5,5.089V54l18-12l18,12V6c0-3.3,2.7-6,6-6H8.589z"/>
				<path style="fill:rgba(200,50,50,0.6);" d="M45.41,0.005C42.151,0.054,39.5,2.73,39.5,6v17h11V5.135C50.5,2.315,48.225,0.03,45.41,0.005z"/>
			</svg>
			<h1 class="header-font">Bookmarks</h1>
	  	</header>
		<BmSubHeader class="sub-header"/>
		<BmSidebar class="sidebar"/>
   </div>

	<div class="col col-right">
		<BmMainContent/>	   
	</div>

	<component :is="activeModal"/>-->
	<BmSidebar class="col-side" />

	<main class="col-main">
		Main content goes header
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam ad possimus nam error vel id, nobis sequi voluptate, asperiores porro eos non ducimus voluptates fugiat aut corrupti, natus iste dignissimos sit accusamus soluta at perferendis! Ullam minima minus, quae nemo quaerat quas illum. Ducimus voluptatum laudantium optio possimus quos eaque. Assumenda quam sint, commodi porro unde adipisci ullam placeat cum, maxime ipsum iste, quisquam quod ex eos iusto exercitationem autem similique amet. Quibusdam expedita nam quae illum voluptatibus consequuntur architecto fuga molestias fugiat fugit delectus, quis quaerat aperiam possimus atque excepturi voluptate cumque, inventore minus reprehenderit voluptatem amet! Nihil.</p>
		<p>Atque quaerat tempora veritatis dolorem, a corrupti temporibus perspiciatis rem vero voluptates officia modi sequi, quia quidem pariatur molestiae dolore error delectus, ea voluptatibus ducimus sed! Ad temporibus placeat eius reprehenderit excepturi deserunt ut, voluptatibus commodi exercitationem officiis culpa sapiente quo nobis atque incidunt. Aliquid alias expedita corporis! Obcaecati magni culpa odit, perspiciatis unde dolorum, voluptas minima inventore ipsam iste vitae esse vero libero id quasi qui amet, porro natus iusto sint cupiditate! Molestias ratione pariatur dolore tempora alias sit a. Assumenda omnis, ipsum vitae reprehenderit eligendi nulla saepe est veniam vel sint sapiente fugiat sequi explicabo? A, enim at.</p>
		<p>Atque odit repellat ipsum tempore fuga tenetur possimus porro laborum, consequatur excepturi quod minus blanditiis. In tempore quaerat omnis, dicta odit consequuntur eos laudantium dolor obcaecati quae tempora nisi, repellat nihil. Voluptates nesciunt natus, magnam facere dolore provident! Perspiciatis, iure ab et, debitis ullam est totam sint laborum illo cumque, illum nisi assumenda? Voluptate, fuga blanditiis? Aut vel rerum eaque recusandae asperiores ut excepturi modi sapiente perspiciatis corporis praesentium iure reiciendis repellat nihil blanditiis, officia harum illum? Dolores aut facilis aliquid odio? Est aliquam, beatae quisquam mollitia ut laudantium sequi voluptate, velit aspernatur doloremque id culpa numquam cumque, delectus quis!</p>
		<p>Eius deserunt nostrum aliquid nulla, incidunt fugit atque. Blanditiis, sit? Placeat in itaque error nulla, libero unde distinctio provident beatae sapiente! Debitis necessitatibus error doloremque voluptatum quo esse vitae nihil quod incidunt itaque doloribus nostrum nisi veniam recusandae eveniet aliquam iste, aut magni est tempore veritatis vero impedit. Possimus, molestiae pariatur eligendi repellendus omnis nostrum aut et corrupti earum, delectus atque labore quae, cum voluptatem iure repellat consequuntur. Recusandae consectetur, nemo, impedit reprehenderit dolorem quo assumenda officia culpa voluptatem dicta inventore asperiores ea? Officiis ratione doloremque quod perspiciatis ab laboriosam quas. Totam, corporis sit excepturi quidem suscipit corrupti modi aperiam.</p>
		<p>Dolor voluptatem sit nostrum saepe inventore cumque, itaque laboriosam dignissimos possimus architecto quidem quo doloribus dolores repellendus assumenda non molestiae voluptatibus soluta aliquam fugiat adipisci dolore, a sequi minima. Nisi, perspiciatis cumque repellendus quidem iure doloribus saepe magni culpa autem quaerat officia corporis porro rerum animi dolore alias in molestias! Accusantium necessitatibus praesentium dignissimos sapiente deserunt tenetur nihil quaerat ad laudantium esse modi recusandae, odit repudiandae libero. Dicta blanditiis incidunt ut distinctio voluptatem. Repudiandae molestiae ad soluta, quaerat voluptatum quisquam in, voluptates natus tempora voluptatibus porro est ut autem. Praesentium quas magni, ipsum magnam maiores perspiciatis ut tenetur quidem culpa!</p>
		<p>Labore neque voluptatem delectus reprehenderit quam consequuntur. Voluptas, corporis dolores sunt voluptate non dolorem commodi alias nam quae adipisci labore odit esse asperiores suscipit omnis! Culpa dolorum iusto ullam rerum harum, amet nostrum atque eaque deleniti labore at omnis fugit laudantium, odit sit officiis ad. Repellendus maiores assumenda quis minus ipsa quo perspiciatis blanditiis quod perferendis sunt nulla, officia voluptatibus molestias voluptate fugiat asperiores rem velit magni facilis debitis dignissimos itaque harum? Nisi alias animi laboriosam minima dicta nam eum eos nulla ipsum. Id enim suscipit corporis soluta fugiat consequatur dolorem deserunt, neque mollitia nobis libero eligendi vitae et nesciunt!</p>
		<p>Voluptas quaerat esse repellat. Expedita illo rerum ipsum pariatur doloribus deleniti dicta a sit aliquid alias quam, et, accusamus itaque quidem quo assumenda deserunt voluptatem ea. Nihil natus odit maxime quaerat quis architecto, libero est delectus earum impedit quae, perspiciatis reiciendis soluta blanditiis. Dicta, architecto et fuga beatae enim, saepe totam recusandae quis vero dolor voluptates perspiciatis ut nobis facilis sunt? Quis enim repudiandae excepturi atque quo soluta accusantium earum asperiores voluptatum tenetur hic quisquam consequatur, ad, eligendi qui, cumque facilis necessitatibus voluptatem consequuntur aperiam possimus fugit! Earum modi minus magni eaque, quasi aspernatur voluptate corporis itaque aliquam nisi explicabo.</p>
		<p>Dolor, corporis quis placeat libero molestias asperiores, sint unde soluta saepe iste ratione sunt. Fugit reprehenderit aspernatur, quod quaerat atque doloribus, iure dignissimos, ullam deleniti laborum eaque sint delectus laboriosam officiis tempora non possimus repellendus. Ipsa dignissimos quod est porro impedit eos, eius dicta nihil tempore quae minus possimus, reiciendis ab obcaecati. Labore dolor neque repellat modi quae autem sed illum atque, sint in sunt, mollitia, accusamus libero tempore beatae. Ut ratione possimus aliquid harum tenetur a quam pariatur molestiae blanditiis? Adipisci ad amet quod exercitationem consequuntur itaque doloribus blanditiis hic. Omnis praesentium voluptates iusto est voluptas eum molestiae corrupti.</p>
		<p>Sit reiciendis neque possimus, soluta eum pariatur? Voluptatibus, magnam pariatur. Inventore molestias repudiandae, fuga pariatur cum soluta. Temporibus commodi delectus, laborum officiis in qui quis atque facere quasi perspiciatis, aliquam, a inventore iste odio nobis eos sed error? Facilis sint necessitatibus odit maxime ullam mollitia qui provident, vitae adipisci accusantium incidunt eum magnam neque illum impedit architecto doloremque recusandae nihil doloribus dicta quis animi in amet. Aperiam voluptas ea minima, accusamus optio similique facilis ducimus consectetur iste non magnam recusandae fugiat eum maiores cum molestias molestiae sequi. Accusamus labore eum doloribus fugiat, atque earum, perferendis expedita alias aliquam enim necessitatibus!</p>
		<p>Eum, delectus sunt culpa earum fugit maiores harum eligendi cum cumque consequuntur reiciendis eveniet voluptates porro ab omnis, iure vero? Veniam amet, totam omnis asperiores odio sint quisquam. Perspiciatis distinctio animi doloremque saepe rem perferendis explicabo, optio officia fugit harum quisquam omnis eos vitae beatae repellat? Quae voluptatum quod illum laborum eius! Rerum deleniti fugit blanditiis, officiis neque aliquid. Accusantium commodi quam, quae at atque voluptates earum beatae officia, temporibus aut, non dicta inventore. Veritatis commodi cupiditate earum qui ex tempora incidunt vero quis at? Minus asperiores laudantium recusandae, modi neque dolor tempora repellendus quaerat temporibus tempore debitis provident incidunt?</p>
		<p>Soluta assumenda cumque provident, fugit sequi ex facilis! Quidem, harum, quasi qui architecto doloremque possimus tempora illo, reprehenderit eveniet quis accusamus cupiditate perspiciatis quas impedit vel hic fugiat blanditiis earum. Veritatis, quaerat ab. Nihil perferendis, vero omnis eligendi eum inventore temporibus sunt dignissimos ad sed ipsam facilis iure laudantium pariatur veniam dolorum consequatur debitis amet dolore ratione. Quas, ab deserunt a quae iure eaque aut minus. Non sint qui unde possimus numquam aspernatur corrupti blanditiis, nihil sed temporibus reiciendis ullam voluptates error harum, consequatur tenetur, cum recusandae deserunt rerum cupiditate similique consectetur! Quos adipisci odio atque illo itaque, voluptatem aut!</p>
		<p>Possimus repellat ea quaerat illum nam iste iure magni, commodi sed sapiente mollitia sint, cumque obcaecati repellendus iusto dolores dolorem expedita officia enim maiores maxime rem laudantium. Ab at esse ipsa, iusto beatae repellat pariatur suscipit temporibus dignissimos rem dolores similique neque amet impedit laboriosam deserunt nam vitae saepe mollitia, corrupti doloremque aliquid quam in. Repellat, quod sunt voluptates quasi molestiae natus facere, laboriosam sint explicabo reiciendis dicta, unde necessitatibus non amet numquam voluptate voluptas commodi delectus inventore magni. Sint aut reprehenderit debitis placeat dignissimos hic ducimus corporis assumenda quasi eum facere nesciunt voluptates quo laudantium sit, dolorem vero veritatis.</p>
		<p>Fuga voluptate debitis reiciendis odit vel itaque eaque eos minus et officiis odio exercitationem ratione delectus illum quas quos, velit eligendi nesciunt repellat soluta. Quod nemo voluptatibus sunt laboriosam, enim qui quas recusandae, dicta itaque voluptatem veritatis repudiandae aut rerum deserunt reprehenderit voluptates assumenda harum odio rem aspernatur quia consectetur alias perspiciatis. Aut esse soluta possimus est non. Enim molestias recusandae at illum itaque culpa dolorem, cumque ea sed saepe eos adipisci earum inventore temporibus hic sapiente quidem porro! Quia exercitationem tempore consectetur cupiditate quidem molestias atque dicta culpa, at ipsa rerum dolorum neque, natus officiis necessitatibus facilis dolore dolorem.</p>
		<p>Facere perferendis sit exercitationem laboriosam ipsum dignissimos neque soluta fuga minima eveniet. Eveniet impedit voluptatum incidunt, quos illo maxime, alias veniam voluptatem blanditiis hic corporis quaerat temporibus vitae deserunt quidem sint? Alias aut natus sapiente nostrum nulla sed! Optio molestiae aspernatur fugit omnis, architecto nisi quisquam provident illo. Culpa rem at doloribus fugit, porro accusantium odio fugiat ratione itaque vitae velit harum quos consectetur quam, laborum a quibusdam quo, cupiditate voluptatibus laboriosam asperiores incidunt sequi. Reiciendis, minus incidunt. Quaerat facere at, modi ipsam autem nobis corporis delectus voluptatum ipsa odio libero ad obcaecati quas dolore totam, rerum adipisci. Animi, deserunt!</p>
		<p>Doloremque voluptatibus, voluptas sit quod reiciendis voluptates nisi hic molestias, optio modi soluta nobis quo facilis accusantium error impedit ullam nihil. Dolorum aliquam qui ea. Accusamus ad consequatur ipsam cupiditate dolorem, magni aliquid molestiae laudantium? Sit voluptatibus nemo quidem? Sapiente, accusamus, tenetur earum quisquam perferendis dicta veritatis fugiat laudantium optio enim tempora reiciendis non repellat ex cumque ea quod iusto, iste et architecto natus eligendi! Expedita fugiat sapiente cumque ad labore? Eum quidem, non quod molestiae repellat, iusto, debitis fuga quia voluptates nisi id quibusdam aliquid a. Consectetur, amet. Id molestiae pariatur eos fuga dicta voluptate maiores, optio beatae aut.</p>
	</main>
	
</div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar';

export default {
	components: {
		BmSidebar: Sidebar
	}
}
/*
import SubHeader from '@/components/layout/SubHeader';
import BookmarkAdd from '@/components/modals/BookmarkAdd';
import TagAdd from '@/components/modals/TagAdd';
import MainContent from '@/components/layout/MainContent';

export default {
	components: {
		BmSidebar: Sidebar,
		BmSubHeader: SubHeader,
		BmMainContent: MainContent,
		BmBookmarkAdd: BookmarkAdd,
		BmTagAdd: TagAdd
	},
	computed: {
		activeModal() {
			return this.$store.getters.activeModal;
		}
	},
	methods: {
		enableModalBookmark() {
			this.$store.commit('enableModal', 0);
		},
		enableModalTag() {
			this.$store.commit('enableModal', 1);
		},
		watchTags(state, getters) {
			return getters.tags;
		},
		updateTagLocalStorage() {
			console.warn("Tags array has been updated!");
			this.$store.dispatch("saveTagsToLocalStorage");
		}
	},
	beforeMount() {
		this.$store.dispatch('retrieveUserPrefs');
		this.$store.dispatch('retrieveTags');
		this.$store.watch(this.watchTags, this.updateTagLocalStorage, {
			deep: true
		});
	}
}
*/
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:300,400,700');

html {
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: inherit;
}

html, body {
	min-height: 100%;
	margin: 0;
	padding: 0;
}

body {
	height: 100vh;
	font-family: Lato, sans-serif;
	overflow: hidden;
}

h1, h2, h3, h4 {
	margin: 0;
	font-weight: 300;
	font-family: 'Open Sans', sans-serif;
}

#app {
	height: 100%;
	display: flex;
}

.col-side {
	height: 100vh;
	overflow: hidden;
	flex: 0 0 20em;
}

.col-main {
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
	flex: 1 1 auto;
}

button {
	margin: 0;
	padding: 0;
	background: none;
	border: 1px solid black;
	border-radius: 5px;
	font-family: inherit;
	outline: none;
	cursor: pointer;
}
</style>
