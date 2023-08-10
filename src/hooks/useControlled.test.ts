import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import useControlled from './useControlled'; // Adjust the path to your composable

describe('useControlled', () => {
  it('handles controlled state', async () => {
    const modelValue = ref('controlled');
    const [value, setValue] = useControlled({
      modelValue,
      default: 'default',
    });

    expect(value.value).toBe('controlled');

    await setValue('newControlledValue');
    expect(value.value).toBe('newControlledValue');
  });

  it('handles uncontrolled state', async () => {
    const [value, setValue] = useControlled({
      default: 'default',
    });

    expect(value.value).toBe('default');

    await setValue('newUncontrolledValue');
    expect(value.value).toBe('newUncontrolledValue');
  });

  it('emits update:modelValue for uncontrolled state', async () => {
    const [value, setValue] = useControlled({
      default: 'default',
    });

    const wrapper = mount({
      template: '<div @click="setValue">Click me</div>',
      setup() {
        return {
          setValue,
        };
      },
    });

    await wrapper.trigger('click');
    expect(value.value).toBe('newUncontrolledValue');
  });
});
