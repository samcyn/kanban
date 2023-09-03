import { logger } from '@/utils/logger';
import {
  reactive,
  ref,
  Ref,
  toRefs,
  UnwrapRef,
} from 'vue';

const useControlled = <T>(props: {
  controlled: Ref<T>
  default?: T
  componentName?: string
}): [Ref<T> | Ref<UnwrapRef<T>>, (newValue: UnwrapRef<T>) => void] => {
  const reactiveProps = reactive(props);
  const {
    controlled,
    default: defaultProp
  } = toRefs(reactiveProps);

  const isControlled = ref(controlled?.value !== undefined);

  logger.info(`component is ${isControlled.value ? 'controlled' : 'uncontrolled'} component:-${props.componentName || 'UnknownComponent'}`)

  const localState = ref<T>(defaultProp?.value);
  const value = isControlled.value ? controlled : localState;

  const setValueIfUncontrolled = (newValue: UnwrapRef<T>) => {
    if (!isControlled.value) {
      localState.value = newValue;
    }
  }

  return [value, setValueIfUncontrolled];
}


export default useControlled;