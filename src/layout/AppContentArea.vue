<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
	onBeforeRouteUpdate,
	useRoute,
} from 'vue-router';
import { storeToRefs } from 'pinia';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppColumn from '@/components/columns/AppColumn.vue';
import AppColumnButton from '@/components/columns/AppColumnButton.vue';
import AppViewTask from '@/components/tasks/AppViewTask.vue';
import AppTaskForm from '@/components/tasks/AppTaskForm.vue';
import AppDeleteTask from '@/components/tasks/AppDeleteTask.vue';
import AppBoardForm from '@/components/boards/AppBoardForm.vue';
import AppDeleteBoard from '@/components/boards/AppDeleteBoard.vue';
import AddColumn from '@/components/columns/AddColumn.vue';

import { useColumnStore } from '@/store/useColumnStore';
import { useQueryParams } from '@/hooks/useQueryParams';
import { logger } from '@/utils/logger';
import { DEFAULT_COLUMN_ACTIONS } from '@/constants/queryParamsModes';

const route = useRoute();
const ColumnStore = useColumnStore();
const { onUpdateQuery } = useQueryParams();

const loading = ref(false);

const { activeColumns, isEmptyColumns } =
	storeToRefs(ColumnStore);

const { getActiveColumnsInABoard } = ColumnStore;

const handleRequest = async (id: string) => {
	loading.value = true;
	try {
		await getActiveColumnsInABoard(id);
		loading.value = false;
	} catch (err) {
		logger.error(err);
		loading.value = false;
	}
};

onMounted(() => {
	handleRequest(route.params.boardId as string);
});

onBeforeRouteUpdate((to, from) => {
	if (to.params.boardId !== from.params.boardId) {
		handleRequest(to.params.boardId as string);
	}
});

const onClick = () => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: DEFAULT_COLUMN_ACTIONS.add,
	});
};
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
					@click="onClick"
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
						v-for="column in activeColumns"
						:key="column.id"
						v-bind="column"
					/>
					<app-column-button />
				</div>
			</div>
		</div>
	</div>
	<!-- MANAGE TASK FORMS/MODALS HERE -->
	<app-view-task />
	<app-task-form />
	<app-delete-task />
	<!-- END MANAGE TASK FORMS/MODALS HERE -->

	<!-- MANAGE BOARD FORMS/MODALS HERE -->
	<app-board-form />
	<app-delete-board />
	<!-- END MANAGE BOARD FORM/MODALS HERE -->

	<!-- MANAGE COLUMNS FORMS/MODALS HERE -->
	<add-column />
	<!-- END MANAGE COLUMNS FORMS/MODALS HERE -->
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
