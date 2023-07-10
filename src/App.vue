<script setup lang="ts">
import AppAside from '@/layout/AppAside.vue';
import AppHeader from '@/layout/AppHeader.vue';
import AppContentArea from '@/layout/AppContentArea.vue';
import AppIcon from '@/components/AppIcon.vue';

import { ref } from 'vue';

const collapsedSidebar = ref(false);
const theme = ref<'dark' | 'light'>('light');

const onToggle = () => {
	if (theme.value === 'light') {
		theme.value = 'dark';
		return;
	}
	theme.value = 'light';
};

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
		<app-aside
			:theme="theme"
			@switch-mode="onToggle"
			@toggle-nav="onToggleSidebar"
		/>
		<section
			class="bg-grey-300 dark:bg-black-200 transiton duration-300 h-screen relative overflow-hidden"
			:class="
				collapsedSidebar
					? 'pl-0 z-10'
					: 'pl-0 z-10 md:z-0 md:pl-65 xl:pl-75'
			"
		>
			<!-- header -->
			<app-header
				:collapsed-sidebar="collapsedSidebar"
			/>

			<!-- content area -->
			<app-content-area />

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
