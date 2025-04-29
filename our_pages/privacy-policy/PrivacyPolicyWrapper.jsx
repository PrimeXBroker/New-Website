import React from "react";

const PrivacyPolicyWrapper = () => {
  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container pt-28 sm:pt-36 pb-16 sm:pb-28">
        <div className="grid grid-cols-1" style={{ direction: "ltr" }}>
          <div>
            <h1 className="text-tm dark:text-tm-dark font-semibold text-4xl sm:text-5xl leading-tight text-center">
              Privacy Policy
            </h1>
            <div className="pt-10 sm:pt-20">
              <h2 className="text-xl md:text-2xl font-semibold text-pcp dark:text-pcp-dark mb-4">
                Privacy Policy - PrimeX Online Trading
              </h2>
              <strong className="text-tm dark:text-tm-dark text-base md:text-lg font-semibold">
                1. Data Collection and Use
              </strong>
              <p className="text-sm md:text-base text-tm dark:text-tm-dark mt-2 mb-0">
                We collect the following personal information from users for
                account registration and verification purposes:
              </p>
              <ul className="list-disc ps-6 md:ps-10 text-sm md:text-base text-tm dark:text-tm-dark">
                <li className="my-2">
                  <strong>Personal Information: </strong>We collect your
                  location data to verify that you are not in any restricted
                  regions. This helps us ensure compliance with regional
                  restrictions and deliver personalized notifications.
                </li>
                <li className="mb-2">
                  <strong>Location Data: </strong>We collect your location data
                  to verify that you are not in any restricted regions. This
                  helps us ensure compliance with regional restrictions and
                  deliver personalized notifications.
                </li>
                <li className="mb-8">
                  <strong>Document Verification: </strong>We use Sumsub to
                  verify the documents you provide during the registration
                  process.
                </li>
              </ul>
              <strong className="text-tm dark:text-tm-dark text-base md:text-lg font-semibold">
                2. How We Use Your Data
              </strong>
              <ul className="list-disc ps-6 md:ps-10 text-sm md:text-base text-tm dark:text-tm-dark">
                <li className="my-2">
                  <strong>Location Data: </strong>We use your location data
                  solely to check if you are located in a restricted region. If
                  you are in a restricted region, the app may limit access to
                  certain features.
                </li>
                <li className="mb-2">
                  <strong>Personal Data: </strong>Your personal data (such as
                  name, phone number, and email) is used to create your account,
                  enable communication, and provide customer support.
                </li>
                <li className="mb-8">
                  <strong>Notifications: </strong>Based on your location and
                  preferences, we may send notifications related to your account
                  or relevant services.
                </li>
              </ul>
              <strong className="text-tm dark:text-tm-dark text-base md:text-lg font-semibold">
                3. Data Storage and Security
              </strong>
              <ul className="list-disc ps-6 md:ps-10 text-sm md:text-base text-tm dark:text-tm-dark">
                <li className="my-2">
                  We store your personal data securely and take reasonable
                  precautions to protect it from unauthorized access,
                  alteration, disclosure, or destruction.
                </li>
                <li className="mb-2 mb-8">
                  Your location data is used only for the purposes described
                  above and is not shared with third parties without your
                  consent, except as required by law.
                </li>
              </ul>
              <strong className="text-tm dark:text-tm-dark text-base md:text-lg font-semibold">
                4. Document Verification
              </strong>
              <ul className="list-disc ps-6 md:ps-10 text-sm md:text-base text-tm dark:text-tm-dark">
                <li className="mb-8 mt-2">
                  We use Sumsub for document verification. By registering and
                  submitting documents, you agree to the use of this third-party
                  service for verification purposes.
                </li>
              </ul>
              <strong className="text-tm dark:text-tm-dark text-base md:text-lg font-semibold">
                5. User Rights
              </strong>
              <ul className="list-disc ps-6 md:ps-10 text-sm md:text-base text-tm dark:text-tm-dark">
                <li className="my-2">
                  You have the right to access, correct, or delete your personal
                  data at any time.
                </li>
                <li>
                  If you wish to stop location tracking or notifications, you
                  can adjust your preferences in the app settings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyWrapper;
