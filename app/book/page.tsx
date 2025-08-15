"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { employees, type Service, type Duration } from "../../lib/employees";

export default function BookPage() {
  const router = useRouter();

  const [employeeId, setEmployeeId] = useState(employees[0]?.id ?? "default");
  const [service, setService] = useState<Service>("swedish");
  const [duration, setDuration] = useState<Duration>(60);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(
      `/book/employee/${employeeId}?service=${service}&duration=${duration}`
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Massage</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Therapist */}
        <div>
          <label htmlFor="employee" className="block font-medium mb-2">
            Select your therapist
          </label>
          <select
            id="employee"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="w-full border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-halo-500"
          >
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.displayName}
              </option>
            ))}
          </select>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block font-medium mb-2">
            Select service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
            className="w-full border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-halo-500"
          >
            <option value="swedish">Swedish</option>
            <option value="deep">Deep Tissue</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block font-medium mb-2">
            Select duration
          </label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value) as Duration)}
            className="w-full border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-halo-500"
          >
            <option value={60}>60 Minutes</option>
            <option value={100}>100 Minutes</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-halo-600 text-white font-semibold rounded-md hover:bg-halo-700 transition"
          >
            Continue to Scheduling
          </button>
        </div>
      </form>
    </div>
  );
}
