import { Section } from 'astro-boilerplate-components';

import appiumLogo from '../../public/assets/images/appium.png';
import cucumberLogo from '../../public/assets/images/cucumber.png';
import jmeterLogo from '../../public/assets/images/jmeter.png';
import katalonLogo from '../../public/assets/images/katalon.png';
import postmanLogo from '../../public/assets/images/postman.png';
import seleniumLogo from '../../public/assets/images/selenium.png';

const Sponsors = () => (
  <Section title="Testing Tools">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://katalon.com/" target="_blank">
              <img
                src={katalonLogo.src}
                alt="Katalon"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.selenium.dev/" target="_blank">
              <img
                src={seleniumLogo.src}
                alt="Selenium"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://cucumber.io/">
              <img
                src={cucumberLogo.src}
                alt="Cucumber"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://appium.io/docs/en/latest/">
              <img src={appiumLogo.src} alt="Appium" width={260} height={224} />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.postman.com/" target="_blank">
              <img
                src={postmanLogo.src}
                alt="Postman"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://jmeter.apache.org/" target="_blank">
              <img src={jmeterLogo.src} alt="Jmeter" width={260} height={224} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
