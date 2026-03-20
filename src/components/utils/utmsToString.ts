import { UtmData } from "@/hooks/useUtem"

export const returnUtmsToString = (utms: UtmData | null) => {

    if (utms === null) {
        return "";
    }

    let parsedUtms = "";

    if (utms.utm_source) {
        parsedUtms += "utm_source=" + utms.utm_source;
    }
    if (utms.utm_medium) {
        parsedUtms += "&utm_medium=" + utms.utm_medium;
    }
    if (utms.utm_campaign) {
        parsedUtms += "&utm_campaign=" + utms.utm_campaign;
    }
    if (utms.utm_term) {
        parsedUtms += "&utm_term=" + utms.utm_term;
    }
    if (utms.utm_content) {
        parsedUtms += "&utm_content=" + utms.utm_content;
    }
    return parsedUtms;
}