import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Percent',
    title: 'Высокий кэшбэк',
    description: 'Возвращаем до 10% от покупок. Выбирайте категории и получайте максимум выгоды.'
  },
  {
    icon: 'Clock',
    title: 'Быстрое оформление',
    description: 'Заявка рассматривается мгновенно. Карта готова к использованию через 5 минут.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Полная безопасность',
    description: '3D Secure защита, моментальная блокировка и страхование покупок.'
  },
  {
    icon: 'Smartphone',
    title: 'Удобное приложение',
    description: 'Управляйте картами, переводите деньги и отслеживайте расходы в одном приложении.'
  },
  {
    icon: 'Banknote',
    title: 'Без комиссий',
    description: 'Бесплатное снятие в банкоматах, переводы без комиссии и выгодный курс валют.'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда на связи. Решим любой вопрос в любое время суток.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 2 миллионов клиентов доверяют нам свои финансы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={benefit.icon as any} className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <p className="font-heading text-4xl font-bold text-primary mb-2">2M+</p>
            <p className="text-sm text-muted-foreground">Активных клиентов</p>
          </div>
          <div className="text-center p-4">
            <p className="font-heading text-4xl font-bold text-primary mb-2">10%</p>
            <p className="text-sm text-muted-foreground">Максимальный кэшбэк</p>
          </div>
          <div className="text-center p-4">
            <p className="font-heading text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-sm text-muted-foreground">Поддержка клиентов</p>
          </div>
          <div className="text-center p-4">
            <p className="font-heading text-4xl font-bold text-primary mb-2">5 мин</p>
            <p className="text-sm text-muted-foreground">До выпуска карты</p>
          </div>
        </div>
      </div>
    </section>
  );
}
