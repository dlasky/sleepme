import { Control, Device, DeviceStatus, Status } from "./types";

const baseUrl = "https://api.developer.sleep.me/v1";

const base = async <T>(apiKey: string, urlPart: string, method = "GET", body?: string): Promise<T> => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    method,
  };

  if (method !== 'GET' && body) {
    options.body = body;
  }

  const url = `${baseUrl}/${urlPart}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};

export class Client {
  private apiKey: string;
  MAX_COLD = -1;
  MAX_HEAT = 999;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getDeviceList = async () => {
    return base<Device[]>(this.apiKey, "devices");
  };

  getDeviceStatus = async ( deviceId: string) => {
    return base<DeviceStatus>(this.apiKey, `devices/${deviceId}`)
  };

  setDeviceStatus = async ( deviceId: string, control:Control) => {
    const data = JSON.stringify({control})
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data)
  };

  setDisplayTemperatureUnit = async (deviceId: string, unit: string) => {
    const data = JSON.stringify({ display_temperature_unit: unit });
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data);
  };

  setTemperatureC = async (deviceId: string, temperature: number) => {
    const data = JSON.stringify({ set_temperature_c: temperature });
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data);
  };

  setTemperatureF = async (deviceId: string, temperature: number) => {
    const data = JSON.stringify({ set_temperature_f: temperature });
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data);
  };

  setThermalControlStatus = async (deviceId: string, status: "standby" | "active") => {
    const data = JSON.stringify({ thermal_control_status: status });
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data);
  };

  setTimeZone = async (deviceId: string, timeZone: string) => {
    const data = JSON.stringify({ time_zone: timeZone });
    return base<{}>(this.apiKey, `devices/${deviceId}`, 'PATCH', data);
  };

}
