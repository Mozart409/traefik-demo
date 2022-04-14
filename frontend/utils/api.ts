/* const coffeeCountRES = await cache.fetch(
  'coffee-count',
  () => getCoffeeCount(),
  60 * 10 * 1
)
 */
import ky from 'ky'

export const incr = async (key: string) => {
  const json = await ky.post('/api/redis/incr', { json: { key } }).json()
  return json
}

export const decr = async (key: string) => {
  const json = await ky.post('/api/redis/decr', { json: { key } }).json()
  return json
}

export const getAmount = async (key: string) => {
  const json = await ky.post('/api/redis/get', { json: { key } }).json()
  return json
}
