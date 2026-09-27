import Image from 'next/image'

const keywords = [
  'Lucky Bear Casino',
  'luckybear casino',
  'luckybear casino зеркало',
  'luckybear casino официальный',
  'luckybear casino официальный сайт',
  'lucky bear казино',
  'лаки бир казино',
  'лакибир казино',
  'лаки бир казино зеркало',
  'лаки бир казино онлайн',
  'лаки бир казино официальный',
  'лаки бир казино официальный сайт',
  'лакибир казино официальный сайт',
  'лаки бир казино сайт',
]

export default function Page() {
  return (
    <main className="lb27-shell">
      <header className="lb27-header">
        <a className="lb27-brand" href="#top" aria-label="Lucky Bear Casino — на главную">
          <span className="lb27-brand-mark" aria-hidden="true">LB</span>
          <span>Lucky Bear <em>Casino</em></span>
        </a>
        <nav className="lb27-nav" aria-label="Основная навигация">
          <a href="#about">О казино</a>
          <a href="#guide">Гид игрока</a>
          <a className="lb27-nav-cta" href="#start">Начать</a>
        </nav>
      </header>

      <section className="lb27-hero" id="top" aria-labelledby="hero-title">
        <article className="lb27-hero-copy">
          <p className="lb27-kicker"><span aria-hidden="true">✦</span> Игровой гид без лишнего шума</p>
          <h1 id="hero-title">Lucky Bear Casino — понятный вход в мир онлайн-игр</h1>
          <p className="lb27-hero-lead">Ищете luckybear casino, зеркало или официальный сайт? Здесь собрана короткая и честная навигация для игрока: как найти актуальный вход, выбрать игру и начать с разумным бюджетом.</p>
          <a className="lb27-primary-link" href="#guide">Читать гид <span aria-hidden="true">↗</span></a>
        </article>
        <figure className="lb27-hero-art">
          <Image src="/lucky-bear-casino.png" alt="Медведь Lucky Bear с золотой монетой" width={620} height={720} priority sizes="(max-width: 700px) 80vw, 42vw" />
          <figcaption>Удача любит спокойную игру</figcaption>
        </figure>
      </section>

      <section className="lb27-trust-row" aria-label="Коротко о странице">
        <p><strong>01</strong> Актуальная навигация</p>
        <p><strong>02</strong> Игры для любого опыта</p>
        <p><strong>03</strong> Ответственный подход</p>
      </section>

      <article className="lb27-guide" id="guide" aria-labelledby="guide-title">
        <header className="lb27-section-heading">
          <p className="lb27-kicker">Короткий маршрут игрока</p>
          <h2 id="guide-title">Как найти Lucky Bear Casino и не потеряться</h2>
          <p>Собрали основные запросы в одном месте, чтобы путь от поиска до первой игры был ясным и аккуратным.</p>
        </header>

        <section className="lb27-guide-grid" id="about">
          <article className="lb27-guide-item">
            <span className="lb27-item-number">01</span>
            <h2>luckybear casino зеркало и luckybear casino официальный</h2>
            <p>Если привычная страница не открывается, запрос <strong>luckybear casino зеркало</strong> помогает найти рабочую альтернативу. Проверяйте адресную строку и ищите <strong>luckybear casino официальный</strong>, чтобы не вводить данные на случайном ресурсе.</p>
          </article>
          <article className="lb27-guide-item">
            <span className="lb27-item-number">02</span>
            <h2>luckybear casino официальный сайт для быстрого старта</h2>
            <p>Запрос <strong>luckybear casino официальный сайт</strong> обычно нужен игроку, который хочет попасть на актуальную страницу без лишних переходов. Сохраните проверенный адрес, а перед регистрацией ознакомьтесь с правилами, лимитами и доступными способами пополнения.</p>
          </article>
          <article className="lb27-guide-item">
            <span className="lb27-item-number">03</span>
            <h2>lucky bear казино и лаки бир казино онлайн</h2>
            <p>Названия <strong>lucky bear казино</strong> и <strong>лаки бир казино</strong> встречаются в русскоязычном поиске. Вариант <strong>лаки бир казино онлайн</strong> выбирают те, кому важен вход с телефона: современная мобильная версия должна быстро загружаться и быть понятной с первого экрана.</p>
          </article>
          <article className="lb27-guide-item">
            <span className="lb27-item-number">04</span>
            <h2>лакибир казино и лаки бир казино зеркало</h2>
            <p>По запросам <strong>лакибир казино</strong> и <strong>лаки бир казино зеркало</strong> игроки ищут альтернативный путь к площадке. Сверяйте написание бренда, не переходите по подозрительным баннерам и используйте только понятные источники с актуальной информацией.</p>
          </article>
          <article className="lb27-guide-item">
            <span className="lb27-item-number">05</span>
            <h2>лаки бир казино официальный и лаки бир казино официальный сайт</h2>
            <p>Фразы <strong>лаки бир казино официальный</strong> и <strong>лаки бир казино официальный сайт</strong> помогают отсеять копии. Официальная страница должна содержать ясные условия, контакты поддержки и информацию о возрасте, географии и правилах участия.</p>
          </article>
          <article className="lb27-guide-item">
            <span className="lb27-item-number">06</span>
            <h2>лакибир казино официальный сайт и лаки бир казино сайт</h2>
            <p>Когда нужен именно <strong>лакибир казино официальный сайт</strong> или <strong>лаки бир казино сайт</strong>, смотрите не только на дизайн. Удобная навигация, понятные статусы транзакций и быстрая поддержка важнее громких обещаний и сложных бонусных условий.</p>
          </article>
        </section>
      </article>

      <aside className="lb27-responsible" id="start">
        <p className="lb27-kicker">Игра с головой</p>
        <h2>Начинайте с комфортного темпа</h2>
        <p>Определите лимит до старта, не пытайтесь отыграться и делайте паузы. Онлайн-казино — развлечение для совершеннолетних, а не способ решить финансовые вопросы.</p>
      </aside>

      <footer className="lb27-footer">
        <section>
          <p className="lb27-footer-brand">Lucky Bear <em>Casino</em></p>
          <p className="lb27-footer-note">Понятный гид по поиску, входу и комфортной игре.</p>
        </section>
        <section className="lb27-hashtags" aria-label="Ключевые фразы">
          {keywords.map((keyword) => <span key={keyword}>#{keyword.replaceAll(' ', '')}</span>)}
        </section>
        <p className="lb27-copyright">18+ · Играйте ответственно · © 2026</p>
      </footer>
    </main>
  )
}
