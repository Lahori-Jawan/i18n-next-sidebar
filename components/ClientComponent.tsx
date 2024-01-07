"use client";
import { axios } from "@/config";
import { useStore } from "@/store";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
// import { useIntl } from "react-intl";

export default function ExampleClientComponent({ lang }: { lang: string }) {
  //   const intl = useIntl();
  // await axios.get("https://dummyjson.com/products/1");
  const { districts, statuses, fetchStatuses } = useStore();

  useEffect(() => {
    fetchStatuses();
  }, []);

  return (
    <h2>
      {districts.length && districts.map((d) => <div>{d.name}</div>)}
      {/* <FormattedMessage id="language" values={{ name: lang }} /> */}
      {/* {intl.formatMessage({ id: "language" }, { name: lang })} */}
    </h2>
  );
}
