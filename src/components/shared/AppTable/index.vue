<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppPagination from '@/components/shared/AppPagination/index.vue';

const cats = ref<Record<string, any>[]>([]);
const currentSort = ref('name');
const currentSortDir = ref('asc');
const pageSize = ref(1);
const currentPage = ref(1);

onMounted(() => {
	fetch(
		'https://www.raymondcamden.com/.netlify/functions/get-cats'
	)
		.then((res) => res.json())
		.then((res) => {
			cats.value = res;
		});
});

const sort = (s: string) => {
	//if s == current sort, reverse
	if (s === currentSort.value) {
		currentSortDir.value =
			currentSortDir.value === 'asc'
				? 'desc'
				: 'asc';
	}
	currentSort.value = s;
};

const sortedCats = computed(() => {
	const firstPageIndex =
		(currentPage.value - 1) * pageSize.value;
	const lastPageIndex =
		firstPageIndex + pageSize.value;

	return cats.value
		.slice(firstPageIndex, lastPageIndex)
		.sort((a, b) => {
			let modifier = 1;
			if (currentSortDir.value === 'desc')
				modifier = -1;
			if (
				a[currentSort.value] <
				b[currentSort.value]
			)
				return -1 * modifier;
			if (
				a[currentSort.value] >
				b[currentSort.value]
			)
				return 1 * modifier;
			return 0;
		});
});

const onSetCurrentPage = (val: number|string) => {
	currentPage.value = Number(val);
};
</script>
<template>
	<div>
		<table
			class="min-w-full text-left text-sm font-light"
		>
			<thead
				class="border-b font-medium dark:border-neutral-500"
			>
				<tr>
					<th @click="sort('name')">Name</th>
					<th @click="sort('age')">Age</th>
					<th @click="sort('breed')">Breed</th>
					<th @click="sort('gender')">Gender</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="cat in sortedCats"
					:key="cat.id"
					class="border-b dark:border-neutral-500"
				>
					<td class="whitespace-nowrap px-6 py-4">
						{{ cat.name }}
					</td>
					<td class="whitespace-nowrap px-6 py-4">
						{{ cat.age }}
					</td>
					<td class="whitespace-nowrap px-6 py-4">
						{{ cat.breed }}
					</td>
					<td class="whitespace-nowrap px-6 py-4">
						{{ cat.gender }}
					</td>
				</tr>
			</tbody>
		</table>
		<app-pagination
			:current-page="currentPage"
			:total-count="cats.length"
			:page-size="pageSize"
			:sibling-count="1"
			@onPageChange="onSetCurrentPage"
		/>
		debug: sort={{ currentSort }}, dir={{
			currentSortDir
		}}
	</div>
</template>
