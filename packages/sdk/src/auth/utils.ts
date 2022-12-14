export const isLastUpdateTimestampExpired = (
  lastUpdateTimestamp: number | undefined,
  expiration = 0,
) => {
  if (!lastUpdateTimestamp) {
    return true
  }

  const now = new Date()

  return Math.abs(lastUpdateTimestamp - now.getTime()) > expiration
}
