<script setup lang="ts">
import AppIcon from '@/components/shared/AppIcon.vue';
import AppBoardListCard from '@/components/boards/AppBoardListCard.vue';
import AppBrandLogo from '@/components/shared/AppBrandLogo.vue';

</script>
<template>
	<aside
		class="
			aside
			fixed top-0 left-0 bottom-0 
			h-full bg-white dark:bg-black-300 z-1 
			w-65 xl:w-75 flex overflow-hidden flex-col
			shadow-[1px_0_0_0_rgba(228,235,250,1)]
			dark:shadow-[1px_0_0_0_rgba(62,63,78,1)]
		"
	>
		<div
			class="aside__brand px-6 pt-8"
		>
			<app-brand-logo />
		</div>

		<app-board-list-card />

		<div class="aside__bottom pt-4 xl:pt-2 pr-6 pb-8 -mt-4">
			<button 
				class="
					aside__toggler outline-none m-0 
					transition duration-200
					flex w-full items-center font-bold
				text-grey-100 hover:text-purple
				hover:bg-purple/10 dark:hover:bg-white
				 rounded-tr-full rounded-br-full
				"
			@click="$emit('toggle-nav')"
			>
				<app-icon icon="eye-closed" />
				Hide sidebar
			</button>
		</div>
	</aside>
</template>
<style lang="css" scoped>
.aside__brand {
	padding-bottom: 38px;
}
.aside__toggler {
	gap: 15px;
	font-size: 15px;
	line-height: 19px;
	padding: 14px 31px 15px 31px;
}
</style>