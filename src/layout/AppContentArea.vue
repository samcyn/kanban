<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import {
	onBeforeRouteUpdate,
	useRoute,
} from 'vue-router';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppColumn from '@/components/columns/AppColumn.vue';
import AppColumnButton from '@/components/columns/AppColumnButton.vue';

import { IColumn } from '@/models';
import BoardService from '@/services/BoardService';

const loading = ref(false);
const columns = ref<IColumn[]>([]);
const route = useRoute();
const boardService = new BoardService();

const isEmptyColumns = computed(
	() => columns.value.length === 0
);

const getColumns = async (id: string) => {
	loading.value = true;
	try {
		const response =
			await boardService.getColumnsInBoards(id);
		columns.value = response.data;
		loading.value = false;
	} catch (err) {
		console.error(err);
	}
};

onMounted(() => {
	getColumns(route.params.boardId as string);
});

onBeforeRouteUpdate((to, from) => {
	if (to.params.boardId !== from.params.boardId) {
		getColumns(to.params.boardId as string);
	}
});
</script>
<template>
	<div
		class="contentArea relative pt-6 pb-6 md:pb-50px"
	>
		<!-- loader -->
		<div
			v-if="loading"
			class="absolute inset-0 w-full h-full bg-white/80 dark:bg-black-300/80 z-1"
		>
			loading
		</div>
		<div
			class="px-4 md:px-6 overflow-auto h-full"
		>
			<!-- if no columns, display this -->
			<div
				class="empty text-center flex flex-col justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				v-if="isEmptyColumns"
			>
				<p
					class="empty__title mb-6 text-grey-100"
				>
					This board is empty. Create a new column
					to get started.
				</p>
				<app-button
					class="flex items-center justify-center gap-1"
					size="large"
				>
					<app-icon
						icon="plus"
						width="12"
						height="12"
					/>
					Add New Column
				</app-button>
			</div>
			<!-- display columns -->
			<div v-else class="min-h-fit">
				<!-- columns rows -->
				<div
					role="list"
					class="flex gap-6 h-full"
				>
					<app-column
						v-for="column in columns"
						:key="column.id"
						v-bind="column"
					/>
					<app-column-button />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="css" scoped>
.contentArea {
	height: calc(100% - 64px);
	background-color: inherit;
}
.empty__title {
	font-size: 18px;
	font-weight: 700;
	line-height: 23px;
}

@media (min-width: 768px) {
	.contentArea {
		height: calc(100% - 80px);
	}
}

@media (min-width: 1280px) {
	.contentArea {
		height: calc(100% - 96px);
	}
}
</style>
