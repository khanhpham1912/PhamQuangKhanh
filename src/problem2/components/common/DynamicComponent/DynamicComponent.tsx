import { lazy, useEffect, useMemo, useState } from "react";
import { Show } from "../Show";

export const DynamicComponent = ({
  name,
  source,
  getNameCallback,
}: {
  name: string;
  source: string;
  getNameCallback?: Function;
}) => {
  const componentName = useMemo(() => {
    if (getNameCallback) {
      return getNameCallback(name);
    }
    return name;
  }, [name, getNameCallback]);

  const Component = lazy(
    () => import(/* @vite-ignore */ `${source}/${componentName}.tsx`)
  );

  return (
    <Show when={!!Component} fallback={<div>Component not found</div>}>
      <Component />
    </Show>
  );
};
