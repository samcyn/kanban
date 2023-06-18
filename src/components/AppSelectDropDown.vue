<template>
	<div class="dropdown is-active">
		<div class="dropdown-trigger">
			<button
				class="button"
				aria-haspopup="true"
				aria-controls="dropdown-menu"
			>
				<span>Dropdown button</span>
				<span class="icon is-small">
					<i
						class="fas fa-angle-down"
						aria-hidden="true"
					></i>
				</span>
			</button>
		</div>
		<div
			class="dropdown-menu"
			id="dropdown-menu"
			role="menu"
		>
			<div class="dropdown-content">
				<a href="#" class="dropdown-item">
					Dropdown item
				</a>
				<a class="dropdown-item">
					Other dropdown item
				</a>
				<a
					href="#"
					class="dropdown-item is-active"
				>
					Active dropdown item
				</a>
				<a href="#" class="dropdown-item">
					Other dropdown item
				</a>
				<hr class="dropdown-divider" />
				<a href="#" class="dropdown-item">
					With a divider
				</a>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
.dropdown {
	display: inline-flex;
	position: relative;
	vertical-align: top;
}

.dropdown.is-active .dropdown-menu,
.dropdown.is-hoverable:hover .dropdown-menu {
	display: block;
}

.dropdown.is-right .dropdown-menu {
	left: auto;
	right: 0;
}

.dropdown.is-up .dropdown-menu {
	bottom: 100%;
	padding-bottom: 4px;
	padding-top: initial;
	top: auto;
}

.dropdown-menu {
	display: none;
	left: 0;
	min-width: 12rem;
	padding-top: 4px;
	position: absolute;
	top: 100%;
	z-index: 20;
}

.dropdown-content {
	background-color: #fff;
	border-radius: 0.375em;
	box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
		0 0 0 1px rgba(10, 10, 10, 0.02);
	padding-bottom: 0.5rem;
	padding-top: 0.5rem;
}

.dropdown-item {
	color: #4a4a4a;
	display: block;
	font-size: 0.875rem;
	line-height: 1.5;
	padding: 0.375rem 1rem;
	position: relative;
}

a.dropdown-item,
button.dropdown-item {
	padding-right: 3rem;
	text-align: inherit;
	white-space: nowrap;
	width: 100%;
}

a.dropdown-item:hover,
button.dropdown-item:hover {
	background-color: #f5f5f5;
	color: #0a0a0a;
}

a.dropdown-item.is-active,
button.dropdown-item.is-active {
	background-color: #485fc7;
	color: #fff;
}

.dropdown-divider {
	background-color: #ededed;
	border: none;
	display: block;
	height: 1px;
	margin: 0.5rem 0;
}

.button {
	background-color: #fff;
	border-color: #dbdbdb;
	border-width: 1px;
	color: #363636;
	cursor: pointer;
	justify-content: center;
	padding-bottom: calc(0.5em - 1px);
	padding-left: 1em;
	padding-right: 1em;
	padding-top: calc(0.5em - 1px);
	text-align: center;
	white-space: nowrap;
}

.button strong {
	color: inherit;
}
</style>
