export type Service = "swedish" | "deep";
export type Duration = 60 | 100;

export type Employee = {
  /** Unique identifier (used in URLs) */
  id: string;
  /** Programmatic name (no spaces) */
  name: string;
  /** Human-readable label */
  displayName: string;
  /** Cal.com booking links per service + duration */
  calUrls: Record<Service, Record<Duration, string>>;
};

export const employees: Employee[] = [
  {
    id: "default",
    name: "default",
    displayName: "Primary Therapist",
    calUrls: {
      swedish: {
        60: process.env.NEXT_PUBLIC_CAL_URL_SWEDISH_60 ?? "",
        100: process.env.NEXT_PUBLIC_CAL_URL_SWEDISH_100 ?? "",
      },
      deep: {
        60: process.env.NEXT_PUBLIC_CAL_URL_DEEP_60 ?? "",
        100: process.env.NEXT_PUBLIC_CAL_URL_DEEP_100 ?? "",
      },
    },
  },
  // To add another provider later, copy this object and give them their own URLs.
];
