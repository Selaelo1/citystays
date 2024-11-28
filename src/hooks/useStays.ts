import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/api';
import type { Stay } from '../utils/api';

export function useStays() {
  return useQuery({
    queryKey: ['stays'],
    queryFn: () => api.stays.list(),
  });
}

export function useStay(id: string) {
  return useQuery({
    queryKey: ['stays', id],
    queryFn: () => api.stays.get(id),
    enabled: !!id,
  });
}

export function useSearchStays() {
  return useMutation({
    mutationFn: api.stays.search,
  });
}