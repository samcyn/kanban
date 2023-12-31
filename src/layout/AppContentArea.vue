<script setup lang="ts">
import { ref } from 'vue';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppButton from '@/components/shared/AppButton.vue';
import AppColumn from '@/components/columns/AppColumn.vue';
import AppColumnButton from '@/components/columns/AppColumnButton.vue';

import { IBoard } from '@/models';

const boards = ref<IBoard>({
	id: 'PLA',
	name: 'Platform Launch',
	columns: [
		{
			id: 'todo',
			label: '#49C4E5',
			name: 'Todo',
			tasks: [
				{
					id: '1',
					title: 'Build UI for onboarding flow',
					description: '',
					status: 'Todo',
					subtasks: [
						{
							id: '1',
							title: 'Sign up page',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Sign in page',
							isCompleted: false,
						},
						{
							id: '3',
							title: 'Welcome page',
							isCompleted: false,
						},
					],
				},
				{
					id: '2',
					title: 'Build UI for search',
					description: '',
					status: 'Todo',
					subtasks: [
						{
							id: '1',
							title: 'Search page',
							isCompleted: false,
						},
					],
				},
				{
					id: '3',
					title: 'Build settings UI',
					description: '',
					status: 'Todo',
					subtasks: [
						{
							id: '1',
							title: 'Account page',
							isCompleted: false,
						},
						{
							id: '2',
							title: 'Billing page',
							isCompleted: false,
						},
					],
				},
				{
					id: '4',
					title:
						'QA and test all major user journeys',
					description:
						'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
					status: 'Todo',
					subtasks: [
						{
							id: '1',
							title: 'Internal testing',
							isCompleted: false,
						},
						{
							id: '2',
							title: 'External testing',
							isCompleted: false,
						},
					],
				},
			],
		},
		{
			id: 'doing',
			label: '#8471F2',
			name: 'Doing',
			tasks: [
				{
					id: '1',
					title:
						'Design settings and search pages',
					description: '',
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title: 'Settings - Account page',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Settings - Billing page',
							isCompleted: true,
						},
						{
							id: '3',
							title: 'Search page',
							isCompleted: false,
						},
					],
				},
				{
					id: '2',
					title:
						'Add account management endpoints',
					description: '',
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title: 'Upgrade plan',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Cancel plan',
							isCompleted: true,
						},
						{
							id: '3',
							title: 'Update payment method',
							isCompleted: false,
						},
					],
				},
				{
					id: '3',
					title: 'Design onboarding flow',
					description: '',
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title: 'Sign up page',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Sign in page',
							isCompleted: false,
						},
						{
							id: '3',
							title: 'Welcome page',
							isCompleted: false,
						},
					],
				},
				{
					id: '4',
					title: 'Add search enpoints',
					description: '',
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title: 'Add search endpoint',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Define search filters',
							isCompleted: false,
						},
					],
				},
				{
					id: '5',
					title: 'Add authentication endpoints',
					description: '',
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title: 'Define user model',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Add auth endpoints',
							isCompleted: false,
						},
					],
				},
				{
					id: '6',
					title:
						'Research pricing points of various competitors and trial different business models',
					description:
						"We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
					status: 'Doing',
					subtasks: [
						{
							id: '1',
							title:
								'Research competitor pricing and business models',
							isCompleted: true,
						},
						{
							id: '2',
							title:
								'Outline a business model that works for our solution',
							isCompleted: false,
						},
						{
							id: '3',
							title:
								'Talk to potential customers about our proposed solution and ask for fair price expectancy',
							isCompleted: false,
						},
					],
				},
			],
		},
		{
			id: 'done',
			label: '#67E2AE',
			name: 'Done',
			tasks: [
				{
					id: '1',
					title: 'Conduct 5 wireframe tests',
					description:
						'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Complete 5 wireframe prototype tests',
							isCompleted: true,
						},
					],
				},
				{
					id: '2',
					title: 'Create wireframe prototype',
					description:
						'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Create clickable wireframe prototype in Balsamiq',
							isCompleted: true,
						},
					],
				},
				{
					id: '3',
					title:
						'Review results of usability tests and iterate',
					description:
						"Keep iterating through the subtasks until we're clear on the core concepts for the app.",
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Meet to review notes from previous tests and plan changes',
							isCompleted: true,
						},
						{
							id: '2',
							title:
								'Make changes to paper prototypes',
							isCompleted: true,
						},
						{
							id: '3',
							title: 'Conduct 5 usability tests',
							isCompleted: true,
						},
					],
				},
				{
					id: '4',
					title:
						'Create paper prototypes and conduct 10 usability tests with potential customers',
					description: '',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Create paper prototypes for version one',
							isCompleted: true,
						},
						{
							id: '2',
							title:
								'Complete 10 usability tests',
							isCompleted: true,
						},
					],
				},
				{
					id: '5',
					title: 'Market discovery',
					description:
						'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Interview 10 prospective customers',
							isCompleted: true,
						},
					],
				},
				{
					id: '6',
					title: 'Competitor analysis',
					description: '',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title:
								'Find direct and indirect competitors',
							isCompleted: true,
						},
						{
							id: '2',
							title:
								'SWOT analysis for each competitor',
							isCompleted: true,
						},
					],
				},
				{
					id: '7',
					title: 'Research the market',
					description:
						'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
					status: 'Done',
					subtasks: [
						{
							id: '1',
							title: 'Write up research analysis',
							isCompleted: true,
						},
						{
							id: '2',
							title: 'Calculate TAM',
							isCompleted: true,
						},
					],
				},
			],
		},
	],
});
</script>
<template>
	<div class="contentArea pt-6 pb-6 md:pb-50px">
		<div
			class="px-4 md:px-6 overflow-auto h-full"
		>
			<!-- if no columns, display this -->
			<div
				class="empty text-center flex flex-col justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				v-if="false"
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
				<div role="list" class="flex gap-6 h-full">
					<app-column
						v-for="column in boards.columns"
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
