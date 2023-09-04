<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import {
	onBeforeRouteUpdate,
	useRoute,
} from 'vue-router';
import * as yup from 'yup';

import AppModal from '@/components/shared/AppModal.vue';
import AppInput from '@/components/shared/AppInput.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppForm from '@/components/shared/AppForm/index.vue';
import { FieldArray } from 'vee-validate';

import {
	useQueryMode,
	useQueryParams,
} from '@/hooks/useQueryParams';
import { DEFAULT_BOARD_ACTIONS } from '@/constants/queryParamsModes';
import { UseFormProps } from '@/models/form';
import { IBoard } from '@/models';
import { useBoardStore } from '@/store/useBoardStore';
import BoardService from '@/services/BoardService';
import { logger } from '@/utils/logger';

const boardService = new BoardService();

const currentBoard = ref<IBoard>({
	id: '',
	name: '',
	columns: [{
		id: '1',
		name: '',
		tasks: []
	}],
});

const query = useRoute();
const { onUpdateQuery } = useQueryParams();
const { isAddMode, isEditMode } = useQueryMode(
	DEFAULT_BOARD_ACTIONS,
	'board'
);

const boardStore = useBoardStore();
const { onCreateBoard } = boardStore;

const handleGetBoard = async (id: string) => {
	try {
		const response =
			await boardService.getOneBoard(id);
		currentBoard.value = response.data;
	} catch (err) {
		logger.error(err);
	}
};

onMounted(() => {
	handleGetBoard(query.params.boardId as string);
});

onBeforeRouteUpdate((to) => {
	handleGetBoard(to.params.boardId as string);
});

const onHideBoard = () => {
	onUpdateQuery({
		taskId: undefined,
		entity_mode: undefined,
	});
};

const formOptions = computed<UseFormProps<IBoard>>(() => ({
	validationSchema: yup.object({
		name: yup.string().required("can't be empty"),
		columns: yup
			.array()
			.of(
				yup.object().shape({
					name: yup
						.string()
						.required("can't be empty"),
				})
			)
			.strict(),
	}),
	initialValues: {
		...currentBoard.value
	},
	async onSubmit(values) {
		try {
			await onCreateBoard(values);
			onHideBoard();
		} catch (err) {
			console.log(err);
		}
	},
}))
</script>
<template>
	<app-modal
		:show="isAddMode || isEditMode"
		@hide="onHideBoard"
	>
		<div
			class="card bg-white dark:bg-black-300 p-6 md:p-8 rounded-md m-auto md:max-w-[480px]"
		>
			<p
				class="text-black-100 dark:text-white text-middle font-bold mb-6"
			>
				{{
					isAddMode
						? 'Add New Board'
						: 'Edit Board'
				}}
			</p>
			<app-form
				class="flex flex-col gap-6"
				v-bind="formOptions"
			>
				<app-input
					label="Board Name"
					name="name"
					placeholder="e.g. Web Design"
				/>
				<!-- use field array here -->
				<field-array
					name="columns"
					v-slot="{ fields, push, remove }"
				>
					<fieldset>
						<p
							class="text-grey-100 dark:text-white text-small font-bold mb-2"
						>
							Board Columns
						</p>
						<!-- overflow scroll -->
						<div
							class="flex flex-col gap-3 max-h-[92px] overflow-y-auto mb-3"
						>
							<div
								v-for="(entry, idx) in fields"
								class="flex items-center gap-4"
								:key="entry.key"
							>
								<div class="flex-1">
									<app-input
										:name="`columns[${idx}].name`"
										placeholder="Todo"
									/>
								</div>
								<app-icon-button
									class-name="text-grey-100"
									width="15"
									height="15"
									viewBox="0 0 15 15"
									icon="close"
									@click="remove(idx)"
								/>
							</div>
						</div>
					</fieldset>
					<app-button
						class="w-full"
						type="button"
						variant="secondary"
						@click="
							push({
								id: `${fields.length + 1}`,
								label: '#000000',
								name: '',
								tasks: [],
							})
						"
						>+Add New Column</app-button
					>
				</field-array>
				<!-- end use of field array -->
				<app-button class="w-full" type="submit">
					{{
						isAddMode
							? 'Create New Board'
							: 'Save Changes'
					}}
				</app-button>
			</app-form>
		</div>
	</app-modal>
</template>
<style scoped lang="css">
.boards__link {
	padding-top: 14px;
	padding-bottom: 15px;
	font-size: 15px;
	line-height: 19px;
}
</style>
