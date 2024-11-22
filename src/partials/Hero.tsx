import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Halo, Saya <GradientText>Rival Muhammad</GradientText> 👋
        </>
      }
      description={
        <>
          Seorang Quality Assurance Engineer lulusan S1 Teknik Informatika dari{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Universitas Nasional
          </a>{' '}
          dan alumni{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            QA Bootcamp di Binar Academy.
          </a>{' '}
          Saya berfokus untuk mengembangkan karir di bidang{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            QA Manual dan QA Automation,
          </a>{' '}
          dengan komitmen menjaga kualitas aplikasi melalui pengujian yang
          teliti dan sistematis.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          <a href="https://www.instagram.com/rivalms_/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/rival-muhammad-sayid-b07981228/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@rivalmsayid">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
