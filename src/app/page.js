import ClientLocaleRedirect from "@/components/clientLocaleRedirect";

export default function RootPage() {
  console.log(
    "%c Welcome to Suloke's website! 🚀\n" +
      "%c ⚡ Building the future of web, mobile, and backend development ⚡",
    "color: #A3004C; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);",
    "color: #095E5E; font-size: 14px; font-style: italic;"
  );

  return (
    <>
      <ClientLocaleRedirect />;
    </>
  );
}
