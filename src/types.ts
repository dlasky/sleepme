export interface Device {
    id: string;
    name: string;
    attachments: string[];
}

export interface Status {
  about: About;
  control: Control;
  status: Status;
}

export interface About {
  firmware_version: string;
  ip_address: string;
  lan_address: string;
  mac_address: string;
  model: string;
  serial_number: string;
}

export interface Control {
  display_temperature_unit: string;
  set_temperature_c: number;
  set_temperature_f: number;
  thermal_control_status: "standby" | "active";
  time_zone: string;
}

export interface Status {
  is_connected: boolean;
  is_water_low: boolean;
  water_level: number;
  water_temperature_f: number;
  water_temperature_c: number;
}
