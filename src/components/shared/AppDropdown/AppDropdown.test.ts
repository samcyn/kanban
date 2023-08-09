// import { mount } from '@vue/test-utils';
// import Dropdown from './Dropdown.vue'; // Adjust the path to your component

// describe('Dropdown', () => {
//   it('renders correctly', () => {
//     const wrapper = mount(Dropdown);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('opens and closes the dropdown on button click', async () => {
//     const wrapper = mount(Dropdown);

//     const button = wrapper.find('button');
//     expect(wrapper.vm.isOpen).toBe(false);

//     await button.trigger('click');
//     expect(wrapper.vm.isOpen).toBe(true);

//     await button.trigger('click');
//     expect(wrapper.vm.isOpen).toBe(false);
//   });

//   it('closes the dropdown when clicking outside', async () => {
//     const wrapper = mount(Dropdown);
//     await wrapper.setData({ isOpen: true });

//     expect(wrapper.vm.isOpen).toBe(true);

//     document.body.click(); // Simulate a click outside
//     await wrapper.vm.$nextTick();

//     expect(wrapper.vm.isOpen).toBe(false);
//   });

//   it('emits the selected value when an option is clicked', async () => {
//     const options = [
//       { id: 1, text: 'Option 1', value: 'value1' },
//       { id: 2, text: 'Option 2', value: 'value2' },
//     ];
//     const wrapper = mount(Dropdown, {
//       props: {
//         modelValue: 'value1',
//         options,
//       },
//     });

//     await wrapper.setData({ isOpen: true });
//     const optionButton = wrapper.find('button.text-grey-100');

//     await optionButton.trigger('click');
//     await wrapper.vm.$nextTick();

//     expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['value2']);
//   });

//   it('correctly displays the selected option text', async () => {
//     const options = [
//       { id: 1, text: 'Option 1', value: 'value1' },
//       { id: 2, text: 'Option 2', value: 'value2' },
//     ];
//     const wrapper = mount(Dropdown, {
//       props: {
//         modelValue: 'value1',
//         options,
//       },
//     });

//     const selectedOptionText = wrapper.find('.text-gray-700 span');
//     expect(selectedOptionText.text()).toBe('Option 1');
//   });

//   // Add more test cases as needed...
// });
