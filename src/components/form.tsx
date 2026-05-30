"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useShortenUrl } from "@/hooks/use-shorten-url";

import {
  shortenSchema,
  type ShortenFormData,
} from "@/schemas/shorten.schema";

import type { ShortenedUrl } from "@/App";
import type { Dispatch, SetStateAction } from "react";

interface FormProps {
  setUrls: Dispatch<SetStateAction<ShortenedUrl[]>>;
}

export function Form({
  setUrls,
}: FormProps) {
  const { shorten, loading } = useShortenUrl();

  const form = useForm<ShortenFormData>({
    resolver: zodResolver(shortenSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(data: ShortenFormData) {
    try {
      const promise = shorten(data.url);

      toast.promise(promise, {
        loading: "Shortening...",
        success: "URL shortened successfully!",
        error: "Failed to shorten URL",
      });

      const result = await promise;

      setUrls((prev) => [
        {
          originalUrl: data.url,
          shortUrl: result.result_url,
        },
        ...prev,
      ]);

      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="flex-row items-start gap-0 rounded-md bg-dark-violet py-12">
      <CardContent className="flex-1">
        <form
          id="form-shorten-link"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="url"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Shorten a link here..."
                    autoComplete="off"
                    className="rounded-md bg-[#ffffff]"
                  />

                  {fieldState.invalid && (
                    <FieldError
                      className="text-red-accent"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button
          size="lg"
          type="submit"
          form="form-shorten-link"
          disabled={loading}
          className="bg-cyan hover:bg-cyan/80 cursor-pointer rounded-md px-8"
        >
          {loading ? "Loading..." : "Shorten it!"}
        </Button>
      </CardFooter>
    </Card>
  );
}