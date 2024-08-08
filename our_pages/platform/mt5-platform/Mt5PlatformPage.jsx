import Banner from '@/components/platform/mt5-platform/Banner'
import JoinPrimex from '@/components/platform/mt5-platform/JoinPrimex';
import KeyFeatures from '@/components/platform/mt5-platform/KeyFeatures'
import ProcessTimeline from '@/components/platform/mt5-platform/steps';
import { useTranslations } from "next-intl";
const Mt5PlatformPage = () => {
    const t = useTranslations('metaTrader5.processTimeline')
  return (
    <>
    <Banner/>
    <KeyFeatures/>
    <ProcessTimeline title={t("title_part_1")} title2={t("title_part_2")}/>
    <JoinPrimex/>
    </>
  )
}

export default Mt5PlatformPage