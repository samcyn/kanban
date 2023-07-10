<script setup lang="ts">
import AppAside from '@/layout/AppAside.vue';
import AppHeader from '@/layout/AppHeader.vue';
import AppContentArea from '@/layout/AppContentArea.vue';

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
			@toggle-nav="collapsedSidebar = !collapsedSidebar"
		/>
		<section
			class="bg-grey-300 dark:bg-black-200 transiton duration-300 h-screen relative overflow-hidden"
			:class="collapsedSidebar ? 'pl-0 z-10' : 'pl-0 z-10 md:z-0 md:pl-75'"
		>
			<!-- header -->
			<app-header :collapsed-sidebar="collapsedSidebar" />

			<!-- content area -->
			<app-content-area />
		</section>
	</main>
</template>
