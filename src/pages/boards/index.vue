<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import AppAside from '@/layout/AppAside.vue';
import AppIcon from '@/components/shared/AppIcon.vue';

import { useThemeStore } from '@/store/useThemeStore';

const collapsedSidebar = ref(false);
const ThemeStore = useThemeStore();

const { theme } = storeToRefs(ThemeStore);

const onToggleSidebar = () =>
	(collapsedSidebar.value =
		!collapsedSidebar.value);
</script>
<template>
	<main
		class="wrapper"
		:class="{
			dark: theme === 'dark',
		}"
	>
		<!-- aside -->
		<app-aside @toggle-nav="onToggleSidebar" />
		<section
			class="bg-grey-300 dark:bg-black-200 transiton duration-300 h-screen relative overflow-hidden"
			:class="
				collapsedSidebar
					? 'pl-0 z-10'
					: 'pl-0 z-10 md:z-0 md:pl-65 xl:pl-75'
			"
		>
			<!-- router view here -->
			<router-view
				:collapsed-sidebar="collapsedSidebar"
			></router-view>

			<!-- aside toggler -->
			<div
				v-if="collapsedSidebar"
				class="fixed bottom-8 hidden md:block"
			>
				<button
					class="toggler flex items-center rounded-tr-full rounded-br-full text-white bg-purple hover:bg-purple/30"
					@click="onToggleSidebar"
				>
					<app-icon
						icon="eye"
						width="16"
						height="11"
					/>
				</button>
			</div>
		</section>
	</main>
</template>
<style lang="css" scoped>
.toggler {
	padding: 19px 22px 18.8px 18px;
}
</style>
