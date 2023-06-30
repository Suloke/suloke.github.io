import React from "react";
import "../App.css";
import { ClosePrivacyPolicy } from "../components/ContactButton";
import { MobileLogo } from "../components/Logo";

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="privacypolicy">
      <MobileLogo className="mobilelogopriv" />
      <div className="privacytext">
        <h1>Privacy Policy</h1>
        <p>
          At Suloke.com, accessible from http://www.suloke.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Suloke.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Suloke.com. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>
        <br></br>
        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
        <br></br>
        <h2>Information we collected</h2>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          <br></br>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          <br></br>
          When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>
        <br></br>
        <h2>How we use your information</h2>
        <p>We use the information we collect in various ways, including to:<br></br></p>
        <ol>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ol>
        <br></br>
        <h2>Log Files</h2>
        <p>Suloke.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        <br></br>
        <h2>Cookies and Web Beacons</h2>
        <p>Like any other website, Suloke.com uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        <br></br>
        <h2>Third Party Privacy Policies</h2>
        <p>Suloke.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
        <br></br>
        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
        <br></br>
        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:<br></br></p>
        <ol>
          <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
          <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
          <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
          <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
        </ol>
        <br></br>
        <h2>GDPR Data Protection Rights</h2>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:<br></br></p>
        <ol>
          <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions. </li>
          <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
        </ol>
        <br></br>
        <h2>Children's Information</h2>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br></br>
        Suloke.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
        <br></br>
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
        <br></br>
        <h2>Contact us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contact@suloke.com</p>
        </div>
      <button className="closebutton" onClick={onClose}>
        <ClosePrivacyPolicy />
      </button>
    </div>
  );
};

export default PrivacyPolicy;