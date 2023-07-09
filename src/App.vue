<script setup lang="ts">
import AppAside from '@/layout/AppAside.vue';
import AppHeader from '@/layout/AppHeader.vue';
import AppContentArea from '@/layout/AppContentArea.vue';

import { ref } from 'vue';

const open = ref(false);
// const onToggle = () => (open.value = !open.value);
</script>
<template>
	<main class="wrapper">
		<!-- aside -->
    <app-aside />
		<section
			class="bg-grey-200 transiton duration-300 h-screen relative overflow-hidden"
			:class="open ? 'pl-0 z-10' : 'pl-75'"
		>
      <!-- header -->
      <app-header />

			<!-- content area -->
      <app-content-area />
		</section>
	</main>
</template>
