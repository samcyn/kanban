<script setup lang="ts">
import AppBrandLogo from '@/components/shared/AppBrandLogo.vue';
import AppTaskForm from '@/components/tasks/AppTaskForm.vue';
import AppBoardListCardMobile from '@/components/boards/AppBoardListCardMobile.vue';
import AppManageForm from '@/components/boards/AppManageBoardForm.vue';
defineProps<{
	collapsedSidebar: boolean;
	theme: 'light' | 'dark';
}>();
</script>
<template>
	<header class="bg-white dark:bg-black-300">
		<nav
			class="header__nav flex flex-nowrap items-center h-16 md:h-20 xl:h-24"
			aria-label="Main navigation"
		>
			<!-- logo/brand starts -->
			<div
				class="nav__brand md:shadow-[1px_0_0_0_rgba(228,235,250,1)] md:dark:shadow-[1px_0_0_0_rgba(62,63,78,1)]"
				:class="{
					'md:hidden': !collapsedSidebar,
				}"
			>
				<app-brand-logo
					class="logo"
					aria-label="kanban"
				/>
			</div>
			<!-- logo/brand ends -->
			<div
				class="header__titleWrap flex items-center"
			>
				<p
					class="header__title m-0 text-black-100 dark:text-white capitalize"
				>
					Launch Time
				</p>
				<!-- mobile icon for showing boards -->
				<app-board-list-card-mobile
					:theme="theme"
					@switch-mode="$emit('switch-mode')"
				/>
			</div>

			<div
				class="flex ml-auto text-grey-100 gap-4 md:gap-6 pt-4 xl:pt-5 pr-6 md:pr-30px xl:pr-8 pb-4 xl:pb-7"
			>
				<!-- add new task modal here -->
				<app-task-form mode="add" />
				<!-- manage delete and editing of board -->
				<app-manage-form />
			</div>
		</nav>
	</header>
</template>
<style lang="css" scoped>
.nav__brand {
	padding: 20px 16px 19px 16px;
}

.header__titleWrap {
	padding: 20px 0 21px;
}

.header__title {
	font-size: 18px;
	font-weight: 700;
	line-height: 23px;
}

@media (min-width: 768px) {
	.nav__brand {
		padding: 28px 24px 26px 24px;
	}
	.header__titleWrap {
		padding: 28px 0 27px 24px;
	}
	.header__title {
		font-size: 20px;
		line-height: 25px;
	}
}

@media (min-width: 1280px) {
	.nav__brand {
		padding: 35px 33px 35px 24px;
	}
	.header__titleWrap {
		padding: 29px 0 37px 24px;
	}
	.header__title {
		font-size: 24px;
		line-height: 30px;
	}
}
</style>
