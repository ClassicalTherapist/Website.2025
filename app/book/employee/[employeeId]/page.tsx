import { employees, type Service, type Duration } from "../../../../lib/employees";
import { notFound } from "next/navigation";

interface PageProps {
  params: { employeeId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * Shows the Cal.com embed for the chosen therapist / service / duration.
 * Requires the corresponding env vars to be set:
 *  - NEXT_PUBLIC_CAL_URL_SWEDISH_60 / _100
 *  - NEXT_PUBLIC_CAL_URL_DEEP_60 / _100
 */
export default function EmployeeBookingPage({ params, searchParams }: PageProps) {
  const employee = employees.find((e) => e.id === params.employeeId);
  if (!employee) return notFound();

  const serviceParam = Array.isArray(searchParams.service)
    ? searchParams.service[0]
    : searchParams.service;
  const durationParam = Array.isArray(searchParams.duration)
    ? searchParams.duration[0]
    : searchParams.duration;

  const service: Service = serviceParam === "deep" ? "deep" : "swedish";
  const duration: Duration = Number(durationParam) === 100 ? 100 : 60;

  const bookingUrl = employee.calUrls[service][duration];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Schedule with {employee.displayName}
      </h1>

      {bookingUrl ? (
        <div className="relative" style={{ paddingBottom: "75%", height: 0 }}>
          <iframe
            title={`Booking with ${employee.displayName}`}
            src={bookingUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="payment"
          />
        </div>
      ) : (
        <p className="text-center text-red-600 mt-8">
          The booking link for a <b>{duration}</b>-minute <b>{service}</b> session with{" "}
          <b>{employee.displayName}</b> is not configured yet. Please set the
          corresponding variables in <code>.env</code>:
          {service === "swedish" ? (
            <> <code> NEXT_PUBLIC_CAL_URL_SWEDISH_{duration} </code> </>
          ) : (
            <> <code> NEXT_PUBLIC_CAL_URL_DEEP_{duration} </code> </>
          )}
        </p>
      )}
    </div>
  );
}
