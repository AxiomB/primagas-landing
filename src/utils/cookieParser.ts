export const getCookieValueByName = (cookieName: string): string => {
    if(!cookieName || cookieName.length === 0) {
        return "";
    }

    const fullCookie = `; ${document.cookie}`;
    const selectedCookie = fullCookie.split(`; ${cookieName}=`);
    if(selectedCookie.length === 2) {
        const selectedCookieValue = selectedCookie.pop()?.split(';').shift();
        if(selectedCookieValue && selectedCookieValue.length > 0) {
            return selectedCookieValue
        }
    }
    return "";
}

export const addOrUpdateCookiePersistentCookie = (cookieName: string, newValue: string) => {
    document.cookie = `${cookieName}=${newValue}; path=/; max-age=31536000; SameSite=Lax`
}

export const addOrUpdateSessionCookie = (cookieName: string, newValue: string) => {
    document.cookie = `${cookieName}=${newValue}; path=/; SameSite=Lax`
}