import ExampleClientComponent from "@/components/ClientComponent";
import ClientIntl from "@/components/ClientIntl";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getLocale } from "@/utils";
import { Box } from "@chakra-ui/react";

export default async function Home({ params: { locale } }: any) {
  const intl = await getLocale(locale, "home");
  const lang = locale === "en" ? "English" : "العربية";

  return (
    <ClientIntl messages={intl.messages} locale={intl.locale}>
      <Box p="1rem">
        {/* <LanguageSwitcher /> */}
        <h1>{intl.formatMessage({ id: "title" })}</h1>
        {/* <p>{intl.formatMessage({ id: "language" }, { name: lang })}</p> */}
        <ExampleClientComponent lang={lang} />
      </Box>
    </ClientIntl>
  );
}
