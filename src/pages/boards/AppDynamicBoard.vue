<script setup lang="ts">
import AppHeader from '@/layout/AppHeader.vue';
import AppContentArea from '@/layout/AppContentArea.vue';

defineProps<{
	collapsedSidebar: boolean
}>();
</script>
<template>
	<!-- header -->
	<app-header
		:collapsed-sidebar="collapsedSidebar"
	/>

	<!-- content area -->
	<app-content-area />
</template>
