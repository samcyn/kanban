<script setup lang="ts">
import ColumnsHeader from '@/components/columns/AppColumnsHeader.vue';
import AddColumn from '@/components/columns/AddColumn.vue';
</script>
<template>
	<div
		role="listitem"
		class="columns w-70 basis-70 shrink-0 grow-0 relative"
	>
		<columns-header
			title=""
			color="transparent"
		/>
		<div
			class="columns__list flex flex-col gap-5 h-full"
		>
			<add-column>
				<button
					class="button flex items-center justify-center h-full text-grey-100 hover:text-purple bg-gradient-to-r from-[#e9effa] to-[#e9effa]/50 dark:bg-gradient-to-b dark:from-black-300/25 dark:to-black-300/10"
				>
					+ New Column
				</button>
			</add-column>
		</div>
	</div>
</template>
<style lang="css" scoped>
/* .columns__list {
	padding-top: 39px;
} */
.button {
	border-radius: 6px;
	border-radius: 6px;
	font-size: 24px;
	font-weight: 700;
	line-height: 30px;
}
</style>
