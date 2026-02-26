'use client'

import { Cookie, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const CookieDeclaration = () => {
    return (
        <div className="CookieDeclaration" lang="en" dir="ltr">
            <p className="CookieDeclarationIntro">
                Cookies are small text files that can be used by websites to make a user's experience more efficient.
                <br />
                <br />
                The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.
                <br />
                <br />
                This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.
                <br />
                <br />
                You can at any time change or withdraw your consent from the Cookie Declaration on our website.
                <br />
                <br />
                Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
                <br />
                <br />
                Please state your consent ID and date when you contact us regarding your consent.
            </p>

            <p>Your consent applies to the following domains: ofertasprimagas.com</p>

            <div
                id="CookieDeclarationUserStatusPanel"
                style={{ display: 'block', margin: '18px 0px 0px' }}
                data-responsemode="leveloptin"
                data-dialogtemplate="overlay-v2_white"
            >
                <div id="CookieDeclarationUserStatusLabel" style={{ display: 'block' }}>
                    <div id="CookieDeclarationUserStatusLabelOff" style={{ display: 'none' }}>
                        Your current state: Deny.&nbsp;
                    </div>
                    <div id="CookieDeclarationUserStatusLabelOffDoNotSell" style={{ display: 'none' }}>
                        Your current state: Do not sell or share my personal information.&nbsp;
                    </div>
                    <div id="CookieDeclarationUserStatusLabelMulti" style={{ display: 'none' }}>
                        Your current state: Allow selection&nbsp;(Necessary
                        <span id="CookieDeclarationUserStatusLabelMultiSettingsPref" style={{ display: 'inline' }}>, Preferences</span>
                        <span id="CookieDeclarationUserStatusLabelMultiSettingsStat" style={{ display: 'inline' }}>, Statistics</span>
                        <span id="CookieDeclarationUserStatusLabelMultiSettingsMark" style={{ display: 'inline' }}>, Marketing</span>
                        ).&nbsp;
                    </div>
                    <div id="CookieDeclarationUserStatusLabelOn" style={{ display: 'inline-block' }}>
                        Your current state: Allow all.&nbsp;
                    </div>

                    <p style={{ display: 'block' }} id="CookieDeclarationConsentIdAndDate">
                        <span style={{ display: 'block' }}>
                            Your consent ID: <span id="CookieDeclarationUserStatusLabelConsentId">030nkB8te0ZoWmBYx9TlYL4LL0GY88ATC65VfyJNa0BOpvcp5+NudQ==</span>
                        </span>
                        <span style={{ display: 'block' }}>
                            Consent date: <span id="CookieDeclarationUserStatusLabelConsentDate">Thursday, February 26, 2026 at 10:06:29 AM GMT+1</span>
                        </span>
                    </p>
                </div>

                <div id="CookieDeclarationChangeConsent" style={{ display: 'block' }}>
                    <a id="CookieDeclarationChangeConsentChange" href="#">Change your consent</a>
                    <span id="CookieDeclarationUserStatusLabelWithdraw" style={{ display: 'inline-block' }}>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a id="CookieDeclacarationChangeConsentWithdraw" href="#">Withdraw your consent</a>
                    </span>
                </div>

                <div id="CookieDeclarationDoNotSell" style={{ display: 'none' }}>
                    <a id="CookieDeclarationChangeConsentDoNotSell" href="#">Do not sell or share my personal information</a>
                </div>
            </div>

            <br />

            <p className="CookieDeclarationLastUpdated">
                Cookie declaration last updated on 2/10/26 by{' '}
                <a href="https://www.cookiebot.com" target="_blank" rel="noopener noreferrer" title="Cookiebot">
                    Cookiebot
                </a>:
            </p>

            {/* Necessary Section */}
            <div className="CookieDeclarationType" lang="en" dir="ltr">
                <p className="CookieDeclarationTypeHeader">Necessary (4) </p>
                <p className="CookieDeclarationTypeDescription">
                    Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <table className="CookieDeclarationTable">
                    <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Name</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Provider</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Purpose</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Maximum Storage Duration</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="CookieDeclarationTableCell">bcookie</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/legal/privacy-policy" title="LinkedIn's privacy policy">LinkedIn</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used in order to detect spam and improve the website's security.</td>
                            <td className="CookieDeclarationTableCell">1 year</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">CookieConsent</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.cookiebot.com/goto/privacy-policy/" title="Cookiebot's privacy policy">Cookiebot</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Stores the user's cookie consent state for the current domain</td>
                            <td className="CookieDeclarationTableCell">1 year</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">li_gc</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/legal/privacy-policy" title="LinkedIn's privacy policy">LinkedIn</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Stores the user's cookie consent state for the current domain</td>
                            <td className="CookieDeclarationTableCell">180 days</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">test_cookie</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used to check if the user's browser supports cookies.</td>
                            <td className="CookieDeclarationTableCell">1 day</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Preferences Section */}
            <div className="CookieDeclarationType" lang="en" dir="ltr">
                <p className="CookieDeclarationTypeHeader">Preferences (1) </p>
                <p className="CookieDeclarationTypeDescription">
                    Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                </p>
                <table className="CookieDeclarationTable">
                    <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Name</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Provider</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Purpose</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Maximum Storage Duration</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="CookieDeclarationTableCell">lidc</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/legal/privacy-policy" title="LinkedIn's privacy policy">LinkedIn</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.</td>
                            <td className="CookieDeclarationTableCell">1 day</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Statistics Section */}
            <div className="CookieDeclarationType" lang="en" dir="ltr">
                <p className="CookieDeclarationTypeHeader">Statistics (4) </p>
                <p className="CookieDeclarationTypeDescription">Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
                <table className="CookieDeclarationTable">
                    <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Name</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Provider</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Purpose</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Maximum Storage Duration</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="CookieDeclarationTableCell">_clck</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://privacy.microsoft.com/en-us/privacystatement" title="Microsoft's privacy policy">Microsoft</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Collects data on the user’s navigation and behavior on the website. This is used to compile statistical reports and heatmaps for the website owner.</td>
                            <td className="CookieDeclarationTableCell">1 year</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">_clsk</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://privacy.microsoft.com/en-us/privacystatement" title="Microsoft's privacy policy">Microsoft</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Registers statistical data on users' behaviour on the website. Used for internal analytics by the website operator.</td>
                            <td className="CookieDeclarationTableCell">1 day</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">_ga</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.</td>
                            <td className="CookieDeclarationTableCell">2 years</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">_ga_#</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.</td>
                            <td className="CookieDeclarationTableCell">2 years</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Marketing Section */}
            <div className="CookieDeclarationType" lang="en" dir="ltr">
                <p className="CookieDeclarationTypeHeader">Marketing (7) </p>
                <p className="CookieDeclarationTypeDescription">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
                <table className="CookieDeclarationTable">
                    <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Name</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Provider</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Purpose</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Maximum Storage Duration</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="CookieDeclarationTableCell">_fbp</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.facebook.com/policy.php/" title=" Meta Platforms, Inc.'s privacy policy">Meta Platforms, Inc.</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.</td>
                            <td className="CookieDeclarationTableCell">3 months</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">_gcl_au</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used to measure the efficiency of the website’s advertisement efforts, by collecting data on the conversion rate of the website’s ads across multiple websites.</td>
                            <td className="CookieDeclarationTableCell">3 months</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">_gcl_ls</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Tracks the conversion rate between the user and the advertisement banners on the website - This serves to optimise the relevance of the advertisements on the website.</td>
                            <td className="CookieDeclarationTableCell">Persistent</td>
                            <td className="CookieDeclarationTableCell">HTML Local Storage</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">IDE</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Used by Google DoubleClick to register and report the website user's actions after viewing or clicking one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user.</td>
                            <td className="CookieDeclarationTableCell">400 days</td>
                            <td className="CookieDeclarationTableCell">HTTP Cookie</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">lastExternalReferrer</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.facebook.com/policy.php/" title=" Meta Platforms, Inc.'s privacy policy">Meta Platforms, Inc.</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Detects how the user reached the website by registering their last URL-address.</td>
                            <td className="CookieDeclarationTableCell">Persistent</td>
                            <td className="CookieDeclarationTableCell">HTML Local Storage</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">lastExternalReferrerTime</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.facebook.com/policy.php/" title=" Meta Platforms, Inc.'s privacy policy">Meta Platforms, Inc.</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Detects how the user reached the website by registering their last URL-address.</td>
                            <td className="CookieDeclarationTableCell">Persistent</td>
                            <td className="CookieDeclarationTableCell">HTML Local Storage</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">pagead/1p-user-list/#</td>
                            <td className="CookieDeclarationTableCell">
                                <a target="_blank" rel="noopener noreferrer nofollow" href="https://business.safety.google/privacy/" title="Google's privacy policy">Google</a>
                            </td>
                            <td className="CookieDeclarationTableCell">Tracks if the user has shown interest in specific products or events across multiple websites and detects how the user navigates between sites. This is used for measurement of advertisement efforts and facilitates payment of referral-fees between websites.</td>
                            <td className="CookieDeclarationTableCell">Session</td>
                            <td className="CookieDeclarationTableCell">Pixel Tracker</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Unclassified Section */}
            <div className="CookieDeclarationType" lang="en" dir="ltr">
                <p className="CookieDeclarationTypeHeader">Unclassified (2) </p>
                <p className="CookieDeclarationTypeDescription">
                    Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.
                </p>
                <table className="CookieDeclarationTable">
                    <colgroup>
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Name</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Provider</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Purpose</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Maximum Storage Duration</th>
                            <th scope="col" className="CookieDeclarationTableHeader" dir="ltr">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="CookieDeclarationTableCell">ctb_session_uuid</td>
                            <td className="CookieDeclarationTableCell">cdn.stock-rails.com</td>
                            <td className="CookieDeclarationTableCell">Pending</td>
                            <td className="CookieDeclarationTableCell">Session</td>
                            <td className="CookieDeclarationTableCell">HTML Local Storage</td>
                        </tr>
                        <tr>
                            <td className="CookieDeclarationTableCell">ctb_uuid</td>
                            <td className="CookieDeclarationTableCell">cdn.stock-rails.com</td>
                            <td className="CookieDeclarationTableCell">Pending</td>
                            <td className="CookieDeclarationTableCell">Persistent</td>
                            <td className="CookieDeclarationTableCell">HTML Local Storage</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const CookiesModal: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const closeModal = () => {
        router.push(pathname, { scroll: true })
    }
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={closeModal} />

            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">

                <div className="bg-brand p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-white text-center text-2xl font-bold ml-[20rem]">Política de cookies</h2>
                    <button
                        onClick={closeModal}
                        className="text-white hover:text-brand p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="bg-white flex-1 overflow-y-auto p-8 text-slate-600 leading-relaxed custom-scrollbar">
                    <div className="min-w-full overflow-x-auto">
                        <CookieDeclaration />
                    </div>
                </div>
            </div>
        </div>
    );
}