<script setup lang="ts">
import { storeToRefs } from 'pinia';

import AppActivityIndicator from '@/components/shared/AppActivityIndicator/index.vue';
import { useBoardStore } from '@/store/useBoardStore.ts';

const boardStore = useBoardStore();
const { systemIsBusy } = storeToRefs(boardStore);
</script>
<template>
	<app-activity-indicator :loading="systemIsBusy">
		<router-view></router-view>
	</app-activity-indicator>
</template>
