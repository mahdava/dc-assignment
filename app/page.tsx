"use client";

import { Button } from "@/components/atoms/Button";
import { Form } from "@/components/atoms/Form";
import { NumberField } from "@/components/atoms/NumberField";
import { Slider, SliderTrack } from "@/components/atoms/Slider";
import { TextField } from "@/components/atoms/TextField";
import { NumberSliderField } from "@/components/molecules/NumberSliderField";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  size: number;
}

export default function Home() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      size: 0,
    },
  });

  const onSubmit = (data: FormValues) => {
    setSubmitted(data);
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Storage Allocation Form</h1>
      <Button
        colorScheme="secondary"
        size="small"
        iconOnly
        icon={{ name: "plus" }}
      ></Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              label="Name"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          name="size"
          control={control}
          rules={{
            min: { value: 0, message: "Minimum size is 0" },
            max: { value: 100, message: "Maximum size is 100" },
          }}
          render={({ field }) => (
            <NumberField
              label="Size (GB)"
              description="Select a value between 0 and 100"
              errorMessage={errors.size?.message}
              minValue={0}
              maxValue={100}
              step={1}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <NumberSliderField
          minValue={0}
          maxValue={100}
          step={5}
          label="Size (GB)"
        ></NumberSliderField>
        <Slider minValue={0} maxValue={100} step={1}>
          <SliderTrack></SliderTrack>
        </Slider>
        <Button type="submit" isDisabled={true}>
          Submit
        </Button>

        <Button type="submit">Hello</Button>
      </Form>

      {submitted && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Submitted values:</h2>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Size:</strong> {submitted.size} GB
          </p>
        </div>
      )}
    </main>
  );
}
