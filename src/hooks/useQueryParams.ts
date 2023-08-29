import { onMounted, reactive, toRefs } from 'vue';
import { useRouter, useRoute, LocationQueryValueRaw, RouteLocationNormalizedLoaded, onBeforeRouteUpdate } from 'vue-router';

import { Mode_Type } from '@/models/queryParamsModeType';
import { DEFAULT_MODES } from '@/constants/queryParamsModes';

type QueryType = {
  taskId?: LocationQueryValueRaw | LocationQueryValueRaw[];
  entity_mode: LocationQueryValueRaw | LocationQueryValueRaw[];
}

export const useQueryParams = () => {
  const route = useRoute();
  const router = useRouter();

  const onUpdateQuery = (query: QueryType) => {
    const queries = route.query;
    router.replace({
      query: {
        ...queries,
        ...query,
      },
    })
  }

  return {
    onUpdateQuery
  };
}

export const useQueryMode = (props?: Mode_Type) => {
  const route = useRoute();
  const modes = reactive({
    isAddMode: false,
    isEditMode: false,
    isViewMode: false,
    isDeleteMode: false,
  });

  const onUpdate = (obj: RouteLocationNormalizedLoaded) => {
    const {
      taskId,
      entity_mode: mode
    } = obj.query;
    const {
      boardId
    } = obj.params;
    const hasBoardId = boardId !== undefined && boardId !== '';
    const hasTaskId = taskId !== undefined && taskId !== '';
    const property = props ? props : DEFAULT_MODES;

    modes.isAddMode = hasBoardId && mode === property.add;
    modes.isEditMode = hasTaskId && mode === property.edit;
    modes.isViewMode = hasTaskId && mode === property.view;
    modes.isDeleteMode = hasTaskId && mode === property.delete;
  }

  onMounted(() => {
    onUpdate(route);
  });

  onBeforeRouteUpdate((to) => {
    onUpdate(to);
  });

  const {
    isAddMode,
    isEditMode,
    isViewMode,
    isDeleteMode,
  } = toRefs(modes);

  return {
    isAddMode,
    isEditMode,
    isViewMode,
    isDeleteMode,
  }
}