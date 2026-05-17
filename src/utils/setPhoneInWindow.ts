export const setPhoneInWindowForAnalytics = (phone: string) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event: "form_submit",
        user_data: {
            phone_number: '34' + phone
        }
    });
}