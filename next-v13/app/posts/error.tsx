"use client";

export default function ErrorPostWrapper({ error }: { error: Error }) {
  return <h2>oops!! {error.message}</h2>;
}