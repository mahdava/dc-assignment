"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { Form } from "../atoms/Form";
import { TextField } from "../atoms/TextField";
import { NumberSliderField } from "../molecules/NumberSliderField";

export const SharedFilesystemForm = () => {
  // In an ideal scenario, one would use Zod here
  // Left it out of scope only for lack of time

  const [submission, setSubmission] = useState<Record<string, string> | null>(
    null,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSubmission(
      Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])),
    );
  };

  return (
    <div className="max-w-sm p-10 border border-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 sr-only">
        Create new shared Filesystem
      </h2>

      {submission && (
        <div
          role="status"
          data-testid="submission-result"
          aria-live="polite"
          className="mb-6 p-4 bg-green-100 rounded animate-fade-in"
        >
          <h3 className="sr-only">Submission results</h3>
          <ul className="space-y-1 text-green-950">
            <li>
              <strong>Name:</strong>{" "}
              <span data-testid="submission-name">{submission.name}</span>
            </li>
            <li>
              <strong>Size (GB):</strong>{" "}
              <span data-testid="submission-size">{submission.size}</span>
            </li>
          </ul>
        </div>
      )}

      <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField
          name="name"
          label="Name"
          placeholder="enter text"
          className="max-w-3/5"
        />

        <NumberSliderField
          name="size"
          label="Size (GB)"
          minValue={0}
          maxValue={100}
          step={1}
          defaultValue={0}
          sliderClassName="data-[orientation=horizontal]:min-w-44"
        />

        <div className="mt-6 flex gap-4">
          <Button
            type="reset"
            variant="outlined"
            colorScheme="secondary"
            icon={{ name: "trash" }}
            className="flex-1 justify-center"
            onClick={() => setSubmission(null)}
          >
            Clear
          </Button>
          <Button type="submit" className="flex-1 justify-center">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
