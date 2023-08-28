import { useRouter, useRoute, LocationQueryRaw } from 'vue-router';


export const useQuery = () => {
  const route = useRoute();
  const router = useRouter();
  const queries = route.query;

  const onUpdateQuery = (query: LocationQueryRaw) => {
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