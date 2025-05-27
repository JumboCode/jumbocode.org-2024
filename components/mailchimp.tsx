/*  mailchimp.tsx
*
*   Embedded MailChimp Subscription Form to our Newsletter
* 
*   Created by Holden Kittelberger on 5/27/2025
*
*/

/* this code was provided by mailchimp after completing the embedded form
   builder process. it was slightly modified because it doesn't work purely
   copy pasted, and some extra styling was done. */
export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <style type="text/css">
                    {`
                        #mc_embed_signup {
                            background:#fff; false;
                            clear:left;
                            font:14px Helvetica,Arial,sans-serif;
                            width: 600px;
                            padding: 20px;
                            border-radius: 25px;
                        }
                    `}
                </style>
                <div id="mc_embed_signup">
                    <form action="https://jumbocode.us11.list-manage.com/subscribe/post?u=d3c507093f7b2f71584f684c0&amp;id=25ebfbc332&amp;f_id=004ac1e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe to JumboCode E-list</h2>
                            <div className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">
                                    Email Address <span className="asterisk">*</span>
                                </label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" />
                            </div>
                            <div className="mc-field-group input-group">
                                <strong>Class of... </strong>
                                <ul>
                                    <li>
                                        <input type="radio" name="group[35583]" id="mce-group[35583]-35583-0" value="1" />
                                        <label htmlFor="mce-group[35583]-35583-0" style={{ marginLeft: '8px' }}>Class of 2025</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="group[35583]" id="mce-group[35583]-35583-1" value="2" />
                                        <label htmlFor="mce-group[35583]-35583-1" style={{ marginLeft: '8px' }}>Class of 2026</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="group[35583]" id="mce-group[35583]-35583-2" value="4" />
                                        <label htmlFor="mce-group[35583]-35583-2" style={{ marginLeft: '8px' }}>Class of 2027</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="group[35583]" id="mce-group[35583]-35583-3" value="8" />
                                        <label htmlFor="mce-group[35583]-35583-3" style={{ marginLeft: '8px' }}>Class of 2028</label>
                                    </li>   </ul>
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                            </div>
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                <input type="text" name="b_d3c507093f7b2f71584f684c0_25ebfbc332" tabIndex={-1} value="" />
                            </div>
                            <div className="optionalParent">
                                <div className="clear foot">
                                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                    <p style={{ margin: '0px auto' }}>
                                        <a href="http://eepurl.com/iVVVmc" title="Mailchimp - email marketing made easy and fun">
                                            <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                                <img
                                                    className="refferal_badge"
                                                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                                    alt="Intuit Mailchimp"
                                                    style={{
                                                        width: '220px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        padding: '2px 0px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                />
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    );
}