import style from './style.module.scss';

export default function ExampleIntroSection(): JSX.Element {
  return (
    <div className={style.ExampleIntroSection}>
      <div className={style.container}>
        <section className={style.section}>
          <h1>Igor Sebelev</h1>
          <h2>Frontend Developer</h2>
        </section>
        <section className={style.section}>
          <p>🌐 Hello, my name is Igor Sebelev and this is my classy personal website.</p>
          <p>🚧 Now it is temporarily under development.</p>
          <p>🔗 And if you wanna find more info about me, check out these links below:</p>
          <ol>
            <li>
              <a href="https://t.me/adlite" rel="noreferrer" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://github.com/adlite" rel="noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://resume.io/r/x722uBgXS" rel="noreferrer" target="_blank">
                My CV
              </a>
            </li>
            <li>
              <a href="https://github.com/adlite/adlite-info" rel="noreferrer" target="_blank">
                This website repo on GitHub
              </a>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
