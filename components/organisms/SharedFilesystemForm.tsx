"use client";

import type { FormEvent } from "react";
import { Button } from "../atoms/Button";
import { Form } from "../atoms/Form";
import { TextField } from "../atoms/TextField";
import { NumberSliderField } from "../molecules/NumberSliderField";

export const SharedFilesystemForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Submitted values:", data);
  };

  return (
    <div className="max-w-sm p-6 border border-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Create new shared Filesystem
      </h2>

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
        />

        <div className="mt-6 flex gap-4">
          <Button
            type="reset"
            variant="outlined"
            colorScheme="secondary"
            icon={{ name: "trash" }}
            className="flex-1 justify-center"
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
