<script setup lang="ts">
import {
	usePagination,
	DOTS,
} from '@/hooks/usePagination';
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		totalCount: number;
		pageSize: number;
		siblingCount: number;
		currentPage: number;
	}>(),
	{}
);

const emit = defineEmits<{
	(event: 'onPageChange', num: number|string): void;
}>();

const { paginationRange } = usePagination(props);

const showPagination = computed(() => {
	// If there are less than 2 times in pagination range we shall not render the component
	if (
		props.currentPage === 0 ||
		paginationRange.value.length < 2
	) {
		return false;
	}
	return true;
});

const onNext = () => {
	emit('onPageChange', props.currentPage + 1);
};

const onPrevious = () => {
	emit('onPageChange', props.currentPage - 1);
};

const lastPage = computed(
	() =>
		paginationRange.value[
			paginationRange.value.length - 1
		]
);
</script>
<template>
	<nav v-show="showPagination" aria-label="...">
		<ul class="list-style-none flex">
			<li @click="onPrevious">
				<button
					class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
					:disabled="currentPage === 1"
				>
					<span class="page-link">Previous</span>
				</button>
			</li>
			<template
				v-for="pageNumber in paginationRange"
			>
				<li
					v-if="pageNumber === DOTS"
					class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
				>
					<span class="page-link">&#8230;</span>
				</li>
				<li v-else class="page-item">
					<a
						class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
						href="#"
						@click="
							$emit('onPageChange', pageNumber)
						"
						>{{ pageNumber }}</a
					>
				</li>
			</template>
			<li class="page-item">
				<button
					class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
					href="#"
					:disabled="currentPage === lastPage"
					@click="onNext"
				>
					Next
				</button>
			</li>
		</ul>
	</nav>
</template>
