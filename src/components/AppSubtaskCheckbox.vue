<template>
	<div>
		<input
			id="id"
			type="checkbox"
			name="firstname"
			aria-label="hello"
			class="sr-only peer"
		/>
		<label 
			for="id" 
			class="
				relative
				cursor-pointer before:content-[''] 
				before:mr-10px before:inline-block 
				before:align-text-top before:w-4 
				before:h-4 before:bg-white
				peer-checked:before:bg-purple
				peer-checked:after:content-['✔']
				peer-checked:after:absolute
				peer-checked:after:left-1
				peer-checked:after:top-2
				peer-checked:after:bg-white
				peer-checked:after:w-0.5
				peer-checked:after:h-0.5
			"
		> 
			First name: 
		</label>
	</div>
</template>
<!-- box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
peer-checked:after:rotate-45 -->
