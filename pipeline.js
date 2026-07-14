// TASK 1 — Clean the data
export function cleanTrips(trips) {
  return trips.filter(trip => trip.valid === true && trip.fare > 0);
}

// TASK 2 — Revenue of the day
export function totalRevenue(trips) {
  return trips.reduce((sum, trip) => sum + trip.fare, 0);
}

// TASK 3 — Unique passengers and the blacklist
export function uniquePassengers(trips) {
  const cardIds = trips.map(trip => trip.cardId);
  return new Set(cardIds);
}

export function isBlocked(cardId, blacklist) {
  const blockedSet = new Set(blacklist);
  return blockedSet.has(cardId);
}

// TASK 4 — Revenue report per station
export function revenueByStation(trips) {
  return trips.reduce((stationMap, trip) => {
    const currentRevenue = stationMap.get(trip.station) || 0;
    stationMap.set(trip.station, currentRevenue + trip.fare);
    return stationMap;
  }, new Map());
}

// TASK 5 — Device cache
export function createDeviceCache() {
  const cache = new WeakMap();
  return {
    remember(device, status) {
      cache.set(device, status);
    },
    recall(device) {
      return cache.get(device);
    },
    knows(device) {
      return cache.has(device);
    }
  };
}

// TASK 6 — Prevent double charging
export function createProcessedRegistry() {
  const registry = new WeakSet();
  return {
    markProcessed(trip) {
      registry.add(trip);
    },
    isProcessed(trip) {
      return registry.has(trip);
    }
  };
}

// TASK 7 — The binary packet from the device
export function decodeCounter(packet) {
  const total = packet.reduce((sum, val) => sum + val, 0);
  const busiestMinute = packet.indexOf(Math.max(...packet));
  const activeMinutes = packet.filter(val => val > 0).length;
  
  return { total, busiestMinute, activeMinutes };
}

export function packCounter(numbers) {
  return new Uint8Array(numbers);
}
