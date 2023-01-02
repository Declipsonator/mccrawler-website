import { useState, useCallback } from 'react';
import query from "query-string";

const setQueryStringWithoutPageReload = queryValue => {
  if (typeof window === "undefined") return;

  const newurl = window.location.protocol + "//" +
    window.location.host +
    window.location.pathname +
    queryValue;

  window.history.pushState({ path: newurl }, "", newurl);
};

export const getQueryStringValue = (
  key,
  queryString = (typeof window === "undefined") ? "" : window.location.search
) => {
  const values = query.parse(queryString);
  return values[key];
};

const setQueryStringValue = (
  key,
  value,
  queryString = (typeof window === "undefined") ? "" : window.location.search
) => {
  const values = query.parse(queryString);
  let newQueryValue = { ...values, [key]: value }
  if (!value) delete newQueryValue[key]
  setQueryStringWithoutPageReload(`?${query.stringify(newQueryValue)}`);
};


export function useQueryString(key, initialValue) {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

  const onSetValue = useCallback(
    newValue => {
      setValue(newValue);
      setQueryStringValue(key, newValue !== initialValue && newValue);
    },
    [key, initialValue]
  );

  if (typeof window === "undefined") return [initialValue, () => { }]

  return [value, onSetValue];
}