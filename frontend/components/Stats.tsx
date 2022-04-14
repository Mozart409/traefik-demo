const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

import { useQuery } from 'react-query'
import { getAmount } from 'utils/api'

export default function Stats() {
  const key = 'nextjs'
  const { isLoading, isError, data, error } = useQuery(['getAmount', key], () =>
    getAmount(key)
  )
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt className="text-sm font-medium text-gray-500 truncate">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
        <div
          key={key}
          className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
        >
          <dt className="text-sm font-medium text-gray-500 truncate">{key}</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {JSON.stringify(data, null, 2)}
          </dd>
        </div>

        {isLoading && (
          <div className="animate-pulse px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {key}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {data}
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}
