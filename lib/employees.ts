// lib/employees.ts

/** Services offered (matches the pricing + ENV naming you set) */
export type Service = "swedish" | "deep";

/** Supported durations in minutes */
export type Duration = 60 | 100;

/** Employee (therapist) shape used by the app */
export type Employee = {
  /** Unique id (safe for URLs, no spaces) */
  id: string;
  /** Programmatic name (also no spaces) */
  name: string;
  /** Human-readable label shown in the UI */
  displayName: string;
  /** Cal.com booking links by service + duration */
  calUrls: Record<Service, Record<Duration, string>>;
};

/**
 * IMPORTANT
 * The URLs below are read from environment variables you already set in Vercel:
 *  - NEXT_PUBLIC_CAL_URL_SWEDISH_60
 *  - NEXT_PUBLIC_CAL_URL_SWEDISH_100
 *  - NEXT_PUBLIC_CAL_URL_DEEP_60
 *  - NEXT_PUBLIC_CAL_URL_DEEP_100
 *
 * Keep using those for the primary therapist.
 */
export const employees: Employee[] = [
  {
    id: "carlos",
    name: "carlos",
    displayName: "Carlos Santos, LMT",
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

  // To add another therapist later, duplicate this object and provide their own URLs.
  // Example (uncomment + fill when you’re ready):
  //
  // {
  //   id: "alex",
  //   name: "alex",
  //   displayName: "Alex Rivera, LMT",
  //   calUrls: {
  //     swedish: {
  //       60: process.env.NEXT_PUBLIC_CAL_URL_ALEX_SWEDISH_60 ?? "",
  //       100: process.env.NEXT_PUBLIC_CAL_URL_ALEX_SWEDISH_100 ?? "",
  //     },
  //     deep: {
  //       60: process.env.NEXT_PUBLIC_CAL_URL_ALEX_DEEP_60 ?? "",
  //       100: process.env.NEXT_PUBLIC_CAL_URL_ALEX_DEEP_100 ?? "",
  //     },
  //   },
  // },
];

/** Helper: quickly grab an employee by id (UI uses displayName) */
export const getEmployee = (id: string) =>
  employees.find((e) => e.id === id) ?? employees[0];
