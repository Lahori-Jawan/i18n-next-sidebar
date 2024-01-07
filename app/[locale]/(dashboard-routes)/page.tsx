import ExampleClientComponent from "@/components/ClientComponent";
import ClientIntl from "@/components/ClientIntl";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { axios } from "@/config";
import { getLocale } from "@/utils";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default async function Home({ params: { locale } }: any) {
  const intl = await getLocale(locale, "home");
  const lang = locale === "en" ? "English" : "العربية";

  return (
    <ClientIntl messages={intl.messages} locale={intl.locale}>
      <Box p="1rem">
        <Link href={`${locale}/land-acquisition`}>Go to LAR</Link>
        {/* <h1>{intl.formatMessage({ id: "title" })}</h1> */}
        <ExampleClientComponent lang={lang} />
      </Box>
    </ClientIntl>
  );
}
