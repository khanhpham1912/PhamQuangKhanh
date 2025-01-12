import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const displayValue = (value?: string | number | null) => {
  if (!value) return "-";
  return value;
};

// ref: radixui Slot component
export const mergeProps = (slotProps: AnyProps, childProps: AnyProps) => {
  // all child props should override
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      // if the handler exists on both, we compose them
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      }
      // but if it exists only on the slot, we use only this one
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // if it's `style`, we merge them
    else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
};
export const getElementRef = (element: React.ReactElement) => {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element as any).ref;
  }

  return (element.props as any).ref || (element as any).ref;
};

export const capitalizeFirstLetter = (text: string) => {
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
};
