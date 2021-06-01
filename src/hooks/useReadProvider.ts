import { useQuery } from 'react-query'

import { NO_REFETCH_QUERY_OPTIONS, QUERY_KEYS } from '../constants'
import { readProvider } from '../services/readProvider'

/**
 *
 * @param {*} chainId a chainId to get a provider for
 * @returns Providers for the provided chain id
 */
const useReadProvider = (chainId) => {
  const {
    data: _readProvider,
    isFetched,
    isFetching
  } = useQuery([QUERY_KEYS.readProvider, chainId], () => readProvider(chainId), {
    ...NO_REFETCH_QUERY_OPTIONS
  })
  console.log(chainId, _readProvider)
  const isReadProviderReady =
    isFetched && _readProvider?.network?.chainId === chainId && !isFetching
  return { readProvider: _readProvider, isReadProviderReady }
}

export default useReadProvider
