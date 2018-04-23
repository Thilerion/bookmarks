<template>
<div class="main-wrapper">
	<div class="main-fixed">
		This part stays on top.
	</div>
	<div class="scroll-wrap vertical">
		<main class="main-content">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio facere vitae quisquam debitis placeat enim blanditiis tenetur explicabo, qui excepturi eligendi quo similique iusto illo quibusdam ad nesciunt cumque hic itaque amet tempore minus. Tempore recusandae delectus veritatis nam impedit ex officiis totam praesentium eos facere excepturi, qui asperiores!</p>
			<p>Possimus voluptatum perferendis reiciendis iste iure mollitia in ad? Possimus consectetur in, nisi, perspiciatis iusto ad maxime aspernatur ut id non quod dolorum? Nobis corporis et hic unde, ad optio doloribus eos dolorem exercitationem natus ratione molestias dolores cumque excepturi itaque laborum aliquid. Exercitationem recusandae sed repellat voluptatum fugiat numquam.</p>
			<p>Autem doloribus provident optio impedit doloremque nostrum eligendi eius quae repudiandae, officia earum accusantium. Quis, doloribus porro! Adipisci ex minus molestiae repellendus maiores non laboriosam consequatur quidem! Praesentium veritatis, impedit voluptatum delectus maiores nisi inventore voluptate aperiam repellendus ipsum nostrum atque sint perspiciatis sit iusto reprehenderit hic ad! At, facilis.</p>
			<p>Ducimus eaque suscipit, vel deserunt odio corrupti tempore aliquam ullam ad nisi, consectetur alias saepe quis iste beatae atque repudiandae quisquam. Aperiam cupiditate quidem voluptatum quaerat fuga, dolor perspiciatis quibusdam quasi dicta. Voluptas ipsa doloribus consectetur, temporibus autem laborum, libero nesciunt tempora perferendis illum, nisi quis id. Pariatur, ipsam quos.</p>
			<p>Hic nobis accusamus voluptatibus velit quaerat praesentium veritatis quod ipsum corrupti natus quidem magni quis officiis, veniam odio quas beatae consequuntur in. Totam delectus debitis quod aperiam cumque labore similique optio at earum illo? Doloribus voluptas, labore nisi soluta fugit corporis ipsa sapiente eos laudantium recusandae aperiam, in odio voluptatem.</p>
			<p>Cumque nemo modi non error temporibus, repellat veritatis dignissimos tempore id laborum distinctio quaerat odit nihil nesciunt omnis quo mollitia iure optio reiciendis sunt voluptas odio! Quas quod reprehenderit cum obcaecati inventore, deleniti at nemo, animi vitae, facere commodi debitis ipsa magni eos ducimus minus hic recusandae sequi id. Vel.</p>
			<p>Tenetur, magnam soluta. Nulla libero, mollitia dolorum id distinctio inventore illo consectetur sed eligendi explicabo, fugiat consequatur. Nisi, libero reprehenderit. Culpa impedit nihil soluta dolorem accusamus ab rerum non placeat nostrum recusandae eaque consequatur odio asperiores, quos, enim dolor nobis neque doloremque, totam cumque sunt. Explicabo reiciendis aperiam minus culpa.</p>
			<p>Adipisci, quidem id tenetur laudantium et nostrum animi voluptates in dolorem non voluptas expedita ab nesciunt, voluptate ad velit? Officia, nam, quidem natus delectus dolorum hic animi itaque in iure dolores eaque mollitia beatae quasi non velit repudiandae ea qui, architecto illum ad deleniti cumque. Magnam vitae perspiciatis sequi quidem!</p>
			<p>Iusto facilis corporis saepe voluptate debitis vitae. Doloremque ipsum consequuntur accusantium harum esse facilis voluptatibus sapiente suscipit, nesciunt reprehenderit cumque cupiditate optio modi sed est minima dolorem quasi ipsa vel. Necessitatibus soluta architecto quaerat porro vitae libero, ipsa accusamus adipisci tempora assumenda perspiciatis excepturi dolores ad asperiores est non distinctio.</p>
			<p>Quam reprehenderit dolorum sint eligendi expedita, blanditiis nemo maxime. Saepe accusamus est veniam eos ad voluptatem, molestiae magnam perferendis quas suscipit. Provident sunt odio ducimus, neque esse eligendi, sequi exercitationem mollitia, numquam rerum eum suscipit. Expedita voluptatibus saepe eveniet, accusamus eligendi vitae dolores adipisci at nulla deserunt ratione porro explicabo.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio facere vitae quisquam debitis placeat enim blanditiis tenetur explicabo, qui excepturi eligendi quo similique iusto illo quibusdam ad nesciunt cumque hic itaque amet tempore minus. Tempore recusandae delectus veritatis nam impedit ex officiis totam praesentium eos facere excepturi, qui asperiores!</p>
			<p>Possimus voluptatum perferendis reiciendis iste iure mollitia in ad? Possimus consectetur in, nisi, perspiciatis iusto ad maxime aspernatur ut id non quod dolorum? Nobis corporis et hic unde, ad optio doloribus eos dolorem exercitationem natus ratione molestias dolores cumque excepturi itaque laborum aliquid. Exercitationem recusandae sed repellat voluptatum fugiat numquam.</p>
			<p>Autem doloribus provident optio impedit doloremque nostrum eligendi eius quae repudiandae, officia earum accusantium. Quis, doloribus porro! Adipisci ex minus molestiae repellendus maiores non laboriosam consequatur quidem! Praesentium veritatis, impedit voluptatum delectus maiores nisi inventore voluptate aperiam repellendus ipsum nostrum atque sint perspiciatis sit iusto reprehenderit hic ad! At, facilis.</p>
		</main>
	</div>
	
</div>
</template>

<script>
export default {
	components: {
		
	},

}
</script>

<style scoped>
.main-wrapper {
	display: flex;
	flex-direction: column;
	background: var(--bg-light-beta);
}

.main-fixed {
	flex: 0 0 auto;
	padding-top: 1em;
	padding-bottom: 1em;
}

.main-content {
	flex: 1 1 auto;
	padding: 0.5em 2em;
}

.scroll-wrap {
	--bg: var(--bg-light-beta);
}
</style>
