# Basic API Client for sleep.me chilipad dock pro

This repo provides a typescript package to do basic API operations against the chilipad given an API key which can be obtained at: https://docs.developer.sleep.me/

Basic Usage Example:

```typescript
  const list = await client.getDeviceList();
  console.log(list);

  const devices = await Promise.all(
    list.map((device) => client.getDeviceStatus(device.id))
  );
  console.log(devices);
```



